import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

function Header() {
  return (
    <header className='divide-y divide-gray-300 divide-double py-5 px-3 flex flex-col space-y-5 min-w-full'>
      <div>
        <Link href='/'>
          <a className=' hover:text-blue-600 hover:underline'>
            <h1 className='prose text-3xl'>Jake Wheeler</h1>
          </a>
        </Link>
      </div>
      <nav className='flex flex-row justify-between flex-wrap py-3'>
        <Link href='/writing'>
          <a className='prose font-semibold text-lg hover:text-blue-600 hover:underline'>
            Writing
          </a>
        </Link>
        <nav className='space-x-5'>
          <a
            className='prose font-semibold text-lg hover:text-blue-600 hover:underline'
            href='https://twitter.com/_jakewheeler'
          >
            Twitter
          </a>
          <a
            className='prose font-semibold text-lg hover:text-blue-600 hover:underline'
            href='https://www.linkedin.com/in/jakewheeler17/'
          >
            LinkedIn
          </a>
          <a
            className='prose font-semibold text-lg hover:text-blue-600 hover:underline'
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
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕️</text></svg>'
        />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='Description' content={description} />
        <meta property='og:title' content={title} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />

        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content={twitterHandle} key='twhandle' />

        {/* Open Graph */}
        <meta property='og:url' content={router.pathname} key='ogurl' />
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/jakewheeler/jakewheeler.dev/main/public/me.png'
          key='ogimage'
        />
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
