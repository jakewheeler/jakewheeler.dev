import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAllPosts, Post } from '../utils/posts';
import { Layout } from '@components/Layout';

interface Props {
  posts: Post[];
}

export default function Home({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Jake Wheeler</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <div className='flex flex-col items-center justify-left align-left space-y-10'>
          {posts.map((post) => (
            <p
              key={post.title}
              className='p-6 text-center bg-gray-200 rounded-xl shadow-md flex justify-center items-center'
            >
              <Link href={`/blog/${post.slug}`}>
                <a className='text-xl font-medium text-black'>{post.title}</a>
              </Link>
            </p>
          ))}
        </div>
      </Layout>
    </>
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
