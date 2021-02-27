import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAllPosts, Post } from '../../utils/posts';
import { Layout } from '@components/Layout';

interface Props {
  posts: Post[];
}

export default function Writing({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Jake Wheeler | Writing</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <div className='blog-posts'>
          <ul className='flex flex-col items-center justify-left align-left space-y-10'>
            {posts.map((post) => (
              <li key={post.title}>
                <div className='text-center bg-gray-200 hover:bg-gray-300 hover:text-blue-600 hover:underline rounded-xl shadow-md flex justify-center items-center'>
                  <Link href={`/writing/${post.slug}`}>
                    <a className='text-xl font-medium w-full h-full p-6'>
                      <p>{post.title}</p>
                      <p>{post.date}</p>
                    </a>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
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
