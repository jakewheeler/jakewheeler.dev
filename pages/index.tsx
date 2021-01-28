import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { Chakra } from '../components/Chakra';
import { Header, Layout, Main, Footer } from '../components/Layout';
import Image from 'next/image';
import { Img } from '../components/Img';

interface Props {
  cookies?: string;
}

export default function Home({ cookies }: Props) {
  return (
    <Chakra cookies={cookies}>
      <Layout>
        <Header />
        <Main>
          <VStack>
            <Img />
            <Heading as='h1'>Hey, I'm Jake 👋🏼</Heading>
            <VStack>
              <VStack spacing={5} fontSize='xl'>
                <Text>
                  I'm a software engineer living in Erie, Pennsylvania and am
                  currently working at a Fortune 500 insurance company called{' '}
                  <Link>Erie Insurance.</Link>
                </Text>
                <Text>
                  I recently completed Erie Insurance's IT Apprentice program, a
                  rotational program that gave me the opportunity to become part
                  of a new team every six months for the past two years. During
                  this time, I helped teams all over the IT organization solve a
                  wide range of software engineering problems.
                </Text>
                <Text>
                  My current role is focused on platform engineering and AWS
                  cloud infrastructure automation using tools like Python and
                  Terraform. My team is working to create tooling to allow our
                  IT and business partners to provision cloud infrastructure on
                  demand and making the transition into DevOps.
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </Main>
        <Footer></Footer>
      </Layout>
    </Chakra>
  );
}

export { getServerSideProps } from '../components/Chakra';
