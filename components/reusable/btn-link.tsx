import Link from 'next/link';

const BtnLink = ({link, children}: {link: string, children?: React.ReactNode;}) => {
  return (
    <Link href={link} className='p-4 px-8 bg-primary rounded-xl text-white font-bold grid place-items-center'>
      {children}
    </Link>

  )
}

export default BtnLink
