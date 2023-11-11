import {
    useBreakpointValue,
    chakra,
    Box,
    Flex,
    Stack,
    Collapse,
    Icon,
    Link as ChakraLink,
    useDisclosure
  } from '@chakra-ui/react';
import React from 'react';
import dynamic from "next/dynamic";
import NextLink from "next/link";
import logo from '../public/vector/Jacob_Leone_Logo_Vectorized.svg';
import Image from 'next/image';
import './navbarStyles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaSoundcloud, FaEnvelope } from 'react-icons/fa'; 

const MotionBox = chakra(motion.div);

const navItemVariants = {
  hidden: { opacity: 0, y: 50 },  
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 }
};

const navItemTransition = {
  visible: { duration: .1 },
  exit: { duration: 0.1 }  
};

const contactButtonVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 }
};

const contactButtonTransition = {
  visible: { duration: .1 },
  exit: { duration: 0.1 }  
};

  function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
   
    React.useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';  // Disable scrolling
      } else {
        document.body.style.overflow = 'visible';  // Enable scrolling
      }
  
      return () => {
        document.body.style.overflow = 'visible';  // Cleanup
      };
    }, [isOpen]);

    return (
      <Box>
        <Flex
          bg={'black'}
          color={'white'}
          h="100px"
          minH={'120px'}
          py={{ base: 4 }}
          px={{ base: 4 }}
          borderStyle={'solid'}
          borderColor={'gray.900'}
          align={'center'}
          justifyContent="space-between"
          zIndex={10}
        >
          {/* Left Flex: Hamburger/Close Icons + Desktop Navigation */}
          <Flex 
            flex={1}
            display="flex"
            justifyContent={{ base: "flex-start", md: "flex-start" }}
            alignItems="center"
          >
            {/* Hamburger Icon */}
            <Flex
              ml={{ base: -2 }}
              display={{ base: 'flex', lg: 'none' }}
            >
              <div
                id="nav-icon1"
                onClick={onToggle}
                className={isOpen ? "open" : ""}
                style={{ marginTop: '30px' }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Flex>
    
            {/* Desktop Navigation */}
            <Flex display={{ base: 'none', lg: 'flex' }}>
              <DesktopNav isOpen={isOpen} />
            </Flex>
          </Flex>
      
          {/* Logo - now clickable */}
          <Flex justifyContent="center" flexShrink={0} zIndex={15} position="relative">
            <NextLink href="/" passHref>
                <Image 
                  src={logo} 
                  alt="Logo" 
                  height={140} 
                  width={140} 
                  style={{ filter: "drop-shadow(0 0 3px red) drop-shadow(0 0 6px red)" }}
                />
            </NextLink>
          </Flex>
    
          {/* Right Flex: Contact button (only on desktop) */}
          <Flex 
            flex={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            {/* Icons for Desktop and Wide Views */}
            <Flex 
              display={{ base: 'none', md: 'flex' }}
              alignItems="center"
              marginRight={4}
            >
              <ChakraLink href="https://soundcloud.com/jack0lion" isExternal>
                <Icon as={FaSoundcloud} color="red.500" style={{ marginRight: '10px' }}  w="1.5em" h="1.5em" className="icon-spacing" />
              </ChakraLink>

              <ChakraLink href="https://www.instagram.com/jack.lion/reels/?hl=en" isExternal>
                <Icon as={FaInstagram} style={{ marginRight: '10px' }} color="red.500" w="1.5em" h="1.5em" className="icon-spacing" />
              </ChakraLink>

              <ChakraLink href="mailto:jacob0leone@gmail.com">
                <Icon as={FaEnvelope} color="red.500" w="1.5em" h="1.5em" className="icon-spacing" />
              </ChakraLink>
            </Flex>
            <motion.div 
              variants={contactButtonVariants}
              transition={{ duration: 0.2 }}
            >
              <NextLink href="/Contact" passHref>
                <ChakraLink
                  mx={3}
                  px={6}
                  py={5}
                  bg="red.500"
                  color="white"
                  fontSize="md"
                  fontWeight="bold"
                  borderRadius="md"
                  _hover={{ bg: 'red.600' }}
                  display={{ base: 'none', md: 'block' }}  // Ensures it's hidden on mobile and visible on desktop
                >
                  Contact
                </ChakraLink>
              </NextLink>
            </motion.div>
          </Flex>
        </Flex>

        <MotionBox
            initial={false}
            animate={{ opacity: isOpen ? 0.9 : 0 }}
            position="fixed" 
            top={0} 
            right={0} 
            bottom={0} 
            left={0} 
            bg="black" 
            zIndex={9} 
            pointerEvents={isOpen ? 'auto' : 'none'}
        />
      
        <AnimatePresence>
            {isOpen && (
                <MobileNav onToggle={onToggle} isOpen={isOpen} />
            )}
        </AnimatePresence>
      </Box>
    );
  }

  interface DesktopNavProps {
    isOpen: boolean;
  }
  
  const DesktopNav: React.FC<DesktopNavProps> = ({ isOpen }) => {
    return (
    <Flex justifyContent="space-between" alignItems="flex-start" flexGrow={1} h="100%">
        <Stack
          direction={'row'}
          spacing={6}
          alignItems="center"
          flexGrow={1}
          h="100%"
          mt={4}
        >
          {NAV_ITEMS.map((navItem) => (
            <NextLink key={navItem.label} href={navItem.href ?? '#'} passHref>
              <ChakraLink
                py={2}
                fontSize={{ base: "xl" }}
                fontWeight={navItem.imageSrc ? 'normal' : 'bold'}
                color="white"
                textShadow="0 0 1px red, 0 0 3px red, 0 0 9px red"
                _hover={{ textDecoration: 'underline', color: 'gray.300', textShadow: 'none' }}
                style={{ marginTop: '150px' }}
                mt={8}
            >
                {navItem.label}
            </ChakraLink>
            </NextLink>
          ))}
        </Stack>
      </Flex>
    );
  };

  interface MobileNavProps {
    onToggle: () => void;
    isOpen: boolean;
  }

  const iconVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
  };

  const iconTransition = {
    visible: { duration: .1 },
    exit: { duration: 0.1 }  
  };
  
  const transitionOptions = {
    duration: 1., 
    ease: "easeInOut"
  };

  const MobileNav: React.FC<MobileNavProps> = ({ onToggle, isOpen }) => {
    const [navItemStyles, setNavItemStyles] = React.useState({
      opacity: 0,
      transform: 'translateY(10px)',
    });
    const isLandscape = useBreakpointValue({ base: 'portrait', sm: 'landscape' }) === 'landscape';
    const marginTopValue = useBreakpointValue({ base: "100px", sm: "50px" });
    const iconMarginTop = useBreakpointValue({ base: "200px", sm: "80px" });
  
  
    React.useEffect(() => {
      if (isOpen) {
        // If the menu should be open, animate the nav items into view
        setNavItemStyles({
          opacity: 1,
          transform: 'translateY(0)',
        });
      } else {
        // If the menu should be closed, animate the nav items out of view
        setNavItemStyles({
          opacity: 0,
          transform: 'translateY(10px)',
        });
      }
    }, [isOpen]);

  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg={'black'}
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      pt={isLandscape ? 12 : 12} 
      zIndex={11}
    >
      {/* Fixed Content */}
      <Flex 
        flexDirection="column" 
        w="100%" 
        position={isLandscape ? 'fixed' : 'relative'}
        zIndex={12}
        bg="black"
      >
        {/* Close Button */}
        <Box
            as="div"
            id="nav-icon1"
            onClick={onToggle}
            className={isOpen ? "open" : ""}
            mt={isLandscape ? '-15px' : '-15px'}
        >
            <span></span>
            <span></span>
            <span></span>
        </Box>
      </Flex>

      {/* Scrollable Content */}
      <Box 
        mt={isLandscape ? '80px' : 0}
        overflowY={isLandscape ? "auto" : "visible"}
        h={isLandscape ? 'calc(100vh - 80px)' : 'auto'}
        w="100%"
      >
        <Flex flexDirection="column" alignItems="center" justifyContent="center" mb={10}> 
          <Stack spacing={50} textAlign="center" mt={marginTopValue}>
            {NAV_ITEMS.map((navItem, index) => (
              <NextLink key={navItem.label ?? navItem.imageSrc} href={navItem.href ?? '#'} passHref>
                  <motion.div 
                      initial="hidden"
                      animate={isOpen ? "visible" : "hidden"}
                      exit="exit"
                      variants={navItemVariants}
                      transition={navItemTransition}
                  >
                      <ChakraLink
                          fontSize={{ base: "3xl" }}
                          fontWeight={navItem.imageSrc ? 'normal' : 'bold'}
                          color='white'
                          textShadow="0 0 3px red, 0 0 6px red, 0 0 9px red"
                          _hover={{ textDecoration: 'underline', color: 'gray.300', textShadow: 'none' }}
                      >
                          {navItem.label}
                      </ChakraLink>
                  </motion.div>
              </NextLink>
            ))}
          </Stack>
        </Flex>

      {/* Icons for Mobile when Hamburger is Open */}
      {isOpen && (     
          <Stack direction="row" justifyContent="center" spacing={3} mt={iconMarginTop} display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }} className="desktop-icons">
            <motion.div 
                variants={iconVariants}
                initial="hidden"
                animate={isOpen ? 'visible' : 'hidden'}
                exit="exit"
                transition={iconTransition}
            >
                <a href="https://soundcloud.com/jack0lion" target="_blank" rel="noopener noreferrer">
                    <FaSoundcloud color="#E53E3E" style={{ marginRight: '10px' }} size="1.5em" className="icon-spacing"/>
                </a>
            </motion.div>
            <motion.div 
                variants={iconVariants}
                initial="hidden"
                animate={isOpen ? 'visible' : 'hidden'}
                exit="exit"
                transition={iconTransition}
            >
                <a href="https://www.instagram.com/jack.lion/reels/?hl=en" target="_blank" rel="noopener noreferrer">
                    <FaInstagram color="#E53E3E" size="1.5em" style={{ marginRight: '10px' }} className="icon-spacing"/>
                </a>
            </motion.div>
            <motion.div 
                variants={iconVariants}
                initial="hidden"
                animate={isOpen ? 'visible' : 'hidden'}
                exit="exit"
                transition={iconTransition}
            >                
                <a href="mailto:jacob0leone@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope color="#E53E3E" size="1.5em" className="icon-spacing"/>
                </a>
            </motion.div>
          </Stack>
        )}

        {/* Contact Button */}
        <Flex justifyContent="center" width="100%" mt={50}>
          <motion.div 
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              exit="exit"
              variants={contactButtonVariants}
              transition={contactButtonTransition}
          >
          <NextLink href="/Contact" passHref>
            <ChakraLink
                px={6}
                py={5}
                bg="red.500"
                color="white"
                fontSize="2xl"
                fontWeight="bold"
                borderRadius="md"
                _hover={{ bg: 'red.600' }}
            >
                Contact
            </ChakraLink>
          </NextLink>
        </motion.div>
        </Flex>
      </Box>
    </Flex>
  );
};

  export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
  
  interface NavItem {
    label?: string;
    imageSrc?: string; 
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Catalog',
      href: '/Catalog'
    },
    {
      label: 'Services',
      href: '/Services'
    }
  ];