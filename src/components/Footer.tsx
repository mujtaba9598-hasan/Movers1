"use client";

import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.72 5.56-1.54 2.05-4.06 3.16-6.66 2.87-2.61-.3-4.93-1.8-6.07-4.14-1.2-2.45-1.07-5.5.34-7.8 1.4-2.27 3.94-3.66 6.57-3.63h.11v4.06c-1.45-.04-2.91.43-3.9 1.48-1.03 1.09-1.47 2.68-1.17 4.16.29 1.46 1.34 2.72 2.72 3.23 1.39.51 3.02.32 4.25-.51 1.22-.82 1.93-2.26 1.95-3.73V.02z" />
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <footer className="bg-dark text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/logo.png`} alt="Movers & Packers Logo" width={80} height={80} className="object-contain mr-3 brightness-0 invert" />
            <div className="flex flex-col justify-center text-white">
              <span className="font-black text-xl leading-none tracking-widest">TOO FAST</span>
              <span className="font-bold text-xs leading-tight tracking-widest opacity-80 mt-1">MOVERS & PACKERS</span>
            </div>
          </div>
          <p className="text-sm mb-6">Your perfect moving partner with over 20 years of UAE experience. Local & International relocation services across all of UAE.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors" aria-label="Facebook">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors" aria-label="Instagram">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors" aria-label="TikTok">
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center"><Phone className="w-5 h-5 mr-3 text-accent" /> <a href="tel:+971554551928" className="font-bold text-white text-xl hover:text-accent transition-colors">+971 55 455 1928</a></li>
            <li className="flex items-center"><Mail className="w-5 h-5 mr-3 text-accent" /> <a href="mailto:fastmover970@gmail.com" className="hover:text-accent transition-colors">fastmover970@gmail.com</a></li>
            <li className="flex items-center"><MapPin className="w-5 h-5 mr-3 text-accent" /> Dubai, UAE</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Residential Moving</li>
            <li>Commercial Relocation</li>
            <li>International Moving</li>
            <li>Packing & Unpacking</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500 flex flex-col gap-2">
        <p>&copy; {new Date().getFullYear()} Too Fast Movers & Packers. All rights reserved.</p>
        <p>
          Powered by <a href="https://wa.me/971527529598" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">QuarterMasters</a>
        </p>
      </div>
    </footer>
  );
}
