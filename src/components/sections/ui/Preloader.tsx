
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2200;

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const value = Math.min(
        100,
        Math.round((elapsed / duration) * 100)
      );

      setProgress(value);

      if (value >= 100) {
        window.clearInterval(interval);
        window.setTimeout(() => setLoading(false), 400);
      }
    }, 30);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050510] text-white"
        >
          <motion.h1
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="text-6xl font-bold tracking-widest"
          >
            PB<span className="text-blue-500">.</span>
          </motion.h1>

          <p className="mt-5 text-xs tracking-[0.4em] text-gray-400">
            EXPLORING DIGITAL UNIVERSES
          </p>

          <div className="mt-10 h-1 w-52 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-4 text-sm tracking-widest text-blue-400">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
