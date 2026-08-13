/**
 * Quiet Silicon design reminder: Apple-style premium restraint, porcelain surfaces,
 * Signal Indigo accents, editorial whitespace, and project evidence over decoration.
 */
import { ArrowDown, ArrowUpRight, CheckCircle2, ChevronRight, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const projectData = [
  {
    number: "01",
    title: "E-Commerce Product\nManagement System",
    eyebrow: "TEAM BUILD · 2025",
    stack: ["C#", ".NET Console", "CRUD"],
    copy: "A console-based product system built to keep inventory operations deliberate and structured—from search and category filtering to safe input handling.",
    details: ["Product CRUD", "Search & category filtering", "Array-based data management"],
    image: "/manus-storage/raffata-csharp-product-system_e95f1d6c.jpg",
    className: "project-csharp",
  },
  {
    number: "02",
    title: "SiLibrary Digital\nLibrary System",
    eyebrow: "TEAM BUILD · 2026",
    stack: ["MySQL", "ERD", "8 Entities"],
    copy: "A relational library system designed around the connections that matter: catalog, members, staff, lending, returns, and penalties.",
    details: ["Chen ERD", "Relational modelling", "1:1 · 1:N · M:N relationships"],
    image: "/manus-storage/raffata-mysql-library-system_6455cf53.jpg",
    className: "project-mysql",
  },
  {
    number: "03",
    title: "Campus Cafeteria\nSystem",
    eyebrow: "JAVA · OOP COURSE · 2026",
    stack: ["Java", "OOP", "File I/O"],
    copy: "A menu-selection and order-recording system that translated object-oriented principles into a focused, functional campus scenario.",
    details: ["Interfaces & inheritance", "ArrayList + HashMap", "Exception handling"],
    image: "/manus-storage/raffata-java-cafeteria-system_d42c9561.jpg",
    className: "project-java",
  },
];

function RailMark({ className = "" }: { className?: string }) {
  return <img className={className} src="/manus-storage/raffata-rail-mark_8103831b.png" alt="Raffata personal mark" />;
}

export default function Home() {
  const copyEmail = () => {
    void navigator.clipboard?.writeText("raffataizacky@gmail.com");
    toast.success("Email copied", {
      description: "raffataizacky@gmail.com is ready to paste.",
    });
  };

  const showRepositoryNotice = (project: string) => {
    toast("Repository in preparation", {
      description: `${project} is being cleaned up for GitHub.`,
    });
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Back to top">
          <RailMark className="brand-mark" />
          <span>Raffata Izacky</span>
        </a>
        <nav aria-label="Primary navigation" className="desktop-nav">
          <a href="#work">Selected work</a>
          <a href="#credentials">Credentials</a>
          <a href="#contact">Contact</a>
        </nav>
        <button type="button" onClick={copyEmail} className="header-contact">
          Copy email <ArrowUpRight size={15} />
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="live-dot" /> SYSTEMS IN PROGRESS</p>
            <h1>Building the<br /><em>fundamentals.</em><br />Showing the proof.</h1>
            <p className="hero-lede">I&apos;m Raffata, an Information Systems student focused on turning coursework into structured, useful systems.</p>
            <div className="hero-actions">
              <Button asChild className="primary-cta">
                <a href="#work">Explore selected work <ArrowDown size={16} /></a>
              </Button>
              <button type="button" className="text-cta" onClick={copyEmail}>Copy email <ArrowUpRight size={15} /></button>
            </div>
            <div className="identity-line">
              <span><MapPin size={14} /> Tangerang, Banten</span>
              <span>Semester 3</span>
              <span>Open for S4 internship</span>
            </div>
          </div>
          <div className="hero-object reveal-delay">
            <div className="object-label top-label">RAFFATA / 01</div>
            <img src="/manus-storage/raffata-hero-system-rails_38df4281.jpg" alt="Abstract precision rails personal mark" />
            <div className="object-label bottom-label">INFORMATION SYSTEMS<br />TELKOM UNIVERSITY</div>
          </div>
        </section>

        <section className="capability-rail" aria-label="Current focus">
          <span>Currently learning</span>
          <div className="rail-item"><i /> Software systems</div>
          <div className="rail-item"><i /> Database design</div>
          <div className="rail-item"><i /> Cybersecurity foundations</div>
          <div className="rail-item muted-item">Semester 3 → 4</div>
        </section>

        <section id="work" className="work-section section-pad">
          <div className="section-heading reveal">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Small systems.<br />Real structure.</h2>
            <p>Three academic builds that show how I approach programming, data, and object-oriented design.</p>
          </div>

          <div className="project-stack">
            {projectData.map((project, index) => (
              <article key={project.number} className={`project-row ${project.className} reveal`}>
                <div className="project-index">{project.number}</div>
                <div className="project-body">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                  <p className="project-copy">{project.copy}</p>
                  <div className="project-tags">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <button type="button" className="project-note" onClick={() => showRepositoryNotice(project.title.replace("\n", " "))}>
                    Repository status <ArrowUpRight size={13} />
                  </button>
                  <ul>
                    {project.details.map((detail) => <li key={detail}><CheckCircle2 size={15} />{detail}</li>)}
                  </ul>
                </div>
                <div className="project-visual">
                  <img src={project.image} alt={`${project.title.replace("\n", " ")} project visual`} />
                  <div className="image-count">0{index + 1} / 03</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="statement-section section-pad">
          <p className="eyebrow">WORKING PRINCIPLE</p>
          <p className="statement">“Start with the structure.<br /><em>Then make it useful.</em>”</p>
          <div className="statement-specs">
            <span>CURIOUS / PRECISE / GROUNDED</span>
            <span>LEARNING IN PUBLIC, BUILDING WITH INTENT</span>
          </div>
        </section>

        <section id="credentials" className="credentials-section section-pad">
          <div className="credentials-intro reveal">
            <p className="eyebrow">CREDENTIALS</p>
            <h2>Learning that<br />stays practical.</h2>
            <p>Coursework is most useful when it changes how you think about the next system you build.</p>
          </div>
          <div className="credential-list reveal-delay">
            <a href="https://coursera.org/verify/professional-cert/LOR5KPIGVDRK" target="_blank" rel="noreferrer" className="credential-featured">
              <div className="credential-icon"><Sparkles size={22} /></div>
              <div>
                <p className="credential-meta">GOOGLE VIA COURSERA · AUG 2026</p>
                <h3>Google AI Professional Certificate</h3>
                <span>View verified credential <ArrowUpRight size={14} /></span>
              </div>
            </a>
            <div className="credential-small">
              <div><span>01</span><p>Google Cybersecurity Certificate</p><small>Google</small></div>
              <div><span>02</span><p>Google Agile Essentials</p><small>Google</small></div>
            </div>
          </div>
        </section>

        <section className="next-section section-pad">
          <div className="next-label">NEXT UP</div>
          <div>
            <p className="eyebrow">SEMESTER 3 → 4</p>
            <h2>Building a portfolio of proof.</h2>
          </div>
          <p className="next-copy">I&apos;m preparing focused repositories for each project—source code, README notes, and a clearer record of what I contributed.</p>
        </section>

        <section id="contact" className="contact-section section-pad">
          <RailMark className="contact-mark" />
          <p className="eyebrow">LET&apos;S CONNECT</p>
          <h2>Have an internship<br />opportunity in mind?</h2>
          <div className="contact-actions">
            <button type="button" onClick={copyEmail} className="contact-email">raffataizacky@gmail.com <ArrowUpRight size={22} /></button>
            <a href="https://www.linkedin.com/in/raffata-izacky-yuargya-aletama-248535388" target="_blank" rel="noreferrer" className="contact-link">LinkedIn profile <ChevronRight size={16} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Raffata Izacky Yuargya Aletama</span>
        <span>Built with curiosity &amp; intent</span>
      </footer>
    </div>
  );
}
