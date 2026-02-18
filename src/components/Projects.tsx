"use client";

import { motion } from "framer-motion";

/* ─── Animated SVG Illustrations ─── */

function Scope3Illustration({ accentFrom, accentTo }: { accentFrom: string; accentTo: string }) {
  // Bar chart data: heights grow left to right
  const bars = [
    { x: 28, h: 30 },
    { x: 48, h: 50 },
    { x: 68, h: 40 },
    { x: 88, h: 65 },
    { x: 108, h: 55 },
  ];
  const baseline = 155;

  return (
    <svg viewBox="0 0 200 200" className="w-32 h-32 sm:w-40 sm:h-40">
      {/* Grid lines */}
      {[0, 1, 2, 3].map((i) => (
        <motion.line
          key={`grid-${i}`}
          x1="20" x2="180"
          y1={baseline - i * 20}
          y2={baseline - i * 20}
          stroke={`${accentTo}30`}
          strokeWidth="1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.05 }}
        />
      ))}

      {/* Bars rising from baseline */}
      {bars.map((bar, i) => (
        <motion.rect
          key={`bar-${i}`}
          x={bar.x}
          y={baseline - bar.h}
          width="16"
          rx="3"
          fill={i === 3 ? "#5BA360" : `${accentFrom}${i % 2 === 0 ? "cc" : "90"}`}
          initial={{ height: 0, y: baseline }}
          whileInView={{ height: bar.h, y: baseline - bar.h }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
        />
      ))}

      {/* Trend line connecting bar tops */}
      <motion.path
        d={`M${bars[0].x + 8} ${baseline - bars[0].h} L${bars[1].x + 8} ${baseline - bars[1].h} L${bars[2].x + 8} ${baseline - bars[2].h} L${bars[3].x + 8} ${baseline - bars[3].h} L${bars[4].x + 8} ${baseline - bars[4].h}`}
        fill="none"
        stroke={accentFrom}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />

      {/* Trend line dots */}
      {bars.map((bar, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={bar.x + 8}
          cy={baseline - bar.h}
          r="3"
          fill="white"
          stroke={accentFrom}
          strokeWidth="2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 + i * 0.08, type: "spring" }}
        />
      ))}

      {/* Downward arrow showing reduction */}
      <motion.path
        d="M155 55 L155 80 M149 74 L155 80 L161 74"
        fill="none"
        stroke={accentFrom}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.0 }}
      />

      {/* -20% label */}
      <motion.text
        x="155" y="48"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill={accentFrom}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1 }}
      >
        -20%
      </motion.text>

      {/* Floating particles */}
      {[
        { cx: 140, cy: 100, r: 2.5, delay: 0 },
        { cx: 170, cy: 110, r: 2, delay: 0.8 },
        { cx: 148, cy: 120, r: 1.5, delay: 1.6 },
      ].map((p, i) => (
        <motion.circle
          key={`particle-${i}`}
          cx={p.cx} cy={p.cy} r={p.r}
          fill={`${accentTo}80`}
          animate={{ y: [0, -12, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

function HealthFinanceIllustration({ accentFrom, accentTo }: { accentFrom: string; accentTo: string }) {
  return (
    <svg viewBox="0 0 200 200" className="w-32 h-32 sm:w-40 sm:h-40">
      {/* Globe outline */}
      <motion.circle
        cx="80" cy="100" r="50"
        fill="none"
        stroke={accentFrom}
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      {/* Globe latitude lines */}
      <motion.ellipse
        cx="80" cy="100" rx="50" ry="20"
        fill="none"
        stroke={`${accentFrom}50`}
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <motion.ellipse
        cx="80" cy="100" rx="20" ry="50"
        fill="none"
        stroke={`${accentFrom}50`}
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      {/* Heartbeat / pulse line */}
      <motion.path
        d="M50 100 L65 100 L72 85 L80 115 L88 90 L95 100 L110 100"
        fill="none"
        stroke="#E87B8A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      {/* Pulse dot traveling */}
      <motion.circle
        cx="0" cy="0" r="3"
        fill="#E87B8A"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      >
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          path="M50 100 L65 100 L72 85 L80 115 L88 90 L95 100 L110 100"
        />
      </motion.circle>
      {/* Dollar / coin floating */}
      <motion.circle
        cx="155" cy="65" r="18"
        fill={`${accentTo}60`}
        stroke={accentFrom}
        strokeWidth="2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", delay: 0.8 }}
      />
      <motion.text
        x="155" y="71"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill={accentFrom}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0 }}
      >
        $
      </motion.text>
      {/* Connecting dotted line from globe to coin */}
      <motion.path
        d="M125 85 Q140 70 140 65"
        fill="none"
        stroke={`${accentFrom}60`}
        strokeWidth="1.5"
        strokeDasharray="4 3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
      />
      {/* Monte Carlo scatter dots */}
      {[
        [145, 110], [155, 125], [165, 115], [150, 135], [170, 130],
        [140, 120], [160, 140], [175, 120], [148, 145], [162, 108],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx} cy={cy}
          r={2}
          fill={i % 3 === 0 ? "#E87B8A" : `${accentFrom}80`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 + i * 0.05, type: "spring" }}
        />
      ))}
    </svg>
  );
}

