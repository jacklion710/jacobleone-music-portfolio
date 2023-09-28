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

  export default function HomePage() {
    const soundCloudLinks = [
      "https%3A//api.soundcloud.com/tracks/1485160441",
      "https%3A//api.soundcloud.com/tracks/946294501",
      "https%3A//api.soundcloud.com/tracks/1084610464",
      "https%3A//api.soundcloud.com/tracks/1288232401",
      "https%3A//api.soundcloud.com/tracks/1496975455",
      "https%3A//api.soundcloud.com/tracks/1340902525",
      "https%3A//api.soundcloud.com/tracks/1023379591",
      "https%3A//api.soundcloud.com/tracks/758811643",
      "https%3A//api.soundcloud.com/tracks/1259473852"
    ];
    const soundCloudParams = "&color=%23ff0000&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true";
    const isOdd = soundCloudLinks.length % 2 !== 0;

    return (
      <ChakraProvider>
        <Helmet>
            <title>Jack.Lion - Official Music Page</title>
            <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        
        <Flex 
            direction="column" 
            alignItems="center" 
            flexGrow={1} 
            minHeight="100vh"          
            justifyContent="space-between" 
            bgImage="url('/images/red-note.jpg')" 
            bgPos="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgAttachment="fixed"
            color="white"
        >
            <Navbar/>
            <VStack spacing={8} align="center" width="100%" mb={8}>
                <Heading size="xl" borderBottom="1px solid" fontFamily="'Space Mono', monospace" textShadow="0 0 3px red, 0 0 6px red, 0 0 9px red">My Music</Heading>
                
                <HStack spacing={16} wrap="wrap">
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