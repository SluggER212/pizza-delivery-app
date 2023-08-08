import Link from 'next/link'
import React from 'react'
import MenuPage from '../menu/page'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {

  const user = false;

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-20 lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact Us</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Pizzaria Palace</Link>
      </div>
      {/* Mobile Menu */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* Right Links */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src="/phone.png" alt='phone' height={20} width={20}/>
          <span>033 2233 4556</span>
        </div>
        {!user ? ( <Link href="/login">Login</Link>
        ) : (
        <Link href="/oders">Oders</Link>
      )}
        <CartIcon />
      </div>
    </div>
  )
}

export default Navbar
