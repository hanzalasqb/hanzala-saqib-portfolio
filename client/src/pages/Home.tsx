// Signal Noir reminder: preserve the charcoal foundation, Signal Gold emphasis, Space Grotesk + DM Sans typography, asymmetric editorial layout, and restrained motion.
import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Network,
  Send,
  Server,
  Sparkles,
  X,
} from "lucide-react";

const headshot = "/manus-storage/hanzala-headshot_49da4d3e.png";
const logo = "/manus-storage/hs-monogram-refined_d09432c6.png";
const cvUrl = "/manus-storage/Hanzala-Saqib-AI-FullStack-Resume_0738766f.pdf";
const orbitalAccent = "/manus-storage/orbital-3d-accent_ef01676e.png";
const hsWearVisual = "/manus-storage/hs-wear-visual_100f29fd.png";
const bySalmaVisual = "/manus-storage/by-salma-visual_0dc321ab.png";
const aiSaasVisual = "/manus-storage/ai-saas-chatbot-visual_823d6f12.png";
const hsWearMobileVisual = "/manus-storage/hs-wear-mobile-visual_1d6d2de9.png";
const bySalmaMobileVisual = "/manus-storage/by-salma-mobile-visual_d03af270.png";
const heroTexture = "/manus-storage/signal-noir-hero_c51bf882.png";
const hsWorkspaceVisual = "/manus-storage/hs-workspace-visual_c5a9914e.png";
const zyvenoxVisual = "/manus-storage/zyvenox-lab-visual_87e242f2.png";


const projects = [
  {
    number: "01",
    title: "HS Workspace",
    category: "AI CHATBOT · PRODUCTIVITY WORKSPACE",
    description:
      "An AI-powered workspace that brings intelligent assistance into focused, practical workflows—turning conversations into organized momentum.",
    image: hsWorkspaceVisual,
    tags: ["AI CHATBOT", "GENERATIVE AI", "REACT", "NODE.JS"],
    tone: "gold",
  },
  {
    number: "02",
    title: "Zyvenox Lab",
    category: "DIGITAL AGENCY · WEB EXPERIENCES",
    description:
      "A polished agency presence built to present services, capabilities, and selected work through a confident, conversion-oriented digital experience.",
    image: zyvenoxVisual,
    tags: ["AGENCY", "UI/UX", "WEB DEVELOPMENT", "PERFORMANCE"],
    tone: "stone",
  },
  {
    number: "03",
    title: "HS Wear",
    category: "FASHION E-COMMERCE · HSWear.STORE",
    description: "A focused fashion storefront for presenting apparel with editorial product discovery, smooth shopping flows, and a confident digital identity.",
    image: hsWearVisual,
    tags: ["E-COMMERCE", "PRODUCT UI", "CHECKOUT", "PERFORMANCE"],
    tone: "gold",
    link: "https://hswear.store",
    details: {
      overview: "A dark editorial storefront for fashion discovery, designed to make products feel tactile and easy to explore across desktop and mobile.",
      responsibilities: "Product UI direction, responsive storefront implementation, product discovery patterns, and performance-minded interaction design.",
      stack: ["React.js", "TypeScript", "Responsive UI", "E-commerce flows", "Performance optimization"],
      screenshots: [hsWearVisual, hsWearMobileVisual],
    },
  },
  {
    number: "04",
    title: "By Salma",
    category: "JEWELRY STORE · E-COMMERCE EXPERIENCE",
    description: "An elegant jewelry-store experience built around visual storytelling, product detail, and the quiet confidence of a considered luxury brand.",
    image: bySalmaVisual,
    tags: ["JEWELRY", "SHOPIFY", "UI/UX", "CONVERSION"],
    tone: "stone",
    details: {
      overview: "A refined jewelry-store experience built around product storytelling, detail photography, and a calm, luxury-first buying journey.",
      responsibilities: "Visual direction, responsive product presentation, collection browsing, conversion-focused layout, and mobile experience design.",
      stack: ["React.js", "Shopify", "Product UI", "Responsive design", "Conversion UX"],
      screenshots: [bySalmaVisual, bySalmaMobileVisual],
    },
  },
  {
    number: "05",
    title: "AI SaaS Chatbot",
    category: "AI SAAS · MULTI-TENANT CHATBOT",
    description: "A scalable AI SaaS direction for teams that need intelligent conversations, organized workspaces, and clear product-level control over assistance.",
    image: aiSaasVisual,
    tags: ["AI SAAS", "CHATBOT", "RBAC", "ANALYTICS"],
    tone: "gold",
  },
];

