import {
  ArrowRight,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  FileText,
  Sparkles,
  Crown,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import heroKing from "@/assets/hero-king.jpg";
import quoteBg from "@/assets/quote-bg.jpg";
import projectCrm from "@/assets/project-crm.jpg";
import projectHrms from "@/assets/project-hrms.jpg";
import projectTaxi from "@/assets/project-taxi.jpg";

const EMAIL = "aakash.ramachandran@wynsync.tech";
const PHONE = "+91 6369379097";

/* ---------------------------------- Hero --------------------------------- */

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 pt-10 pb-24 sm:pt-16">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success/50" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            <span className="eyebrow">Good to see you</span>
          </div>

          <h1 className="font-display mt-6 text-[2.9rem] leading-[1.03] tracking-tight sm:text-6xl xl:text-7xl">
            Every Line of Code
            <br />
            Shapes the <span className="text-gradient-gold italic">Future.</span>
          </h1>

          <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
            Backend Developer crafting CRM, HRMS and booking systems with FastAPI, Node.js and React
            — built with precision, strategy, and purpose.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/12 px-6 py-3 text-sm tracking-wide text-gold transition-all duration-500 hover:bg-gold/20 hover:shadow-[0_0_40px_-14px_var(--gold)]"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              aria-label="Scroll to about"
              className="flex size-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-500 hover:border-gold/40 hover:text-gold"
            >
              <ArrowDown className="size-4" />
            </a>
          </div>

          <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["1 Yr", "Experience"],
              ["3+", "Systems Shipped"],
              ["12+", "Technologies"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-2xl text-gold">{v}</p>
                <p className="eyebrow mt-1 text-[0.6rem]">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute inset-6 rounded-full bg-gold/12 blur-[90px]" aria-hidden />
            <div className="card-lux grain float-slow relative overflow-hidden">
              <img
                src={heroKing}
                alt="Metallic chess king sculpture lit in gold with floating code fragments"
                width={1024}
                height={1280}
                className="h-[420px] w-full object-cover object-center sm:h-[560px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/60 to-transparent p-6">
                <p className="font-display text-lg leading-snug">
                  Not just writing code.
                  <br />
                  <span className="text-gradient-gold italic">Building systems that matter.</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- About --------------------------------- */

const stats = [
  ["Experience", "1 Yr"],
  ["Projects", "3+"],
  ["Technologies", "12+"],
  ["Integrations", "6+"],
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="The person behind the code"
          title="Strategy first,"
          accent="then syntax."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal delay={80}>
          <article className="card-lux card-lux-hover grain h-full p-8">
            <p className="text-[0.95rem] leading-loose text-muted-foreground">
              I'm <span className="text-foreground">Aakash R</span>, a Backend Developer based in
              Chennai with nearly a year of professional experience building production systems in{" "}
              <span className="text-gold">FastAPI</span>, <span className="text-gold">Node.js</span>
              , <span className="text-gold">React.js</span>,{" "}
              <span className="text-gold">MongoDB</span> and{" "}
              <span className="text-gold">PostgreSQL</span>. My work spans CRM, HRMS and ticket
              booking platforms — secured with JWT authentication and wired to third-party services
              like Razorpay, FasterQ, Meta, Brevo and Amazon SES.
            </p>
            <p className="mt-5 text-[0.95rem] leading-loose text-muted-foreground">
              I approach engineering the way a player approaches a board: understand the position,
              plan several moves ahead, and make every decision deliberate. Clean architecture,
              disciplined problem solving and continuous learning are the constants.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              {stats.map(([label, value]) => (
                <div key={label} className="bg-card px-4 py-5 text-center">
                  <dt className="eyebrow text-[0.58rem]">{label}</dt>
                  <dd className="font-display mt-2 text-2xl text-gold">{value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </Reveal>

        <Reveal delay={160}>
          <div className="flex h-full flex-col gap-6">
            <div className="card-lux card-lux-hover p-6">
              <span className="eyebrow text-gold/80">Current focus</span>
              <p className="font-display mt-3 text-2xl leading-snug">
                Scalable backend architecture
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Deepening system design, cloud infrastructure and API performance while shipping
                real product modules.
              </p>
            </div>
            <div className="card-lux card-lux-hover p-6">
              <span className="eyebrow text-gold/80">Education</span>
              <p className="mt-3 text-base">B.E. Electronics & Communication</p>
              <p className="mt-1 text-sm text-muted-foreground">
                NPR College of Engineering and Technology, Natham
              </p>
              <div className="mt-4 flex gap-6 border-t border-border pt-4 text-sm">
                <span className="text-muted-foreground">
                  CGPA <span className="text-gold">7.2</span>
                </span>
                <span className="text-muted-foreground">
                  Class of <span className="text-gold">2025</span>
                </span>
              </div>
            </div>
            <div className="card-lux card-lux-hover p-6">
              <span className="eyebrow text-gold/80">Languages</span>
              <p className="mt-3 text-base">Tamil · English</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Skills -------------------------------- */

const skillGroups = [
  {
    title: "Languages & Frontend",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 85 },
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "FastAPI", level: 92 },
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "JWT Auth", level: 88 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Data & Cloud",
    items: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "AWS S3", level: 78 },
      { name: "Cloudinary", level: 75 },
    ],
  },
  {
    title: "Tools & Integrations",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "Postman", level: 86 },
      { name: "Razorpay", level: 82 },
      { name: "Brevo / SES", level: 80 },
      { name: "Meta / FasterQ", level: 78 },
    ],
  },
];

function SkillBar({ name, level }) {
  const { ref, shown } = useReveal(0.3);
  return (
    <div ref={ref} className="group">
      <div className="flex items-baseline justify-between text-sm">
        <span className="text-foreground/90 transition-colors group-hover:text-gold">{name}</span>
        <span className="text-[0.7rem] text-muted-foreground">{level}%</span>
      </div>
      <div className="mt-2 h-px w-full bg-border">
        <div
          className="h-px bg-gradient-to-r from-gold/40 to-gold-bright transition-[width] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: shown ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Technology arsenal"
          title="The pieces I"
          accent="play with."
          description="Every tool earns its place on the board — chosen for reliability, not novelty."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 90}>
            <div className="card-lux card-lux-hover h-full p-7">
              <div className="flex items-center gap-3">
                <Sparkles className="size-4 text-gold" strokeWidth={1.4} />
                <h3 className="eyebrow text-foreground/80">{group.title}</h3>
              </div>
              <div className="mt-6 space-y-5">
                {group.items.map((s) => (
                  <SkillBar key={s.name} {...s} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- Projects -------------------------------- */

const projects = [
  {
    no: "01",
    name: "CRM Platform",
    image: projectCrm,
    width: 1024,
    height: 768,
    status: "In Production",
    description:
      "A customer relationship platform with full frontend and backend contribution, payment collection and workflow integrations.",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Razorpay", "FasterQ", "Notion"],
  },
  {
    no: "02",
    name: "HRMS",
    image: projectHrms,
    width: 1024,
    height: 768,
    status: "In Production",
    description:
      "Human resource management system covering employee lifecycle modules, secured end-to-end with JWT authentication.",
    stack: ["React.js", "FastAPI", "MongoDB", "JWT"],
  },
  {
    no: "03",
    name: "RKT Drop Taxi",
    image: projectTaxi,
    width: 1024,
    height: 768,
    status: "Shipped",
    description:
      "A taxi booking website built during an internship, focused on a fast, responsive booking flow.",
    stack: ["React.js", "REST APIs"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Selected moves"
          title="Work played with"
          accent="intent."
          description="Three deliberate moves — each one a production system, not a demo."
        />
      </Reveal>

      <div className="mt-10 space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <article className="card-lux card-lux-hover group grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} interface preview`}
                  loading="lazy"
                  width={p.width}
                  height={p.height}
                  className="h-56 w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 lg:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent lg:bg-gradient-to-r" />
                <span className="font-display absolute top-5 left-6 text-sm tracking-[0.3em] text-gold/80">
                  PROJECT {p.no}
                </span>
              </div>

              <div className="p-7 sm:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-3xl">{p.name}</h3>
                  <span className="rounded-full border border-success/30 bg-success/10 px-3 py-1 text-[0.62rem] tracking-[0.18em] text-success uppercase">
                    {p.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-surface/60 px-3 py-1 text-[0.7rem] text-muted-foreground transition-colors group-hover:border-gold/25 group-hover:text-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(`About ${p.name}`)}`}
                    className="group/btn inline-flex items-center gap-2 rounded-full border border-gold/35 px-5 py-2.5 text-sm text-gold transition-all duration-500 hover:bg-gold/12"
                  >
                    Explore Project
                    <ArrowRight className="size-3.5 transition-transform duration-500 group-hover/btn:translate-x-1" />
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-all duration-500 hover:border-gold/25 hover:text-foreground"
                  >
                    <Github className="size-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- Experience ------------------------------- */

const timeline = [
  {
    no: "01",
    role: "Backend Developer",
    org: "Wynsync Technologies Private Limited",
    period: "Oct 2025 — Aug 2026",
    points: [
      "Developed backend modules using FastAPI and Node.js.",
      "Built CRM and HRMS features across frontend and backend.",
      "Modelled and queried data in MongoDB and PostgreSQL.",
      "Integrated Razorpay, FasterQ, Meta, Brevo and Amazon SES.",
      "Implemented JWT authentication and collaborated via Git/GitHub.",
    ],
  },
  {
    no: "02",
    role: "React Developer — Internship",
    org: "RKT Drop Taxi",
    period: "2024 — 2025",
    points: [
      "Developed a responsive taxi booking website in React.js.",
      "Focused on booking flow usability and performance.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20">
      <Reveal>
        <SectionHeading eyebrow="The journey" title="Moves made," accent="one at a time." />
      </Reveal>

      <div className="relative mt-12 pl-8 sm:pl-12">
        <span className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-gold/50 via-border to-transparent sm:left-[11px]" />
        <div className="space-y-10">
          {timeline.map((t, i) => (
            <Reveal key={t.no} delay={i * 100}>
              <div className="relative">
                <span className="absolute top-2 -left-8 flex size-[15px] items-center justify-center rounded-full border border-gold/50 bg-background shadow-[0_0_20px_-4px_var(--gold)] sm:-left-12">
                  <span className="size-1.5 rounded-full bg-gold" />
                </span>
                <div className="card-lux card-lux-hover p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl">
                      <span className="mr-3 text-sm tracking-[0.25em] text-gold/70">{t.no} —</span>
                      {t.role}
                    </h3>
                    <span className="eyebrow text-[0.62rem]">{t.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-gold/80">{t.org}</p>
                  <ul className="mt-5 space-y-2.5">
                    {t.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-gold/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Quote ---------------------------------- */

export function QuoteBlock() {
  return (
    <section className="py-14">
      <Reveal>
        <figure className="card-lux grain relative overflow-hidden px-8 py-16 text-center sm:px-16 sm:py-24">
          <img
            src={quoteBg}
            alt=""
            aria-hidden
            loading="lazy"
            width={1536}
            height={768}
            className="absolute inset-0 size-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
          <blockquote className="font-display relative mx-auto max-w-3xl text-3xl leading-[1.35] sm:text-[2.6rem]">
            "Great software is not built by <span className="text-gradient-gold italic">accident</span>.
            It is built through thousands of{" "}
            <span className="text-gradient-gold italic">intentional decisions</span>."
          </blockquote>
          <figcaption className="eyebrow relative mt-8">Aakash R</figcaption>
        </figure>
      </Reveal>
    </section>
  );
}

/* -------------------------------- Progress -------------------------------- */

const metrics = [
  { label: "Systems Delivered", value: "3+", pct: 70 },
  { label: "Production Modules", value: "20+", pct: 85 },
  { label: "Technologies", value: "12+", pct: 78 },
  { label: "Problems Solved", value: "∞", pct: 100 },
];

function Dial({ pct, value, label }) {
  const { ref, shown } = useReveal(0.3);
  const r = 42;
  const c = 2 * Math.PI * r;
  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative size-28">
        <svg viewBox="0 0 100 100" className="size-full -rotate-90">
          <circle cx="50" cy="50" r={r} fill="none" stroke="var(--border)" strokeWidth="3" />
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="var(--gold)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={shown ? c - (c * pct) / 100 : c}
            style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1)" }}
          />
        </svg>
        <span className="font-display absolute inset-0 flex items-center justify-center text-2xl text-gold">
          {value}
        </span>
      </div>
      <p className="eyebrow mt-4 text-center text-[0.6rem]">{label}</p>
    </div>
  );
}

export function Progress() {
  return (
    <section className="py-20">
      <Reveal>
        <SectionHeading eyebrow="My progress" title="A position built" accent="patiently." />
      </Reveal>
      <Reveal delay={80}>
        <div className="card-lux mt-10 grid gap-10 p-10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <Dial key={m.label} {...m} />
          ))}
        </div>
      </Reveal>

      <Reveal delay={140}>
        <div className="card-lux card-lux-hover mt-6 grid gap-8 p-9 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="eyebrow text-gold/80">Currently building</span>
            <h3 className="font-display mt-3 text-3xl leading-snug">
              Scalable SaaS systems, one module at a time.
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Exploring better architecture, AI integrations, cloud infrastructure and developer
              experience — turning backend services into products teams actually enjoy using.
            </p>
            <a
              href="#projects"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full border border-gold/35 px-5 py-2.5 text-sm text-gold transition-all duration-500 hover:bg-gold/12"
            >
              See What I'm Building
              <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </div>
          <ul className="space-y-3 self-center">
            {["System design", "AI integrations", "Cloud infrastructure", "Developer experience"].map(
              (t) => (
                <li
                  key={t}
                  className="flex items-center justify-between rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm text-muted-foreground"
                >
                  {t}
                  <span className="size-1.5 rounded-full bg-gold/70" />
                </li>
              ),
            )}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------------------- Contact --------------------------------- */

const links = [
  { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: PHONE, href: "tel:+916369379097" },
  { icon: Github, label: "GitHub", href: "https://github.com/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/" },
  { icon: MapPin, label: "Chennai, India", href: "#contact" },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <Reveal>
        <div className="card-lux grain relative overflow-hidden px-8 py-16 sm:px-14 sm:py-20">
          <div
            className="absolute -top-24 right-0 size-72 rounded-full bg-gold/12 blur-[110px]"
            aria-hidden
          />
          <span className="eyebrow text-gold/80">Contact</span>
          <h2 className="font-display relative mt-5 text-4xl leading-[1.08] sm:text-6xl">
            Let's make the
            <br />
            <span className="text-gradient-gold italic">next move.</span>
          </h2>
          <p className="relative mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Have an idea, project, or opportunity? Let's build something remarkable.
          </p>

          <div className="relative mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/12 px-6 py-3 text-sm text-gold transition-all duration-500 hover:bg-gold/20 hover:shadow-[0_0_40px_-14px_var(--gold)]"
            >
              Start a Conversation
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Resume%20request`}
              className="inline-flex items-center gap-2.5 rounded-full border border-border px-6 py-3 text-sm text-muted-foreground transition-all duration-500 hover:border-gold/30 hover:text-foreground"
            >
              <FileText className="size-4" /> View Resume
            </a>
          </div>

          <ul className="relative mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {links.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-card px-5 py-4 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  <Icon className="size-4 text-gold" strokeWidth={1.4} />
                  <span className="truncate">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

/* --------------------------------- Footer --------------------------------- */

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-border py-10 sm:flex-row">
      <div className="flex items-center gap-3">
        <Crown className="size-4 text-gold" strokeWidth={1.4} />
        <span className="font-display text-lg tracking-wide">Aakash R</span>
      </div>
      <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
        Designed & Built with Discipline
      </p>
    </footer>
  );
}

export const sectionShellClass = cn("mx-auto w-full max-w-6xl px-5 sm:px-8");
