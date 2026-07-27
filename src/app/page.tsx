"use client";

import ScrollytellingHero from "@/components/ScrollytellingHero";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Home as HomeIcon, Briefcase, Box, Package, Wrench, Archive, RefreshCcw, Blinds, Settings, Car, ShieldCheck, Clock, ThumbsUp, Leaf } from "lucide-react";
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
    { emoji: "🌟", title: "Local Expertise", desc: "Serving Ras Al Khaimah residents proudly since 2015." },
    { emoji: "🏗️", title: "Elite Moving Team", desc: "Specialized crews trained for delicate and heavy lifting." },
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

  const services = [
    { title: "Furniture Moving", desc: "Safe, rapid, and efficient relocation of premium home and office furniture.", icon: <Box className="w-8 h-8 mb-4 text-accent" /> },
    { title: "Packing Solutions", desc: "Professional-grade packing utilizing high-quality materials to absolutely protect your belongings.", icon: <Package className="w-8 h-8 mb-4 text-accent" /> },
    { title: "Dismantling & Assembly", desc: "Expert teardown and reassembly of all types of complex and luxury furniture.", icon: <Wrench className="w-8 h-8 mb-4 text-accent" /> },
    { title: "Office Relocation", desc: "Smooth, highly organized corporate shifting designed to guarantee zero business downtime.", icon: <Briefcase className="w-8 h-8 mb-4 text-accent" /> },
    { title: "Villa & Apartment Moving", desc: "Specialized, white-glove moving services tailored for high-end residential homes.", icon: <HomeIcon className="w-8 h-8 mb-4 text-accent" /> },
    { title: "Full Packing Services", desc: "Comprehensive end-to-end packing of personal, household, and sensitive office items.", icon: <Archive className="w-8 h-8 mb-4 text-accent" /> },
    { title: "Used Furniture Handling", desc: "Expert assistance and logistics for relocating or purchasing second-hand furniture.", icon: <RefreshCcw className="w-8 h-8 mb-4 text-accent" /> },
    { title: "Curtain Installation", desc: "Professional dismantling, transportation, and precise installation of curtains and blinds.", icon: <Blinds className="w-8 h-8 mb-4 text-accent" /> },
    { title: "Furniture Refixing", desc: "Meticulously reassembling and arranging your furniture in your new home exactly as required.", icon: <Settings className="w-8 h-8 mb-4 text-accent" /> },
    { title: "Vehicle Recovery", desc: "Reliable car towing and vehicle recovery services available across Ras Al Khaimah and beyond.", icon: <Car className="w-8 h-8 mb-4 text-accent" /> }
  ];

  const stats = [
    { from: 0, to: 15, suffix: "+", label: "Years of Experience", duration: 2 },
    { from: 0, to: 100, suffix: "%", label: "Client Satisfaction", duration: 2.5 },
    { from: 0, to: 10000, suffix: "+", label: "Total Successful Moves", duration: 3 },
    { from: 0, to: 970, suffix: "+", label: "Corporate Relocations", duration: 2.5 },
    { from: 0, to: 768, suffix: "+", label: "Residential Transfers", duration: 2.5 },
    { from: 0, to: 30, suffix: "+", label: "Trained Moving Experts STAFF", duration: 2 },
    { from: 0, to: 100, suffix: "%", label: "Damage-Free Transit", duration: 2.5 },
    { from: 0, to: 5, suffix: "+", label: "Emirates Covered", duration: 1.5 },
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
                Experience matters. Founded and led by Mr. Saif, we have built an unshakeable reputation on trust, speed, and safety. We don’t just move boxes; we transition lives.
              </p>
              <div className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-accent">
                <p className="italic text-gray-600 font-medium">
                  "Our 100% client satisfaction rate is not just a metric; it is the foundation of our entire company."
                </p>
                <p className="text-right text-sm font-bold mt-4 text-primary">— Mr. Saif</p>
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
      <section className="py-24 bg-white relative">
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

              <h3 className="text-3xl font-bold mb-6 text-primary">Why Trust Movers & Packers?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-accent flex-shrink-0 w-6 h-6" />
                  <p className="text-gray-600 font-medium">Expert handling of all furniture varieties.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="text-accent flex-shrink-0 w-6 h-6" />
                  <p className="text-gray-600 font-medium">Eco-friendly & robust packing supplies.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-accent flex-shrink-0 w-6 h-6" />
                  <p className="text-gray-600 font-medium">Fast, reliable, and affordable services.</p>
                </div>
                <div className="flex items-start gap-3">
                  <ThumbsUp className="text-accent flex-shrink-0 w-6 h-6" />
                  <p className="text-gray-600 font-medium">100% Guaranteed safety & punctuality.</p>
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
      
      {/* Services Overview */}
      <section className="py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-roboto-condensed)]">Comprehensive Services in Ras Al Khaimah</h2>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">Providing a full suite of premium relocation services designed to meet the exact needs of our clients across Ras Al Khaimah and the UAE.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="bg-primary-light/20 border border-white/10 rounded-2xl p-6 hover:bg-white hover:text-dark transition-colors duration-500 group flex flex-col"
              >
                {service.icon}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/80 text-sm group-hover:text-gray-600 mb-6 leading-relaxed transition-colors flex-grow">{service.desc}</p>
                <Link href="/contact" className="inline-block text-sm font-bold border-b border-accent pb-1 group-hover:text-primary transition-colors self-start mt-auto">
                  Get Details →
                </Link>
              </motion.div>
            ))}
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
