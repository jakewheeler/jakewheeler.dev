import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
            className='prose text-lg hover:text-blue-600 hover:underline'
            href='https://twitter.com/_jakewheeler'
          >
            Twitter
          </a>
          <a
            className='prose text-lg hover:text-blue-600 hover:underline'
            href='https://www.linkedin.com/in/jakewheeler17/'
          >
            LinkedIn
          </a>
          <a
            className='prose text-lg hover:text-blue-600 hover:underline'
            href='https://github.com/jakewheeler'
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
  title: string;
  description: string;
  twitterHandle?: string;
}

export function Layout({
  children,
  title,
  description,
  twitterHandle = '@_jakewheeler',
}: LayoutProps) {
  const router = useRouter();

  return (
    <div className='max-w-screen-md mx-auto min-h-full'>
      <Head>
        <title>Jake Wheeler | {title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='Description' content={description} />
        <meta property='og:title' content={title} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />

        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content={twitterHandle} key='twhandle' />

        {/* Open Graph */}
        <meta property='og:url' content={router.pathname} key='ogurl' />
        <meta property='og:image' content='/me.png' key='ogimage' />
        <meta
          property='og:site_name'
          content="Jake Wheeler's personal website"
          key='ogsitename'
        />
        <meta property='og:title' content={title} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
      </Head>

      <div className='flex flex-col flex-1 min-h-full'>
        <Header />
        <Content>{children}</Content>
      </div>
    </div>
  );
}