function ComplianceIllustration({ accentFrom, accentTo }: { accentFrom: string; accentTo: string }) {
  return (
    <svg viewBox="0 0 200 200" className="w-32 h-32 sm:w-40 sm:h-40">
      {/* Shield */}
      <motion.path
        d="M100 35 L145 55 L145 110 Q145 145 100 170 Q55 145 55 110 L55 55 Z"
        fill={`${accentTo}30`}
        stroke={accentFrom}
        strokeWidth="2.5"
        initial={{ pathLength: 0, fillOpacity: 0 }}
        whileInView={{ pathLength: 1, fillOpacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      {/* AI brain / circuit icon inside shield */}
      <motion.circle
        cx="100" cy="95" r="22"
        fill="none"
        stroke={accentFrom}
        strokeWidth="2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring" }}
      />
      {/* Circuit nodes */}
      {[
        [100, 73], [122, 95], [100, 117], [78, 95],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx} cy={cy} r="3"
          fill={accentFrom}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
        />
      ))}
      {/* Connection lines from center */}
      {[
        "M100 95 L100 73", "M100 95 L122 95",
        "M100 95 L100 117", "M100 95 L78 95",
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke={`${accentFrom}70`}
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
        />
      ))}
      {/* Center dot */}
      <motion.circle
        cx="100" cy="95" r="4"
        fill={accentFrom}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, type: "spring" }}
      />
      {/* Scanning / pulse ring animation */}
      <motion.circle
        cx="100" cy="95" r="22"
        fill="none"
        stroke={accentFrom}
        strokeWidth="1"
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      {/* Checkmark */}
      <motion.path
        d="M88 95 L96 103 L113 86"
        fill="none"
        stroke="#5BA360"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.5 }}
      />
      {/* Small floating market dots around shield */}
      {[
        [40, 70], [35, 130], [160, 70], [165, 130], [100, 30],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx} cy={cy} r="3"
          fill={`${accentTo}80`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0 + i * 0.1, type: "spring" }}
        />
      ))}
      {/* Dotted lines from floating dots to shield */}
      {[
        "M40 70 Q50 60 55 60",
        "M160 70 Q150 60 145 60",
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke={`${accentTo}50`}
          strokeWidth="1"
          strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3 + i * 0.1, duration: 0.5 }}
        />
      ))}
    </svg>
  );
}

const illustrationComponents = [Scope3Illustration, HealthFinanceIllustration, ComplianceIllustration];

/* ─── Data ─── */

interface Metric {
  label: string;
  value: string;
}

interface BeforeAfter {
  dimension: string;
  before: string;
  after: string;
}

