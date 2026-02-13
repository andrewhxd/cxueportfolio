"use client";

import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    href: "mailto:cindyxue@berkeley.edu",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cindyxueee/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:858-337-2433",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden py-24">
      {/* Top fade from cream into gradient — eliminates seam */}
      <div
        className="absolute top-0 left-0 right-0 h-32 z-[1]"
        style={{ background: "linear-gradient(to bottom, #FEFCFA, transparent)" }}
      />
      {/* Animated gradient background (bookend to hero) */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-[#E8E0F0] via-[#D8D8F0] to-[#D8EAF5]" />

      {/* Converging blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="animate-blob absolute bottom-10 left-1/4 w-[400px] h-[400px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle at 40% 50%, #C4B5E0 0%, transparent 70%)",
          }}
        />
        <div
          className="animate-blob-slow absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle at 60% 50%, #A8B8E8 0%, transparent 70%)",
            animationDelay: "-7s",
          }}
        />
        <div
          className="animate-blob absolute top-10 left-1/2 w-[300px] h-[300px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, #D4B8E8 0%, transparent 70%)",
            animationDelay: "-12s",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gray-800 mb-4">
          Let&apos;s connect
        </h2>
        <p className="text-gray-500 mb-12 text-lg font-light">
          I&apos;d love to hear from you.
        </p>

        {/* Icon links */}
        <div className="flex items-center justify-center gap-6">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-full glass border border-white/40 flex items-center justify-center text-gray-600 group-hover:text-gray-800 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-200/40 transition-all duration-300">
                {link.icon}
              </div>
              <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Footer text */}
      <motion.p
        className="relative z-10 mt-20 text-sm text-gray-400/70 font-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Built with care by Cindy Xue
      </motion.p>

      {/* Fade to white at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
