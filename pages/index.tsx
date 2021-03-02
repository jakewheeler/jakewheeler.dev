import Image from 'next/image';
import { Layout } from '@components/Layout';

export default function Home() {
  return (
    <Layout title='Home' description="Jake Wheeler's personal website">
      <div className='flex flex-col space-y-6'>
        <p className='prose text-3xl md:text-5xl'>Hey, I'm Jake 👋🏻</p>
        <div className='text-center'>
          <Image
            className='rounded-3xl'
            src='/me.png'
            width='515px'
            height='575px'
            alt='Avatar of Jake Wheeler drinking a coffee and working on a laptop'
          />
        </div>
        <p className='prose text-lg text-center md:text-xl lg:text-2xl'>
          I'm a full-stack software engineer interested in TypeScript, Node,
          React, AWS, and a lot more!
        </p>
      </div>
    </Layout>
  );
}
