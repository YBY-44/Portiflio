import Link from 'next/link';
export const HeaderLink = ({ label }) => {
  return (
    <Link href={'/'}>
      <div className='flex'>
        <h1 className='text-black'>111{label}</h1>
      </div>
    </Link>
  );
};
