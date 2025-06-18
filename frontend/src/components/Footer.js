import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterWrapper = styled.footer`
  background-color: #1a1a1a;
  color: #ccc;
  padding: 40px 20px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #333;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const FooterLogo = styled(Link)`
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 15px;
  
  a {
    color: #ccc;
    transition: color 0.2s ease;
    &:hover {
      color: #d32f2f;
    }
  }
`;

const FooterLinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const LinkColumn = styled.div`
  h4 {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 15px;
    border-bottom: 1px solid #333;
    padding-bottom: 8px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin-bottom: 10px;
  }
  a {
    color: #aaa;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s ease;
    &:hover {
      color: #d32f2f;
      text-decoration: underline;
    }
  }
`;

const FooterBottomBar = styled.div`
  padding-top: 20px;
  border-top: 1px solid #444;
  text-align: center;
  font-size: 13px;
  color: #888;
  
  p {
    margin: 5px 0;
  }
  a {
    color: #aaa;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Media Center',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Careers', path: '/careers' },
        { name: 'Terms of Use', path: '/term-of-use' },
        { name: 'Privacy Policy', path: '/policies' },
      ],
    },
    {
      title: 'News',
      links: [
        { name: 'India', path: '/category/india' },
        { name: 'World', path: '/category/world' },
        { name: 'Business', path: '/category/business' },
        { name: 'Sport', path: '/category/sport' },
        { name: 'Entertainment', path: '/category/entertainment' },
        { name: 'Technology', path: '/category/technology' },
      ],
    },
    {
      title: 'Subscription',
      links: [
        { name: 'Digital Subscription', path: '/subscribe/digital' },
        { name: 'Print Subscription', path: '/subscribe/print' },
        { name: 'Archives', path: '/archives' },
      ],
    },
    {
      title: 'Connect with Us',
      links: [
        { name: 'Facebook', path: 'https://www.facebook.com/kisansattanews', external: true },
        { name: 'Twitter', path: 'https://x.com/kisansattanews', external: true },
        { name: 'Instagram', path: 'https://www.instagram.com/kisansattanews/#', external: true },
        { name: 'YouTube', path: 'https://www.youtube.com/@kisansattanews', external: true }
      ],
    },
  ];

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTopSection>
          <FooterLogo to="/">Media Center</FooterLogo>
          <SocialLinksContainer>
            <a href="https://www.facebook.com/kisansattanews" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href="https://x.com/kisansattanews" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
            <a href="https://www.instagram.com/kisansattanews/#" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://www.youtube.com/@kisansattanews" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></a>
          </SocialLinksContainer>
        </FooterTopSection>

        <FooterLinksGrid>
          {footerSections.map((section) => (
            <LinkColumn key={section.title}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a href={link.path} target="_blank" rel="noopener noreferrer">
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.path}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </LinkColumn>
          ))}
        </FooterLinksGrid>

        <FooterBottomBar>
          <p>&copy; 2025 Kisan Satta Private Limited</p>
          <p>RNI Number: UPHIN/2016/67359</p>
          <p>
            Kisan Satta | <Link to="/privacy"> Privacy Policy </Link> | <Link to="/term-of-use"> Term Of Use </Link>
          </p>
        </FooterBottomBar>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
