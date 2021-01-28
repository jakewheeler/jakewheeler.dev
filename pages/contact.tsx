import { Heading, Link, VStack, Text } from '@chakra-ui/react';
import { Layout, Header, Main, Footer } from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <Header />
      <Main>
        <VStack spacing={5}>
          <Heading as='h1'>Contact</Heading>
          <Text fontSize='xl'>
            Please feel free to reach out to me on Twitter at{' '}
            <Link
              href='https://twitter.com/_jakewheeler'
              target='_blank'
              rel='noopener noreferrer'
              isExternal
              colorScheme='gray'
            >
              @_jakewheeler
            </Link>{' '}
            or connect with me on{' '}
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/jakewheeler17/'
              isExternal
              colorScheme='gray'
            >
              LinkedIn!
            </Link>{' '}
            😁
          </Text>
        </VStack>
      </Main>
      <Footer />
    </Layout>
  );
}
