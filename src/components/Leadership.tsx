"use client";

import { motion } from "framer-motion";

interface Card {
  title: string;
  subtitle: string;
  description: string;
  size: "large" | "medium" | "small";
  type: "role" | "award" | "interest";
}

const cards: Card[] = [
  {
    title: "Global Research and Consulting",
    subtitle: "External Vice President",
    description:
      "Led selective recruitment sourcing 1,400+ applicants across 15+ majors. Managed Recruitment, Programming, and Marketing leadership for Berkeley's premier consulting org.",
    size: "large",
    type: "role",
  },
  {
    title: "Haas Business Student Association",
    subtitle: "Corporate Relations Lead",
    description:
      "Sourced 30+ top firms for events like Mock Superday and MBB Panels. Drove 30% YoY increase in firm participation and facilitated 5+ events for 200+ students.",
    size: "medium",
    type: "role",
  },
  {
    title: "National Merit Finalist",
    subtitle: "$2,500 Scholarship Winner",
    description: "Selected from over 15,000 finalists nationwide.",
    size: "small",
    type: "award",
  },
  {
    title: "Figure Skating",
    subtitle: "12+ years",
    description:
      "U.S. Figure Skating Gold Award recipient. A lifelong passion for the artistry and discipline of competitive skating.",
    size: "medium",
    type: "interest",
  },
  {
    title: "Haas \"Beyond Yourself\" Award",
    subtitle: "Certificate of Excellence",
    description: "Selected as 1 of 50 students for embodying the Haas Defining Principle.",
    size: "small",
    type: "award",
  },
  {
    title: "Traditional Chinese Folk Dance",
    subtitle: "Performer",
    description:
      "Exploring cultural expression through movement and storytelling.",
    size: "small",
    type: "interest",
  },
];

const sizeClasses = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-1 md:row-span-2",
  small: "md:col-span-1 md:row-span-1",
};

const typeStyles = {
  role: "bg-white/70 border-l-4 border-l-[#A8B8E8] border border-white/50",
  award: "bg-white/70 border-l-4 border-l-[#C4B5E0] border border-white/50",
  interest:
    "bg-white/70 border-l-4 border-l-[#D4B8E8] border border-white/50 border-dashed",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative py-24 sm:py-32 bg-[#FEFCFA] dot-pattern"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <motion.h2
          className="font-serif text-4xl sm:text-5xl text-gray-800 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Leadership &amp; Involvement
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              className={`${sizeClasses[card.size]} ${typeStyles[card.type]} rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300`}
              variants={cardVariants}
            >
              {card.type === "interest" && (
                <span className="text-xs uppercase tracking-wider text-[#D4B8E8] font-semibold mb-3 block">
                  Personal
                </span>
              )}
              {card.type === "award" && (
                <span className="text-xs uppercase tracking-wider text-[#C4B5E0] font-semibold mb-3 block">
                  Award
                </span>
              )}

              <h3 className="font-serif text-xl sm:text-2xl text-gray-800 mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{card.subtitle}</p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
