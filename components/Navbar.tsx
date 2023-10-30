import {
    Box,
    Flex,
    IconButton,
    Stack,
    Collapse,
    Link as ChakraLink,
    useDisclosure
  } from '@chakra-ui/react';
  import React from 'react';
  import {
    HamburgerIcon,
    CloseIcon
  } from '@chakra-ui/icons';
  import dynamic from "next/dynamic";
  import NextLink from "next/link";
  import logo from '../public/images/Jacob_Leone_Transparent_Logo_White.png';
  import Image from 'next/image';

  function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
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
        >
          {/* Left Flex: Hamburger/Close Icons + Desktop Navigation */}
          <Flex 
            flex={1} 
            display="flex"
            justifyContent={{ base: "flex-start", md: "space-between" }} 
            alignItems="center"
          >
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }}>
              <IconButton
                onClick={onToggle}
                color={"red.500"}
                icon={
                  isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={12} h={12} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
      
            {/* Desktop Navigation */}
            <Flex display={{ base: 'none', md: 'flex' }} flex={1}>
              <DesktopNav />
            </Flex>
          </Flex>
      
          {/* Logo */}
          <Flex justifyContent="center" flex={1}>
            <Image src={logo} alt="Logo" height={140} width={140} />
          </Flex>
      
          {/* Right Flex: Contact button */}
          <Flex flex={1} display="flex" justifyContent="flex-end" alignItems="center">
            <NextLink href="/Contact" passHref>
              <ChakraLink
                px={4}
                py={5}
                bg="red.500"
                color="white"
                fontSize="md"
                fontWeight="bold"
                borderRadius="md"
                _hover={{ bg: 'red.600' }}
              >
                Contact
              </ChakraLink>
            </NextLink>
          </Flex>
        </Flex>
      
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
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

  const MobileNav = () => {
    return (
      <Stack
        bg={'black'}
        p={4}
        spacing={6}
        display={{ base: 'flex', md: 'none' }}
        flexDirection="column"
      >
        {NAV_ITEMS.map((navItem) => (
          <NextLink key={navItem.label ?? navItem.imageSrc} href={navItem.href ?? '#'} passHref>
            <ChakraLink
              py={2}
              fontSize={{ base: "xl" }}
              fontWeight={navItem.imageSrc ? 'normal' : 'normal'}
              color='white'
              textShadow="0 0 3px red, 0 0 6px red, 0 0 9px red"
              _hover={{ textDecoration: 'underline', color: 'gray.300', textShadow: 'none' }}
            >
              {navItem.label}
            </ChakraLink>
          </NextLink>
        ))}
      </Stack>
    );
  };
  
  export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
  
  interface NavItem {
    label?: string;
    imageSrc?: string; // <-- Add this
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Home',
      href: '/'
    },
    // {
    //   label: 'Projects',
    //   href: '/Projects'
    // },
    {
      label: 'Catalog',
      href: '/Catalog'
    },
    {
      label: 'Services',
      href: '/Services'
    },
    {
      label: 'Contact',
      href: '/Contact'
    }
  ];