import { Box, Typography, Paper, Container, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {


  return (
    <>
      <Header />

      <Box sx={{ bgcolor: '#f1fdf3', py: 6, minHeight: '100vh' }}>
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: { xs: 3, sm: 6 }, borderRadius: 3 }}>
            <Typography
              variant="h4"
              component="h1"
              align="center"
              fontWeight={700}
            >
              <Link to='/about' style={{color: "green"}}>ABOUT US </Link>/ <Link to='/term-of-use' style={{color: "green"}}>TERMS OF USE</Link> / <Link to='/contact' style={{color: "green"}}>CONTACT US</Link>
            </Typography>

            <Divider sx={{ my: 3 }} color="green"/>

            <Typography variant="h5" gutterBottom fontWeight={600}>
              About Us
            </Typography>

            <Typography>
              “The greatest asset of <strong>Kisan Satta</strong>, founded in 2025, is trust.”
            </Typography>

            <Typography paragraph>
              <strong>Kisan Satta</strong>, started in 2025 as a digital-first platform, is dedicated to environment,
              farmers, and agriculture. From day one, it has grown steadily, earning the trust and respect of the rural
              community and policymakers alike.
            </Typography>

            <Typography paragraph>
              With an independent editorial stance and a commitment to reliable, balanced news, <strong>Kisan Satta</strong>{' '}
              has become a trusted voice for India's agricultural sector and environmental sustainability.
            </Typography>

            <Typography paragraph>
              Our network of correspondents and contributors spans across India's villages and towns, ensuring
              ground-level reporting that truly reflects the voice of the farmer and the challenges they face.
            </Typography>

            <Typography paragraph>
              <strong>Kisan Satta</strong> has a strong digital presence through its website, mobile app, and email
              editions, helping us reach and engage an ever-growing audience invested in agriculture and the environment.
            </Typography>

            <Typography paragraph>
              Our platform also curates insights on policies, market trends, sustainable farming practices, and
              government schemes, making it a one-stop resource for India's rural and farming communities.
            </Typography>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

export default About;
