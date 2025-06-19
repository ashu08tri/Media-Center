const axios = require('axios');

// Fetch shorts videos from YouTube
exports.getYoutubeShorts = async (req, res) => {
  try {
    const { YOUTUBE_API_KEY, CHANNEL_ID } = process.env;
    
    if (!YOUTUBE_API_KEY || !CHANNEL_ID) {
      return res.status(500).json({ 
        message: 'YouTube API credentials not configured'
      });
    }

    // Get Uploads Playlist ID
    const channelRes = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
      params: {
        part: 'contentDetails',
        id: CHANNEL_ID,
        key: YOUTUBE_API_KEY,
      },
    });

    if (!channelRes.data.items || channelRes.data.items.length === 0) {
      return res.status(404).json({ message: 'YouTube channel not found' });
    }

    const uploadsPlaylistId = channelRes.data.items[0].contentDetails.relatedPlaylists.uploads;

    // Fetch videos from uploads playlist
    const videosRes = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'snippet,contentDetails',
        maxResults: req.query.limit || 10,
        playlistId: uploadsPlaylistId,
        key: YOUTUBE_API_KEY,
      },
    });

    // Format the response to match our application's expected structure
    const formattedVideos = videosRes.data.items.map(item => ({
      id: item.contentDetails.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnail: item.snippet.thumbnails.high.url,
      channelTitle: item.snippet.channelTitle,
      videoUrl: `https://www.youtube.com/watch?v=${item.contentDetails.videoId}`
    }));

    res.json({
      videos: formattedVideos,
      pageInfo: videosRes.data.pageInfo
    });
  } catch (err) {
    console.error('Error fetching YouTube videos:', err);
    res.status(500).json({ message: 'Failed to fetch videos from YouTube' });
  }
}; 