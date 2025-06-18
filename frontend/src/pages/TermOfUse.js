import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Container,
    Box,
    Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GavelIcon from '@mui/icons-material/Gavel';
import LockIcon from '@mui/icons-material/Lock';
import PublicIcon from '@mui/icons-material/Public';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import PolicyIcon from '@mui/icons-material/Policy';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

const termsData = [
    {
        title: 'Usage Rights',
        desc1: 'For personal use only:',

        l1: 'Your account and password are personal to you and may not be used by anyone else to access the Site or Service.',
        l2: 'You will not do anything which would assist anyone who is not a registered user to gain access to any registration area of the Site or Service and',
        l3: 'You will not create registration accounts for the purpose of abusing the functionality of the site, or other users; nor will you seek to pass yourself off as another user.',

        p1: 'Kisan Satta does not allow multiple users (networked or otherwise) to access the Site or Service through a single name and password and may cancel or suspend your access to the Site or Service if you do this, or breach any of these Terms without further obligation to you.',
        p2: 'User will be permitted to login via limited number of devices. In the event, user tries to exceed number of devices permitted, User will receive a notification requesting him/her to logout from one or more active devices.',

        desc2: 'Bulk and institutional subscription:',

        l4: 'To avail bulk license or institutional license please write to us at: customersupport@kisansatta.in',

        desc3: 'GST invoices:',

        l5: 'In case you wish to claim the GST, please reach out to us before making the payment for the subscription.',
        l6: 'Please write to us at customersupport @kisansatta.in and let us know your GST number which can be included while generating the invoice.',
        l7: 'We will not be able to assist you regarding GST related queries post payment of the subscription.',
        l8: 'For more information, Please write to us at: payments @kisansatta.in'
    },
    {
        title: 'Terms & Conditions [T&C] & Rules & Regulations [R&R]',
        desc1: 'Kisan Satta is the sole and absolute owner of & maintains the below sites:',
        l1: 'www.kisansatta.in',

        p1: 'and the below services(Including but not limited to):',
        l2: 'Podcasts',
        l3: 'Videos',
        l4: 'Photographs & Images',

        p2: 'The above offered by the Kisan Satta including but not limited to delivery of content via Site, any mobile or internet connected device or otherwise(hereinafter “Service") to enhance public access to all the products owned by Kisan Satta.',

        p3: 'This service is provided on an "As Is" basis & is continually under development.',

        p4: 'Kisan Satta informs that all users / visitors to this site(s) on the World Wide Web(the "Site”) shall adhere to these Terms & Conditions [T&C] & Rules & Regulations [R&R]',

        p5: 'By accessing this Site & Service you / user / visitor(Collectively referred to as Users) automatically confirm your acknowledgment & acceptance of these T & C & R & R of this agreement.'
    },
    {
        title: 'Copyright/Trademarks [Collectively "Intellectual Property Rights"]',
        l1: 'The trademarks, logos & service marks ("Marks") displayed on the Site & Service are the property of Kisan Satta & other parties.',
        l2: 'Users are prohibited from using any Marks for any purpose including, but not limited to use as metatags on other pages or sites on the World Wide Web without the written permission of Kisan Satta or such third party which may own the Marks.',
        l3: 'All information & content including any software programs available on or through the Site & Service ("Content") is protected by copyright.',
        l4: 'Users are prohibited from modifying, copying, distributing, transmitting, displaying, publishing, selling, licensing, creating derivative works or using any Content available on or through the Site & Service for commercial or public purposes.',
        l5: 'Kisan Satta grants you a limited licence to access and make personal use of this Site & Service but not for commercial purposes.',
        l6: 'We permit the use of materials on this Site & Service subject to due credit is given to Kisan Satta.',
        l7: 'The use shall also be subject to non-commercial use and limited to personal or academic dissemination. (Including on social media and use on all kinds of media).',
        l8: 'Copyright should be acknowledged.',
        l9: 'Such use should not infringe on the Intellectual Property Rights of any person.',
        l10: 'When using material on the Site or Service, proper attribution to authors and/or copyright holders must be given.',
        l11: 'User is granted a limited, revocable and non-exclusive right to create hyperlinks to the home page or any other page of Kisan Satta so long as any of these links do not portray Kisan Satta or their podcast or products or services in a false, misleading, derogatory or offensive manner.',
        l12: 'You may not use Kisan Satta\'s logos or proprietary graphics or trademarks as part of the link without express permission.'
    },
    {
        title: 'No Warranties',
        l1: 'All content on the Site & Service is provided to you "as is" without warranty of any kind either express or implied including, but not limited to, the implied warranties of merchantability & fitness for a particular purpose, title, non-infringement, security, or accuracy.',
        l2: 'Kisan Satta does not endorse & is not responsible for the accuracy or reliability of any opinion, advice or statement made through the Site & Service by any party other than Kisan Satta.',
        l3: 'Under no circumstance will Kisan Satta be liable for any loss or damage caused by a user\'s reliance on information obtained through the Site & Service.',
        l4: 'It is the responsibility of the user to evaluate the accuracy, completeness or usefulness of any opinion, advice, or other content available on/through the Site & Service.',
        l5: 'Please seek the advice of professionals, as appropriate, regarding the evaluation of any specific opinion, advice, or other content.'
    },
    {
        title: 'Limitation Of Liability',
        l1: 'The Kisan Satta specifically disclaims any liability (whether based in contract, tort, strict liability or otherwise) for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with access to or use of the Site & Service, (even if The Kisan Satta has been advised of the possibility of such damages) including liability associated with any viruses which may infect a user&apos;s computer equipment.'
    },
    {
        title: 'Privacy',
        l1: 'Users are invited to submit comments, questions, ideas, reviews, or any other information concerning The Kisan Satta, the website and Service contents, provided they understand that such comments will be subject to moderation & The Kisan Satta reserves the right to remove or edit such content.',
        l2: 'All such submissions should not be illegal, obscene, threatening, defamatory or infringing on privacy or on intellectual property rights of others.'
    },
    {
        title: 'Confidentiality Of User Communications',
        l1: 'Except as required by law The Kisan Satta will maintain the confidentiality of all user communications which contain personal user information & which are transmitted directly to The Kisan Satta.',
        l2: 'Postings by a user on any message board or in any chat room will not be protected as confidential & The Kisan Satta may use & provide information contained in any such postings (including any ideas, concepts, know-how or other intellectual property) to The Kisan Satta for any purpose whatsoever & as deemed appropriate by The Kisan Satta.'
    },
    {
        title: 'Linked Internet Sites',
        l1: 'The Kisan Satta prohibits caching, unauthorized hypertext links to the Site & Service & the framing of any Content available through the Site & Service.',
        l2: 'The Kisan Satta reserves the right to disable any unauthorized links or frames & specifically disclaims any responsibility for the Content available on any other Internet sites linked to the Site & Service.',
        l3: 'Access to any other Internet sites linked to the Site & Service is at the user&apos;s own risk.'
    },
    {
        title: 'Postings',
        desc1: 'Kisan Satta is under no obligation to review any messages, information, or content ("Postings") posted on the Site & Service by users & assumes no responsibility or liability relating to any such Postings.',
        desc2: 'Notwithstanding the above, Kisan Satta may from time to time monitor the Postings on the Site & Service & may decline to accept and/or remove any Postings that contain:',
        l1: 'Any unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, profane, hateful, racially, ethnically, or otherwise objectionable material of any kind, including, but not limited to, any material which encourages conduct that would constitute a criminal offense, give rise to civil liability, or otherwise violate any applicable local, state, national or international law.',
        l2: 'Advertisements or solicitations of any kind.',
        l3: 'Messages posted by users impersonating others.',
        l4: 'Personal information such as messages which state phone numbers, social security numbers, account numbers, addresses, or employer references.',
        l5: 'Messages by non-spokesperson employees of Kisan Satta purporting to speak on behalf of Kisan Satta.',
        l6: 'Messages that offer unauthorized downloads of any copyrighted or private information.',
        l7: 'Multiple messages placed within individual folders by the same user restating the same point.',
        l8: 'Chain letters/mails of any kind.',
        p1: 'We reserve the right to revise these T&C and R&R at any time & Users are deemed to be apprised of & bound by any changes to these T&C and R&R. The latest updated T&C and R&R would be posted on the Site & Service.'
    },
    {
        title: 'Violation Of T&C and R&R',
        l1: 'The Kisan Satta reserves the right to seek all remedies available at law & in equity for violations of these T&C & R&R, including the right to block access from a particular Internet address to the Site & Service.'
    },
    {
        title: 'Access To Password Protected/Secure Areas',
        l1: 'Access to & use of password protected and/or secure areas of the Site & Service is restricted to authorized users only. Unauthorized individuals attempting to access these areas of the Site & Service may be subject to prosecution.'
    },
    {
        title: 'Arbitration',
        l1: 'Any dispute arising out of or in connection with this agreement, including any question regarding its existence, amendment, validity, or termination, shall be referred to & finally resolved by arbitration in accordance with the Indian Arbitration & Conciliation Act, 1996.',
        l2: 'The arbitration shall be a "documents only", evidence through affidavits "fast track" arbitration.',
        l3: 'The Tribunal shall consist of one (1) arbitrator to be appointed by The Kisan Satta. The exclusive seats of arbitration shall be Chennai, India & the language of the arbitration shall be English.'
    },
    {
        title: 'Governing Law',
        l1: 'This agreement shall be governed by & construed in accordance with the laws of India.',
        l2: 'User access to & use of the Site & Service is subject to all applicable laws.'
    },
    {
        title: 'Jurisdiction',
        l1: 'In respect of all matters/disputes arising out of, in connection with or in relation to this agreement, only the civil courts at Chennai City, India shall have jurisdiction, to the exclusion of all other courts.'
    },
    {
        title: 'Publication',
        l1: 'The Site & Service is deemed to be published from/at Chennai City, India (irrespective of where it is accessed from).'
    },
    {
        title: 'Online Payments',
        desc1: 'This online payment system is provided by Kisan Satta (MERCHANT). The terms and conditions shall be amended, changed and/or modified from time to time by the MERCHANT and any such changes shall be effective immediately.',
        desc2: 'By default, all subscriptions purchased on our Site & Service are auto-recurring. For subscriptions purchased on the Site, you can disable auto-recurring on the "My Account" page. Alternatively, you may cancel the recurring mandates from your bank/payment provider. For Play Store/App Store subscriptions, cancellations/refunds must be managed through those platforms.',
        desc3: 'Online payment by users/customers is subject to the acceptance of the following terms and conditions. Using the online payment facility on our Site & Service indicates your acceptance. If you do not agree, please do not use this facility.',

        l1: 'The products and services are described under various sections of the Site & Service. Please read carefully before proceeding with payment.',
        l2: 'Payments must be made in advance for the selected products and services.',
        l3: 'All prices are quoted in Indian Rupees, unless stated otherwise. The MERCHANT reserves the right to modify prices at any time.',
        l4: 'Your payment will usually reach the MERCHANT account within two working days.',
        l5: 'The MERCHANT is not responsible for payments failing due to incorrect account details or any user error.',
        l6: 'If your card/net banking provider declines payment, the MERCHANT is under no obligation to inform you. Please verify with your bank that payment was successful.',
        l7: 'In no event shall the MERCHANT be liable for any damages arising from the use, inability to use, or results of use of the Site & Service, or related websites.',

        refundTitle: 'Refunds',
        l8: 'Refunds, if applicable, are at the sole discretion of the MERCHANT and will be credited to the original payment method.',
        l9: 'Nothing in this policy obligates the MERCHANT to refund fees unless previously credited to the MERCHANT account.',
        l10: 'Users with paid digital subscriptions are eligible for a full refund only if the request is raised within the first 7 days from the subscription start or purchase date. No refunds are provided after 7 days.',

        contactTitle: 'Contact Details',
        l11: 'Email: payments@kisansatta.in',
        p1: 'All disputes related to online payments are subject to the exclusive jurisdiction of the Chennai Court only.'
    },
    {
        title: 'Additional Terms of Use for Digital Subscription',

        desc1: 'By accessing the Site & Service you are entering into an agreement with Kisan Satta and agree to the terms that follow (the "Terms").',
        desc2: 'Please review our Privacy Policy to learn more about how we use any information you provide about yourself.',
        desc3: 'SUBSCRIPTION IS NOT APPLICABLE TO EUROPEAN UNION- EU USERS',

        l1: 'Your email and password are personal and must not be shared. You must be 18+ or have guardian permission. Responsibility lies with the user/guardian.',
        l2: 'You will not help unauthorized users gain access.',
        l3: 'You won’t create fake accounts or impersonate other users.',
        l4: 'Kisan Satta may cancel your access if you violate terms.',
        l5: 'You are responsible for keeping your account information accurate and confidential.',
        l6: 'Some features may be exclusive to registered users or subscribers.',
        l7: 'Registered Users may receive push notifications, newsletters, one-time free trials, and other benefits.',
        l8: 'Kisan Satta may change the content/services available to Registered Users at any time.',
        l9: 'You are solely responsible for how your credentials are used.',
        l10: 'Notify Kisan Satta immediately if your credentials are compromised.',
        l11: 'Provide accurate registration details and keep them updated.',
        l12: 'Kisan Satta may monitor your activity to ensure compliance with these Terms.',
        l13: 'Each subscription is for personal use only.',
        l14: 'Do not share login credentials.',
        l15: 'Subscriptions are non-transferable.',
        l16: 'Kisan Satta prohibits multiple users sharing one account. Breach may lead to suspension.',

        l17: 'Kisan Satta reserves the right to change the amount or type of content available to different users.',
        l18: 'Subscription allows access to premium Kisan Satta content via supported devices.',
        l19: 'Subscribing means you agree to these Terms & Conditions.',

        l20: 'Subscriptions may begin with a free trial.',
        l21: 'Eligibility for free trials is at Kisan Satta’s discretion.',
        l22: 'Free trial abuse may lead to revocation.',
        l23: 'Device ID, payment methods, or past accounts may be used to check eligibility.',

        l24: 'At the end of your initial period, Kisan Satta may contact you for renewal at prevailing rates.',

        l25: 'To cancel, email: customersupport@kisansatta.in',
        l26: 'Full refunds are applicable only if requested within 7 days of subscription start or purchase date.',
        l27: 'No refunds after 7 days from purchase.',

        l28: 'Subscription is governed by these Terms and any applicable promotional offers.',
        l29: 'For legal queries, contact: customersupport@kisansatta.in',

        l30: 'You are responsible for all applicable fees, including any bank/payment provider charges.',
        l31: 'Subscription pricing is displayed clearly before purchase and may change.',
        l32: 'You agree to pay applicable fees, including payment processing charges.',
        l33: 'Eligibility for discounts is fixed at the time of subscription.',
        l34: 'Payments from outside India must be in USD. INR payments from foreign users may lead to account suspension.',
        l35: 'You are responsible for charges incurred using your credentials.',
        l36: 'Provide accurate payment info. Authorization confirms ownership of payment method.',
        l37: 'Failure to authorize payment may result in subscription suspension. Fraud may be reported to banks or law enforcement.'
    },
    {
        title: 'Privacy Policy and Cookies Info',
        l1: 'The Kisan Satta respects your privacy.',
        l2: '',
        l3: ''
    },
    {
        title: 'Changes to the Site',
        l1: 'The Kisan Satta reserves the right, in its discretion and at any time, to suspend, change, modify, add or remove portions of the content available on the Site & Service at any time and to restrict the use and accessibility of the Site and Service.'
    },
    {
        title: 'Liability and Indemnity',

        l1: 'All content and services are provided "as is", with no express or implied warranties.',
        l2: 'You agree to indemnify Kisan Satta for any breaches of these Terms.',
        l3: 'We do not guarantee the quality, accuracy, or reliability of content or services.',
        l4: 'Kisan Satta disclaims all warranties, including merchantability and fitness for a particular purpose.',
        l5: 'Kisan Satta is not liable for indirect, incidental, special, or consequential damages, including loss of profits, business interruption, or loss of information.',
        l6: 'There is no guarantee the services are virus-free or error-free.',
        l7: 'Any legal liability from Kisan Satta will not exceed the amount you paid for the service in question.',
        l8: 'You agree to defend and indemnify Kisan Satta and its affiliates from claims or expenses, including legal fees, related to any breach of these Terms or your use of the services.'
    },
    {
        title: 'Force Majeure',
        l1: 'The Kisan Satta will not be held responsible for circumstances beyond its control.',
        l2: 'The Kisan Satta, its affiliates and its information providers will not be liable or deemed to be in default for any delay or failure in performance or interruption of the delivery of The Kisan Satta Content that may result directly or indirectly from any cause or circumstance beyond its or their reasonable control, including but not limited to failure of electronic or mechanical equipment or communication lines, telephone or other interconnect problems, computer viruses, unauthorised access, theft, operator errors, severe weather, earthquakes or natural disasters, strikes or other labour problems, wars, or governmental restrictions.'
    },
    {
        title: 'Miscellaneous',

        l1: 'The Kisan Satta may change these Terms at its discretion and will notify users via email or on the Site.',
        l2: 'Continued use of the Site & Service after changes implies acceptance of the updated Terms.',
        l3: 'If you do not agree with the changes, discontinue use of the Site & Service.',
        l4: 'Access to certain THG content may have additional terms and conditions.',
        l5: 'This agreement is personal and cannot be transferred or assigned by you.',
        l6: 'The Kisan Satta may assign this agreement to a third party.',
        l7: 'A delay or omission by either party in enforcing any part of these Terms does not waive their rights.',
        l8: 'Notices to THG must be made in writing and sent to: 859/860, Kasturi Buildings, Anna Salai, Chennai 600002, Tamil Nadu, India.',
        l9: 'If any part of these Terms is found invalid, the remaining sections still apply.',
        l10: 'Only terms explicitly stated in this agreement will apply; no unwritten conditions are included.',
        l11: 'Headings are for reference only and carry no legal weight.'
    },
    {
        title: 'Term and Termination',

        l1: 'The Kisan Satta may suspend or terminate your access to all or part of the Site/Service at any time, with or without cause, and without notice.',
        l2: 'You and The Kisan Satta agree that claims may only be brought individually, not as part of a class or representative action.',
        l3: 'No arbitrator or judge may consolidate multiple claims or oversee any class or representative proceedings unless both parties agree.',
        l4: 'For grievances or redressal, you may contact THG at the following address: {{company_address_placeholder}}.',
        l5: 'The Kisan Satta reserves the right to discontinue the service at its sole discretion.',
        l6: 'All legal matters related to these T&C and R&R fall under the exclusive jurisdiction of the courts of {{jurisdiction_placeholder}}.',
        l7: 'All official communications or notices should be sent to: {{communication_address_placeholder}}, Tel: {{phone_placeholder}}, Email: {{email_placeholder}}.'
    }
    ,
    {
        title: 'Changes to Terms',
        description: 'Kisan Satta may revise these Terms of Use and post the updated version on the site.'
    }
];


