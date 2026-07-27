"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Step = 1 | 2 | 3 | 4 | 5;

export default function QuoteGenerator() {
  const [step, setStep] = useState<Step>(1);
  const [moveType, setMoveType] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleMoveType = (type: string) => {
    setMoveType(type);
    setStep(2);
  };

  const handlePropertyType = (type: string) => {
    setPropertyType(type);
    setStep(3);
  };

  const handleSize = (selectedSize: string) => {
    setSize(selectedSize);
    setStep(4);
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = "971505385047";
    
    let message = `Hello Movers & Packers Team,\n\nI would like to request a free premium quotation for my upcoming move. Here are my details:\n\n`;
    message += `*Move Category:* ${moveType}\n`;
    
    if (moveType === "Residential") {
      message += `*Property Type:* ${propertyType}\n`;
    }
    
    message += `*Size/Volume:* ${size}\n\n`;
    message += `Please provide me with an estimated cost and the next steps.\n\n`;
    message += `*My Name is:* ${name || "[Not Provided]"}\n`;
    message += `*My Location is:* ${location || "[Not Provided]"}`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const reset = () => {
    setMoveType("");
    setPropertyType("");
    setSize("");
    setName("");
    setLocation("");
    setStep(1);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto min-h-[400px] flex flex-col justify-center relative overflow-hidden">
      
      {/* Progress Indicator */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gray-100">
        <motion.div 
          className="h-full bg-accent"
          initial={{ width: "20%" }}
          animate={{ width: `${(step / 5) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Go Back Button */}
      {step > 1 && step < 5 && (
        <button 
          onClick={() => setStep((prev) => (prev - 1) as Step)}
          className="absolute top-8 left-8 flex items-center gap-1 text-gray-400 hover:text-primary transition-colors font-medium text-sm z-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          Back
        </button>
      )}

      <div className="text-center mb-10 mt-6">
        <h3 className="text-3xl font-bold text-primary font-[family-name:var(--font-roboto-condensed)]">Quick Quote Generator</h3>
        <p className="text-gray-500 mt-2">Tap to select your moving requirements</p>
      </div>

      <div className="flex-grow flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* STEP 1: Move Type */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex flex-col items-center"
            >
              <h4 className="text-xl font-bold mb-6 text-dark">What type of move are you planning?</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {["Residential", "Commercial", "International"].map((type) => (
                  <button 
                    key={type}
                    onClick={() => handleMoveType(type)}
                    className="px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-bold hover:border-primary hover:bg-primary hover:text-white transition-all magnetic-btn"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: Property Type (For Residential) or Size (For others) */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex flex-col items-center"
            >
              {moveType === "Residential" ? (
                <>
                  <h4 className="text-xl font-bold mb-6 text-dark">Select your property type</h4>
                  <div className="flex flex-wrap justify-center gap-4">
                    {["Villa", "Apartment", "Townhouse"].map((type) => (
                      <button 
                        key={type}
                        onClick={() => handlePropertyType(type)}
                        className="px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-bold hover:border-primary hover:bg-primary hover:text-white transition-all magnetic-btn"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h4 className="text-xl font-bold mb-6 text-dark">Select the scale of your move</h4>
                  <div className="flex flex-wrap justify-center gap-4">
                    {["Small Office", "Medium Office", "Large Corporate", "Custom Warehouse"].map((sizeOption) => (
                      <button 
                        key={sizeOption}
                        onClick={() => handleSize(sizeOption)}
                        className="px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-bold hover:border-primary hover:bg-primary hover:text-white transition-all magnetic-btn"
                      >
                        {sizeOption}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}

          {/* STEP 3: Size Selection (For Residential) */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex flex-col items-center"
            >
              <h4 className="text-xl font-bold mb-6 text-dark">How many bedrooms?</h4>
              <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
                {propertyType === "Villa" ? (
                  ["1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4 Bedrooms", "5 Bedrooms", "6 Bedrooms", "7+ Bedrooms", "Custom Quote"].map((s) => (
                    <button 
                      key={s}
                      onClick={() => handleSize(s)}
                      className="px-6 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-medium hover:border-primary hover:bg-primary hover:text-white transition-all magnetic-btn"
                    >
                      {s}
                    </button>
                  ))
                ) : (
                  ["Studio", "1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4 Bedrooms", "Custom Quote"].map((s) => (
                    <button 
                      key={s}
                      onClick={() => handleSize(s)}
                      className="px-6 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-medium hover:border-primary hover:bg-primary hover:text-white transition-all magnetic-btn"
                    >
                      {s}
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          )}

          {/* STEP 4: Name and Location Selection */}
          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex flex-col items-center"
            >
              <h4 className="text-xl font-bold mb-6 text-dark">Almost done! Your details?</h4>
              <form 
                onSubmit={(e) => { e.preventDefault(); if (name.trim() && location.trim()) setStep(5); }}
                className="flex flex-col gap-4 w-full max-w-sm"
              >
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="px-6 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-medium focus:border-primary focus:outline-none w-full"
                  required
                />
                <input 
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your location (e.g. Dubai Marina)"
                  className="px-6 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-medium focus:border-primary focus:outline-none w-full"
                  required
                />
                <button 
                  type="submit"
                  disabled={!name.trim() || !location.trim()}
                  className="px-8 py-4 rounded-full font-bold bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-light hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              </form>
            </motion.div>
          )}

          {/* STEP 5: Final Screen */}
          {step === 5 && (
            <motion.div 
              key="step5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h4 className="text-2xl font-bold mb-2 text-dark">Perfect! You are all set.</h4>
              <p className="text-gray-600 mb-8">We have compiled your details. Click below to get your free quote via WhatsApp.</p>
              
              <div className="flex gap-4">
                <button 
                  onClick={reset}
                  className="px-6 py-3 rounded-full font-bold text-gray-500 hover:text-dark hover:bg-gray-100 transition-colors"
                >
                  Start Over
                </button>
                <a 
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full font-bold bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 hover:-translate-y-1 transition-all"
                >
                  Get Quote on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
