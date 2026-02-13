"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Hero content transforms as you scroll
  const titleScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0.3]);
  const titleY = useTransform(scrollYProgress, [0, 0.6, 1], [0, -60, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 0.6, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.8, 0]);
  const blobOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 0.5, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 animate-gradient bg-gradient-to-br from-[#E8E0F0] via-[#D0D8F0] to-[#D8EAF5]"
        style={{ opacity: bgOpacity }}
      />

      {/* Organic blob shapes */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ opacity: blobOpacity }}
      >
        <div
          className="animate-blob absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, #C4B5E0 0%, transparent 70%)",
          }}
        />
        <div
          className="animate-blob-slow absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle at 60% 50%, #A8B8E8 0%, transparent 70%)",
            animationDelay: "-5s",
          }}
        />
        <div
          className="animate-blob absolute bottom-10 left-1/4 w-[400px] h-[400px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle at 50% 60%, #D4B8E8 0%, transparent 70%)",
            animationDelay: "-10s",
          }}
        />
      </motion.div>

      {/* Content — shrinks and fades into navbar on scroll */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        style={{
          scale: titleScale,
          y: titleY,
          opacity: contentOpacity,
        }}
      >
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 tracking-tight hero-gradient-text">
          Cindy Xue
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide hero-subtitle-text">
          Business &amp; Statistics at UC Berkeley
        </p>
      </motion.div>

      {/* Scroll indicator — fades out quickly */}
      <motion.div
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <svg
          className="w-7 h-7 text-gray-600 animate-bounce-gentle"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>

      {/* Bottom gradient fade — no SVG seams, pure CSS blend */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-32 sm:h-40"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #FEFCFA 100%)",
        }}
      />
    </section>
  );
}
