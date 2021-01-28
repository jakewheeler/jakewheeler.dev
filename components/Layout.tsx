import {
  Box,
  Flex,
  BoxProps,
  Heading,
  HStack,
  useColorModeValue,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  Center,
  Container,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  InfoIcon,
  ChatIcon,
  CheckCircleIcon,
  AtSignIcon,
} from '@chakra-ui/icons';
import NextLink from 'next/link';
import Head from 'next/head';
import { forwardRef, ReactNode, useRef } from 'react';
import { ColorModeBtn } from './ColorModeBtn';
import { NextChakraLink } from '../components/NextChakraLink';

interface Props {
  children?: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css'
        />
      </Head>
      <Box position='relative' minH='100vh' className='container'>
        {children}
      </Box>
    </>
  );
}

export function Header() {
  const bg = useColorModeValue('gray.300', 'gray.900');

  return (
    <HStack
      as='header'
      bgColor={bg}
      spacing={2}
      padding={2}
      justifyContent='space-between'
      width='100%'
      height={75}
    >
      <NextLink href='/'>
        <Heading as='h1'>Jake Wheeler</Heading>
      </NextLink>
      <MenuDrawer />
    </HStack>
  );
}

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        aria-label='Open menu'
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <ColorModeBtn />
            </DrawerHeader>

            <DrawerBody>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} />
                  <NextChakraLink href='/'>Home</NextChakraLink>
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} />
                  <NextChakraLink href='/about'>About</NextChakraLink>
                </ListItem>
                <ListItem>
                  <ListIcon as={ChatIcon} />
                  <NextChakraLink href='/blog'>Blog</NextChakraLink>
                </ListItem>
                <ListItem>
                  <ListIcon as={AtSignIcon} />
                  <NextChakraLink href='/contact'>Contact</NextChakraLink>
                </ListItem>
              </List>
            </DrawerBody>

            <DrawerFooter>Footer</DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

type MainProps = Props & BoxProps;

export const Main = forwardRef<HTMLDivElement, MainProps>((props, ref) => {
  return (
    <Center as='main' {...props} ref={ref} p={10} paddingBottom='3rem'>
      <Container maxW={900}>{props.children}</Container>
    </Center>
  );
});

export function Footer() {
  const bg = useColorModeValue('gray.300', 'gray.900');

  return (
    <Flex
      as='footer'
      position='absolute'
      bottom={0}
      width='100%'
      bgColor={bg}
      height='2.5rem'
      alignItems='center'
      justifyContent='center'
    >
      Jake Wheeler 2021
    </Flex>
  );
}
