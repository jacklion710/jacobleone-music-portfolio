import React from 'react';
import { Flex, Heading, Text, VStack, Center, Button, Box, Collapse, useDisclosure } from "@chakra-ui/react";
import { FaMusic, FaHeadphones, FaAngleDown, FaAngleUp } from 'react-icons/fa'; 
import { Helmet } from "react-helmet";
import Waveform from './Waveform';

const LandingPage = () => {
  const { isOpen, onToggle } = useDisclosure();
  const reelDisclosure = useDisclosure(); 
  const readMoreDisclosure = useDisclosure();


  return (
    <Center 
      minHeight="88vh" 
      bg="gray.50" 
      bgImage="url('/images/red-note.jpg')" 
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Helmet>
        <title>Jacob Leone | Music Producer & Artist</title>
        <meta name="description" content="Discover the musical world of Jacob Leone. From rock and pop to electronic vibes, feel the rhythm." />
        <meta name="keywords" content="Jacob Leone, Music Producer, Electronic Artist, Music Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jacob Leone | Music Producer & Artist" />
        <meta property="og:description" content="Discover the musical world of Jacob Leone. From rock and pop to electronic vibes, feel the rhythm." />
        <meta property="og:url" content="https://jacobleone-music.vercel.app/" />
        <link rel="canonical" href="https://jacobleone-music.vercel.app/" />
      </Helmet>
      <Box bgColor="rgba(0, 0, 0, 0.7)" p={8} borderRadius="md">
        <VStack spacing={6}>
        <Heading 
            fontSize={['2xl', '3xl', '4xl', '5xl']} 
            color="white"
            textShadow="0 0 5px red, 0 0 10px red, 0 0 15px red, 0 0 20px red"
        >
            Jacob Leone
        </Heading>
          <VStack spacing={2}>
            <FaMusic size="1.5em" color="white" />
            <Text fontSize={['lg', 'xl', '2xl']} color="gray.300">Music Producer</Text>
          </VStack>
          <VStack spacing={2}>
            <FaHeadphones size="1.5em" color="white" />
            <Text fontSize={['lg', 'xl', '2xl']} color="gray.300">Electronic Artist</Text>
          </VStack>
          {/* Conditional rendering for Listen to My Reel button */}
          {!reelDisclosure.isOpen && (
            <Button 
                colorScheme="red" 
                size="lg" 
                variant="outline" 
                onClick={reelDisclosure.onToggle}
            >
                Listen to My Reel
            </Button>
          )}

          {/* Conditional rendering for the waveform and its play/pause button */}
          {reelDisclosure.isOpen && (
            <Flex flexDirection="column" alignItems="center" mt={4}>
                <Heading size="sm" mb={5}>Listen to My Reel</Heading>
                <Waveform src="/audio/reel.wav" isVisible={reelDisclosure.isOpen} />
                {/* If you want a Play/Pause button outside of the Waveform component, you'll need to pass a function to the Waveform component to control playback */}
            </Flex>
        )}
          <Box textAlign="center" w="100%" my={10}>
            <Text fontSize="lg" color="gray.300" mb={1} maxW="700px" textAlign="center" mx="auto">
              At the intersection of technology and artistry, I leverage my expertise to provide creative solutions to brands in the musical sphere.
            </Text>
            <Button variant="link" color="red.500" onClick={readMoreDisclosure.onToggle} mt={2}>
              {readMoreDisclosure.isOpen ? "Read Less" : "Read More"} {readMoreDisclosure.isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </Button>
            <Collapse in={readMoreDisclosure.isOpen}>
              <Text fontSize="lg" color="gray.300" mt={4} maxW="700px" textAlign="center" mx="auto">
                Through a combination of innovative sound design and adaptive production techniques, I partner with brands to curate unique audio experiences tailored to their needs. Understanding the vision of any brand and translating it into memorable music compositions is my forte. Whether it is creating sonic identities for new products, enhancing media campaigns, or simply producing tracks that resonate with target audiences, I am dedicated to delivering exceptional value and results.
              </Text>
            </Collapse>
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};

export default LandingPage;