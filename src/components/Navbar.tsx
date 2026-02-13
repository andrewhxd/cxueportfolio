"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-full px-6 sm:px-8 py-3 flex items-center justify-between shadow-md border border-gray-100 relative">
            <a
              href="#hero"
              className="font-serif text-lg text-gray-700 hover:text-gray-900 transition-colors"
            >
              Cindy Xue
            </a>

            {/* Desktop links */}
            <div className="hidden sm:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-800 transition-colors px-2 py-1 rounded-lg hover:bg-gray-50"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden flex flex-col items-center justify-center w-8 h-8 gap-[5px] rounded-lg"
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-5 h-[2px] bg-gray-600 rounded-full origin-center"
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-[2px] bg-gray-600 rounded-full"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block w-5 h-[2px] bg-gray-600 rounded-full origin-center"
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>

          {/* Mobile dropdown menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="sm:hidden mt-2 mx-auto max-w-4xl bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div className="flex flex-col py-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="px-6 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
