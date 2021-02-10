import Image from 'next/image';
export function Img() {
  return (
    <>
      <Image
        className='avatar'
        src='/jake.jpg'
        alt='Picture of Jake Wheeler'
        width={200}
        height={200}
      />
      <style jsx global>{`
        .avatar {
          border-radius: 50%;
        }
      `}</style>
    </>
  );
}
