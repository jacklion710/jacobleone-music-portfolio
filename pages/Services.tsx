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
import { 
    FaMusic, 
    FaHeadphones, 
    FaGuitar, 
    FaChalkboardTeacher,
    FaGamepad,
    FaFilm,
    FaPodcast,
    FaPenNib
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";

const services = [
    {
      title: "Music Licensing",
      icon: <FaMusic />,
      description: "Original music compositions tailored for commercial purposes, ensuring the right vibe for your brand or project.",
    },
    {
      title: "Mixing & Mastering",
      icon: <FaHeadphones />,
      description: "Professional mixing and mastering services to ensure your tracks sound polished and ready for release.",
    },
    {
      title: "Logo & Typography Design",
      icon: <FaPenNib />,
      description: "Crafting unique logos and typography to capture the essence of your brand or project, ensuring a memorable visual identity.",
    },
    {
      title: "Session Musician",
      icon: <FaGuitar />,
      description: "Expertise in various instruments, providing the perfect sound for your musical projects or crafting unique soundscapes and audio effects that add depth and character to your productions",
    },
    {
        title: "Film Scoring",
        icon: <FaFilm />,
        description: "Crafting evocative music scores for movies, documentaries, and animations. My compositions elevate narratives and deepen emotional impact. With a keen sense for cinematic storytelling, I accentuate on-screen drama, tension, and emotion."
    },
    {
      title: "Soundtrack Production for Games",
      icon: <FaGamepad />,
      description: "Designing atmospheric and theme-specific music for video games, mobile apps, or virtual reality experiences.",
    },
    {
      title: "Podcast Intros/Outros",
      icon: <FaPodcast />,
      description: "Crafting unique opening and closing music for podcasts, background tracks and other sounds that complement spoken content, be it for commercials, e-learning modules, or audiobooks..",
    },
    {
      title: "Music Workshops and Consultation",
      icon: <FaChalkboardTeacher />,
      description: "Offering expertise on music-related topics, guiding brands on how to use music effectively, or even teaching specific music techniques.",
    }
  ];
  
  export default function Services() {
    const bgColor = useColorModeValue("white", "gray.900");
    const color = useColorModeValue("white", "gray.100"); 
    const borderColor = useColorModeValue("gray.200", "gray.700"); 
    
    return (
        <ChakraProvider>
            <Helmet>
                <title>Jacob Leone | Music and Audio Services</title>
                <meta name="description" content="Discover the range of professional music and audio services offered by Jacob Leone. From music licensing, mixing & mastering to film scoring and more." />
                <meta name="keywords" content="Jacob Leone, Music Services, Music Licensing, Mixing, Mastering, Film Scoring, Game Soundtracks, Podcast Production" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Jacob Leone | Music and Audio Services" />
                <meta property="og:description" content="Discover the range of professional music and audio services offered by Jacob Leone. Dive deep into specialized services tailored for your audio needs." />
                <meta property="og:url" content="https://jacobleone.com/Services" />
                <link rel="canonical" href="https://jacobleone.com/Services" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
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
                        fontFamily="'Space Mono', monospace"
                        fontWeight="700"
                        as="h1" 
                        size="2xl" 
                        mb={10} 
                        mt={2} 
                        textAlign="center"
                        position="relative"
                        color="gray.100"
                        textShadow="0 0 3px red, 0 0 6px red, 0 0 9px red"
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
                        <Box key={index} w="300px" p={5} borderWidth="1px" borderRadius="md" borderColor={borderColor} shadow="lg" transition="transform .2s" _hover={{ transform: 'scale(1.05)' }} bg="gray.900" opacity="0.9">
                            <Flex justifyContent="center">
                                <Box fontSize="3xl" mb={3}>
                                    {service.icon}
                                </Box>
                            </Flex>
                            <Heading as="h2" size="lg" mb={1} textAlign="center" fontFamily="'Space Mono', monospace" fontWeight="700">{service.title}</Heading>
                            <Text mb={4} textAlign="center" fontFamily="'Space Mono', monospace">{service.description}</Text>
                        </Box>
                    ))}
                </Flex>

                    <Divider my={10} w="50%" borderColor="white" mx="auto" />

                    <VStack mt={10} mb={10} spacing={4} alignItems="center">
                        <Text fontSize="lg" textAlign="center" fontWeight="medium" fontFamily="'Space Mono', monospace" >
                            Have an idea for a project? Reach out anytime!
                        </Text>
                        <Flex>
                            <Button colorScheme="orange" size="med" as={Link} href="/Contact" mr={4} padding={2} fontFamily="'Space Mono', monospace" >
                                Contact
                            </Button>
                            <Button colorScheme="red" size="med" as={Link} href="https://jacklion.xyz/Portfolio" padding={2} fontFamily="'Space Mono', monospace" >
                                Projects
                            </Button>
                        </Flex>
                        <Text fontSize="med" fontFamily="'Space Mono', monospace" >
                            Email me at <Link href="mailto:jacob@jacobleone.com" color="red.300" fontWeight="bold">jacob@jacobleone.com</Link>
                        </Text>
                    </VStack>
                </Container>

                <Footer />
            </Flex>
        </ChakraProvider>
    );
}