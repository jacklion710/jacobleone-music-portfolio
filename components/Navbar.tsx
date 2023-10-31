import {
    chakra,
    Box,
    Flex,
    Stack,
    Collapse,
    Link as ChakraLink,
    useDisclosure
  } from '@chakra-ui/react';
import React from 'react';
import dynamic from "next/dynamic";
import NextLink from "next/link";
import logo from '../public/images/Jacob_Leone_Transparent_Logo_White.png';
import Image from 'next/image';
import './navbarStyles.css';
import { motion } from 'framer-motion';

const MotionBox = chakra(motion.div);

const navItemVariants = {
  hidden: { opacity: 0, y: 50 },  
  visible: { opacity: 1, y: 0 }  
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
          h="80px"
          minH={'120px'}
          py={{ base: 4 }}
          px={{ base: 4 }}
          borderStyle={'solid'}
          borderColor={'gray.900'}
          align={'center'}
          justifyContent="space-between"
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
              display={{ base: 'flex', md: 'none' }}
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
            <Flex display={{ base: 'none', md: 'flex' }}>
              <DesktopNav />
            </Flex>
          </Flex>
      
          {/* Logo */}
          <Flex  justifyContent="center" flexShrink={0} zIndex={15} position="relative">
            <Image src={logo} alt="Logo" height={140} width={140} />
          </Flex>
    
          {/* Right Flex: Contact button (only on desktop) */}
          <Flex 
            flex={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
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
                    display={{ base: 'none', md: 'block' }}
                >
                    Contact
                </ChakraLink>
            </NextLink>
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
      
        <Collapse in={isOpen}>
            <MobileNav onToggle={onToggle} isOpen={isOpen} />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    return (
      <Flex justifyContent="space-between" alignItems="center" flexGrow={1} h="100%">
        <Stack
          direction={'row'}
          spacing={6}
          alignItems="center"
          flexGrow={1}
          h="100%"
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

  const MobileNav: React.FC<MobileNavProps> = ({ onToggle, isOpen }) => {
    const [navItemStyles, setNavItemStyles] = React.useState({
      opacity: 0,
      transform: 'translateY(10px)',
    });
  
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
        pt={12}
        zIndex={11}
        // opacity={isOpen ? 1 : 0}
        transition="opacity 0.5s cubic-bezier(0.5, 0, 0.25, 1)"
        >

        {/* Close Button */}
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

        <Flex flexDirection="column" alignItems="center" justifyContent="center" mb={10} flexGrow={1}> 
          <Stack spacing={12} textAlign="center">
             {NAV_ITEMS.map((navItem, index) => (
                  <NextLink key={navItem.label ?? navItem.imageSrc} href={navItem.href ?? '#'} passHref>
                      <motion.div 
                          initial="hidden"
                          animate={isOpen ? "visible" : "hidden"}
                          variants={navItemVariants}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}  // Adjust the delay here
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
  
        {/* Contact Button */}
        <NextLink href="/Contact" passHref>
          <ChakraLink
              position="absolute"  // Absolute positioning
              bottom={6}           // Set the bottom value
              left="50%"           // Center the button
              transform="translateX(-50%)"  // Adjust for perfect centering
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
      label: 'Home',
      href: '/'
    },
    {
      label: 'Catalog',
      href: '/Catalog'
    },
    {
      label: 'Services',
      href: '/Services'
    }
  ];