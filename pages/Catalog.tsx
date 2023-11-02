import { 
  Box, 
  Heading, 
  VStack, 
  HStack, 
  ChakraProvider, 
  Flex 
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

  export default function Catalog() {
    const soundCloudLinks = [
      "https%3A//api.soundcloud.com/tracks/1631947197%3Fsecret_token%3Ds-thwfEijiW5a",
      "https%3A//api.soundcloud.com/tracks/1120675069%3Fsecret_token%3Ds-XJH20hBd0O4",
      "https%3A//api.soundcloud.com/tracks/1120678582%3Fsecret_token%3Ds-75AMNfN1yPy",
      "https%3A//api.soundcloud.com/tracks/1121106415%3Fsecret_token%3Ds-CnettY4srxN",
      "https%3A//api.soundcloud.com/tracks/830933635%3Fsecret_token%3Ds-udHEPv3g6mo",
      "https%3A//api.soundcloud.com/tracks/1131651457%3Fsecret_token%3Ds-VaQK2jrpqDH",
      "https%3A//api.soundcloud.com/tracks/1130529097%3Fsecret_token%3Ds-W4tGPDOMBHk",
      "https%3A//api.soundcloud.com/tracks/1135664332%3Fsecret_token%3Ds-N06O0afQRV2",
      "https%3A//api.soundcloud.com/tracks/1120783918%3Fsecret_token%3Ds-NmMNIeDZZiU"
    ];
    const soundCloudParams = "&color=%23ff0000&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true";
    const isOdd = soundCloudLinks.length % 2 !== 0;

    return (
      <ChakraProvider>
        <Helmet>
            <title>Jacob Leone | Music Catalog</title>
            <meta name="description" content="Explore the diverse music catalog of Jacob Leone. Dive deep into a world of eclectic melodies and rhythms." />
            <meta name="keywords" content="Jacob Leone, Music Catalog, SoundCloud Tracks, Jacob Leone Music" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Jacob Leone | Music Catalog" />
            <meta property="og:description" content="Explore the diverse music catalog of Jacob Leone. Dive deep into a world of melodies and rhythms." />
            <meta property="og:url" content="https://jacobleone.com/Catalog" />
            <link rel="canonical" href="https://jacobleone.com/Catalog" />
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
            color="white"
        >
            <Box flexShrink={0}>
                <Navbar />
            </Box>
            <VStack spacing={8} align="center" width="100%" mb={8}>
                <Heading size="xl" borderBottom="1px solid" fontFamily="'Space Mono', monospace" textShadow="0 0 3px red, 0 0 6px red, 0 0 9px red">My Music</Heading>
                
                <HStack spacing={{ base: 4, md: 16 }} wrap="wrap" justifyContent="center">
                  {soundCloudLinks.map((link, index) => (
                    <Box
                      width={{ base: "100%", md: "300px" }}
                      key={index}
                      p={5}
                      borderWidth="1px"
                      borderRadius="md"
                      shadow="lg"
                      transition="transform .2s"
                      _hover={{ transform: 'scale(1.05)' }}
                      bgColor="rgba(0, 0, 0, 0.75)"
                    >
                      <iframe
                        width="100%"
                        height="135%"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                          link
                        )}${soundCloudParams}`}
                      ></iframe>
                    </Box>
                  ))}
                </HStack>
            </VStack>
            <Footer />
        </Flex>
      </ChakraProvider>
    );
}
