"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const homeLink = pathname.startsWith('/option2') ? '/option2' : (pathname === '/' ? '/' : '/option1');

  if (pathname === '/') return null;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-3 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href={homeLink} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center cursor-pointer group">
              <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/logo.png`} alt="Movers & Packers" width={70} height={70} className="object-contain md:w-[90px] md:h-[90px] transition-transform group-hover:scale-105" />
              <div className="ml-2 md:ml-3 flex flex-col justify-center text-primary">
                <span className="font-black text-lg md:text-xl leading-none tracking-widest group-hover:text-primary-light transition-colors">TOO FAST</span>
                <span className="font-bold text-[0.65rem] md:text-xs leading-tight tracking-widest opacity-80 mt-0.5">MOVERS & PACKERS</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href={homeLink} className="text-gray-700 hover:text-primary font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary font-medium transition-colors">Services</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-primary font-medium transition-colors">Gallery</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">Contact</Link>
            <Link href="/contact" className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary-light transition-all magnetic-btn">Get Quote</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link href={homeLink} onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md">About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md">Services</Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md">Gallery</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md">Contact</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 mt-4 text-center text-base font-medium bg-primary text-white rounded-md shadow-sm">Get Quote</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
