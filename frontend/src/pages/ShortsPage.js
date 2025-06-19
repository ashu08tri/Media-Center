import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchYoutubeShorts } from '../utils/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const ShortsPageContainer = styled.div`
  background-color: #f9f9f9;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
  font-family: 'Didot', 'GFS Didot', serif;
  color: #B71C1C;
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #B71C1C;
  }
`;

const ShortsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 15px;
  }
`;

const ShortCard = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ShortCardImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 160%;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ShortCardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ShortCardVideo = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const ShortCardReelIcon = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 20px;
  }
`;

const ShortCardCaption = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: #333;
  margin-top: 8px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  flex-direction: column;
  gap: 16px;
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 40px;
  color: #d32f2f;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: opacity 0.3s ease;
  
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 16px solid white;
    margin-left: 4px;
  }
  
  ${ShortCard}:hover & {
    opacity: 0;
  }
`;

// Function to get a better thumbnail for YouTube videos
const getYouTubeThumbnail = (videoId) => {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const ShortsPage = () => {
  const [shorts, setShorts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredShortId, setHoveredShortId] = useState(null);
  
  useEffect(() => {
    const fetchShorts = async () => {
      try {
        setLoading(true);
        const response = await fetchYoutubeShorts({ limit: 24 });
        setShorts(response.data.videos);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching YouTube shorts:', err);
        setError('Failed to load shorts. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchShorts();
  }, []);
  
  return (
    <ShortsPageContainer>
      <Header />
      <MainContent>
        <PageTitle>Shorts</PageTitle>
        
        {loading ? (
          <LoadingContainer>
            <CircularProgress color="primary" />
            <Typography variant="body1">Loading shorts...</Typography>
          </LoadingContainer>
        ) : error ? (
          <ErrorContainer>
            <Typography variant="h6" color="error">{error}</Typography>
          </ErrorContainer>
        ) : (
          <ShortsGrid>
            {shorts.map(short => (
              <ShortCard 
                key={short.id} 
                href={short.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  // Prevent the link from opening if the video is visible
                  if (e.target.tagName === 'IFRAME') {
                    e.preventDefault();
                  }
                }}
                onMouseEnter={() => setHoveredShortId(short.id)}
                onMouseLeave={() => setHoveredShortId(null)}
              >
                <ShortCardImageContainer>
                  <ShortCardImage 
                    src={short.thumbnail || getYouTubeThumbnail(short.id)} 
                    alt={short.title} 
                  />
                  {hoveredShortId === short.id && (
                    <ShortCardVideo 
                      src={`${short.videoUrl.replace('watch?v=', 'embed/')}?autoplay=1&mute=0&controls=0&loop=1&modestbranding=1&rel=0&showinfo=0&playlist=${short.id}`}
                      title={short.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                      allowFullScreen
                    />
                  )}
                  <ShortCardReelIcon>
                    <SmartDisplayOutlinedIcon />
                  </ShortCardReelIcon>
                  <PlayButton />
                </ShortCardImageContainer>
                <ShortCardCaption>{short.title}</ShortCardCaption>
              </ShortCard>
            ))}
          </ShortsGrid>
        )}
      </MainContent>
      <Footer />
    </ShortsPageContainer>
  );
};

export default ShortsPage; 