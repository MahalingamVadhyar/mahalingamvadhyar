import Link from 'next/link'

const Nav: React.FunctionComponent = () => {
  return (
    <nav className="flex items-center justify-end text-md py-4 mb-6 md:mb-0">
      <Link href="/">
        <a className="pr-3 md:pr-6 md:text-lg hover:text-gray-300">Home</a>
      </Link>
      <Link href="/contact">
        <a className="pr-3 md:pr-6 md:text-lg hover:text-gray-300">Contact</a>
      </Link>  
    </nav>
  )
}

export default Nav