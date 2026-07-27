"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  const whatsappNumber = "971505385047";
  const phoneNumber = "+971505385047";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      
      {/* Call Button */}
      <a 
        href={`tel:${phoneNumber}`} 
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-light hover:scale-110 transition-all cursor-pointer"
        aria-label="Call Us"
      >
        <Phone size={28} />
      </a>
    </div>
  );
}