interface CaseStudy {
  title: string;
  subtitle: string;
  org: string;
  date: string;
  summary: string;
  role: string[];
  metrics: Metric[];
  beforeAfter: BeforeAfter[];
  buildNext: string[];
  accentFrom: string;
  accentTo: string;
  accentDark: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Scope3 Engine",
    subtitle: "Procurement-to-Carbon Intelligence Platform",
    org: "AC Transit",
    date: "Aug 2024 \u2013 Jan 2025",
    summary:
      "AC Transit lacked visibility into upstream emissions (Scope 3), leaving procurement, capital goods, waste, and travel emissions unquantified. I helped design and operationalize a reusable emissions engine that translated raw budget data into actionable carbon intelligence.",
    role: [
      "Category scoping & feasibility assessment",
      "Expenditure-based modeling design",
      "Emission factor mapping logic",
      "Reusable calculator structure",
      "Cross-team validation",
    ],
    metrics: [
      { label: "GHGP Categories Evaluated", value: "15" },
      { label: "Categories Modeled", value: "6" },
      { label: "Budget Lines Processed", value: "1,000+" },
      { label: "Emission Factors Integrated", value: "100+" },
    ],
    beforeAfter: [
      { dimension: "Scope 3 Visibility", before: "None", after: "Multi-category" },
      { dimension: "Carbon Mapping", before: "Manual", after: "Automated formula" },
      { dimension: "Baseline Emissions", before: "Undefined", after: "Established" },
      { dimension: "Reporting Readiness", before: "Low", after: "Funding-ready" },
    ],
    buildNext: [
      "SaaS interface: upload spend \u2192 auto-classify \u2192 emissions",
      "Supplier risk scoring",
      "Reduction scenario modeling",
      "ESG reporting export",
    ],
    accentFrom: "#A8B8E8",
    accentTo: "#B8D4E8",
    accentDark: "#4A6199",
    tags: ["Systems Modeling", "Sustainability", "Data Analytics", "Product Thinking"],
  },
  {
    title: "Global Health Financing Intelligence Platform",
    subtitle: "Cost-Effectiveness + Monte Carlo + Dynamic Modeling",
    org: "Bill & Melinda Gates Foundation",
    date: "Feb \u2013 May 2025",
    summary:
      "Global donors are shifting from grants to market-based financing mechanisms. I helped design a financial modeling platform to compare health impact per dollar under uncertainty, building three simulation engines to quantify DALYs, cost-effectiveness, and funding variability.",
    role: [
      "Designed modeling frameworks",
      "Defined input assumptions",
      "Built cost-effectiveness engine",
      "Structured Monte Carlo simulation (10,000 runs)",
      "Developed dynamic funding lifecycle model",
    ],
    metrics: [
      { label: "Simulations Run", value: "10,000" },
      { label: "Financing Types Modeled", value: "3" },
      { label: "Disease Scenarios", value: "3" },
      { label: "Sensitivity Tests", value: "20+" },
    ],
    beforeAfter: [
      { dimension: "Financing Comparison", before: "Qualitative", after: "Quantitative" },
      { dimension: "Risk Modeling", before: "None", after: "Probabilistic" },
      { dimension: "Impact Forecasting", before: "Static", after: "Dynamic" },
    ],
    buildNext: [
      "Web-based impact comparison dashboard",
      "Adjustable sliders for donor inputs",
      "Real-time policy simulator",
      "Risk heatmaps",
    ],
    accentFrom: "#C4B5E0",
    accentTo: "#D4B8E8",
    accentDark: "#6B4D96",
    tags: ["Financial Modeling", "Monte Carlo", "Global Health", "Decision Science"],
  },
  {
    title: "AI Compliance Intelligence Dashboard",
    subtitle: "Risk Categorization & Market-Entry Framework",
    org: "PATH",
    date: "Sep 2025 \u2013 Jan 2026",
    summary:
      "PATH operates across global health markets with fragmented AI regulations. I helped design a compliance benchmarking and risk categorization framework to support AI deployment decisions across 25+ markets and 30+ AI tools.",
    role: [
      "Synthesized country-level AI compliance rules",
      "Benchmarked 30+ AI vendors",
      "Built risk categorization scoring logic",
      "Structured market-entry prioritization framework",
    ],
    metrics: [
      { label: "Markets Analyzed", value: "25+" },
      { label: "AI Tools Benchmarked", value: "30+" },
      { label: "Regulatory Variables", value: "50+" },
      { label: "Risk Categories Created", value: "3-tier" },
    ],
    beforeAfter: [
      { dimension: "AI Tool Selection", before: "Ad hoc", after: "Structured" },
      { dimension: "Market Risk Visibility", before: "Low", after: "Quantified" },
      { dimension: "Procurement Risk", before: "High", after: "Mitigated" },
    ],
    buildNext: [
      "RegTech SaaS dashboard",
      "Auto-updating compliance feed",
      "Tool-to-jurisdiction compatibility scoring",
      "Enterprise reporting export",
    ],
    accentFrom: "#D4B8E8",
    accentTo: "#C4B5E0",
    accentDark: "#7B4FA8",
    tags: ["Product Management", "AI Governance", "Risk Analysis", "Global Markets"],
  },
];

