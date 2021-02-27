import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className='py-5 px-3 flex flex-col space-y-5 min-w-full'>
      <div>
        <Link href='/'>
          <a className='prose text-3xl hover:text-blue-600 hover:underline'>
            Jake Wheeler
          </a>
        </Link>
      </div>
      <div className='flex flex-row justify-between flex-wrap'>
        <Link href='/writing'>
          <a className='prose text-lg hover:text-blue-600 hover:underline'>
            Writing
          </a>
        </Link>
        <div className='space-x-3'>
          <a
            href='https://twitter.com/_jakewheeler'
            className='prose text-lg hover:text-blue-600 hover:underline'
          >
            Twitter
          </a>
          <a
            href='https://www.linkedin.com/in/jakewheeler17/'
            className='prose text-lg hover:text-blue-600 hover:underline'
          >
            LinkedIn
          </a>
          <a
            href='https://github.com/jakewheeler'
            className='prose text-lg hover:text-blue-600 hover:underline'
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

interface Props {
  children: React.ReactNode;
}
function Content({ children }: Props) {
  return (
    <main className='flex flex-col flex-1 p-3 md:p-20 min-h-full'>
      {children}
    </main>
  );
}

export function Layout({ children }: Props) {
  return (
    <div className='max-w-screen-md mx-auto min-h-full'>
      <div className='flex flex-col flex-1 min-h-full'>
        <Header />
        <Content>{children}</Content>
      </div>
    </div>
  );
}