const rotatingSkills = ["REACT.JS", "TYPESCRIPT", "NODE.JS", "EXPRESS", "MONGODB", "AWS EC2", "DOCKER", "GENERATIVE AI", "AI CHATBOT FLOWS", "SHOPIFY", "UI/UX", "CORE WEB VITALS"];

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend architecture",
    category: "WEB",
    items: ["React.js", "TypeScript", "Responsive UI", "Accessibility"],
  },
  {
    icon: Server,
    title: "Distributed backend",
    category: "WEB",
    items: ["Node.js", "Express.js", "REST APIs", "JWT / RBAC"],
  },
  {
    icon: Database,
    title: "Cloud & data",
    category: "WEB",
    items: ["MongoDB", "AWS EC2", "Docker", "Nginx / PM2"],
  },
  {
    icon: Sparkles,
    title: "AI & optimization",
    category: "AI",
    items: ["Generative AI", "AI chatbot flows", "Technical SEO", "Core Web Vitals"],
  },
];

const timeline = [
  {
    date: "MAR 2026 — PRESENT",
    role: "Full Stack MERN Developer",
    company: "MBU Devs · United States",
    detail: "Building secure, scalable business applications and shipping production workflows across React, Node.js, MongoDB, Docker, and AWS EC2.",
  },
  {
    date: "MAR 2026 — MAY 2026",
    role: "Analytics & Monitoring",
    company: "Contract Bazaar · Lahore",
    detail: "Used GA4, Search Console, log analysis, and traffic monitoring to identify performance and growth opportunities.",
  },
  {
    date: "OCT 2025 — FEB 2026",
    role: "Full Stack Developer",
    company: "Digis · A Fiverr company",
    detail: "Delivered responsive business applications, secure APIs, payment integrations, and cloud deployments for customer workflows.",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [projectFilter, setProjectFilter] = useState("ALL WORK");
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);
  const [skillFocus, setSkillFocus] = useState("ALL SKILLS");
  const [puzzlePoint, setPuzzlePoint] = useState({ x: 50, y: 50 });
  const [puzzleReady, setPuzzleReady] = useState(false);
  const puzzlePieces = useMemo(() => Array.from({ length: 1000 }, (_, index) => index), []);
  useEffect(() => {
    const timer = window.setTimeout(() => setPuzzleReady(true), 11200);
    return () => window.clearTimeout(timer);
  }, []);

  const filteredProjects = projectFilter === "ALL WORK"
    ? projects
    : projects.filter((project) => project.category.includes(projectFilter));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hanzala Saqib home">
          <span className="brand-mark brand-mark-refined"><img src={logo} alt="HS monogram" /></span>
          <span className="brand-name">HANZALA<span>SAQIB</span></span>
        </a>
        <nav className={menuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
          {["about", "projects", "skills", "experience", "contact"].map((item, index) => (
            <button key={item} onClick={() => { scrollToSection(item); setMenuOpen(false); }}>
              {item.toUpperCase()}
            </button>
          ))}
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <div id="top" className="side-index" aria-hidden="true" />

      <section className="hero-section section-wrap">
        <div className="hero-backdrop" style={{ backgroundImage: `url(${heroTexture})` }} />
        <div className="orbital-accent" style={{ backgroundImage: `url(${orbitalAccent})` }} aria-hidden="true" />
        <div className="depth-field" aria-hidden="true"><span className="depth-orbit depth-orbit-one" /><span className="depth-orbit depth-orbit-two" /><span className="depth-orbit depth-orbit-three" /><span className="depth-core" /><span className="depth-particle depth-particle-one" /><span className="depth-particle depth-particle-two" /><span className="depth-particle depth-particle-three" /></div>
        <div className="hero-copy">
          <p className="eyebrow"><span className="signal-dot" /> AVAILABLE FOR SELECTED WORK</p>
          <h1>I BUILD<br /><em>WHAT'S NEXT.</em></h1>
          <p className="hero-lede">Full stack developer and AI product builder translating ambitious ideas into dependable digital experiences.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollToSection("projects")}>Explore my work <ArrowUpRight size={16} /></button>
            <a className="button button-quiet" href={cvUrl} download="Hanzala-Saqib-AI-FullStack-Resume.pdf">Download CV <Download size={15} /></a>
          </div>
          <div className="hero-meta"><span>LAHORE, PK</span><span className="meta-rule" /><span>UTC +05:00</span></div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-frame puzzle-frame" onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setPuzzlePoint({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 });
          }}>
            <img src={headshot} alt="Portrait of Hanzala Saqib" />
            <div className={`puzzle-layer ${puzzleReady ? "puzzle-complete" : ""}`} style={{ "--cursor-x": `${puzzlePoint.x}%`, "--cursor-y": `${puzzlePoint.y}%` } as React.CSSProperties} aria-hidden="true">
              {puzzlePieces.map((piece) => <span key={piece} style={{ "--piece": piece } as React.CSSProperties} />)}
            </div>
            
          </div>
          <div className="portrait-caption"><span>01</span><span>ENGINEER / DESIGNER</span><span>SCROLL TO EXPLORE ↓</span></div>
          <div className="portrait-ring" />
        </div>
      </section>

      <section id="about" className="section-wrap about-section">
        <div className="section-heading"><p className="section-kicker">01 / ABOUT ME</p><span className="heading-rule" /></div>
        <div className="about-grid">
          <div>
            <h2>I don't just write code.<br /><span>I build what ideas</span><br />are trying to become.</h2>
          </div>
          <div className="about-copy">
            <p>I'm Hanzala—a full stack MERN developer who builds secure, scalable, high-performance applications for teams ready to move with intention.</p>
            <p>From intelligent interfaces to cloud deployments, I work across the complete lifecycle: shaping the product, engineering the system, and tuning the details that make it feel ready.</p>
            <a className="text-link" href="https://www.linkedin.com/in/hanzalasaqib" target="_blank" rel="noreferrer">Read the professional profile <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="signal-stats editorial-notes">
          <div><strong>AI</strong><small>PRODUCT SYSTEMS</small></div>
          <div><strong>WEB</strong><small>FULL STACK BUILDS</small></div>
          <div><strong>UX</strong><small>INTERACTION DETAIL</small></div>
          <div><strong>24/7</strong><small>CURIOUS BY DEFAULT</small></div>
        </div>
      </section>

      <section id="projects" className="section-wrap projects-section">
        <div className="section-heading"><p className="section-kicker">02 / FEATURED WORKS</p><span className="heading-rule" /><div className="project-filter"><button className={projectFilter === "ALL WORK" ? "active" : ""} onClick={() => setProjectFilter("ALL WORK")}>ALL WORK</button><button className={projectFilter === "AI CHATBOT" ? "active" : ""} onClick={() => setProjectFilter("AI CHATBOT")}>AI</button><button className={projectFilter === "DIGITAL AGENCY" ? "active" : ""} onClick={() => setProjectFilter("DIGITAL AGENCY")}>AGENCY</button></div></div>
        <div className="projects-intro"><h2>Selected work.<br /><em>Engineered value.</em></h2><p>Two current directions, one consistent standard: useful products with a point of view.</p></div>
        <div className="project-list">
          {filteredProjects.map((project, index) => (
            <article className={`project-card project-${project.tone} ${project.details ? "project-card-clickable" : ""}`} key={project.title} onClick={project.details ? () => setSelectedProject(project) : undefined}>
              <div className="project-number">{project.number}</div>
              <div className="project-visual"><img src={project.image} alt={`${project.title} project preview`} /><div className="visual-overlay" aria-hidden="true"><ArrowUpRight size={18} /></div></div>
              <div className="project-info"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-wrap skills-section">
        <div className="section-heading"><p className="section-kicker">03 / TECH STACK</p><span className="heading-rule" /></div>
        <div className="skills-header"><div><h2>Systems that hold<br /><em>under pressure.</em></h2><div className="skill-filters" role="tablist" aria-label="Filter skills"><button className={skillFocus === "ALL SKILLS" ? "active" : ""} onClick={() => setSkillFocus("ALL SKILLS")}>ALL SKILLS</button><button className={skillFocus === "AI" ? "active" : ""} onClick={() => setSkillFocus("AI")}>AI / DATA</button><button className={skillFocus === "WEB" ? "active" : ""} onClick={() => setSkillFocus("WEB")}>WEB / CLOUD</button></div></div><p>Modern tools matter. Knowing when—and how—to use them matters more. Select a lane to see the technologies used across the work.</p></div>
        <div className="skills-marquee" aria-label="Technologies used"><div className="skills-marquee-track">{[...rotatingSkills, ...rotatingSkills].map((skill, index) => <span key={`${skill}-${index}`}>{skill}<b>✦</b></span>)}</div></div>
        <div className="skill-grid">{skillGroups.map(({ icon: Icon, title, items, category }) => <article className={`skill-card ${skillFocus !== "ALL SKILLS" && skillFocus !== category ? "skill-card-muted" : ""}`} key={title} onClick={() => setSkillFocus(category)}><Icon size={22} strokeWidth={1.5} /><p className="skill-category">{category === "AI" ? "AI / DATA" : "WEB / CLOUD"}</p><h3>{title}</h3><div>{items.map((item) => <span key={item}><Check size={12} />{item}</span>)}</div></article>)}</div>
      </section>

      {selectedProject && selectedProject.details && <div className="project-modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X size={19} /></button><div className="modal-gallery">{selectedProject.details.screenshots.map((shot, index) => <img key={shot} src={shot} alt={`${selectedProject.title} screenshot ${index + 1}`} />)}</div><div className="modal-copy"><p className="project-category">{selectedProject.category}</p><h2 id="project-modal-title">{selectedProject.title}</h2><p>{selectedProject.details.overview}</p><p className="modal-responsibility"><strong>Role & contribution</strong>{selectedProject.details.responsibilities}</p><div className="modal-stack"><span>TECH STACK</span><div>{selectedProject.details.stack.map((tech) => <span key={tech}><Check size={12} />{tech}</span>)}</div></div>{selectedProject.link && <a className="button button-primary" href={selectedProject.link} target="_blank" rel="noreferrer">Visit live store <ArrowUpRight size={15} /></a>}</div></article></div>}

      <section id="experience" className="section-wrap experience-section">
        <div className="section-heading"><p className="section-kicker">04 / EXPERIENCE</p><span className="heading-rule" /></div>
        <div className="experience-layout"><div><h2>A timeline of<br /><em>forward motion.</em></h2><p className="experience-note">Every role is a new constraint to understand, a better system to leave behind.</p></div><div className="timeline">{timeline.map((item) => <article className="timeline-item" key={item.role}><div className="timeline-marker" /><div className="timeline-content"><p className="timeline-date">{item.date}</p><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.detail}</p></div></article>)}</div></div>
      </section>

      <section id="contact" className="section-wrap contact-section">
        <div className="contact-mark"><Network size={20} /><span>05 / CONTACT</span></div>
        <div className="contact-layout"><div><h2>Initialize<br /><em>transmission.</em></h2><p>Have a product, platform, or problem worth solving? Send the first signal.</p><div className="contact-details"><a href="mailto:hanzala7824@gmail.com"><Mail size={16} />hanzala7824@gmail.com</a><a href="tel:+923061927824"><Globe2 size={16} />+92 306 192 7824</a><a href="https://www.linkedin.com/in/hanzalasaqib" target="_blank" rel="noreferrer"><Linkedin size={16} />linkedin.com/in/hanzalasaqib</a></div></div><form className="contact-form" onSubmit={handleSubmit}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Message<textarea required name="message" rows={4} placeholder="Tell me what you're building..." /></label><button className="button button-primary" type="submit">{sent ? "Message queued" : "Send transmission"}<Send size={15} /></button>{sent && <p className="form-success">Thanks—your message is ready. Please email directly to complete the transmission.</p>}</form></div>
      </section>

      <footer className="site-footer section-wrap"><div className="footer-brand"><img src={logo} alt="HS" /><span>HANZALA SAQIB</span></div><span>BUILT WITH INTENTION · © 2026</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
