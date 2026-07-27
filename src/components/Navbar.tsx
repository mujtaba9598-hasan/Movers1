import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image src="/assets/logo.png" alt="Movers & Packers" width={60} height={60} className="object-contain" />
            </Link>
            <span className="ml-3 font-bold text-xl tracking-tight text-primary">MOVERS & PACKERS</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">About</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-primary font-medium transition-colors">Gallery</Link>
            <Link href="/services/residential" className="text-gray-700 hover:text-primary font-medium transition-colors">Residential</Link>
            <Link href="/services/commercial" className="text-gray-700 hover:text-primary font-medium transition-colors">Commercial</Link>
            <Link href="/contact" className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary-light transition-all magnetic-btn">Get Quote</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
