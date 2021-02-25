import Head from 'next/head';
import { Layout } from '@components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jake Wheeler | Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <div className='flex flex-col space-y-4'>
          <p className='text-3xl md:text-5xl'>Hey, I'm Jake 👋🏼</p>
          <p className='text-md'>
            I'm a full-stack software engineer interested in TypeScript, Node,
            React, AWS, and a lot more!
          </p>
        </div>
      </Layout>
    </>
  );
}
