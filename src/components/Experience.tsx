"use client";

import { motion } from "framer-motion";

interface Role {
  company: string;
  title: string;
  location: string;
  date: string;
  highlights: string[];
  color: "blue" | "lavender";
  icon: string;
}

const roles: Role[] = [
  {
    company: "Ernst & Young (EY)",
    title: "Incoming Audit & Assurance Intern",
    location: "San Diego, CA",
    date: "Jun 2027 – Aug 2027",
    highlights: [],
    color: "lavender",
    icon: "EY",
  },
  {
    company: "PATH — Product Strategy & Data Systems",
    title: "Project Manager (Contract)",
    location: "Berkeley, CA",
    date: "Sep 2025 – Jan 2026",
    highlights: [
      "Defined product-level data requirements across 25+ international markets, identifying compliance constraints for platforms",
      "Directed landscape analysis of 30+ data/AI tools, benchmarking requirements to inform adoption and strategic decision-making",
      "Led 7-member team through a 12-week engagement, coordinating research, stakeholder interviews, and deliverable development",
    ],
    color: "blue",
    icon: "PM",
  },
  {
    company: "Microsoft Copilot",
    title: "Product Growth & User Insights Ambassador",
    location: "Berkeley, CA",
    date: "Aug 2025 – Dec 2025",
    highlights: [
      "Executed campus go-to-market strategy for AI productivity product, driving 150+ new users through on-ground and digital channels",
      "Translated ambiguous user needs into actionable product insights through live demos, feedback collection, and usage analysis",
    ],
    color: "lavender",
    icon: "MS",
  },
  {
    company: "Vermilion Rock Advisors",
    title: "Strategic Analytics Intern",
    location: "Berkeley, CA",
    date: "May 2025 – Aug 2025",
    highlights: [
      "Built structured segmentation model across 120+ potential acquirers, clustering by industry focus and capital deployment patterns",
      "Developed decision frameworks to evaluate tradeoffs across strategic alternatives, supporting executive-level positioning",
    ],
    color: "blue",
    icon: "VR",
  },
  {
    company: "Bill & Melinda Gates Foundation",
    title: "Strategy Consultant (Contract)",
    location: "Berkeley, CA",
    date: "Feb 2025 – May 2025",
    highlights: [
      "Developed 3 financial models to quantify the economic impact of different financing structures to optimize funding allocation",
      "Researched 14+ healthcare case studies on impact bonds, blended finance, and multilateral health funds, identifying key success factors",
      "Synthesized vaccine public-private partnership models in distribution and healthcare infrastructure for scalability recommendations",
    ],
    color: "lavender",
    icon: "GF",
  },
  {
    company: "GearChain AI",
    title: "Product & Market Strategy Intern",
    location: "Berkeley, CA",
    date: "Jan 2025 – May 2025",
    highlights: [
      "Led market research across 3 verticals (manufacturing, logistics, retail), quantifying $15B+ TAM to inform expansion strategy",
      "Identified ~80 prospective customers using survey responses and usage data, defining 2-3 high-value customer segments",
    ],
    color: "blue",
    icon: "GC",
  },
  {
    company: "AC Transit",
    title: "Product Analytics & Systems Modeling Consultant (Contract)",
    location: "Berkeley, CA",
    date: "Aug 2024 – Jan 2025",
    highlights: [
      "Devised Scope 3 emissions model forecasting emissions from 2,100+ employee commutes and 30+ third-party suppliers/contractors",
      "Analyzed data across 6 GHG Protocol categories, utilized a spend-based approach to pinpoint areas to reduce emissions by 20%",
      "Conducted research on zero-emission buses' energy consumption and created 6 Excel calculators based on GHG categories",
    ],
    color: "lavender",
    icon: "AC",
  },
];

const cardBg = {
  blue: "bg-[#C8D4F0]/60 border-[#8EA4D8]/40",
  lavender: "bg-[#DDD0F0]/60 border-[#B8A0D8]/40",
};