const getIcon = (title) => {
    if (title.toLowerCase().includes('privacy')) return <LockIcon sx={{ mr: 1 }} />;
    if (title.toLowerCase().includes('law') || title.toLowerCase().includes('arbitration')) return <GavelIcon sx={{ mr: 1 }} />;
    if (title.toLowerCase().includes('linked')) return <PublicIcon sx={{ mr: 1 }} />;
    if (title.toLowerCase().includes('violation')) return <WarningIcon sx={{ mr: 1 }} />;
    if (title.toLowerCase().includes('terms') || title.toLowerCase().includes('use')) return <InfoIcon sx={{ mr: 1 }} />;
    if (title.toLowerCase().includes('indemnity')) return <PolicyIcon sx={{ mr: 1 }} />;
    return <GppMaybeIcon sx={{ mr: 1 }} />;
};

const TermsOfUse = () => {
    return (
        <>
            <Header />
            <Box sx={{ bgcolor: '#f9fafb', py: 6 }}>
                <Container maxWidth="md">
                    <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 }, borderRadius: 3 }}>
                        <Typography variant="h4" align="center" gutterBottom color="green" fontWeight={700}>
                            Terms of Use - Kisan Satta
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 4, mt: 2 }} color="text.secondary">
                            Please read these Terms of Use carefully before using the Kisan Satta site or services. By accessing
                            or using the platform, you agree to be bound by these terms.
                        </Typography>

                        {termsData.map((term, index) => (
                            <Accordion key={index}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Box display="flex" alignItems="center">
                                        {getIcon(term.title)}
                                        <Typography fontWeight={600}>{term.title}</Typography>
                                    </Box>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Box>
                                        {Object.keys(term).map((key, idx) => {
                                            if (key === 'title') return null;

                                            const value = term[key];

                                            if (key.startsWith('desc')) {
                                                return (
                                                    <Typography key={idx} sx={{ mb: 1 }}>
                                                        <strong>{value}</strong>
                                                    </Typography>
                                                );
                                            }

                                            if (key.startsWith('p')) {
                                                return (
                                                    <Typography key={idx} sx={{ mb: 1 }}>
                                                        <strong>{value}</strong>
                                                    </Typography>
                                                );
                                            }

                                            if (key.startsWith('l')) {
                                                return (
                                                    <ul key={idx} style={{ paddingLeft: '1.2rem', marginBottom: '0.5rem' }}>
                                                        <li>{value}</li>
                                                    </ul>
                                                );
                                            }

                                            return null;
                                        })}
                                    </Box>
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

export default TermsOfUse;
