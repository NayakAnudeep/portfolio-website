import { useEffect, useState } from 'react';
import { projects, workExperience, partTime, certificates, references } from './content';

const navLinks = [['work-experience', 'Work'], ['projects', 'Projects'], ['about', 'About'], ['contact', 'Contact']];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>;
}

function SectionHeading({ title, children }) {
  return <div className="section-heading">
    <div className="heading-row"><h2>{title}</h2>{children && <p>{children}</p>}</div>
  </div>;
}

function Tags({ tags }) {
  return <ul className="tags" aria-label="Technologies">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
}

function Disclosure({ label, collapseLabel = 'Hide details', children, className = '' }) {
  return (
    <details className={`disclosure ${className}`}>
      <summary>
        <span className="disclosure-show">{label}</span>
        <span className="disclosure-hide">{collapseLabel}</span>
        <span className="expand-icon" aria-hidden="true" />
      </summary>
      <div className="disclosure-body">{children}</div>
    </details>
  );
}

function AgentDiagram() {
  return <figure className="project-visual agent-visual" aria-label="Agent B architecture: a task leads to browser exploration, page-state checks, and a visual guide.">
    <figcaption className="visual-caption"><span className="tiny-dot" /> A task becomes a guide <span>01</span></figcaption>
    <div className="task-prompt"><span className="mono-label">THE QUESTION</span><p>“How do I create a project?”</p></div>
    <div className="flow-connector" aria-hidden="true">↓</div>
    <div className="browser-diagram">
      <div className="browser-bar"><div className="window-dots" aria-hidden="true"><i /><i /><i /></div><span>Explore the application</span><span aria-hidden="true">↗</span></div>
      <div className="browser-body"><div className="browser-sidebar" aria-hidden="true"><i /><i /><i /><i /></div><div className="browser-content"><div className="schematic-line" /><div className="schematic-line short" /><div className="marked-control"><span className="mark">1</span>New project <span aria-hidden="true">+</span></div><div className="schematic-boxes" aria-hidden="true"><i /><i /></div></div></div>
    </div>
    <div className="signal-row"><span>Visual similarity</span><span>DOM changes</span><span>Network activity</span></div>
    <div className="flow-connector" aria-hidden="true">↓</div>
    <div className="flow-result"><span className="document-icon" aria-hidden="true">≡</span><div><strong>A step-by-step visual guide</strong><span>Markdown · HTML · JSON</span></div><span aria-hidden="true">↗</span></div>
    <p className="diagram-note">Architecture illustration · Set-of-Mark targeting</p>
  </figure>;
}

function GradingDiagram() {
  return <figure className="project-visual grading-visual" aria-label="AniTA compares AI grading against graph clusters and routes low-agreement grading to human review.">
    <figcaption className="visual-caption"><span className="tiny-dot" /> Confidence has a checkpoint <span>02</span></figcaption>
    <div className="graph-wrap">
      <svg viewBox="0 0 360 154" role="img" aria-label="Illustrative graph of student performance clusters">
        <g className="graph-lines"><path d="M46 86 86 40 119 100 46 86 101 132 119 100 160 61 86 40M119 100 199 105 240 57 290 94 199 105 266 135 290 94 313 45 240 57M160 61 240 57M199 105 160 61" /></g>
        <g className="graph-nodes">{[[46,86],[86,40],[119,100],[101,132],[160,61],[199,105],[240,57],[290,94],[266,135],[313,45]].map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r={i===2||i===6?10:6} />)}</g>
        <circle cx="199" cy="105" r="15" className="graph-highlight" />
      </svg>
      <span className="graph-label">Student performance clusters</span>
    </div>
    <div className="comparison-box"><span className="mono-label">JACCARD SIMILARITY</span><strong>Does the grading agree?</strong></div>
    <div className="branch-lines" aria-hidden="true"><span /><span /></div>
    <div className="decision-row"><div><span className="decision-symbol" aria-hidden="true">✓</span><strong>High agreement</strong><span>Accept grading</span></div><div className="review-decision"><span className="decision-symbol" aria-hidden="true">↗</span><strong>Low agreement</strong><span>Human review</span></div></div>
    <p className="diagram-note">Routing illustration · Louvain graph clusters</p>
  </figure>;
}

