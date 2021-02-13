import Link from 'next/link';

function Header() {
  return (
    <header className='py-5 px-3 flex bg-gray-300 w-full'>
      <Link href='/'>
        <a className='prose text-3xl '>Jake Wheeler</a>
      </Link>
    </header>
  );
}

interface Props {
  children: React.ReactNode;
}
function Container({ children }: Props) {
  return (
    <main className='flex flex-col items-center justify-center flex-1 px-20 py-20 min-h-full'>
      {children}
    </main>
  );
}

function Footer() {
  return (
    <footer className='py-5 px-3 flex items-center justify-center bg-gray-300 w-full'>
      <p className='prose-lg'>Jake Wheeler</p>
    </footer>
  );
}

export function Layout({ children }: Props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
