import { motion } from 'framer-motion';

/* Motion presets — one shared vocabulary instead of per-element values. */
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-80px' },
  variants: { visible: { transition: { staggerChildren: 0.06 } } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Section({ id, eyebrow, title, intro, children, className = '' }) {
  return (
    /* Asymmetric padding: a large gap above each header, a smaller one below its
       content, so sections read as blocks rather than an evenly-spaced stream. */
    <section id={id} className={`px-6 md:px-12 lg:px-20 xl:px-32 pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden ${className}`}>
      <motion.div className="max-w-5xl mx-auto mb-16" {...fadeUp}>
        {/* Label, then a rule running to the right edge — the separator IS the
            heading, so the accent marks structure without a background change. */}
        <div className="section-marker mb-5">
          <span className="eyebrow eyebrow-accent">{eyebrow}</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-fg tracking-tight">{title}</h2>
        {intro && <p className="text-muted text-lg mt-5 max-w-2xl leading-relaxed">{intro}</p>}
      </motion.div>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

function App() {
  /* Sourced from the verified achievement corpus in resume_generator.
     Attribution and qualifiers below are load-bearing — do not loosen them. */
  const projects = [
    {
      id: 1,
      title: 'Agent B',
      subtitle: 'Vision-driven documentation agent',
      blurb:
        'Multi-agent system that documents web workflows on its own. Drives a live application with Playwright, reads each screen with a vision model using Set-of-Mark prompting to mark interactive elements, and detects state transitions by combining visual similarity, DOM tracking and network monitoring. Ask it how to create a project in a tool and it explores the app and writes the guide.',
      metrics: [],
      tags: ['Python', 'Playwright', 'Vision LLM', 'Set-of-Mark', 'SSIM'],
      href: 'https://github.com/NayakAnudeep/agent-b-systemn',
      label: 'GitHub',
      context: 'Personal · MIT',
    },
    {
      id: 2,
      title: 'AniTA Network',
      subtitle: 'AI Teaching Assistant',
      blurb:
        'Rebuilt an AI teaching assistant end to end after a team delivery stalled. Grades free-text answers, then uses Jaccard similarity against Louvain-detected graph clusters to route low-agreement gradings back to manual review rather than accepting them. PageRank surfaces study material from the answers a student got wrong.',
      metrics: [
        ['90%', 'grading accuracy vs. hand-graded key'],
        ['240', 'responses graded by hand to validate'],
      ],
      tags: ['Python', 'Django', 'ArangoDB', 'Claude API', 'Graph Analytics', 'RAG'],
      href: 'https://github.com/NayakAnudeep/network-project',
      label: 'GitHub',
      context: 'CU Boulder',
    },
    {
      id: 3,
      title: 'Resume Generator',
      subtitle: 'In development',
      blurb:
        'A resume generator built around a deterministic verifier. Every number in generated output must match a stored fact, every technology must be tagged on that achievement, and a credit gate distinguishes what I did from what a team did from what a tool I built did. When a rewrite cannot be verified it falls back to stored wording rather than shipping a claim I cannot defend.',
      metrics: [
        ['<6', 'LLM calls per full run via BM25 prefilter'],
        ['9.4k', 'lines of Python, 16 test modules'],
      ],
      tags: ['Python', 'SQLite', 'LaTeX', 'FastAPI', 'MCP', 'LLM APIs'],
      href: null,
      context: 'Personal',
    },
    {
      id: 4,
      title: 'Dota 2 LLM Chatbot',
      subtitle: 'Domain-specific RAG',
      blurb:
        'Mined Wikipedia and Liquipedia, chunked and embedded the corpus with SentenceTransformers, indexed it in FAISS, and generated with GPT-4. Tested on interpretation questions requiring inference rather than direct lookup — the notable result is that no answer was factually wrong; the failure mode was misreading the question, not fabricating.',
      metrics: [
        ['90%', 'accuracy across 50 inference questions'],
        ['0', 'factually incorrect answers'],
      ],
      tags: ['Python', 'GPT-4', 'FAISS', 'SentenceTransformers', 'RAG', 'IBM Cloud'],
      href: 'https://github.com/NayakAnudeep/LLM-powered-dota-chat',
      label: 'GitHub',
      context: 'CU Boulder',
    },
    {
      id: 5,
      title: 'AppyJob',
      subtitle: 'Autonomous application agent',
      blurb:
        'Applies to jobs end to end without supervision. A dual-agent design runs fast DOM manipulation first and falls back to Claude vision when a form defeats the selectors, with screenshot capture and logging throughout, configurable rate limits, and a Flask dashboard for live stats. I used it on my own job search.',
      metrics: [],
      tags: ['Python', 'Playwright', 'Claude API', 'Flask', 'Computer Vision'],
      href: 'https://github.com/NayakAnudeep/agent-appyjob',
      label: 'GitHub',
      context: 'Personal',
    },
    {
      id: 6,
      title: 'Journal Buddy',
      subtitle: 'Therapy preparation RAG',
      blurb:
        'Reads a rolling week of journal entries and generates therapy session prep — emotional, behavioural and cognitive patterns, progress against previous weeks, and specific questions to raise. A Neo4j knowledge graph models screening questions, categories and user profiles across four dimensions, driving personalized journaling templates from graph relationships.',
      metrics: [
        ['7-day', 'rolling analysis window'],
        ['4', 'screening dimensions modeled in Neo4j'],
      ],
      tags: ['Django', 'Neo4j', 'GPT-4', 'RAG', 'Caching'],
      href: null,
      context: 'Personal · deployed then withdrawn',
    },
    {
      id: 7,
      title: 'CineCipher',
      subtitle: 'NLP content recommendation',
      blurb:
        'Built an NLP recommendation engine that matches films to a free-form natural-language query rather than to genre tags. Scraped 10,000+ IMDb titles with BeautifulSoup — director, cast, plot, genre — then used spaCy and Gensim for topic modeling and document similarity to rank against the query. Team of six; published final report.',
      metrics: [['10k+', 'films scraped and indexed']],
      tags: ['Python', 'spaCy', 'Gensim', 'BeautifulSoup', 'NLP', 'Pandas'],
      href: 'https://github.com/NayakAnudeep/movieGuesser',
      label: 'GitHub',
      context: 'CU Boulder · team of 6',
    },
    {
      id: 8,
      title: 'Speech Emotion Analysis',
      subtitle: 'Whisper + neural classification',
      blurb:
        'Transcribed a feature film with Whisper, split it into sentences, and classified each through a Keras neural network trained on a labeled emotions corpus — then compared those emotions against TextBlob sentiment polarity. The finding: emotion and sentiment are statistically independent, and combining adjacent sentences changed the sentiment of 455 of 1,207 entries while leaving the emotion distribution intact.',
      metrics: [
        ['1,207', 'sentences classified'],
        ['455', 'sentiment shifts when merging adjacent lines'],
      ],
      tags: ['Python', 'Whisper', 'Keras', 'TextBlob', 'NLTK', 'scikit-learn'],
      href: 'https://github.com/NayakAnudeep/audio_emotion_analysis',
      label: 'GitHub',
      context: 'CU Boulder · pair',
    },
    {
      id: 9,
      title: 'Email Automation',
      subtitle: 'Multi-provider outreach',
      blurb:
        'Writes and sends job referral email with selectable generation across three LLM providers and delivery across three email providers. Detects role type from the job description, caches and matches similar templates to avoid regeneration, bulk processes from CSV, and rate limits so providers do not cut you off.',
      metrics: [
        ['3 + 3', 'LLM and email providers supported'],
        ['10', 'replies to referral emails sent'],
      ],
      tags: ['Node.js', 'Claude API', 'OpenAI', 'Gemini', 'SMTP'],
      href: 'https://github.com/NayakAnudeep/Mail-buddy',
      label: 'GitHub',
      context: 'Personal',
    },
    {
      id: 10,
      title: 'remon',
      subtitle: 'Redis monitor TUI',
      blurb:
        'An asynchronous Redis monitoring terminal UI in Rust, built with Tokio and Ratatui while doing the Redis caching work at Actualize — live visibility into cache state from the terminal.',
      metrics: [],
      tags: ['Rust', 'Tokio', 'Redis', 'Ratatui'],
      href: null,
      context: 'Personal',
    },
    {
      id: 11,
      title: 'BTC Research Pipeline',
      subtitle: 'Market microstructure',
      blurb:
        'A causal technical-level research pipeline for Binance BTC/USDT covering ingestion, cleaning, feature generation and market microstructure analysis, with a Streamlit interface and a pytest suite over the analysis code.',
      metrics: [],
      tags: ['Python', 'Pandas', 'SciPy', 'Streamlit', 'Quantitative Analysis'],
      href: null,
      context: 'Personal',
    },
    {
      id: 12,
      title: 'Resume Classifier',
      subtitle: 'GE hackathon — first prize',
      blurb:
        'An ML categorization system using Scikit-learn and KNN to parse and classify resumes. Won first place by optimizing the model through custom data filtering, preprocessing and text mining.',
      metrics: [
        ['83%', 'classification accuracy'],
        ['1st', 'place'],
      ],
      tags: ['Python', 'Scikit-learn', 'KNN', 'NLP', 'Data Mining'],
      href: null,
      context: 'GE Renewable Energy',
    },
    {
      id: 13,
      title: 'Clearhead',
      subtitle: 'Todo app for ADHD',
      blurb:
        'A React Native task app built around ADHD constraints — it surfaces only the top few tasks at a time so the list itself never becomes the obstacle. Small, but it is a shipped cross-platform mobile app.',
      metrics: [],
      tags: ['React Native', 'Expo', 'TypeScript'],
      href: 'https://github.com/NayakAnudeep/Clearhead',
      label: 'GitHub',
      context: 'Personal',
    },
    {
      id: 14,
      title: 'Travel Recommendation API',
      subtitle: 'Go service',
      blurb:
        'A compact Go API written as an interview demonstration — idiomatic handler structure, typed responses, and a surface small enough to read end to end.',
      metrics: [],
      tags: ['Go', 'REST API'],
      href: 'https://github.com/NayakAnudeep/travel-recommendation-demo',
      label: 'GitHub',
      context: 'Personal',
    },
    {
      id: 15,
      title: 'GRE Vocab Builder',
      subtitle: 'First React project',
      blurb:
        'A flashcard app for GRE vocabulary — my first real attempt at React, written before AI assistance was around to lean on. It worked, and I used it through my own GRE prep.',
      metrics: [],
      tags: ['React', 'JavaScript'],
      href: 'https://github.com/NayakAnudeep/gre-vocab-builder-app',
      label: 'GitHub',
      context: 'Personal · 2022',
    },
    {
      id: 16,
      title: 'Linux Desktop Configs',
      subtitle: 'Hyprland and Qtile',
      blurb:
        'Window manager configurations I actually daily-drive — Hyprland with custom keybindings and workflow tuning, and a Qtile setup with themed layouts, Picom compositing, Kitty and Ranger config, and pywal theming. I like knowing how my tools work all the way down.',
      metrics: [],
      tags: ['Shell', 'Python', 'Linux', 'Hyprland', 'Qtile'],
      href: 'https://github.com/NayakAnudeep/hyprland-dotfiles',
      label: 'GitHub',
      context: 'Personal',
    },
  ];

  const workExperience = [
    {
      id: 1,
      company: 'Actualize',
      position: 'Software Engineer',
      duration: 'Oct 2025 — Present',
      location: 'Boulder, Colorado',
      note: 'One of two engineers. I own the infrastructure code.',
      responsibilities: [
        'Architected an AI agent that walks API schemas, validates them against Schemathesis, and fixes what it finds — covering 169 API classes and surfacing authentication, schema-validation and security defects in over 40 of them. Designed it around LLM-interpreted markdown test specs rather than rigid Python test files, so coverage adapts as the schema moves',
        'Built tooling that resolved 15+ confirmed security vulnerabilities across the API surface',
        'Integrated Redis caching across 18 call sites in an existing PHP API of ~371 documented operations, cutting average response time roughly 50% on cache-eligible endpoints. The bulk of that came from geoqueries, previously recomputed on every request at 5–6 seconds each, now near-instant on a warm cache',
        'Wrote the benchmark harness itself — toggling cache state and averaging response times — so the caching decision was measured rather than assumed',
        'Implemented RabbitMQ from scratch across 6 queues and 5 worker processes with graceful startup and shutdown, cutting average processing wait by over 500ms with zero message loss during deploys',
        'Took a founder prototype to MVP as an AI event-recommendation product: replaced pure RAG with hybrid dense and lexical retrieval fused by probabilistic scoring, added an MMR ranking layer to stop near-duplicate results, and labeled each step of the decision path so a recommendation can be explained',
        'Implemented OAuth2 across 3 authorization-server grant types and up to 5 configurable external identity-provider workflows',
        'Containerizing the production stack service by service — API layer, nginx, Redis, RabbitMQ — to enable horizontal scaling',
      ],
      technologies: ['PHP', 'Redis', 'RabbitMQ', 'Docker', 'OAuth2', 'Schemathesis', 'LLM APIs', 'Hybrid Retrieval', 'nginx', 'AWS'],
    },
    {
      id: 2,
      company: 'GE Healthcare',
      position: 'Software Engineer',
      duration: 'Jul 2022 — Aug 2023',
      location: 'Bangalore, India',
      note: 'Regulated manufacturing and supply chain.',
      responsibilities: [
        'Integrated a Nymi biometric wearable as the authentication mechanism for production data entry, replacing per-step password entry and reducing authentication time by 80%',
        'Delivered every feature twice — into a legacy Java system and a modern Node.js platform — maintaining parity while three factory sites migrated on their own timelines',
        'Developed and deployed 20+ features focused on operator workflow speed, and resolved 40+ defects annually across both platforms',
        'Identified and eliminated redundant repeated database queries found while working on unrelated modules — work nobody assigned',
        'Built and deployed on Azure App Services with Azure DevOps pipelines against Microsoft SQL Server',
        'Contributed to a team effort that reduced production downtime by 20% over one year on a decade-old manufacturing system',
      ],
      technologies: ['Java', 'Node.js', 'SQL', 'Azure', 'Azure DevOps', 'MS SQL Server', 'Biometric Auth'],
    },
    {
      id: 3,
      company: 'GE Renewable Energy',
      position: 'Software Engineering Intern',
      duration: 'Jan 2022 — Jun 2022',
      location: 'Bangalore, India',
      note: 'Sustained a migration through heavy team attrition.',
      responsibilities: [
        'Migrated a legacy UI four major versions from Angular 6 to Angular 11 without regressions',
        'Became the only developer on the migration workstream after senior turnover, delivering knowledge transfer to an incoming vendor team lead and keeping a seven-month project on track to completion',
        'Raised unit test coverage from 45% to 80% and reduced code duplication by 50%, both measured in SonarQube',
        'Delivered 12+ user stories in six months on a short-staffed migration, and supported sprint planning at the product manager\'s request',
        'Redesigned the ratings page to capture NPS as a KPI; the product manager reported increased participation afterwards, attributing it to a simpler flow',
      ],
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS', 'SonarQube', 'Jenkins'],
    },
  ];

  const partTime = [
    {
      id: 1,
      role: 'Graduate Scholarship Assistant',
      org: 'University of Colorado Boulder',
      duration: 'Oct 2024 — Apr 2025',
      points: [
        'Automated scholarship requirement tracking, improving turnaround and accuracy',
        'Advised students on application requirements and scholarship maintenance',
      ],
    },
    {
      id: 2,
      role: 'Student Assistant II — Catering',
      org: 'University of Colorado Boulder',
      duration: 'Feb 2024 — Dec 2024',
      points: [
        'Coordinated delivery and setup for campus events, holding quality and presentation standards',
        'Trained and supervised new staff on procedures',
      ],
    },
    {
      id: 3,
      role: 'Usher',
      org: 'Macky Auditorium, CU Boulder',
      duration: 'Sep 2023 — May 2025',
      points: [
        'Ran ticketing and guest check-in for performances',
        'Managed crowd flow and front-of-house operations during events',
      ],
    },
  ];

  /* Ordered by the priority weights in the achievement corpus. */
  const skills = {
    'Languages & Databases': ['Python', 'PHP', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Redis', 'PostgreSQL', 'MongoDB', 'Neo4j', 'ArangoDB', 'MS SQL Server', 'MySQL', 'Go', 'Rust', 'Bash', 'R'],
    'Frameworks & Libraries': ['Node.js', 'NestJS', 'Django', 'FastAPI', 'React', 'Next.js', 'Angular', 'Spring Boot', 'Pandas', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Apache Spark'],
    'AI & Retrieval': ['LLM APIs', 'RAG', 'Hybrid Retrieval', 'Vector Search', 'FAISS', 'ChromaDB', 'Agent Orchestration', 'Prompt Engineering', 'MMR Re-ranking', 'Graph Analytics'],
    'Infrastructure & Tooling': ['Docker', 'RabbitMQ', 'AWS', 'Azure', 'GCP', 'nginx', 'OAuth2', 'REST APIs', 'CI/CD', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Linux', 'Schemathesis'],
  };

  const certificates = [
    { name: 'Enterprise Design Thinking — Practitioner', issuer: 'IBM' },
    { name: 'Team Essentials for AI', issuer: 'IBM' },
    { name: 'Expressway to Data Science: R & Tidyverse Specialization', issuer: 'CU Boulder' },
    { name: 'Data Analysis with Tidyverse', issuer: 'CU Boulder' },
    { name: 'Introduction to R Programming and Tidyverse', issuer: 'CU Boulder' },
    { name: 'R Programming and Tidyverse Capstone', issuer: 'CU Boulder' },
    { name: 'Programming for Everybody (Python)', issuer: 'University of Michigan' },
    { name: 'Foundations: Data, Data, Everywhere', issuer: 'Google' },
  ];

  /* Managers and supervisors who agreed to act as references. Contact details
     are deliberately not published — recruiters request them directly. */
  const references = [
    {
      name: 'Raghav Vanmali',
      title: 'Senior Director, Technical Product Management',
      org: 'GE Healthcare',
      relation: 'Manager',
    },
    {
      name: 'Sanchayan Maity',
      title: 'Global Analytics Leader',
      org: 'GE Vernova',
      relation: 'Supervisor',
    },
    {
      name: 'Rojana Savoye',
      title: 'Front of House Director',
      org: 'Macky Auditorium, CU Boulder',
      relation: 'Supervisor',
    },
    {
      name: 'Juicy',
      title: 'Founder',
      org: 'Actualize',
      relation: 'Manager',
    },
  ];

  const navLinks = [
    ['about', 'About'],
    ['work-experience', 'Experience'],
    ['projects', 'Projects'],
    ['skills', 'Skills'],
    ['education', 'Education'],
    ['awards', 'Awards'],
    ['references', 'References'],
    ['contact', 'Contact'],
  ];

  return (
    <div className="min-h-screen bg-bg font-sans text-fg">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-bg/85 backdrop-blur-md border-b border-hair">
        <div className="flex justify-between items-center px-6 md:px-12 lg:px-20 xl:px-32 h-16">
          <a href="#about" className="font-serif text-xl tracking-tight text-fg shrink-0">
            Anudeep Nayak
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-[13px] text-muted hover:text-accent transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Phones: the desktop nav would not fit, so the links scroll sideways
            in their own strip rather than disappearing behind a menu button. */}
        <nav className="md:hidden nav-scroll flex items-center gap-5 px-6 pb-3 -mt-1">
          {navLinks.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-[13px] text-muted whitespace-nowrap shrink-0 py-1"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section id="about" className="px-6 md:px-12 lg:px-20 xl:px-32 pt-40 md:pt-44 pb-24 md:pb-28">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.35fr_1fr] gap-14 md:gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="eyebrow mb-5">Software Engineer</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-fg">
              Anudeep Nayak
            </h1>
            <div className="rule w-16 my-7" style={{ background: 'var(--accent)', height: '2px' }} />
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl">
              I build backend systems and the AI tooling around them — caching, message
              queues, retrieval pipelines, and agents that check their own work. Currently
              one of two engineers at Actualize, where I own the infrastructure. Previously
              GE Healthcare; MS in Data Science from CU Boulder.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-9">
              <a
                href="/resume/anudeep_nayak.pdf"
                download="Anudeep_Nayak_Resume.pdf"
                className="px-5 py-3 sm:py-2.5 rounded-full text-sm font-medium bg-fg text-bg hover:bg-accent transition-colors duration-200"
              >
                Résumé
              </a>
              <a
                href="https://github.com/NayakAnudeep"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 sm:py-2.5 rounded-full text-sm font-medium border border-hair-2 text-fg hover:border-accent hover:text-accent transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/Anudeep-Nayak"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 sm:py-2.5 rounded-full text-sm font-medium border border-hair-2 text-fg hover:border-accent hover:text-accent transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img
              src="/IMG_7121.PNG"
              alt="Anudeep Nayak"
              className="w-full max-w-[300px] ml-auto"
              style={{
                maskImage: 'linear-gradient(to bottom, #000 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, #000 60%, transparent 100%)',
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <Section
        id="work-experience"
        eyebrow="Experience"
        title="Where I've worked"
      >
        <motion.div className="space-y-14" {...stagger}>
          {workExperience.map((job) => (
            <motion.article key={job.id} variants={item} className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10">
              <div className="text-sm text-muted-2 md:pt-1">
                <p className="font-mono text-[12px]">{job.duration}</p>
                <p className="mt-1">{job.location}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-fg">{job.position}</h3>
                <p className="text-accent text-[15px] mt-0.5">{job.company}</p>
                {job.note && (
                  <p className="text-muted-2 text-[13px] mt-2 italic">{job.note}</p>
                )}
                <ul className="mt-4 space-y-2.5">
                  {job.responsibilities.map((r, i) => (
                    <li key={i} className="flex gap-3.5 text-muted leading-relaxed">
                      <span aria-hidden="true" className="bullet-dot" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {job.technologies.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        eyebrow="Selected work"
        title="Projects"
        intro="Retrieval systems, graph analytics, and agents that verify their own output. Figures below come from my own measurements — where a number could not be sourced, there is no number."
      >
        <motion.div className="grid sm:grid-cols-2 gap-px bg-hair border border-hair rounded-2xl overflow-hidden" {...stagger}>
          {projects.map((p) => {
            /* Only some of these have a public repo; the rest render as plain cards. */
            const Tag = p.href ? motion.a : motion.div;
            const linkProps = p.href
              ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
              <Tag
                key={p.id}
                variants={item}
                {...linkProps}
                className={`bg-bg transition-colors duration-300 p-7 flex flex-col ${
                  p.href ? 'group hover:bg-surface' : ''
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold text-fg group-hover:text-accent transition-colors duration-200">
                    {p.title}
                  </h3>
                  <span className="font-mono text-[11px] text-muted-2 shrink-0 text-right">
                    {p.context}
                  </span>
                </div>
                {p.subtitle && (
                  <p className="text-[13px] text-accent mt-1">{p.subtitle}</p>
                )}
                <p className="text-muted text-[15px] leading-relaxed mt-3 flex-1">{p.blurb}</p>

                {p.metrics.length > 0 && (
                  <dl className="flex flex-wrap gap-x-8 gap-y-3 mt-5 pt-5 border-t border-hair">
                    {p.metrics.map(([value, label]) => (
                      <div key={label}>
                        <dt className="sr-only">{label}</dt>
                        <dd>
                          <span className="block font-serif text-2xl leading-none text-fg">{value}</span>
                          <span className="block text-[11px] text-muted-2 mt-1.5 max-w-[16ch] leading-snug">
                            {label}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>

                {p.href && (
                  <span className="text-[13px] text-accent mt-5 inline-flex items-center gap-1.5">
                    {p.label}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                )}
              </Tag>
            );
          })}
        </motion.div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Toolkit" title="Skills">
        <motion.div className="space-y-9" {...stagger}>
          {Object.entries(skills).map(([group, list]) => (
            <motion.div key={group} variants={item} className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-10">
              <h3 className="text-sm font-medium text-muted-2 md:pt-1">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow="Education" title="Academic background">
        <motion.div className="space-y-10" {...stagger}>
          <motion.div variants={item} className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-10">
            <p className="font-mono text-[12px] text-muted-2 md:pt-1">Aug 2023 — May 2025</p>
            <div>
              <h3 className="text-xl font-semibold text-fg">MS, Data Science</h3>
              <p className="text-accent text-[15px] mt-0.5">University of Colorado Boulder</p>
              <p className="text-muted mt-2">GPA 3.93 · Machine learning, statistical analysis, AI systems</p>
            </div>
          </motion.div>
          <motion.div variants={item} className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-10">
            <p className="font-mono text-[12px] text-muted-2 md:pt-1">Aug 2018 — Jun 2022</p>
            <div>
              <h3 className="text-xl font-semibold text-fg">B.Tech, Computer Science and Engineering</h3>
              <p className="text-accent text-[15px] mt-0.5">Manipal Institute of Technology</p>
              <p className="text-muted mt-2">Manipal, India · Algorithms, data structures, software engineering</p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      <Section id="awards" eyebrow="Recognition" title="Awards">
        {/* Awards */}
        <motion.div {...fadeUp}>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-fg">GE Renewables DT Hackathon — First Prize</h4>
              <p className="text-muted text-[15px] mt-1">
                Resume classification system reaching 83% accuracy with KNN and custom NLP.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-fg">High Academic Performance</h4>
              <p className="text-muted text-[15px] mt-1">MS Data Science, GPA 3.93 — CU Boulder.</p>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section id="certificates" eyebrow="Credentials" title="Certificates">
        {/* Certificates */}
        <motion.div {...fadeUp}>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {certificates.map((c) => (
              <div key={c.name} className="flex justify-between gap-4 py-1">
                <span className="text-[15px] text-fg">{c.name}</span>
                <span className="text-[13px] text-muted-2 shrink-0">{c.issuer}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section id="part-time" eyebrow="Alongside study" title="Part-time roles">
        {/* Part-time */}
        <motion.div {...fadeUp}>
          <div className="space-y-7">
            {partTime.map((r) => (
              <div key={r.id} className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-10">
                <p className="font-mono text-[12px] text-muted-2 md:pt-1">{r.duration}</p>
                <div>
                  <h4 className="font-medium text-fg">
                    {r.role} <span className="text-muted-2 font-normal">· {r.org}</span>
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {r.points.map((p, i) => (
                      <li key={i} className="flex gap-3.5 text-muted text-[15px] leading-relaxed">
                        <span aria-hidden="true" className="bullet-dot bullet-dot-sm" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* References */}
      <Section
        id="references"
        eyebrow="Vouched for"
        title="References"
        intro="Managers and supervisors who have agreed to speak to my work. Contact details available on request."
      >
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10" {...stagger}>
          {references.map((r) => (
            <motion.div key={r.name} variants={item}>
              <p className="eyebrow mb-2">{r.relation}</p>
              <h3 className="text-[17px] font-semibold text-fg leading-snug">{r.name}</h3>
              <p className="text-muted text-[15px] mt-1.5 leading-snug">{r.title}</p>
              <p className="text-muted-2 text-[13px] mt-1.5">{r.org}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-12 lg:px-20 xl:px-32 pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden bg-fg">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <div className="section-marker section-marker-dark mb-5">
              <span className="eyebrow eyebrow-accent eyebrow-on-dark">Contact</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-bg tracking-tight">
              Let's work together
            </h2>
            <p className="text-muted-2 text-lg mt-4 max-w-xl leading-relaxed">
              Open to full-time software engineering roles. The fastest way to reach me is email.
            </p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 pt-12 border-t border-white/10" {...stagger}>
            {[
              ['Email', 'anudeep.nayak@protonmail.com', 'mailto:anudeep.nayak@protonmail.com'],
              ['Phone', '+91 99458 30497', 'tel:+919945830497'],
              ['LinkedIn', 'in/Anudeep-Nayak', 'https://linkedin.com/in/Anudeep-Nayak'],
              ['GitHub', 'NayakAnudeep', 'https://github.com/NayakAnudeep'],
            ].map(([label, value, href]) => (
              <motion.div key={label} variants={item}>
                <p className="eyebrow mb-2" style={{ color: 'var(--muted)' }}>{label}</p>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-bg text-[15px] hover:text-accent transition-colors duration-200 break-words"
                >
                  {value}
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.p className="text-muted text-[13px] mt-16 pt-8 border-t border-white/10" {...fadeUp}>
            References available on request. © {new Date().getFullYear()} Anudeep Nayak.
          </motion.p>
        </div>
      </section>
    </div>
  );
}

export default App;
