import { Flex, Heading, Text, VStack, Center, Button, Box, Collapse, useDisclosure } from "@chakra-ui/react";
import { FaMusic, FaHeadphones } from 'react-icons/fa'; 
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'; 
import { Helmet } from "react-helmet";

const LandingPage = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Center 
      height="88vh" 
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
          >
            Jacob Leone
          </Heading>
          <VStack spacing={2}>
            <FaMusic size="1.5em" color="red.500" />
            <Text fontSize={['lg', 'xl', '2xl']} color="gray.300">Music Producer</Text>
          </VStack>
          <VStack spacing={2}>
            <FaHeadphones size="1.5em" color="red.500" />
            <Text fontSize={['lg', 'xl', '2xl']} color="gray.300">Electronic Artist</Text>
          </VStack>
          <Button 
              colorScheme="red" 
              size="lg" 
              variant="outline" 
              onClick={() => window.location.href="/Tracks"}
          >
              Listen to My Reel
          </Button>
          <Box textAlign="center" w="100%" my={4}>
            <Text fontSize="lg" color="gray.300" mb={1} maxW="700px" textAlign="center" mx="auto">
              At the intersection of technology and artistry, I leverage my expertise to provide creative solutions to brands in the musical sphere.
            </Text>
            <Button variant="link" color="red.500" onClick={onToggle} mt={2}>
              {isOpen ? "Read Less" : "Read More"} {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </Button>
            <Collapse in={isOpen}>
              <Text fontSize="lg" color="gray.300" mt={4} maxW="700px" textAlign="center" mx="auto">
                Through a combination of innovative sound design and adaptive production techniques, I partner with brands to curate unique audio experiences tailored to their needs. Understanding a brand's vision and translating it into memorable music compositions is my forte. Whether it's creating sonic identities for new products, enhancing media campaigns, or simply producing tracks that resonate with target audiences, I'm dedicated to delivering exceptional value and results.
              </Text>
            </Collapse>
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};

export default LandingPage;