const dotColorHex = {
  blue: "#7B96D4",
  lavender: "#A882CC",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
      className="relative py-16 sm:py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FEFCFA 0%, #F5F0FA 15%, #F5F0FA 85%, #FEFCFA 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -left-10 w-64 h-64 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #A882CC, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 -right-10 w-52 h-52 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #7B96D4, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-12 relative">
        <motion.h2
          className="font-serif text-4xl sm:text-5xl text-gray-800 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-400 text-sm mb-12 tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Product, strategy, and analytics across industries
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{
              background: "linear-gradient(180deg, #A882CC, #7B96D4, #A882CC)",
              opacity: 0.35,
            }}
          />

          {/* Vertical line - mobile */}
          <div
            className="md:hidden absolute left-5 top-0 bottom-0 w-0.5"
            style={{
              background: "linear-gradient(180deg, #A882CC, #7B96D4, #A882CC)",
              opacity: 0.35,
            }}
          />

          <motion.div
            className="space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {roles.map((role, index) => {
              const isLeft = index % 2 === 0;
              const hex = dotColorHex[role.color];

              return (
                <div key={role.company + role.title} className="relative">
                  {/* Timeline dot - desktop — with pulse ring */}
                  <div className="hidden md:block absolute left-1/2 top-5 -translate-x-1/2 z-10">
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        width: 16,
                        height: 16,
                        border: `2px solid ${hex}`,
                      }}
                      initial={{ scale: 1, opacity: 0 }}
                      whileInView={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.08 }}
                    />
                    <motion.div
                      className="w-4 h-4 rounded-full flex items-center justify-center ring-[3px] ring-white shadow-md"
                      style={{ background: hex }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                        delay: 0.1 + index * 0.08,
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </motion.div>
                  </div>

                  {/* Timeline dot - mobile — with pulse ring */}
                  <div className="md:hidden absolute left-5 top-5 -translate-x-1/2 z-10">
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        width: 14,
                        height: 14,
                        border: `2px solid ${hex}`,
                      }}
                      initial={{ scale: 1, opacity: 0 }}
                      whileInView={{ scale: [1, 2], opacity: [0.5, 0] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.08 }}
                    />
                    <motion.div
                      className="w-3.5 h-3.5 rounded-full flex items-center justify-center ring-[3px] ring-white shadow-md"
                      style={{ background: hex }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                        delay: 0.1 + index * 0.08,
                      }}
                    >
                      <div className="w-1 h-1 rounded-full bg-white" />
                    </motion.div>
                  </div>

                  {/* Connector line from dot to card — desktop */}
                  <motion.div
                    className={`hidden md:block absolute top-[26px] h-[1px] ${isLeft ? "right-1/2 mr-2 left-auto w-6" : "left-1/2 ml-2 w-6"}`}
                    style={{ background: `${hex}50` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.08 }}
                  />

                  {/* Card - desktop */}
                  <motion.div
                    className={`hidden md:block ${isLeft ? "mr-[calc(50%+2rem)]" : "ml-[calc(50%+2rem)]"}`}
                    custom={isLeft}
                    variants={cardVariants}
                  >
                    <motion.div
                      className={`${cardBg[role.color]} border rounded-xl p-5 shadow-sm cursor-default relative group`}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 8px 30px rgba(168, 130, 204, 0.15)",
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* Icon badge */}
                      <div
                        className={`absolute -top-3 ${isLeft ? "right-4" : "left-4"} w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-md`}
                        style={{ background: hex }}
                      >
                        {role.icon}
                      </div>

                      <div className="flex items-start justify-between gap-3 mb-1">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-base leading-snug">
                            {role.company}
                          </h3>
                          <p className="text-gray-700 text-sm">{role.title}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="text-xs text-gray-500 whitespace-nowrap font-medium">
                            {role.date}
                          </span>
                          <p className="text-[10px] text-gray-400">{role.location}</p>
                        </div>
                      </div>
                      {role.highlights.length > 0 && (
                        <ul className="mt-2.5 space-y-1.5">
                          {role.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 leading-relaxed pl-4 relative"
                            >
                              <span
                                className="absolute left-0 top-[7px] w-1.5 h-1.5 rounded-full"
                                style={{ background: `${hex}60` }}
                              />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                      {role.highlights.length === 0 && (
                        <div className="mt-2 flex items-center gap-2">
                          <span
                            className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white"
                            style={{ background: hex }}
                          >
                            UPCOMING
                          </span>
                          <span className="text-xs text-gray-400">Starting {role.date.split("–")[0].trim()}</span>
                        </div>
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
                      className={`${cardBg[role.color]} border rounded-xl p-4 shadow-sm relative`}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 8px 30px rgba(168, 130, 204, 0.15)",
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* Icon badge */}
                      <div
                        className="absolute -top-2.5 left-3 w-7 h-7 rounded-lg flex items-center justify-center text-[9px] font-bold text-white shadow-md"
                        style={{ background: hex }}
                      >
                        {role.icon}
                      </div>

                      <h3 className="font-semibold text-gray-900 text-sm leading-snug mt-1">
                        {role.company}
                      </h3>
                      <p className="text-gray-700 text-xs">{role.title}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-gray-500 font-medium">
                          {role.date}
                        </span>
                        <span className="text-[10px] text-gray-400">{role.location}</span>
                      </div>
                      {role.highlights.length > 0 && (
                        <ul className="mt-2 space-y-1.5">
                          {role.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="text-xs text-gray-600 leading-relaxed pl-3.5 relative"
                            >
                              <span
                                className="absolute left-0 top-[6px] w-1.5 h-1.5 rounded-full"
                                style={{ background: `${hex}60` }}
                              />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                      {role.highlights.length === 0 && (
                        <div className="mt-2">
                          <span
                            className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold text-white"
                            style={{ background: hex }}
                          >
                            UPCOMING
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Timeline end cap — desktop */}
          <motion.div
            className="hidden md:flex absolute left-1/2 -bottom-4 -translate-x-1/2 w-3 h-3 rounded-full items-center justify-center"
            style={{ background: "linear-gradient(135deg, #A882CC, #7B96D4)" }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: "spring" }}
          />

          {/* Timeline end cap — mobile */}
          <motion.div
            className="md:hidden absolute left-5 -bottom-4 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
            style={{ background: "linear-gradient(135deg, #A882CC, #7B96D4)" }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: "spring" }}
          />
        </div>
      </div>
    </section>
  );
}