interface SecondaryProject {
  title: string;
  org: string;
  date: string;
  description: string;
  tags: string[];
  accentDark: string;
  accentLight: string;
}

const secondaryProjects: SecondaryProject[] = [
  {
    title: "M&A Deal Sourcing & Execution",
    org: "Vermilion Rock Advisors",
    date: "May \u2013 Aug 2025",
    description:
      "Built structured segmentation model across 120+ potential acquirers, clustering by industry focus and capital deployment patterns. Developed decision frameworks to evaluate tradeoffs across strategic alternatives.",
    tags: ["Strategic Analytics", "M&A", "Financial Analysis"],
    accentDark: "#4A7A99",
    accentLight: "#B8D4E8",
  },
  {
    title: "AI Product Growth & GTM Strategy",
    org: "Microsoft Copilot",
    date: "Aug \u2013 Dec 2025",
    description:
      "Executed campus go-to-market strategy for AI productivity product, driving 150+ new users. Translated ambiguous user needs into actionable product insights through live demos, feedback collection, and usage analysis.",
    tags: ["Go-to-Market", "User Research", "Product Growth"],
    accentDark: "#4A6199",
    accentLight: "#A8B8E8",
  },
  {
    title: "Market Expansion & TAM Analysis",
    org: "GearChain AI",
    date: "Jan \u2013 May 2025",
    description:
      "Led market research across 3 verticals (manufacturing, logistics, retail), quantifying $15B+ TAM to inform expansion strategy. Identified ~80 prospective customers, defining 2-3 high-value customer segments.",
    tags: ["Market Research", "Product Strategy", "B2B SaaS"],
    accentDark: "#6B4D96",
    accentLight: "#C4B5E0",
  },
];

/* ─── Case Study Card ─── */

