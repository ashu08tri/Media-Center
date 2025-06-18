import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Paper,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import InfoIcon from '@mui/icons-material/Info';
import StorageIcon from '@mui/icons-material/Storage';
import PolicyIcon from '@mui/icons-material/Policy';
import HelpIcon from '@mui/icons-material/Help';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const policiesData = [
  {
    title: 'The Kisan Satta Privacy Notice',
    description: 'Kisan Satta is committed to respecting your privacy. This policy outlines what data we collect, how we use it, and your rights regarding that information.'
  },
  {
    title: 'Our Company, and The Services We Provide',
    description: 'Kisan Satta provides agricultural news, environmental updates, and policy analysis to empower the farming and rural community through reliable digital media.'
  },
  {
    title: 'The Information We Collect',
    description: 'We collect data such as name, contact details, location, browsing behavior, and preferences to offer a more personalized experience.'
  },
  {
    title: 'How We Collect and Use Your Information',
    description: 'Data is collected through forms, cookies, analytics tools, and user interactions to improve content, services, and user engagement.'
  },
  {
    title: 'FAQs on Cookies We Use',
    description: 'Cookies help us remember your preferences, track usage patterns, and enhance your experience on our platform. You can control cookie settings via your browser.'
  },
  {
    title: 'Managing Your Personal Data Stored with Us',
    description: 'Users have the right to access, update, or request deletion of their data stored by Kisan Satta at any time.'
  },
  {
    title: 'Security of Data You Share With Us',
    description: 'We implement industry-standard security measures such as encryption, secure servers, and access controls to protect your data.'
  },
  {
    title: 'Changes to This Policy',
    description: 'We may update this Privacy Policy from time to time. Any major changes will be communicated through the website.'
  },
  {
    title: 'Got Questions/Concerns?',
    description: 'For any privacy-related queries or data concerns, feel free to contact us at privacy@kisansatta.in.'
  }
];

const getIcon = (title) => {
  const key = title.toLowerCase();
  if (key.includes('privacy')) return <LockPersonIcon sx={{ mr: 1 }} />;
  if (key.includes('services') || key.includes('company')) return <PolicyIcon sx={{ mr: 1 }} />;
  if (key.includes('information') || key.includes('collect')) return <StorageIcon sx={{ mr: 1 }} />;
  if (key.includes('faq') || key.includes('cookie')) return <InfoIcon sx={{ mr: 1 }} />;
  if (key.includes('personal') || key.includes('data')) return <VerifiedUserIcon sx={{ mr: 1 }} />;
  if (key.includes('changes')) return <ChangeCircleIcon sx={{ mr: 1 }} />;
  if (key.includes('question') || key.includes('concern')) return <ContactSupportIcon sx={{ mr: 1 }} />;
  return <HelpIcon sx={{ mr: 1 }} />;
};

const Policies = () => {
  return (
    <>
    <Header />
    <Box sx={{ bgcolor: '#f5f5f5', py: 6 }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 }, borderRadius: 3 }}>
          <Typography variant="h4" align="center" gutterBottom color="green" fontWeight={700}>
            Privacy & Data Policies – Kisan Satta
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, mt: 2 }} color="text.secondary">
            Learn how we protect your data and privacy as part of our commitment to transparency and security at Kisan Satta.
          </Typography>

          {policiesData.map((policy, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box display="flex" alignItems="center">
                  {getIcon(policy.title)}
                  <Typography fontWeight={600}>{policy.title}</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{policy.description}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      </Container>
    </Box>
    <Footer />
    </>
  );
};

export default Policies;
