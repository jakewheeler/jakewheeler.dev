import {
  List,
  ListItem,
  VStack,
  Heading,
  Text,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { Layout, Header, Main, Footer } from '../../components/Layout';
import { NextChakraLink } from '../../components/NextChakraLink';
import { getAllPosts } from '../../lib/api';
import { Post } from '../../types/post';

interface Props {
  posts: Post[];
}

export default function Blog({ posts }: Props) {
  return (
    <Layout>
      <Header />
      <Main>
        <VStack>
          <Heading as='h1'>Blog</Heading>
          <VStack>
            <List spacing={5}>
              {posts.map((post) => (
                <ListItem key={post.slug}>
                  <PostItem post={post} />
                </ListItem>
              ))}
            </List>
          </VStack>
        </VStack>
      </Main>
      <Footer />
    </Layout>
  );
}

interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  const bg = useColorModeValue('gray.300', 'gray.700');
  return (
    <VStack
      as={NextChakraLink}
      href={`/blog/${post.slug}`}
      bg={bg}
      maxW={600}
      maxH={200}
      p={5}
      justifyContent='center'
      alignItems='center'
    >
      <Text href={`/blog/${post.slug}`} fontSize='xl'>
        {post.title}
      </Text>
      <Text fontSize='md'>{post.date}</Text>
    </VStack>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
