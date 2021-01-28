import { Heading, Text, VStack } from '@chakra-ui/react';
import { Layout, Header, Main, Footer } from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Header />
      <Main>
        <VStack>
          <Heading as='h1' alignSelf='flex-start'>
            About
          </Heading>
          <VStack spacing={5} fontSize='xl'>
            <Text>
              I began writing Java in the 10th grade thanks to coding courses
              being offered at my high school. Pretty soon after that, I
              realized software engineering is what I wanted to pursue during my
              time in college.
            </Text>
            <Text>
              I decided to attend Penn State Behrend in Erie, PA after being
              accepted into their Software Engineering program. During this
              time, I had the opportunity to study data structures and
              algorithms, MIPS assembly programming, programming language
              concepts, digital logic, software testing, object-oriented
              programming and design, and a lot more.
            </Text>
            <Text>
              Even today, I am more passionate about software than ever before.
              Although I am focused on cloud automation at work, I'm very
              interested in the JavaScript ecosystem when working on my own
              projects at home. Right now, I am enjoying working with Node.js,
              TypeScript, and React. In my free time I enjoy coding, exercising,
              music production, listening to podcasts, reading, and spending
              time with my friends.
            </Text>
          </VStack>
        </VStack>
      </Main>
      <Footer />
    </Layout>
  );
}
