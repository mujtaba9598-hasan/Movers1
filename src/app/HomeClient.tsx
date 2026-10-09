"use client";

import ScrollytellingHero from "@/components/ScrollytellingHero";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Home as HomeIcon, Briefcase, Box, Package, Wrench, Archive, RefreshCcw, Blinds, Settings, Car, ShieldCheck, Clock, ThumbsUp, Leaf, Headset, BadgeDollarSign } from "lucide-react";
import QuoteGenerator from "@/components/QuoteGenerator";

function AnimatedCounter({ from, to, duration, suffix = "" }: { from: number, to: number, duration: number, suffix?: string }) {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const inView = useInView(nodeRef, { once: true });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          setValue(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  const formattedValue = new Intl.NumberFormat('en-US').format(value);

  return <span ref={nodeRef}>{formattedValue}{suffix}</span>;
}

export default function Home() {
  const whyChooseUsPoints = [
    { emoji: "🌟", title: "Local Expertise", desc: "Serving Dubai and the UAE proudly for over 20 years." },
    { emoji: "🏗️", title: "Elite Moving Team", desc: "Expert crews trained for precision handling and premium care." },
    { emoji: "🚛", title: "Advanced Fleet", desc: "Modern, fully-equipped trucks for secure transportation." },
    { emoji: "💰", title: "Transparent Pricing", desc: "Honest, competitive rates with absolutely no hidden fees." },
    { emoji: "⏱️", title: "Punctual Execution", desc: "Guaranteed on-time arrivals and rapid completion." },
    { emoji: "🛡️", title: "Premium Protection", desc: "High-grade bubble wrap, cartons, and stretch film." },
    { emoji: "🔄", title: "End-to-End Solutions", desc: "From dismantling to packing, moving, and reassembly." },
    { emoji: "📞", title: "24/7 Support", desc: "Round-the-clock assistance for a stress-free move." }
  ];

  const packingProcess = [
    { step: "01", title: "Comprehensive Inspection", desc: "We meticulously assess every item before the packing begins to determine the best approach." },
    { step: "02", title: "Material Selection", desc: "Choosing the exact eco-friendly materials required—from heavy-duty boxes to moisture-proof wraps." },
    { step: "03", title: "Precision Wrapping", desc: "Delicate antiques, electronics, and valuables are wrapped securely using soft blankets and bubble film." },
    { step: "04", title: "Strategic Labeling", desc: "Every box is clearly categorized and labeled, ensuring an effortless and organized unpacking experience." }
  ];



  const stats = [
    { from: 0, to: 20, suffix: "+", label: "Years of UAE Experience", duration: 2 },
    { from: 0, to: 1400, suffix: "+", label: "Total Successful Moves", duration: 3 },
    { from: 0, to: 1000, suffix: "+", label: "Residential Moves", duration: 2.5 },
    { from: 0, to: 400, suffix: "+", label: "Commercial Moves", duration: 2.5 },
    { from: 0, to: 100, suffix: "%", label: "Client Satisfaction", duration: 2.5 },
    { from: 0, to: 35, suffix: "+", label: "Professional Staff & Handymen", duration: 2 },
    { from: 0, to: 100, suffix: "%", label: "Damage-Free & Safe", duration: 2.5 },
    { from: 0, to: 7, suffix: "", label: "Emirates Covered (Centered in Dubai)", duration: 1.5 },
  ];

  return (
    <div>
      <ScrollytellingHero />

      {/* Statistics Section (New) */}
      <section className="py-20 bg-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-black text-accent mb-2 font-[family-name:var(--font-roboto-condensed)]">
                  <AnimatedCounter from={stat.from} to={stat.to} duration={stat.duration} suffix={stat.suffix} />
                </h3>
                <p className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Peace of Mind / Pain Points Addressed */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-dark font-[family-name:var(--font-roboto-condensed)] mb-4">
              We Understand Your Biggest Moving Concerns
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Shifting homes shouldn't disrupt your life. We've designed our service around solving the most common headaches customers face.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-accent"
            >
              <Clock className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-lg font-bold text-dark mb-2">Weekend Shifting & On-Time Setup</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Need to shift over the weekend? We guarantee punctual execution so you can unpack, sleep peacefully in your new home, and confidently head to work on Monday without any delay.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-accent"
            >
              <ShieldCheck className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-lg font-bold text-dark mb-2">100% Scratchless Guarantee</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your belongings are precious. We use premium multi-layer wrapping to ensure every single item reaches its destination in absolutely scratch-less condition. Zero damage, zero complaints.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-accent"
            >
              <BadgeDollarSign className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-lg font-bold text-dark mb-2">Smooth Process & No Hidden Charges</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                What we quote is exactly what you pay. No last-minute surprises, no hidden fees. Just a completely smooth, transparent moving experience from start to finish.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/3"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-dark font-[family-name:var(--font-roboto-condensed)] mb-6">
                Why Choose Movers & Packers?
              </h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Experience matters. Founded and led by Abdul Majeed, we have built an unshakeable reputation on trust, speed, and safety. We don’t just move boxes; we transition lives.
              </p>
              <div className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-accent">
                <p className="italic text-gray-600 font-medium">
                  "Our 100% client satisfaction rate is not just a metric; it is the foundation of our entire company."
                </p>
                <p className="text-right text-sm font-bold mt-4 text-primary">— Abdul Majeed</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {whyChooseUsPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex items-start gap-4"
                >
                  <div className="text-4xl drop-shadow-sm bg-gray-50 p-3 rounded-full">{point.emoji}</div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-2">{point.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Science of Packing Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark font-[family-name:var(--font-roboto-condensed)]">The Science of Secure Packing</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Proper packing is the ultimate safeguard for your household and office assets. Our flawless methodology ensures every single item reaches its destination in pristine condition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side: Materials & Why Us */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-primary">Premium Materials We Utilize</h3>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-4 text-lg text-gray-700 bg-gray-50 p-4 rounded-xl border-l-4 border-accent">
                  <span className="text-2xl">🫧</span> High-Grade Bubble Wrap & Stretch Film
                </li>
                <li className="flex items-center gap-4 text-lg text-gray-700 bg-gray-50 p-4 rounded-xl border-l-4 border-accent">
                  <span className="text-2xl">📦</span> Crush-Resistant, Durable Cardboard Boxes
                </li>
                <li className="flex items-center gap-4 text-lg text-gray-700 bg-gray-50 p-4 rounded-xl border-l-4 border-accent">
                  <span className="text-2xl">🛏️</span> Thick Moving Blankets for Fragile Artifacts
                </li>
                <li className="flex items-center gap-4 text-lg text-gray-700 bg-gray-50 p-4 rounded-xl border-l-4 border-accent">
                  <span className="text-2xl">💧</span> Moisture-Proof Protective Enclosures
                </li>
                <li className="flex items-center gap-4 text-lg text-gray-700 bg-gray-50 p-4 rounded-xl border-l-4 border-accent">
                  <span className="text-2xl">🎗️</span> Industrial-Strength Sealing Tapes
                </li>
              </ul>

              <h3 className="text-3xl font-bold mb-2 text-primary">Why Choose Us?</h3>
              <p className="text-gray-500 font-medium mb-6 italic">"Your Seamless Move, Our Utmost Responsibility"</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2 hover:shadow-md transition-shadow">
                  <ShieldCheck className="text-accent w-8 h-8" />
                  <h4 className="font-bold text-dark text-lg leading-tight">Trained Staff & Quality Material</h4>
                  <p className="text-sm text-gray-500 font-medium">100% Damage-Free Guarantee</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2 hover:shadow-md transition-shadow">
                  <Clock className="text-accent w-8 h-8" />
                  <h4 className="font-bold text-dark text-lg leading-tight">On-Time Delivery</h4>
                  <p className="text-sm text-gray-500 font-medium">Punctual & reliable execution</p>
                </div>
                {/* Card 3 */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2 hover:shadow-md transition-shadow">
                  <Headset className="text-accent w-8 h-8" />
                  <h4 className="font-bold text-dark text-lg leading-tight">24/7 Available</h4>
                  <p className="text-sm text-gray-500 font-medium">Round-the-clock moving support</p>
                </div>
                {/* Card 4 */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2 hover:shadow-md transition-shadow">
                  <BadgeDollarSign className="text-accent w-8 h-8" />
                  <h4 className="font-bold text-dark text-lg leading-tight">Reasonable Rates</h4>
                  <p className="text-sm text-gray-500 font-medium">Absolutely zero hidden charges</p>
                </div>
              </div>
            </motion.div>

            {/* Right side: Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold mb-6 text-dark">Our Flawless Packing Process</h3>
              {packingProcess.map((step, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex gap-6 items-center"
                >
                  <div className="text-4xl font-black text-primary/20 font-[family-name:var(--font-roboto-condensed)]">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Handyman Reassembly Section */}
      <section className="py-24 bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/handymen.jpg`} 
                alt="Professional Handyman and Reassembly Service" 
                fill 
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-dark font-[family-name:var(--font-roboto-condensed)] mb-6">
                Delivery Is Just the Beginning
              </h2>
              <p className="text-xl text-primary font-medium mb-6">
                Expert Unboxing, Furniture Reassembly & Handyman Services at Your New Location.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our job isn't just about transporting your items. Once your belongings reach the destination, our professional handymen meticulously unbox, reassemble, and arrange everything exactly where you want it. From complex furniture joining to curtain installation, we ensure your new space feels like home instantly.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-dark font-medium"><Wrench className="text-accent w-6 h-6" /> Complete Furniture Reassembly</li>
                <li className="flex items-center gap-3 text-dark font-medium"><Settings className="text-accent w-6 h-6" /> TV Mounting & Appliances Setup</li>
                <li className="flex items-center gap-3 text-dark font-medium"><Blinds className="text-accent w-6 h-6" /> Curtain & Blinds Installation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>




      {/* Quote Generator Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteGenerator />
        </div>
      </section>
    </div>
  );
}
