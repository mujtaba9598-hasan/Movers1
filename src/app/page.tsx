import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Star, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Movers & Packers | Select Option',
};

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-light flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden -mt-20">
      {/* -mt-20 offsets the main padding added in layout.tsx */}
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-dark/5 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto mt-12">
        {/* Logo & Company Name */}
        <div className="mb-12 flex flex-col items-center">
          <Image 
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/logo.png`} 
            alt="Movers & Packers Logo" 
            width={120} 
            height={120} 
            className="object-contain mb-4 drop-shadow-md"
          />
          <h1 className="text-3xl md:text-5xl font-black text-primary font-[family-name:var(--font-roboto-condensed)] tracking-widest">
            TOO FAST
          </h1>
          <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-dark mt-1 opacity-80">
            MOVERS & PACKERS
          </h2>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl mx-auto mb-16">
          {/* Option 1 */}
          <Link 
            href="/option1" 
            className="group relative flex flex-col items-center justify-center aspect-square bg-white rounded-3xl shadow-lg border-2 border-transparent hover:border-accent hover:shadow-2xl transition-all duration-300 p-6 overflow-hidden cursor-pointer text-dark hover:text-accent"
          >
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Star size={64} className="mb-4 drop-shadow-sm group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-roboto-condensed)] text-inherit">Option 1</h3>
            <p className="text-gray-500 mt-2 text-center text-sm font-medium">Current Premium Layout</p>
          </Link>

          {/* Option 2 */}
          <Link 
            href="/option2" 
            className="group relative flex flex-col items-center justify-center aspect-square bg-white rounded-3xl shadow-lg border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300 p-6 overflow-hidden cursor-pointer text-dark hover:text-primary"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Rocket size={64} className="mb-4 drop-shadow-sm group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-roboto-condensed)] text-inherit">Option 2</h3>
            <p className="text-gray-500 mt-2 text-center text-sm font-medium">New Premium Layout</p>
          </Link>
        </div>

        {/* Deliverables / Package Details */}
        <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 text-left relative overflow-hidden mb-12">
          <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
          <h3 className="text-2xl md:text-3xl font-black text-dark mb-8 text-center uppercase tracking-widest font-[family-name:var(--font-roboto-condensed)]">
            What's Included in This Package
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {[
              "1 Year .COM Domain",
              "WhatsApp + Quick Inquiry + Call Button",
              "1 Year Hosting",
              "Google Maps + Contact Form",
              "On-Page SEO Setup",
              "Professional Content Presentation",
              "SSL Security",
              "3 Months Website Maintenance & Support",
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="text-accent w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-dark font-medium">{item}</span>
              </div>
            ))}
            <div className="flex items-start md:col-span-2 mt-2">
              <CheckCircle2 className="text-primary w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-dark font-black text-primary">No Hidden Charges</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
