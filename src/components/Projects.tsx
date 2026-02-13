"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  org: string;
  date: string;
  description: string;
  accentFrom: string;
  accentTo: string;
  icon: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Vaccine Funding Optimization",
    org: "Bill & Melinda Gates Foundation",
    date: "Feb – May 2025",
    description:
      "Built three financial models to quantify the economic impact of different financing structures for global vaccine programs. Researched 14+ case studies on impact bonds, blended finance, and multilateral health funds to identify what makes public-private partnerships succeed at scale.",
    accentFrom: "#C4B5E0",
    accentTo: "#D4B8E8",
    icon: "🏥",
    tags: ["Financial Modeling", "Healthcare", "Strategy"],
  },
  {
    title: "Scope 3 Emissions Forecasting",
    org: "AC Transit",
    date: "Aug 2024 – Jan 2025",
    description:
      "Devised a comprehensive emissions model forecasting Scope 3 impacts from 2,100+ employee commutes and 30+ third-party suppliers. Analyzed data across 6 GHG Protocol categories using a spend-based approach, pinpointing strategies to reduce emissions by 20%.",
    accentFrom: "#A8B8E8",
    accentTo: "#B8D4E8",
    icon: "🌱",
    tags: ["Data Analysis", "Sustainability", "Consulting"],
  },
  {
    title: "Cross-Market Data Compliance",
    org: "PATH",
    date: "Sep 2025 – Jan 2026",
    description:
      "Synthesized regulatory requirements across 25+ international markets to identify risk thresholds and inform product strategy. Led a 7-member team through a 12-week engagement, directing landscape analysis of 30+ data/AI tools and coordinating stakeholder interviews across regions.",
    accentFrom: "#D4B8E8",
    accentTo: "#C4B5E0",
    icon: "🌐",
    tags: ["Project Management", "Data Strategy", "Global Markets"],
  },
  {
    title: "M&A Deal Sourcing & Execution",
    org: "Vermilion Rock Advisors",
    date: "May – Aug 2025",
    description:
      "Sourced and qualified 120+ strategic and PE acquirers to create competitive tension in live sell-side processes. Translated complex financial analysis into executive-ready presentations, accelerating $150M+ in active M&A deal flow for middle-market clients.",
    accentFrom: "#B8D4E8",
    accentTo: "#A8B8E8",
    icon: "📊",
    tags: ["Investment Banking", "M&A", "Financial Analysis"],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Visual side — large accent block with icon */}
      <motion.div
        className="w-full md:w-2/5 flex-shrink-0"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="relative aspect-[4/3] rounded-3xl overflow-hidden flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${project.accentFrom}40, ${project.accentTo}60)`,
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute top-6 right-6 w-24 h-24 rounded-full opacity-30"
            style={{ background: project.accentFrom }}
          />
          <div
            className="absolute bottom-8 left-8 w-16 h-16 rounded-full opacity-20"
            style={{ background: project.accentTo }}
          />

          {/* Icon */}
          <span className="text-7xl sm:text-8xl relative z-10 drop-shadow-sm">
            {project.icon}
          </span>
        </div>
      </motion.div>

      {/* Content side */}
      <div className="w-full md:w-3/5">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Org + date */}
          <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: project.accentFrom }}>
            {project.org}
          </p>

          {/* Title */}
          <h3 className="font-serif text-3xl sm:text-4xl text-gray-800 mb-3 leading-tight">
            {project.title}
          </h3>

          {/* Date */}
          <p className="text-sm text-gray-400 mb-5">{project.date}</p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  borderColor: `${project.accentFrom}50`,
                  color: project.accentFrom,
                  backgroundColor: `${project.accentFrom}10`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#FEFCFA]">
      {/* Subtle background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="animate-blob-slow absolute top-40 -right-20 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #C4B5E0 0%, transparent 70%)",
          }}
        />
        <div
          className="animate-blob absolute bottom-40 -left-20 w-[350px] h-[350px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #A8B8E8 0%, transparent 70%)",
            animationDelay: "-8s",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        <motion.h2
          className="font-serif text-4xl sm:text-5xl text-gray-800 text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="space-y-24 sm:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
