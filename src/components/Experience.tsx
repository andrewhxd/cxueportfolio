"use client";

import { motion } from "framer-motion";

interface Role {
  company: string;
  title: string;
  location: string;
  date: string;
  highlights: string[];
  color: "blue" | "lavender";
}

const roles: Role[] = [
  {
    company: "Ernst & Young (EY)",
    title: "Incoming Audit & Assurance Intern",
    location: "San Diego, CA",
    date: "Jun 2027 – Aug 2027",
    highlights: [],
    color: "lavender",
  },
  {
    company: "PATH",
    title: "Project Manager — Data & Compliance Strategy",
    location: "Berkeley, CA",
    date: "Sep 2025 – Jan 2026",
    highlights: [
      "Synthesized cross-country requirements across 25+ markets, identifying regulatory risk thresholds to inform product/data strategy",
      "Led 7-member team through a 12-week engagement, coordinating research, stakeholder interviews, and deliverable development",
    ],
    color: "blue",
  },
  {
    company: "Microsoft Copilot",
    title: "Brand Ambassador",
    location: "Berkeley, CA",
    date: "Aug 2025 – Dec 2025",
    highlights: [
      "Executed campus go-to-market strategy for AI productivity product, driving 150+ new users",
    ],
    color: "lavender",
  },
  {
    company: "Vermilion Rock Advisors",
    title: "Investment Banking Summer Analyst",
    location: "Berkeley, CA",
    date: "May 2025 – Aug 2025",
    highlights: [
      "Sourced and qualified 120+ strategic and PE acquirers, driving competitive tension and accelerating $150M+ in live M&A deal flow",
      "Presented data-driven recommendations to senior stakeholders, translating complex analysis into executive-ready insights",
    ],
    color: "blue",
  },
  {
    company: "Bill & Melinda Gates Foundation",
    title: "Strategy Consultant",
    location: "Berkeley, CA",
    date: "Feb 2025 – May 2025",
    highlights: [
      "Developed 3 financial models to quantify the economic impact of different financing structures to optimize funding allocation",
      "Researched 14+ healthcare case studies on impact bonds, blended finance, and multilateral health funds",
    ],
    color: "lavender",
  },
  {
    company: "GearChain AI",
    title: "Business Development Intern — Marketing",
    location: "Berkeley, CA",
    date: "Jan 2025 – May 2025",
    highlights: [
      "Led market research across 3 verticals (manufacturing, logistics, retail), quantifying $15B+ TAM to inform expansion strategy",
    ],
    color: "blue",
  },
  {
    company: "AC Transit",
    title: "Strategy Consultant",
    location: "Berkeley, CA",
    date: "Aug 2024 – Jan 2025",
    highlights: [
      "Devised Scope 3 emissions model forecasting emissions from 2,100+ employee commutes and 30+ third-party suppliers",
      "Analyzed data across 6 GHG Protocol categories, pinpointing areas to reduce emissions by 20%",
    ],
    color: "lavender",
  },
];

const cardBg = {
  blue: "bg-[#C8D4F0]/60 border-[#8EA4D8]/40",
  lavender: "bg-[#DDD0F0]/60 border-[#B8A0D8]/40",
};

const dotColor = {
  blue: "bg-[#7B96D4]",
  lavender: "bg-[#A882CC]",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: (isLeft: boolean) => ({
    opacity: 0,
    x: isLeft ? -40 : 40,
    y: 10,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20"
      style={{
        background:
          "linear-gradient(180deg, #FEFCFA 0%, #F5F0FA 15%, #F5F0FA 85%, #FEFCFA 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <motion.h2
          className="font-serif text-4xl sm:text-5xl text-gray-800 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#A882CC] via-[#7B96D4] to-[#A882CC] opacity-40" />

          {/* Vertical line - mobile */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#A882CC] via-[#7B96D4] to-[#A882CC] opacity-40" />

          <motion.div
            className="space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {roles.map((role, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={role.company + role.title} className="relative">
                  {/* Timeline dot - desktop */}
                  <motion.div
                    className={`hidden md:flex absolute left-1/2 top-5 w-4 h-4 rounded-full ${dotColor[role.color]} -translate-x-1/2 ring-[3px] ring-white shadow-md z-10 items-center justify-center`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                      delay: 0.1,
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </motion.div>

                  {/* Timeline dot - mobile */}
                  <motion.div
                    className={`md:hidden flex absolute left-5 top-5 w-3.5 h-3.5 rounded-full ${dotColor[role.color]} -translate-x-1/2 ring-[3px] ring-white shadow-md z-10 items-center justify-center`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                      delay: 0.1,
                    }}
                  >
                    <div className="w-1 h-1 rounded-full bg-white" />
                  </motion.div>

                  {/* Card - desktop */}
                  <motion.div
                    className={`hidden md:block ${isLeft ? "mr-[calc(50%+1.5rem)]" : "ml-[calc(50%+1.5rem)]"}`}
                    custom={isLeft}
                    variants={cardVariants}
                  >
                    <motion.div
                      className={`${cardBg[role.color]} border rounded-xl p-5 shadow-sm cursor-default`}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 8px 30px rgba(168, 130, 204, 0.15)",
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-base leading-snug">
                            {role.company}
                          </h3>
                          <p className="text-gray-700 text-sm">{role.title}</p>
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap mt-0.5 font-medium">
                          {role.date}
                        </span>
                      </div>
                      {role.highlights.length > 0 && (
                        <ul className="mt-2.5 space-y-1.5">
                          {role.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#A882CC]/50"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Card - mobile */}
                  <motion.div
                    className="md:hidden ml-10"
                    custom={true}
                    variants={cardVariants}
                  >
                    <motion.div
                      className={`${cardBg[role.color]} border rounded-xl p-4 shadow-sm`}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 8px 30px rgba(168, 130, 204, 0.15)",
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <h3 className="font-semibold text-gray-900 text-sm leading-snug">
                        {role.company}
                      </h3>
                      <p className="text-gray-700 text-xs">{role.title}</p>
                      <span className="text-xs text-gray-500 font-medium">
                        {role.date}
                      </span>
                      {role.highlights.length > 0 && (
                        <ul className="mt-2 space-y-1.5">
                          {role.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="text-xs text-gray-600 leading-relaxed pl-3.5 relative before:absolute before:left-0 before:top-[6px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#A882CC]/50"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
