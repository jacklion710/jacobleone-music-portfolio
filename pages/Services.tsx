import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    VStack,
    Link,
    Container,
    ChakraProvider,
    Divider,
    useColorModeValue
} from "@chakra-ui/react";
import { FaMusic, FaHeadphones, FaGuitar, FaMicrophone } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";

const services = [
    {
        title: "Commercial Music",
        icon: <FaMusic />,
        description: "Original music compositions tailored for commercial purposes, ensuring the right vibe for your brand or project.",
    },
    {
        title: "Mixing & Mastering",
        icon: <FaHeadphones />,
        description: "Professional mixing and mastering services to ensure your tracks sound polished and ready for release.",
    },
    {
        title: "Session Musician",
        icon: <FaGuitar />,
        description: "Expertise in various instruments, providing the perfect sound for your musical projects.",
    },
    {
        title: "Sound Design",
        icon: <FaMicrophone />,
        description: "Crafting unique soundscapes and audio effects that add depth and character to your productions.",
    }
];
  
  export default function Services() {
    const bgColor = useColorModeValue("white", "gray.900");
    const color = useColorModeValue("white", "gray.100"); 
    const borderColor = useColorModeValue("gray.200", "gray.700"); 
    
    return (
        <ChakraProvider>
            <Helmet>
                <title>Jacob Leones Services | Professional Tech Solutions</title>
                <meta name="description" content="Explore Jacob Leone's professional services, ranging from AI & Machine Learning, Software Development, Web Development, to Mobile App Creation. Get the best tech solutions tailored for your needs." />
                <meta name="keywords" content="Jacob Leone, AI, Machine Learning, Software Development, Web Development, Mobile App Creation, Tech Services" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Jacob Leone's Services | Professional Tech Solutions" />
                <meta property="og:description" content="Explore Jacob Leone's professional services, ranging from AI & Machine Learning, Software Development, Web Development, to Mobile App Creation. Get the best tech solutions tailored for your needs." />
                <meta property="og:url" content="https://jacobleone-tech.vercel.app/Services" />
                <link rel="canonical" href="https://jacobleone-tech.vercel.app/Services" />
            </Helmet>
            <Flex 
                direction="column" 
                minHeight="100vh"
                color={color}
                bgImage="url('/images/red-note.jpg')"
                bgPos="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgAttachment="fixed"
            >
                <Navbar />
                
                <Container maxW="container.xl" flexGrow={1}>
                    <Heading 
                        as="h1" 
                        size="2xl" 
                        mb={10} 
                        mt={10} 
                        textAlign="center"
                        position="relative"
                        color="gray.100"
                        _after={{
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            bottom: '-10px', 
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '280px',  
                            borderBottom: `1px solid currentColor`,  
                        }}
                    >
                        My Services
                    </Heading>
            
                    <Flex wrap="wrap" justifyContent="center" gap={4}>
                    {services.map((service, index) => (
                        <Box key={index} w="300px" p={5} borderWidth="1px" borderRadius="md" borderColor={borderColor} shadow="lg" transition="transform .2s" _hover={{ transform: 'scale(1.05)' }} bg="gray.800" opacity="0.9">
                            <Flex justifyContent="center">
                                <Box fontSize="3xl" mb={3}>
                                    {service.icon}
                                </Box>
                            </Flex>
                            <Heading as="h2" size="lg" mb={1} textAlign="center">{service.title}</Heading>
                            <Text mb={4} textAlign="center">{service.description}</Text>
                        </Box>
                    ))}
                </Flex>

                    <Divider my={10} w="50%" borderColor="black" mx="auto" />

                    <VStack mt={60} spacing={4} alignItems="center">
                        <Text fontSize="lg" textAlign="center" fontWeight="medium">
                            Have an idea for a project? Reach out anytime!
                        </Text>
                        <Flex>
                            <Button colorScheme="orange" size="med" as={Link} href="/Contact" mr={4} padding={2}>
                                Contact
                            </Button>
                            <Button colorScheme="red" size="med" as={Link} href="/Projects" padding={2}>
                                Projects
                            </Button>
                        </Flex>
                        <Text fontSize="med">
                            Email me at <Link href="mailto:jacob0leone@gmail.com" color="red.300" fontWeight="bold">jacob0leone@gmail.com</Link>
                        </Text>
                    </VStack>
                </Container>

                <Footer />
            </Flex>
        </ChakraProvider>
    );
}