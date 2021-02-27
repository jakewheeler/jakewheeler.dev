import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts, getPostBySlug, Post } from '../../utils/posts';
import ReactMarkdown from 'react-markdown/with-html';
import { Layout } from '@components/Layout';
import { CodeBlock } from '@components/CodeBlock';

interface Props {
  post: Post;
}

export default function BlogPost({ post }: Props) {
  return (
    <Layout>
      <article className='prose prose-blue prose-md lg:prose-lg xl:prose-xl'>
        <h1>{post.title}</h1>
        <p className='font-semibold'>{post.date}</p>
        <ReactMarkdown
          children={post.content}
          renderers={{ code: CodeBlock }}
          allowDangerousHtml={false}
        />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug as string);

  return {
    props: {
      post,
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
