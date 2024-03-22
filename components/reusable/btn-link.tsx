import Link from 'next/link';

const BtnLink = ({link, children}: {link: string, children?: React.ReactNode;}) => {
  return (
    <Link href={link} className='p-4 px-8 bg-gradient-to-r from-secondary to-primary rounded-xl text-white font-bold grid place-items-center text-xl'>
      {children}
    </Link>

  )
}

export default BtnLink
