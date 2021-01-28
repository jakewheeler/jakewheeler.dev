import { List, ListItem, VStack } from '@chakra-ui/react';
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
          <List>
            {posts.map((post) => (
              <ListItem key={post.slug}>
                <NextChakraLink href={`blog/${post.slug}`}>
                  {post.slug}
                </NextChakraLink>
              </ListItem>
            ))}
          </List>
        </VStack>
      </Main>
      <Footer />
    </Layout>
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
