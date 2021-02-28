import Link from 'next/link';
import Head from 'next/head';

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
      <nav className='flex flex-row justify-between flex-wrap'>
        <Link href='/writing'>
          <a className='prose text-lg hover:text-blue-600 hover:underline'>
            Writing
          </a>
        </Link>
        <nav className='space-x-5'>
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
        </nav>
      </nav>
    </header>
  );
}

interface ContentProps {
  children: React.ReactNode;
}

function Content({ children }: ContentProps) {
  return (
    <main className='flex flex-col flex-1 p-3 md:p-20 min-h-full'>
      {children}
    </main>
  );
}

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function Layout({ children, title = 'Home' }: LayoutProps) {
  return (
    <div className='max-w-screen-md mx-auto min-h-full'>
      <Head>
        <title>Jake Wheeler | {title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='Description' content={title} />
      </Head>

      <div className='flex flex-col flex-1 min-h-full'>
        <Header />
        <Content>{children}</Content>
      </div>
    </div>
  );
}
