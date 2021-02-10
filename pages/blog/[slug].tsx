import { Heading, Text, VStack, Code } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import { Post } from '../../types/post';
import { Layout, Header, Main, Footer } from '../../components/Layout';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer, { defaults } from 'chakra-ui-markdown-renderer';
import { CodeBlock } from '../../components/CodeBlock';

interface Props {
  post: Post;
}

const theme = {
  code: (props) => {
    const { language, value } = props;
    return <CodeBlock language={language} value={value} />;
  },
  ...defaults,
};

export default function BlogPost({ post }: Props) {
  return (
    <Layout>
      <Header />
      <Main>
        <VStack spacing={5} align='flex-start'>
          <VStack alignSelf='center'>
            <Heading as='h1'>{post.title}</Heading>
            <Text>{post.date}</Text>
          </VStack>

          {/* <PostBody content={post.content} /> */}
          <ReactMarkdown
            renderers={(ChakraUIRenderer(), { code: CodeBlock })}
            children={post.content}
            allowDangerousHtml={false}
          />
        </VStack>
      </Main>
      <Footer />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug as string);
  const content = await markdownToHtml(post.content);
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
