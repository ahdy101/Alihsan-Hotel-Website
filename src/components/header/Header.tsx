'use client';

import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const Header = () => {
  const { data: session } = useSession();
  
  return (
    <header className="py-6 px-6 bg-white sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-cormorant text-2xl font-medium text-black hover:text-gold-600 transition-colors tracking-tight"
        >
          Alihsan Metro Hotel
        </Link>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <Link 
                href="/" 
                className="font-montserrat text-sm font-light text-black hover:text-gold-500 transition-colors uppercase tracking-widest"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/rooms" 
                className="font-montserrat text-sm font-light text-black hover:text-gold-500 transition-colors uppercase tracking-widest"
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="font-montserrat text-sm font-light text-black hover:text-gold-500 transition-colors uppercase tracking-widest"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* User Icon */}
        <div className="flex items-center space-x-6">
          {session?.user ? (
            <Link href={`/users/${session.user.id}`}>
              {session.user.image ? (
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image 
                    src={session.user.image}
                    alt={session.user.name || 'User avatar'}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              ) : (
                <FaUserCircle className="text-black text-xl hover:text-gold-500 cursor-pointer transition-colors" />
              )}
            </Link>
          ) : (
            <Link href="/auth">
              <FaUserCircle className="text-black text-xl hover:text-gold-500 cursor-pointer transition-colors" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;