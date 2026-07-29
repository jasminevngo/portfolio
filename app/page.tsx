"use client";

import { useEffect, useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

const roles = ["AI Product Manager", "Researcher", "Builder"];

function useTypewriter(words: string[], typingSpeed = 70, deletingSpeed = 40, pause = 1800) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

const work = [
  {
    number: "01",
    eyebrow: "AI Transformation & Enablement · AT&T",
    title: "Building the internal AI tools our teams actually use.",
    copy: "I build AI-driven products, automation workflows, and internal applications across Consumer Technology Experience and enterprise HQ functions, partnering with business, engineering, and data teams to deliver solutions, support AI governance, and track KPIs for adoption and impact.",
    impact: ["1st place, AT&T AI Hackathon 2026", "Making a Difference Honoree ×2", "Move Faster Pillar recognition"],
    tone: "oxblood",
  },
  {
    number: "02",
    eyebrow: "AI in Education · UMass Amherst",
    title: "Studying how AI can give students feedback that actually helps.",
    copy: "My honors thesis studied reusable learning objects for adaptive learning: I interviewed educators across seven universities and usability-tested a regex-learning prototype with 51 students, then published our findings at the AAAI 2025 AI4EDU Workshop.",
    impact: ["AAAI 2025", "51 students tested", "Honors thesis"],
    tone: "cobalt",
  },
  {
    number: "03",
    eyebrow: "Product Systems · AT&T",
    title: "Making everyday reporting faster and easier.",
    copy: "I built an analytics tool with Quickbase, SQL, Python, and Power BI so teams could answer their own questions without waiting on a technical expert.",
    impact: ["75% faster reporting", "Cross-functional", "Built to scale"],
    tone: "ink",
  },
];

const projects = [
  {
    name: "SafeStep",
    role: "Project Manager · College Project, UMass Amherst",
    period: "01/2024 – 05/2024",
    copy: "A personal safety app with real-time tracking and alerts. I defined key features through user research and built a business plan that increased engagement by 25%.",
    tools: ["Product Strategy", "User Research", "Business Planning"],
  },
  {
    name: "RateMyHousing",
    role: "Product Lead · Frontend Engineer · College Project, UMass Amherst",
    period: "09/2022 – 12/2023",
    copy: "A university housing review platform. I led UX/UI design and Agile development with a cross-functional team of 6 engineers to ship key features on time.",
    tools: ["Figma", "Jira", "React", "TypeScript"],
  },
];

const chapters = [
  ["Now", "AI Product Manager", "AT&T · AI Transformation & Enablement"],
  ["2023 to Now", "AI in Education Researcher", "University of Massachusetts Amherst"],
  ["2024 to 2025", "Software Engineer", "TJX Companies · Cybersecurity"],
  ["2023", "Software Engineer Intern", "TJX Companies · Infrastructure & Operations"],
  ["2021", "Data Analyst Intern", "NASA · Nutritional Biology and Human Health"],
];

export default function Home() {
  const [openCase, setOpenCase] = useState<string | null>("01");
  const [scrollProgress, setScrollProgress] = useState(0);
  const script = useTypewriter(roles);

  useEffect(() => {
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(available > 0 ? window.scrollY / available : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!targets.length) return;

    const revealVisible = () => {
      const limit = window.innerHeight * 0.92;
      targets.forEach((target) => {
        if (target.classList.contains("is-visible")) return;
        const top = target.getBoundingClientRect().top;
        if (top < limit) target.classList.add("is-visible");
      });
    };

    revealVisible();
    window.addEventListener("scroll", revealVisible, { passive: true });
    window.addEventListener("resize", revealVisible);
    // Failsafe: never leave content permanently hidden.
    const failsafe = setTimeout(() => targets.forEach((t) => t.classList.add("is-visible")), 2500);

    return () => {
      window.removeEventListener("scroll", revealVisible);
      window.removeEventListener("resize", revealVisible);
      clearTimeout(failsafe);
    };
  }, []);

  const trackPointer = (event: React.PointerEvent<HTMLElement>) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    event.currentTarget.style.setProperty("--pointer-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${y * 100}%`);
    event.currentTarget.style.setProperty("--tilt-x", `${(x - 0.5) * 10}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${(0.5 - y) * 8}deg`);
  };

  return (
    <main onPointerMove={trackPointer}>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      <div className="pointer-bloom" aria-hidden="true" />
      <header className="nav">
        <a className="brand" href="#top" aria-label="Jasmine V Ngo, home">
          JN<span>✦</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
        </nav>
        <a className="nav-cta" href="mailto:jascngo@gmail.com">
          Let&apos;s talk <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span>AI Product Manager</span>
          <span>Portfolio · 2026</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="status-line">
              <span className="status-dot" aria-hidden="true" />
              Currently building AI products at AT&amp;T
            </div>
            <p className="script">
              {script}
              <span className="caret" aria-hidden="true" />
            </p>
            <h1>
              Jasmine
              <br />
              <em>V Ngo.</em>
            </h1>
            <p className="hero-statement">Building what&apos;s next in AI.</p>
            <p className="intro">
              I build enterprise AI products at AT&amp;T, partnering with
              business and engineering teams to identify opportunities,
              automate workflows, shape product strategy, and bring solutions
              from discovery through implementation.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <Arrow />
              </a>
              <a className="button button-outline" href="https://www.linkedin.com/in/jasminengo1/" target="_blank" rel="noreferrer">
                LinkedIn <Arrow />
              </a>
              <a className="text-link" href="./JASMINEVNGO_2026.pdf" target="_blank" rel="noreferrer">
                Résumé ↓
              </a>
            </div>
          </div>
          <div className="hero-art" aria-label="Portrait of Jasmine V Ngo">
            <div className="portrait-frame">
              <img src="jasmine-headshot.jpg" alt="Jasmine V Ngo, AI Product Manager" />
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Where I've worked">
        <span>AT&amp;T</span>
        <span>UMass Amherst</span>
        <span>TJX Companies</span>
        <span>NASA</span>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">Selected projects</p>
            <h2>What I&apos;ve <em>worked on.</em></h2>
          </div>
        </div>
        <div className="work-list">
          {work.map((item) => (
            <article className={`case reveal ${item.tone} ${openCase === item.number ? "is-open" : ""}`} key={item.number}>
              <div className="case-number">{item.number}</div>
              <div className="case-title">
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
              </div>
              <div className="case-detail">
                <p>{item.copy}</p>
                <div className="chips">
                  {item.impact.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <button
                className="case-toggle"
                type="button"
                aria-expanded={openCase === item.number}
                onClick={() => setOpenCase(openCase === item.number ? null : item.number)}
              >
                <span>{openCase === item.number ? "Close" : "Explore"}</span>
                <b aria-hidden="true">{openCase === item.number ? "−" : "+"}</b>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-media reveal">
          <span className="script">A little about me</span>
          <div className="photo-slot about-photo photo-filled">
            <img src="jasmine-balloons.jpg" alt="Jasmine traveling in a hot air balloon" />
          </div>
        </div>
        <div className="about-body reveal">
          <p className="eyebrow">Product thinking with a technical foundation</p>
          <p>
            I&apos;m Jasmine V Ngo, an AI product manager and researcher.
            I&apos;ve modeled food systems for long-duration space missions at
            NASA, worked on cybersecurity products, and helped shape enterprise
            AI strategy.
          </p>
          <p>
            My background in Honors Computer Science and Mathematics at UMass
            Amherst, combined with software engineering and AI research
            experience, lets me move between technical and business
            perspectives throughout the product lifecycle, from spotting an
            opportunity to shipping the solution.
          </p>
          <p>
            I&apos;m also a thought leader and advocate for education, women in tech,
            and AI. I love giving talks, mentoring students, and attending
            events like the Massachusetts Conference for Women.
          </p>
          <div className="signature">Jasmine V Ngo</div>
        </div>
        <blockquote className="about-statement reveal">“The best AI products don’t ask people to adapt to technology. They make technology feel more human.”</blockquote>
      </section>

      <section className="timeline-section">
        <div className="section-heading compact reveal">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Where I&apos;ve <em>been.</em></h2>
          </div>
        </div>
        <div className="timeline">
          {chapters.map(([year, role, place]) => (
            <div className="chapter reveal" key={role}>
              <span>{year}</span><strong>{role}</strong><p>{place}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="research-section" id="research">
        <div className="research-card reveal">
          <p className="eyebrow">Research · AI in Education</p>
          <h2>Can AI help students get feedback that actually works for them?</h2>
          <p>That question is at the center of my research. I study adaptive feedback, reusable learning objects, and how students and educators feel about using AI in the classroom.</p>
          <div className="research-links">
            <a className="button button-light" href="https://drive.google.com/file/d/1I8Wv9do6s2DuENtyG1NkzD_h0i0Us1xp/view" target="_blank" rel="noreferrer">
              AAAI publication <Arrow />
            </a>
            <a className="research-text-link" href="https://scholarworks.umass.edu/entities/publication/772b535e-fd0b-4e44-9554-d4497192e42e" target="_blank" rel="noreferrer">
              Honors thesis <Arrow />
            </a>
          </div>
        </div>
        <div className="research-aside reveal">
          <div className="photo-slot research-photo photo-filled">
            <img src="jasmine-research.jpg" alt="Jasmine presenting adaptive feedback research at AAAI" />
            <span>Research in action</span>
          </div>
          <span>Published at</span>
          <strong>AAAI 2025</strong>
          <p>AI4EDU Workshop</p>
          <i>✦</i>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Ideas I&apos;ve <em>led and built.</em></h2>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.name}>
              <span className="role">{project.role} · {project.period}</span>
              <h3>{project.name}</h3>
              <p>{project.copy}</p>
              <div className="chips">
                {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="moments-section" aria-label="Selected moments">
        <div className="moments-copy reveal">
          <p className="eyebrow">Outside of work</p>
          <h2>Always learning.<br /><em>Always exploring.</em></h2>
          <p>I love traveling and learning from the people I meet along the way, and when something catches my interest, I commit to it fully, these days that&apos;s training to become a Pilates instructor. Most weekends you&apos;ll find me hiking with Max, my Australian Shepherd, or picking up something new just for the joy of it. Mentorship matters just as much to me, tying together everything from my time as a coach and program director at Tigerway Prep, an SAT coaching and college consulting program, to my research in AI and education, and it&apos;s the thread that connects everything else I do.</p>
          <div className="interest-list" aria-label="Personal interests">
            <span>Travel</span>
            <span>Pilates instructor in training</span>
            <span>Hiking</span>
            <span>Mentorship</span>
          </div>
        </div>
        <figure className="moment moment-conference reveal">
          <img src="jasmine-conference.jpg" alt="Jasmine at the Massachusetts Conference for Women" />
          <figcaption>Women in Tech · Advocacy</figcaption>
        </figure>
        <figure className="moment moment-graduation">
          <img src="jasmine-graduation.jpg" alt="Jasmine in UMass Amherst honors graduation regalia" />
          <figcaption>UMass Amherst · Honors</figcaption>
        </figure>
      </section>

      <footer>
        <img className="footer-lily" src="lily-accent.png" alt="" aria-hidden="true" />
        <p className="script">Have something interesting in mind?</p>
        <a className="footer-email" href="mailto:jascngo@gmail.com">jascngo@gmail.com <Arrow /></a>
        <div className="footer-row">
          <span>Jasmine V Ngo</span>
          <div>
            <a href="https://www.linkedin.com/in/jasminengo1/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/jasminevngo" target="_blank" rel="noreferrer">GitHub</a>
            <a href="./JASMINEVNGO_2026.pdf" target="_blank" rel="noreferrer">Résumé</a>
          </div>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
