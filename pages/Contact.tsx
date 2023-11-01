import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  HStack,
  IconButton,
  ChakraProvider,
  useColorModeValue
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaSpotify,
  FaYoutube,
  FaSoundcloud
} from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const socialLinks = [
  // {
  //   href: "https://open.spotify.com/artist/35foCh1HOk7XwvVzuiFmzc",
  //   label: "Spotify",
  //   icon: <FaSpotify />,
  //   colorScheme: "green"
  // },
  // {
  //   href: "https://soundcloud.com/jacob-leone",
  //   label: "SoundCloud",
  //   icon: <FaSoundcloud />,
  //   colorScheme: "orange"
  // },
  // {
  //   href: "https://www.youtube.com/channel/UCbTxhDz-oFPdbKl5-rpi4gQ",
  //   label: "Youtube",
  //   icon: <FaYoutube />,
  //   colorScheme: "red"
  // },
  {
    href: "mailto:jacob@jacobleone.com",
    label: "Email",
    icon: <FaEnvelope />,
    colorScheme: "purple"
  }
];

export default function Contact() {
  const bgColor = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("white", "gray.100"); 

  return (
    <ChakraProvider>
      <Helmet>
          <title>Jacob Leone | Connect & Contact</title>
          <meta name="description" content="Connect with Jacob Leone. Whether you want to collaborate or just have a chat, find the best ways to reach out here." />
          <meta name="keywords" content="Jacob Leone, Contact, Connect, Email, Music Collaboration" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Jacob Leone | Connect & Contact" />
          <meta property="og:description" content="Connect with Jacob Leone. Whether you want to collaborate or just have a chat, find the best ways to reach out here." />
          <meta property="og:url" content="https://jacobleone.com/Contact" />
          <link rel="canonical" href="https://jacobleone.com/Contact" />
          <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
      </Helmet>
        <Flex 
          direction="column"
          minHeight="100vh"
          bgImage="url('/images/red-note.jpg')"
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgAttachment="fixed"
          color={color}
        >
          <Navbar />
          <Flex
            direction="column"
            align="center"
            justify="flex-start"
            py={8}
            px={4}
            flexGrow={1}
            overflowY="auto"
          >
          <Box 
            w="100%" 
            maxW="600px" 
            textAlign="center" 
            position="relative"
          >
            <Heading 
              fontFamily="'Space Mono', monospace"
              fontWeight="700"
              size="2xl" 
              mb={4} 
              position="relative"
              textShadow="0 0 3px red, 0 0 6px red, 0 0 9px red"
              _after={{
                content: '""',
                display: 'block',
                position: 'absolute',
                bottom: '-10px', 
                left: '50%',
                transform: 'translateX(-50%)',
                width: '400px', 
                borderBottom: `1px solid `,
              }}
            >
              Connect with Me
            </Heading>
            <Text mb={6} fontFamily="'Space Mono', monospace">
              Want to work with me or ask a question about my services? Send me an <Link href="mailto:jacob@jacobleone.com" color="cyan.400">email</Link>
            </Text>
              </Box>
              <HStack spacing={4} justify="center" wrap="wrap" mb={4}>
              {socialLinks.map(({ href, label, icon, colorScheme }) => (
                  <Link href={href} isExternal key={href}>
                  <IconButton
                      aria-label={label}
                      icon={icon}
                      fontSize="64px" 
                      colorScheme={colorScheme}
                      padding="20px"
                      paddingX="24px" 
                      paddingY="40px"
                  />
                  </Link>
              ))}
              </HStack>
            </Flex>
          <Footer />
      </Flex>
    </ChakraProvider>
  );
}