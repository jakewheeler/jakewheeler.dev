import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className='py-5 px-3 flex bg-gray-300 w-full'>
      <Link href='/'>
        <a className='prose text-3xl'>Jake Wheeler</a>
      </Link>
    </header>
  );
}

interface Props {
  children: React.ReactNode;
}
function Content({ children }: Props) {
  return (
    <main className='flex flex-col flex-1 px-20 py-20 min-h-full lg:items-center'>
      {children}
    </main>
  );
}

function Footer() {
  return (
    <footer className='border-top'>
      <div className='flex space-x-8 justify-center p-2'>
        <div>
          <p>Jake Wheeler © {new Date().getFullYear()}</p>
        </div>
        <div>
          <nav>
            <ul className='flex space-x-5'>
              <li>
                <a
                  href='https://twitter.com/_jakewheeler'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='/twitter.png'
                    width='32px'
                    height='32px'
                    alt='Twitter logo'
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/jake-wheeler-416a74180/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='/linkedin.png'
                    width='32px'
                    height='32px'
                    alt='Linkedin logo'
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/jakewheeler'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='/gh.png'
                    width='32px'
                    height='32px'
                    alt='GitHub logo'
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: Props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}
