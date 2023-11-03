import React from 'react';
import { 
  Flex, 
  Heading, 
  Text, 
  VStack, 
  Center, 
  Button, 
  Box, 
  Collapse, 
  useDisclosure,
  Image
} from "@chakra-ui/react";
import { FaMusic, FaAngleDown, FaAngleUp } from 'react-icons/fa'; 
import { Helmet } from "react-helmet";
import Waveform from './Waveform';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LandingPage = () => {
  const reelDisclosure = useDisclosure(); 
  const readMoreDisclosure = useDisclosure();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2.22 } }
  };

  const [headerRef, headerInView] = useInView({triggerOnce: true, threshold:0.1});
  const [iconRef, iconInView] = useInView({triggerOnce: true, threshold: 0.1});
  const [reelRef, reelInView] = useInView({triggerOnce: true, threshold: 0.1});
  const [textRef, textInView] = useInView({triggerOnce: true, threshold: 0.1});
 
  return (
    <Center 
      minHeight="100vh"
      bg="gray.50" 
      bgImage="url('/images/red-note.jpg')" 
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      overflowY="auto"
    >
      <Helmet>
        <title>Jacob Leone | Music Producer & Artist</title>
        <meta name="description" content="Discover the musical world of Jacob Leone. From rock and pop to electronic vibes, feel the rhythm." />
        <meta name="keywords" content="Jacob Leone, Music Producer, Electronic Artist, Music Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jacob Leone | Music Producer & Artist" />
        <meta property="og:description" content="Discover the musical world of Jacob Leone. From rock and pop to electronic vibes, feel the rhythm." />
        <meta property="og:url" content="https://jacobleone.com/" />
        <link rel="canonical" href="https://jacobleone.com/"
         />
         <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
      </Helmet>
      <Box bgColor="rgba(0, 0, 0, 0.7)" p={4} borderRadius="sm">
        <VStack spacing={6}>
        <motion.div 
            ref={headerRef} 
            initial="hidden" 
            animate={headerInView ? "visible" : "hidden"} 
            variants={fadeIn}
        >
          <Image 
              src="/vector/JL_Music_Typography_Vectorized.svg"
              alt="Jacobs Music"
              filter="drop-shadow(0 0 3px red) drop-shadow(0 0 4px red)"
              boxSize={['300px', '500px', '500px', '500px', '500px']}
              mx="auto"
              mt={['50px', '100px', '100px', '100px', '100px']}
              color="white"
          />
        </motion.div>
        <motion.div 
            ref={iconRef} 
            initial="hidden" 
            animate={iconInView ? "visible" : "hidden"} 
            variants={fadeIn}
        >
          <VStack spacing={2}>
            <FaMusic size="1.5em" color="white" />
            <Text fontSize={['lg', 'xl', '2xl']} color="gray.300">Producer & Electronic Artist</Text>
          </VStack>
        </motion.div>
        <motion.div 
            ref={reelRef} 
            initial="hidden" 
            animate={reelInView ? "visible" : "hidden"} 
            variants={fadeIn}
        >
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
        </motion.div>

          {/* Conditional rendering for the waveform and its play/pause button */}
          {reelDisclosure.isOpen && (
            <Flex flexDirection="column" alignItems="center" mt={4}>
                <Heading color="white"size="sm" mb={5} fontFamily="'Space Mono', monospace" >Listen to My Reel</Heading>
                <Waveform src="/audio/reel.wav" isVisible={reelDisclosure.isOpen} />
            </Flex>
        )}
        <motion.div 
            ref={textRef} 
            initial="hidden" 
            animate={textInView ? "visible" : "hidden"} 
            variants={fadeIn}
        >
          <Box textAlign="center" w="100%" my={10}>
            <Text fontSize="lg" color="gray.300" mb={1} maxW="700px" textAlign="center" mx="auto" fontFamily="'Space Mono', monospace">
              At the intersection of technology and artistry, I leverage my expertise to provide creative solutions to brands in the musical sphere...
            </Text>
            <Button variant="link" color="red.500" onClick={readMoreDisclosure.onToggle} mt={2}>
              {readMoreDisclosure.isOpen ? "Read Less" : "Read More"} {readMoreDisclosure.isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </Button>
            <Collapse in={readMoreDisclosure.isOpen}>
              <Text fontSize="lg" color="gray.300" mt={4} maxW="700px" textAlign="center" mx="auto" fontFamily="'Space Mono', monospace">
                Through a combination of innovative sound design and adaptive production techniques, I partner with brands to curate unique audio experiences tailored to their needs. Understanding the vision of any brand and translating it into memorable music compositions is my forte. Whether it is creating sonic identities for new products, enhancing media campaigns, or simply producing tracks that resonate with target audiences, I am dedicated to delivering exceptional value and results.
              </Text>
            </Collapse>
          </Box>
          </motion.div>
        </VStack>
      </Box>
    </Center>
  );
};

export default LandingPage;