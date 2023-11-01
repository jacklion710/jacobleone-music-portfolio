import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden
} from '@chakra-ui/react';
import { FaInstagram, FaSoundcloud, FaEnvelope } from 'react-icons/fa'; 
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.700', 'blackAlpha.700')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
};

export default function Footer() {
  return (
    <Box 
      bg={useColorModeValue('red.900', 'red.900')}
      color={useColorModeValue('white', 'white.200')}
      width="100%"  
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={2}
        direction={{ base: 'column', md: 'row' }}
        spacing={2}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text fontSize="sm">© 2023 Jacob Leone. All rights reserved.</Text> 
        <Stack direction={'row'} spacing={4}>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'SoundCloud'} href={'#'}>
            <FaSoundcloud />
          </SocialButton>
          <SocialButton label={'Email'} href={'mailto:your-email@example.com'}> 
            <FaEnvelope />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
