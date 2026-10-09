"use client";

import { motion } from "framer-motion";
import QuoteGenerator from "@/components/QuoteGenerator";
import { Phone, Mail, MapPin, Clock, Globe, ShieldCheck, Zap, Headset } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

export default function ContactPage() {
  return (
    <div className="bg-light min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 bg-dark text-white overflow-hidden">
        {/* Subtle Dark Background Element */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#112133] z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-roboto-condensed)] mb-6 text-white leading-tight">
                We're Here to <span className="text-accent relative inline-block">Help<svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none"/></svg></span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                Connect with our moving specialists instantly. We are ready to provide you with seamless support, quick quotes, and reliable guidance.
              </p>
            </motion.div>

            {/* Floating Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl"
            >
              {/* Badge 1 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Headset className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg">24/7 Available</h3>
                  <p className="text-gray-400 text-sm">Round the clock support</p>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg">Instant Response</h3>
                  <p className="text-gray-400 text-sm">Fast & precise quotes</p>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg">Trusted Network</h3>
                  <p className="text-gray-400 text-sm">Covering all of UAE</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Contact Details Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
              className="bg-[#112133] rounded-[1.5rem] p-6 md:p-8 shadow-xl flex flex-col justify-center h-full"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Get in touch</h2>
              
              <div className="flex flex-col gap-5">
                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#f0f0ff] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-[#5b45ff]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-0.5">Phone</span>
                    <a href="tel:+971554551928" className="text-white hover:text-accent transition-colors text-base font-medium">+971 55 455 1928</a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#e8fbf0] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <WhatsAppIcon className="w-5 h-5 text-[#12c45d]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-0.5">WhatsApp</span>
                    <a href="https://wa.me/971554551928" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors text-base font-medium">+971 55 455 1928</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#fff4e6] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-[#f97316]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-0.5">Email</span>
                    <a href="mailto:fastmover970@gmail.com" className="text-white hover:text-accent transition-colors text-base font-medium">fastmover970@gmail.com</a>
                  </div>
                </div>



                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#ffedf4] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-[#e11d48]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-0.5">Location</span>
                    <span className="text-white text-base font-medium">Al Mamzar, Dubai, UAE</span>
                  </div>
                </div>

                {/* Clock */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#e8f6ff] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-[#0284c7]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-0.5">Business Hours</span>
                    <span className="text-white text-base font-medium">24/7 Support available</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
              className="w-full h-full min-h-[350px] rounded-[1.5rem] overflow-hidden shadow-xl border border-gray-100 relative group"
            >
              <iframe 
                src="https://maps.google.com/maps?q=Al%20Mamzar,%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '350px', filter: 'grayscale(0.2) contrast(1.1)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Generator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark font-[family-name:var(--font-roboto-condensed)]">Request a Call Back</h2>
            <p className="mt-3 text-gray-600">Select your requirements below to get a quick quote immediately.</p>
          </div>
          <QuoteGenerator />
        </div>
      </section>
    </div>
  );
}