function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const Illustration = illustrationComponents[index];

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div
        className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-start`}
      >
        {/* Visual side — accent block with illustration + metrics */}
        <motion.div
          className="w-full md:w-2/5 flex-shrink-0"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="relative rounded-3xl overflow-hidden p-8"
            style={{
              background: `linear-gradient(135deg, ${study.accentFrom}40, ${study.accentTo}60)`,
            }}
          >
            {/* Decorative circles */}
            <div
              className="absolute top-6 right-6 w-24 h-24 rounded-full opacity-20"
              style={{ background: study.accentFrom }}
            />
            <div
              className="absolute bottom-8 left-8 w-16 h-16 rounded-full opacity-15"
              style={{ background: study.accentTo }}
            />

            {/* Animated SVG Illustration */}
            <div className="flex justify-center mb-6 relative z-10">
              <Illustration accentFrom={study.accentDark} accentTo={study.accentFrom} />
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-3 relative z-10">
              {study.metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-3 text-center"
                >
                  <div
                    className="text-xl font-bold"
                    style={{ color: study.accentDark }}
                  >
                    {m.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 leading-tight">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
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
            {/* Org */}
            <p
              className="text-sm font-semibold tracking-wide uppercase mb-2"
              style={{ color: study.accentDark }}
            >
              {study.org}
            </p>

            {/* Title */}
            <h3 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-1 leading-tight">
              {study.title}
            </h3>

            {/* Subtitle */}
            <p className="text-sm text-gray-500 italic mb-3">
              {study.subtitle}
            </p>

            {/* Date */}
            <p className="text-sm text-gray-400 mb-5">{study.date}</p>

            {/* Summary */}
            <p className="text-gray-700 leading-relaxed mb-5">
              {study.summary}
            </p>

            {/* My Role */}
            <div className="mb-5">
              <h4
                className="text-xs font-bold tracking-wider uppercase mb-2"
                style={{ color: study.accentDark }}
              >
                My Role
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {study.role.map((r) => (
                  <span
                    key={r}
                    className="px-2.5 py-1 rounded-full text-xs border"
                    style={{
                      borderColor: `${study.accentFrom}60`,
                      color: "#444",
                      backgroundColor: `${study.accentFrom}15`,
                    }}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Before / After */}
            <div className="mb-5">
              <h4
                className="text-xs font-bold tracking-wider uppercase mb-2"
                style={{ color: study.accentDark }}
              >
                Before / After
              </h4>
              <div className="rounded-xl overflow-hidden border border-gray-200">
                {study.beforeAfter.map((ba, i) => (
                  <div
                    key={ba.dimension}
                    className={`grid grid-cols-3 text-xs ${i !== study.beforeAfter.length - 1 ? "border-b border-gray-200" : ""}`}
                  >
                    <span className="px-3 py-2 text-gray-700 font-medium bg-gray-50">
                      {ba.dimension}
                    </span>
                    <span className="px-3 py-2 text-gray-400">
                      {ba.before}
                    </span>
                    <span
                      className="px-3 py-2 font-semibold"
                      style={{ color: study.accentDark }}
                    >
                      {ba.after}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What I'd Build Next */}
            <div className="mb-5">
              <h4
                className="text-xs font-bold tracking-wider uppercase mb-2"
                style={{ color: study.accentDark }}
              >
                What I&apos;d Build Next
              </h4>
              <ul className="space-y-1">
                {study.buildNext.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-gray-600 leading-relaxed pl-4 relative"
                  >
                    <span
                      className="absolute left-0 top-[6px] w-1.5 h-1.5 rounded-full"
                      style={{ background: study.accentDark }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    borderColor: `${study.accentFrom}60`,
                    color: study.accentDark,
                    backgroundColor: `${study.accentFrom}15`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Secondary Carousel ─── */

function SecondaryProjectCard({ project }: { project: SecondaryProject }) {
  return (
    <div className="w-[320px] sm:w-[380px] flex-shrink-0 px-3">
      <div className="rounded-2xl border border-gray-200 p-6 bg-white/70 backdrop-blur-sm shadow-sm h-full">
        <p
          className="text-xs font-semibold tracking-wide uppercase mb-1"
          style={{ color: project.accentDark }}
        >
          {project.org}
        </p>
        <h3 className="font-serif text-xl text-gray-900 mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-gray-400 mb-3">{project.date}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs font-semibold border"
              style={{
                borderColor: `${project.accentLight}60`,
                color: project.accentDark,
                backgroundColor: `${project.accentLight}15`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SecondaryCarousel() {
  const items = [...secondaryProjects, ...secondaryProjects];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FEFCFA] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FEFCFA] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex"
        animate={{ x: [0, -(320 + 24) * secondaryProjects.length] }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {items.map((project, i) => (
          <SecondaryProjectCard key={`${project.title}-${i}`} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Main Section ─── */

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

        {/* Case Studies */}
        <div className="space-y-24 sm:space-y-32">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </div>

        {/* Secondary Projects Carousel */}
        <div className="mt-20 sm:mt-24">
          <motion.h3
            className="font-serif text-2xl text-gray-600 text-center mb-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Other Experience
          </motion.h3>
          <SecondaryCarousel />
        </div>
      </div>
    </section>
  );
}
