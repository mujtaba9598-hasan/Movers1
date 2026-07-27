"use client";

import { motion } from "framer-motion";
import QuoteGenerator from "@/components/QuoteGenerator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="pt-20 bg-light min-h-screen">
      <section className="py-24 bg-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-roboto-condensed)] mb-6 text-accent">Coming Soon</h1>
            <p className="text-xl text-gray-300">
              We are currently designing a premium experience for this section. Pending final client approval.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 mt-8 text-primary hover:text-white transition-colors bg-white hover:bg-primary px-6 py-3 rounded-full font-bold">
              <ArrowLeft size={20} /> Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark font-[family-name:var(--font-roboto-condensed)]">Get an Instant Quote While You Wait</h2>
            <p className="mt-4 text-gray-600">Select your requirements below to get started immediately.</p>
          </div>
          <QuoteGenerator />
        </div>
      </section>
    </div>
  );
}
