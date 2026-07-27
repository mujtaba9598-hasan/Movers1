import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">MOVERS & PACKERS</h3>
          <p className="text-sm">Your perfect moving partner. Local & International relocation services across all of UAE.</p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center"><Phone className="w-5 h-5 mr-3 text-accent" /> <span className="font-bold text-white text-xl">050-5385047</span></li>
            <li className="flex items-center"><Mail className="w-5 h-5 mr-3 text-accent" /> info@movers.ae</li>
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
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500 flex flex-col gap-2">
        <p>&copy; {new Date().getFullYear()} Movers & Packers. All rights reserved.</p>
        <p>
          Powered by <a href="https://wa.me/971527529598" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">QuarterMasters</a>
        </p>
      </div>
    </footer>
  );
}
