"use client";

import { motion } from "framer-motion";

const skills = [
  "Product Strategy",
  "A/B Testing",
  "Stakeholder Management",
  "Python",
  "Excel",
  "Tableau",
  "Figma",
  "SQL",
  "Financial Modeling",
  "Data Analysis",
];

const pillColors = [
  "bg-[#C4B5E0]/80 text-white",
  "bg-[#A8B8E8]/80 text-white",
  "bg-[#D4B8E8]/80 text-white",
  "bg-[#B8D4E8]/80 text-gray-700",
  "bg-[#C4B5E0]/60 text-gray-700",
  "bg-[#A8B8E8]/60 text-gray-700",
  "bg-[#D4B8E8]/60 text-gray-700",
  "bg-[#B8D4E8]/60 text-gray-700",
  "bg-[#C4B5E0]/80 text-white",
  "bg-[#A8B8E8]/80 text-white",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#FEFCFA]">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Photo */}
          <motion.div
            className="relative flex-shrink-0"
            whileHover={{ rotate: 0 }}
            initial={{ rotate: -3 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-64 h-72 sm:w-72 sm:h-80 rounded-2xl bg-gradient-to-br from-[#C4B5E0] to-[#A8B8E8] p-1 shadow-lg shadow-purple-200/40 rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/cxuePhoto.png"
                  alt="Cindy Xue"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <div className="flex-1 text-center md:text-left">
            <motion.h2
              className="font-serif text-4xl sm:text-5xl text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me
            </motion.h2>

            <motion.div
              className="space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p>
                Hi, I&apos;m Cindy! I&apos;m a student at UC Berkeley double-majoring in
                Business Administration at the Haas School of Business and Statistics at
                the College of Computing, Data Science &amp; Society.
              </p>
              <p>
                I love designing products and leading cross-functional teams to turn
                ambiguous problems into structured solutions &mdash; whether that&apos;s
                building simulation engines for the Gates Foundation, defining data
                strategy for global health at PATH, or translating user insights into
                product decisions at Microsoft.
              </p>
              <p>
                When I&apos;m not crunching numbers or crafting slide decks, you can find
                me on the ice rink (12+ years of figure skating!), performing traditional
                Chinese folk dance, or playing pickleball.
              </p>
            </motion.div>

            {/* Skill pills */}
            <motion.div
              className="flex flex-wrap gap-2 mt-8 justify-center md:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.5,
                  },
                },
              }}
            >
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium ${pillColors[i % pillColors.length]}`}
                  variants={{
                    hidden: { opacity: 0, y: 12, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