function VerifierDemo() {
  const [supported, setSupported] = useState(false);
  return <figure className="project-visual verifier-visual">
    <figcaption className="visual-caption"><span className="tiny-dot" /> A claim needs evidence <span>03</span></figcaption>
    <div className="demo-switch" role="group" aria-label="Choose an example claim"><button type="button" aria-pressed={!supported} onClick={()=>setSupported(false)}>Unsupported claim</button><button type="button" aria-pressed={supported} onClick={()=>setSupported(true)}>Verified claim</button></div>
    <div className="fact-card"><span className="mono-label">STORED FACT · ANITA NETWORK</span><p><strong>90%</strong> grading accuracy</p><span>Against 240 hand-graded responses</span></div>
    <div className="claim-card"><span className="mono-label">PROPOSED REWRITE</span><p>“Validated <mark className={supported?'valid-mark':''}>{supported?'90%':'99%'}</mark> grading accuracy against a manually graded answer key.”</p></div>
    <div className={`verification-result ${supported?'is-valid':''}`} role="status" aria-live="polite" aria-atomic="true"><span className="result-icon" aria-hidden="true">{supported?'✓':'×'}</span><div><strong>{supported?'Fact matched. Claim accepted.':'No matching fact. Rewrite rejected.'}</strong><span>{supported?'The number matches the stored achievement.':'Fall back to verified source wording.'}</span></div></div>
    <p className="diagram-note">Interactive illustration of the numeric verification gate</p>
  </figure>;
}

const featured = [
  { id:1, kicker:'AGENTS / BROWSER AUTOMATION', title:'Agent B', subtitle:'An agent that learns the workflow, then writes the guide.', description:'Give it a task in a web application. It navigates the live interface, captures each step, and turns the journey into visual documentation.', decision:'The difficult part is knowing when a page has actually changed. I combined visual similarity, DOM tracking, and network monitoring, with numbered screen markers for precise targeting.', outcome:'From a natural-language question to a guide in Markdown, HTML, or JSON.', tags:['Python','Playwright','Vision LLMs'], Diagram:AgentDiagram },
  { id:2, kicker:'GRAPH ANALYTICS / HUMAN REVIEW', title:'AniTA Network', subtitle:'An AI teaching assistant that knows when to ask for a second opinion.', description:'I rebuilt this teaching assistant end to end, combining free-text grading with graph analysis of student performance.', decision:'A grade is checked against graph clusters using Jaccard similarity. Low agreement sends it to manual review; PageRank recommends study material from the answers a student missed.', outcome:'90% grading accuracy against 240 responses I graded by hand, across three subject sets.', tags:['Python','Django','ArangoDB','Claude API'], Diagram:GradingDiagram },
  { id:3, kicker:'LLM TOOLING / FACT VERIFICATION', title:'Resume Generator', subtitle:'Better wording. The same facts.', description:'A resume generator that selects relevant experience for a job description, with a deterministic verifier between the model and the final document.', decision:'Every number, technology, and attribution must match the achievement store. If a rewrite fails verification, the system falls back to the original, verified wording.', outcome:'A BM25 prefilter holds a full generation run to fewer than six model calls. In development.', tags:['Python','SQLite','LaTeX','LLM APIs'], Diagram:VerifierDemo },
];

const workHighlights = [
  ['Own the infrastructure code as one of two engineers at Actualize.', 'Reduced average response time approximately 50% on cache-eligible endpoints by introducing Redis caching.', 'Built an AI validation agent covering 169 API classes, surfacing defects in over 40.'],
  ['Reduced per-step authentication time by 80% with a Nymi biometric wearable.', 'Delivered features across both legacy Java and modern Node.js platforms during a three-site migration.', 'Shipped 20+ features and resolved 40+ defects annually across the two platforms.'],
  ['Migrated a legacy interface from Angular 6 to Angular 11 without regressions.', 'Raised unit test coverage from 45% to 80% and halved code duplication, measured in SonarQube.', 'Carried the migration through senior turnover and onboarded the incoming vendor lead.'],
];

