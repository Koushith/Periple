import React, { useState } from 'react';
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Assets
// import signInImage from "assets/img/signInImage.png";

export const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    password: '',
    email: '',
    name: '',
  });

  // Chakra color mode
  const titleColor = useColorModeValue('teal.300', 'teal.200');
  const textColor = useColorModeValue('gray.400', 'white');
  return (
    <Flex position='relative' mb='40px'>
      <Flex
        h={{ sm: 'initial', md: '75vh', lg: '90vh' }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ sm: '100px', md: '0px' }}
      >
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: 'none' }}
          w={{ base: '100%', md: '50%', lg: '42%' }}
        >
          <Flex direction='column' w='100%' background='transparent' p='48px' mt={{ md: '150px', lg: '80px' }}>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Welcome to DocsShare
            </Heading>
            <Text mb='36px' ms='4px' color={textColor} fontWeight='bold' fontSize='14px'>
              Enter your email and password to Register
            </Text>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Name
              </FormLabel>
              <Input
                borderRadius='5px'
                mb='24px'
                fontSize='sm'
                type='text'
                placeholder='Your Name'
                size='lg'
                value={formData.name}
                onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Email
              </FormLabel>
              <Input
                borderRadius='5px'
                mb='24px'
                fontSize='sm'
                type='text'
                placeholder='Your email adress'
                size='lg'
                value={formData.email}
                onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Password
              </FormLabel>
              <Input
                borderRadius='5px'
                mb='20px'
                fontSize='sm'
                type='password'
                placeholder='Your password'
                size='lg'
                value={formData.password}
                onChange={(e: any) => setFormData({ ...formData, password: e.target.value })}
              />

              <Button
                fontSize='16px'
                type='submit'
                bg='teal.300'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                mt='20px'
                _hover={{
                  bg: 'teal.200',
                }}
                _active={{
                  bg: 'teal.400',
                }}
              >
                Register
              </Button>
            </FormControl>
            <Flex flexDirection='column' justifyContent='center' alignItems='center' maxW='100%' mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Don't have an account?
                <Link color={titleColor} as='span' ms='5px' fontWeight='bold'>
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: 'none', md: 'block' }}
          overflowX='hidden'
          h='100%'
          w='40vw'
          position='absolute'
          right='0px'
        >
          <Box
            bgImage={
              'https://images.unsplash.com/photo-1653763741347-19dd6c52000e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            borderBottomLeftRadius='20px'
          ></Box>
        </Box>
      </Flex>
    </Flex>
  );
};
