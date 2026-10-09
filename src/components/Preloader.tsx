"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Preloader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [doorClosed, setDoorClosed] = useState(false);
  const [driveAway, setDriveAway] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Reset if on the splash screen
    if (pathname === '/') {
      setProgress(0);
      setIsLoaded(false);
      setDoorClosed(false);
      setDriveAway(false);
      setHasPlayed(false);
      return;
    }

    // Start loading only when we leave the splash screen and haven't played yet
    if (pathname !== '/' && !hasPlayed && !isLoaded) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 25);
      return () => clearInterval(interval);
    }
  }, [pathname, hasPlayed, isLoaded]);

  useEffect(() => {
    if (progress === 100 && !hasPlayed) {
      setTimeout(() => setDoorClosed(true), 200);
      setTimeout(() => {
        setDriveAway(true);
        setTimeout(() => {
          setIsLoaded(true);
          setHasPlayed(true);
        }, 800);
      }, 1000);
    }
  }, [progress, hasPlayed]);

  if (pathname === '/') return null;
  if (isLoaded || hasPlayed) return null;

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative w-72 h-32 flex items-end justify-center mb-8">
            {/* The Truck */}
            <motion.div
              animate={driveAway ? { x: "100vw", opacity: 0 } : { x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              className="relative flex items-end w-full max-w-[200px]"
            >
              {/* Truck Body (Back) */}
              <div className="w-40 h-28 bg-gray-100 rounded-tl-lg rounded-tr-sm relative flex items-center justify-center border-4 border-gray-800 shadow-lg overflow-hidden">
                 
                 {/* Loading boxes inside the truck (always behind the door) */}
                 <div className="absolute inset-0 bg-gray-200 flex flex-wrap-reverse items-end justify-center p-2 gap-1 z-0">
                   {Array.from({ length: 6 }).map((_, i) => (
                     <motion.div
                       key={i}
                       initial={{ opacity: 0, y: -20 }}
                       animate={{ opacity: progress > (i * 15) ? 1 : 0, y: progress > (i * 15) ? 0 : -20 }}
                       className="w-11 h-10 bg-[#8B5A2B] border-2 border-[#5C3A21] shadow-sm flex items-center justify-center rounded-sm"
                     >
                       {/* Box tape mark */}
                       <div className="w-full h-1 bg-[#d4a373] opacity-50"></div>
                     </motion.div>
                   ))}
                 </div>

                 {/* Truck Door (Rolls down from top) */}
                 <motion.div
                    className="absolute top-0 left-0 w-full bg-[#98FF98] border-gray-800 z-10 flex flex-col justify-between shadow-inner"
                    initial={{ height: "0%" }}
                    animate={{ height: doorClosed ? "100%" : "0%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                 >
                    {/* Horizontal lines to look like a rolling shutter */}
                    <div className="w-full h-full flex flex-col">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex-1 w-full border-b border-black/10"></div>
                      ))}
                    </div>
                    {/* Door bottom handle/lock */}
                    <div className="w-full h-3 bg-gray-800 flex items-center justify-center">
                      <div className="w-6 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                 </motion.div>

                 {/* Truck Side branding (visible only on the side, but our perspective is back/side, let's just make it look like the back) */}
                 {/* Actually, if we see the cabin on the right, we are looking at the right side of the truck.
                     So the "door" we see should be the side door OR we make it look like a side-loader. Let's assume it's a side-loader for visual sake! */}
              </div>

              {/* Truck Cabin (Front) */}
              <div className="w-16 h-20 bg-[#98FF98] rounded-tr-2xl rounded-br-lg relative ml-1 flex items-end border-4 border-gray-800 shadow-md">
                 {/* Window */}
                 <div className="absolute top-2 right-2 w-8 h-8 bg-blue-100 border-2 border-gray-800 rounded-tr-xl rounded-bl-sm flex overflow-hidden">
                    {/* Reflection */}
                    <div className="w-2 h-10 bg-white/50 rotate-45 transform translate-x-2 -translate-y-1"></div>
                 </div>
                 {/* Headlight */}
                 <div className="absolute bottom-2 right-0 w-2 h-3 bg-yellow-300 rounded-l-full border border-gray-800"></div>
              </div>

              {/* Wheels */}
              <motion.div 
                animate={{ rotate: driveAway ? 360 : 0 }} 
                transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                className="absolute -bottom-4 left-4 w-10 h-10 bg-gray-800 rounded-full border-4 border-gray-300 flex items-center justify-center z-20"
              >
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </motion.div>
              
              <motion.div 
                animate={{ rotate: driveAway ? 360 : 0 }} 
                transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                className="absolute -bottom-4 right-[70px] w-10 h-10 bg-gray-800 rounded-full border-4 border-gray-300 flex items-center justify-center z-20"
              >
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </motion.div>

              <motion.div 
                animate={{ rotate: driveAway ? 360 : 0 }} 
                transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                className="absolute -bottom-4 right-2 w-8 h-8 bg-gray-800 rounded-full border-4 border-gray-300 flex items-center justify-center z-20"
              >
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
              </motion.div>

            </motion.div>
            
            {/* Road / Ground line */}
            <div className="absolute bottom-[-20px] left-[-50vw] w-[200vw] h-1 bg-gray-200"></div>
            
            {/* Speed lines when driving away */}
            <AnimatePresence>
              {driveAway && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-4 left-0 w-32 h-12"
                >
                  <motion.div animate={{ x: [-50, 0] }} transition={{ repeat: Infinity, duration: 0.3 }} className="w-16 h-1 bg-gray-300 mb-2 rounded-full"></motion.div>
                  <motion.div animate={{ x: [-30, 20] }} transition={{ repeat: Infinity, duration: 0.2 }} className="w-8 h-1 bg-gray-300 mb-2 rounded-full ml-8"></motion.div>
                  <motion.div animate={{ x: [-60, -10] }} transition={{ repeat: Infinity, duration: 0.4 }} className="w-20 h-1 bg-gray-300 rounded-full ml-4"></motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="text-6xl mt-6 text-gray-800 tracking-tighter" style={{ fontFamily: 'Anemone, sans-serif' }}>
            {progress}%
          </div>
          <div className="text-sm font-bold text-gray-400 mt-2 uppercase tracking-[0.2em]" style={{ fontFamily: 'Awesome, sans-serif' }}>
            {progress === 100 ? (driveAway ? "On the way!" : "Doors Closing...") : "Loading Cargo..."}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