function App() {
  const [active, setActive] = useState('');
  useEffect(()=>{
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting)setActive(entry.target.id);});
    },{rootMargin:'-15% 0px -65% 0px'});
    document.querySelectorAll('main > section[id]').forEach(section=>observer.observe(section));
    return ()=>observer.disconnect();
  },[]);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="header-inner">
      <a href="#home" className="wordmark" aria-label="Anudeep Nayak, home">an<span className="wordmark-dot">.</span></a>
      <nav aria-label="Main navigation">{navLinks.map(([id,label])=><a key={id} href={`#${id}`} aria-current={active===id?'location':undefined}>{label}</a>)}</nav>
      <a className="header-resume" href="/resume/anudeep_nayak.pdf" download="Anudeep_Nayak_Resume.pdf">Résumé <span aria-hidden="true">↓</span></a>
    </div></header>
    <main id="main">
      <section id="home" className="hero shell">
        <div className="hero-copy"><p className="eyebrow">SOFTWARE ENGINEER</p><h1>Anudeep Nayak<span className="name-period">.</span></h1><p className="hero-statement">Backend systems.<br />AI that checks its work.</p><p className="hero-description">I own infrastructure at Actualize. Previously GE Healthcare.</p><div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <Arrow /></a><a className="text-link" href="mailto:anudeep.nayak@protonmail.com">Get in touch <Arrow diagonal /></a></div><p className="availability"><span className="status-dot" /> Open to full-time engineering roles</p></div>
        <div className="portrait-area"><div className="portrait-frame"><img src="/IMG_7121.PNG" alt="Anudeep Nayak" width="701" height="805" fetchPriority="high" /></div></div>
        <dl className="proof-strip"><div><dt>Infrastructure ownership</dt><dd>1 of 2 <span>engineers at Actualize</span></dd></div><div><dt>Measured performance</dt><dd>~50% <span>lower average response time<br />on cache-eligible endpoints</span></dd></div><div><dt>API validation</dt><dd>169 <span>API classes covered<br />by the agent I built</span></dd></div></dl>
      </section>

      <section id="work-experience" className="section shell"><SectionHeading title="Experience">From regulated manufacturing to the infrastructure of an early-stage startup.</SectionHeading><div className="experience-list">{workExperience.map((job,index)=><article className="experience" key={job.id}><div className="experience-meta"><p className="job-date">{job.duration}</p><h3>{job.company}</h3><p>{job.position}</p><span className="job-location">{job.location}</span>{index===0&&<span className="current-badge"><span className="status-dot" /> CURRENT</span>}</div><div className="experience-content"><ul className="achievement-list">{workHighlights[index].map(point=><li key={point}>{point}</li>)}</ul><Tags tags={job.technologies.slice(0,5)} /><Disclosure label={`Show more at ${job.company}`}><ul className="achievement-list">{job.responsibilities.map(point=><li key={point}>{point}</li>)}</ul><Tags tags={job.technologies} /></Disclosure></div></article>)}</div></section>

      <section id="projects" className="section projects-section"><div className="shell"><SectionHeading title="Selected projects">Three projects, and the engineering decisions that make them interesting.</SectionHeading><div className="featured-projects">{featured.map((project,index)=><article className={`featured-project ${index%2?'is-reversed':''}`} key={project.id}><project.Diagram /><div className="project-copy"><p className="eyebrow project-kicker">{project.kicker}</p><div className="project-title-row"><h3>{project.title}</h3>{project.id===3&&<span className="development-badge">In development</span>}</div><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><div className="engineering-note"><h4>THE ENGINEERING DECISION</h4><p>{project.decision}</p></div><p className="project-outcome">{project.outcome}</p><Tags tags={project.tags} />{projects[index].href&&<a className="text-link project-link" href={projects[index].href} target="_blank" rel="noopener noreferrer">Explore the code <Arrow diagonal /></a>}</div></article>)}</div>
      <div className="clinic-note"><div><p className="eyebrow">A NOTE ON PRODUCT JUDGMENT</p><h3>Sometimes, the right decision is to stop.</h3></div><div><p>I co-founded and built a clinic-administration MVP for small Indian clinics: tenant isolation, human verification of AI drafts, and a workflow designed to survive unreliable connectivity. After validation revealed an established incumbent, we decided to wind it down.</p><Disclosure label="Show design decisions"><p>Patients could receive updates through WhatsApp without installing an app. Multilingual dosage instructions used structured templates rather than free translation. AI, OCR, and messaging were treated as fallible services, so the clinic workflow could continue when they failed.</p><p>The project is wound down. The useful lesson was making the product decision alongside the technical ones.</p></Disclosure></div></div>
      <div className="project-archive">
        <h3>More projects</h3>
        <p>Personal tools, experiments, and earlier work.</p>
        <Disclosure className="archive" label={`Show all ${projects.length - 3} projects`} collapseLabel="Hide projects"><div className="archive-list">{projects.slice(3).map(project=><article className="archive-item" key={project.id}><div className="archive-item-heading"><h3>{project.title}</h3><span>{project.context}</span>{project.href&&<a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}><Arrow diagonal /></a>}</div><p>{project.blurb}</p><Tags tags={project.tags} /></article>)}</div></Disclosure>
      </div></div></section>

      <section id="about" className="section shell"><SectionHeading title="About me" /><div className="about-grid"><div className="about-copy"><p className="about-lead">I like knowing how my tools work, all the way down.</p><p>That shows up in the infrastructure I own, the agents I build, and the Linux desktop configurations I use every day. My work spans backend engineering, retrieval systems, and practical AI.</p><p>I earned my MS in Data Science at CU Boulder, after studying computer science at Manipal. Outside the bigger projects, I build tools I use myself—from a GRE flashcard app to a Redis monitor in Rust.</p><a className="text-link" href="https://github.com/NayakAnudeep" target="_blank" rel="noopener noreferrer">Find me on GitHub <Arrow diagonal /></a></div><div className="education-card"><p className="eyebrow">EDUCATION & RECOGNITION</p><div><h3>MS, Data Science</h3><p>University of Colorado Boulder</p><span>2023–2025 · GPA 3.93</span></div><div><h3>B.Tech, Computer Science</h3><p>Manipal Institute of Technology</p><span>2018–2022</span></div><div className="award-line"><span aria-hidden="true">✳</span><p><strong>First prize · GE Renewables DT Hackathon</strong><span>Resume classification with KNN and custom NLP</span></p></div></div></div>
      <div className="toolkit"><p className="eyebrow">TOOLS I REACH FOR</p><div><h3>Backend & infrastructure</h3><p>Python · PHP · Java · Node.js · SQL · Redis · RabbitMQ · Docker</p></div><div><h3>AI & retrieval</h3><p>LLM APIs · Hybrid search · Graph analytics · Playwright · RAG</p></div></div>
      <div className="background-details"><Disclosure label="Show certificates" collapseLabel="Hide certificates"><div className="certificate-list">{certificates.map(c=><div key={c.name}><span>{c.name}</span><span>{c.issuer}</span></div>)}</div></Disclosure><Disclosure label="Show student roles" collapseLabel="Hide student roles"><div className="part-time-list">{partTime.map(r=><article key={r.id}><h3>{r.role}</h3><p>{r.org} · {r.duration}</p><ul className="achievement-list">{r.points.map(p=><li key={p}>{p}</li>)}</ul></article>)}</div></Disclosure><Disclosure label="Show references" collapseLabel="Hide references"><p>Managers and supervisors who have agreed to speak to my work. Contact details available on request.</p><div className="references-grid">{references.map(r=><div key={r.name}><h3>{r.name}</h3><p>{r.title}</p><span>{r.org} · {r.relation}</span></div>)}</div></Disclosure></div></section>

      <section id="contact" className="contact-section"><div className="shell"><div className="contact-top"><div><p className="eyebrow">04 / WHAT’S NEXT</p><h2>Let’s build something<br /><em>worth getting right.</em></h2><p>Open to full-time software engineering roles.<br />Have a role or a problem in mind? I’d like to hear about it.</p></div><a href="mailto:anudeep.nayak@protonmail.com" className="contact-circle" aria-label="Email Anudeep"><Arrow diagonal /></a></div><div className="contact-bottom"><a className="contact-email" href="mailto:anudeep.nayak@protonmail.com">anudeep.nayak@protonmail.com <Arrow diagonal /></a><div className="social-links"><a href="https://linkedin.com/in/Anudeep-Nayak" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a><a href="https://github.com/NayakAnudeep" target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a><a href="/resume/anudeep_nayak.pdf" download="Anudeep_Nayak_Resume.pdf">Résumé ↓</a></div></div><footer><span>© {new Date().getFullYear()} Anudeep Nayak</span><a href="#home">Back to top ↑</a></footer></div></section>
    </main>
  </>;
}

export default App;
