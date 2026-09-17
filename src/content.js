// Portfolio evidence from resume_generator/LLM/reference/seed_anudeep.yaml.
// Preserve attribution, measurement scope, and development status.
export const projects = [
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

export const workExperience = [
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
        'Migrated a legacy UI from Angular 6 to Angular 11 without regressions',
        'Became the only developer on the migration workstream after senior turnover, delivering knowledge transfer to an incoming vendor team lead and keeping a seven-month project on track to completion',
        'Raised unit test coverage from 45% to 80% and reduced code duplication by 50%, both measured in SonarQube',
        'Delivered 12+ user stories in six months on a short-staffed migration, and supported sprint planning at the product manager\'s request',
        'Redesigned the ratings page to capture NPS as a KPI; the product manager reported increased participation afterwards, attributing it to a simpler flow',
      ],
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS', 'SonarQube', 'Jenkins'],
    },
  ];

export const partTime = [
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
export const skills = {
    'Languages & Databases': ['Python', 'PHP', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Redis', 'PostgreSQL', 'MongoDB', 'Neo4j', 'ArangoDB', 'MS SQL Server', 'MySQL', 'Go', 'Rust', 'Bash', 'R'],
    'Frameworks & Libraries': ['Node.js', 'NestJS', 'Django', 'FastAPI', 'React', 'Next.js', 'Angular', 'Spring Boot', 'Pandas', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Apache Spark'],
    'AI & Retrieval': ['LLM APIs', 'RAG', 'Hybrid Retrieval', 'Vector Search', 'FAISS', 'ChromaDB', 'Agent Orchestration', 'Prompt Engineering', 'MMR Re-ranking', 'Graph Analytics'],
    'Infrastructure & Tooling': ['Docker', 'RabbitMQ', 'AWS', 'Azure', 'GCP', 'nginx', 'OAuth2', 'REST APIs', 'CI/CD', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Linux', 'Schemathesis'],
  };

export const certificates = [
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
export const references = [
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

