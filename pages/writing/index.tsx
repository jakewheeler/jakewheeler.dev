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
    <Layout
      title='Writing'
      description='Blogging about software engineering and more!'
    >
      <nav className='blog-posts'>
        <ul className='flex flex-col items-center justify-left align-left space-y-8'>
          {posts.map((post) => (
            <li className='min-w-full' key={post.title}>
              <div className='border-solid border-4 border-gray-300 text-center hover:bg-gray-300 hover:underline rounded-md shadow-lg flex justify-center items-center'>
                <Link href={`/writing/${post.slug}`}>
                  <a className='w-full h-full p-4'>
                    <p className='text-lg font-medium'>{post.title}</p>
                    <p className='text-md'>{post.date}</p>
                  </a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </nav>
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
