"use client";

import { useEffect, useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

const work = [
  {
    number: "01",
    eyebrow: "Enterprise AI · AT&T",
    title: "Helping leaders find the signal in the noise.",
    copy: "I led product strategy for an AI competitive intelligence platform that brought market trends, competitor updates, and business insights into one place.",
    impact: ["$175M portfolio", "64 teams mapped", "11 capabilities"],
    tone: "oxblood",
  },
  {
    number: "02",
    eyebrow: "AI in Education · UMass Amherst",
    title: "Exploring how AI can give students better feedback.",
    copy: "I studied real-time adaptive feedback with 51 participants across seven universities, then published and presented our findings at the AAAI 2025 AI4EDU Workshop.",
    impact: ["AAAI 2025", "51 participants", "7 universities"],
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

const chapters = [
  ["Now", "AI Product Manager", "AT&T · AI Transformation & Enablement"],
  ["2023 to Now", "AI in Education Researcher", "University of Massachusetts Amherst"],
  ["2024 to 2025", "Software Engineer", "TJX Companies · Cybersecurity"],
  ["2023", "Software Engineer Intern", "TJX Companies · Infrastructure & Operations"],
  ["2021", "Data Analyst Intern", "NASA"],
];

export default function Home() {
  const [openCase, setOpenCase] = useState<string | null>("01");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(available > 0 ? window.scrollY / available : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
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
            <p className="script">AI Product Manager · Researcher · Builder</p>
            <h1>
              Jasmine
              <br />
              <em>V Ngo.</em>
            </h1>
            <p className="hero-statement">Making AI make sense.</p>
            <p className="intro">
              I build AI products around real people and real problems. My work
              brings together user needs, business goals, and the technology
              needed to make an idea useful.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <Arrow />
              </a>
              <a className="button button-outline" href="https://www.linkedin.com/in/jasminengo1/" target="_blank" rel="noreferrer">
                LinkedIn <Arrow />
              </a>
              <a className="text-link" href="./JASMINEVNGO_2026.pdf" download="JASMINEVNGO_2026.pdf">
                Résumé ↓
              </a>
            </div>
          </div>
          <div className="hero-art" aria-label="Portrait of Jasmine V Ngo">
            <div className="portrait-frame">
              <span className="frame-label">Product strategy · Research · Technology</span>
              <img src="jasmine-headshot.jpg" alt="Jasmine V Ngo, AI Product Manager" />
            </div>
            <p className="margin-note">Thoughtful technology, built for people.</p>
          </div>
        </div>
        <div className="proof-strip">
          <div><strong>$410M</strong><span>Transformation delivery</span></div>
          <div><strong>64</strong><span>Teams mapped for AI opportunity</span></div>
          <div><strong>75%</strong><span>Faster reporting</span></div>
          <div><strong>7</strong><span>Universities in research</span></div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected projects</p>
            <h2>What I&apos;ve <em>worked on.</em></h2>
          </div>
          <p>I enjoy taking a complicated problem, finding what matters most, and helping a team turn it into something useful.</p>
        </div>
        <div className="work-list">
          {work.map((item) => (
            <article className={`case ${item.tone} ${openCase === item.number ? "is-open" : ""}`} key={item.number}>
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
        <div className="about-media">
          <span className="script">A little about me</span>
          <div className="photo-slot about-photo photo-filled">
            <img src="jasmine-balloons.jpg" alt="Jasmine traveling in a hot air balloon" />
            <span>Always curious</span>
          </div>
        </div>
        <div className="about-body">
          <p className="eyebrow">Product thinking with a technical foundation</p>
          <p>
            I&apos;m Jasmine V Ngo, an AI product manager and researcher.
            I&apos;ve modeled food systems for long-duration space missions at
            NASA, worked on cybersecurity products, and helped shape enterprise
            AI strategy.
          </p>
          <p>
            I like learning how things work, asking good questions, and making
            complex ideas easier to understand. Most of all, I enjoy working
            with people to build something we are proud of.
          </p>
          <div className="signature">Jasmine V Ngo</div>
        </div>
        <blockquote className="about-statement">“The best AI products don&apos;t ask people to adapt to technology. They make technology feel more human.”</blockquote>
      </section>

      <section className="timeline-section">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Where I&apos;ve <em>been.</em></h2>
          </div>
        </div>
        <div className="timeline">
          {chapters.map(([year, role, place]) => (
            <div className="chapter" key={role}>
              <span>{year}</span><strong>{role}</strong><p>{place}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="research-section" id="research">
        <div className="research-card">
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
        <div className="research-aside">
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

      <section className="moments-section" aria-label="Selected moments">
        <div className="moments-copy">
          <p className="eyebrow">Outside of work</p>
          <h2>Always learning.<br /><em>Always exploring.</em></h2>
          <p>I love traveling, trying new things, and learning from the people around me. I&apos;m also studying to become a Pilates instructor. Mentorship is especially important to me, and it connects so much of what I care about, from my experience at Tigerway Prep to my research in AI and education. I&apos;m adventurous, ambitious, and happiest when I can grow while helping someone else grow too.</p>
          <div className="interest-list" aria-label="Personal interests">
            <span>Travel</span>
            <span>Pilates instructor in training</span>
            <span>Mentorship</span>
            <span>Lifelong learning</span>
          </div>
        </div>
        <figure className="moment moment-conference">
          <img src="jasmine-conference.jpg" alt="Jasmine at the Massachusetts Conference for Women" />
          <figcaption>Community · Leadership</figcaption>
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
            <a href="./JASMINEVNGO_2026.pdf" download="JASMINEVNGO_2026.pdf">Résumé</a>
          </div>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
