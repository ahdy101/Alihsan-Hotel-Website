 import React from 'react'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'


const Header = () => {
  
  return (
    <header className="py-6 px-6 bg-white sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo - Apple-style black with subtle hover */}
        <Link href="/" className="font-cormorant text-2xl font-medium text-black hover:text-gold-600 transition-colors tracking-tight">
          Alihsan Metro Hotel
        </Link>

        {/* Navigation - Clean black text */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <Link href="/" className="font-montserrat text-sm font-light text-black hover:text-gold-500 transition-colors uppercase tracking-widest">
                Home
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="font-montserrat text-sm font-light text-black hover:text-gold-500 transition-colors uppercase tracking-widest">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-montserrat text-sm font-light text-black hover:text-gold-500 transition-colors uppercase tracking-widest">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons - Black with gold hover */}
        <div className="flex items-center space-x-6">
          <FaUserCircle className="text-black text-xl hover:text-gold-500 cursor-pointer transition-colors" />
        </div>
      </div>
    </header>
  )
}

export default Header