import {
    Box,
    Flex,
    IconButton,
    Stack,
    Image,
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
  
  function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={'black'}
          color={'white'}
          h="80px"
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={'solid'}
          borderColor={'gray.900'}
          align={'center'}
          justify={'space-between'}  
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
          
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
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
          justifyContent="space-between"
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
                textShadow="0 0 3px red, 0 0 6px red, 0 0 9px red"
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
        display={{ md: 'none' }}>
        
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
    {
      label: 'Projects',
      href: '/Projects'
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
  