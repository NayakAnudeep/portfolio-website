import { useState } from 'react';

function App() {
  const projects = [
    {
      id: 1,
      title: "MedLegit",
      description: "AI-Powered Healthcare Compliance System with FastAPI backend and PostgreSQL database. JWT authentication, RBAC across 3 user tiers, ML fraud detection 89% accuracy, CNN pneumonia classifier 92% accuracy.",
      technologies: ["React", "FastAPI", "PostgreSQL", "ML/DL", "JWT"],
      github: "https://github.com/samarthnayak",
      color: "neon-pink"
    },
    {
      id: 2,
      title: "FlowGate",
      description: "Enterprise Approval Workflow System with Node.js backend. Role-based access control across 3 user roles, server-side state machine, JWT + HTTP-only cookies for XSS protection.",
      technologies: ["Node.js", "React", "MongoDB", "Docker", "JWT"],
      github: "https://github.com/samarthnayak",
      color: "neon-cyan"
    },
    {
      id: 3,
      title: "ZenHRV",
      description: "AI-Based Meditation Performance Analyzer using MERN stack. REST APIs for biometric ingestion, Random Forest stress-inference model 85% accuracy, HRV analytics dashboard.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "ML"],
      github: "https://github.com/samarthnayak",
      color: "neon-purple"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-[#050810] text-cyan-400 scanlines" style={{ fontFamily: 'Orbitron, sans-serif' }}>
      {/* Retro Grid Background */}
      <div className="fixed inset-0 retro-grid opacity-30 pointer-events-none" />

      {/* Animated Lines */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF10F0] to-transparent opacity-30 retro-wave" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-30 retro-wave" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BD00FF] to-transparent opacity-30 retro-wave" style={{ animationDelay: '4s' }} />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[#050810]/90 border-b-2 neon-border-cyan">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl md:text-2xl font-bold neon-text-pink" style={{ fontFamily: 'Press Start 2P, cursive', fontSize: 'clamp(12px, 3vw, 20px)' }}>
              &lt;SAMARTH/&gt;
            </div>
            <nav className="hidden md:flex space-x-6" style={{ fontFamily: 'VT323, monospace', fontSize: '24px' }}>
              {['ABOUT', 'SKILLS', 'WORK', 'PROJECTS', 'CONTACT'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-cyan-400 hover:neon-text-pink transition-all duration-200 relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  [{item}]
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-8">
            {/* Glitch Title */}
            <div className="mb-12">
              <div className="inline-block px-6 py-3 neon-border-pink bg-[#FF10F0]/10 mb-8" style={{ fontFamily: 'VT323, monospace', fontSize: '28px' }}>
                <span className="neon-text-green">▶ STATUS: AVAILABLE FOR HIRE</span>
              </div>

              <h1 className="text-5xl md:text-8xl font-bold mb-6 glitch neon-text-pink" style={{ fontFamily: 'Press Start 2P, cursive', lineHeight: '1.3' }}>
                SAMARTH<br/>NAYAK
              </h1>

              <div className="text-2xl md:text-4xl neon-text-cyan mb-6" style={{ fontFamily: 'VT323, monospace' }}>
                &gt; FULL-STACK DEV + ML WIZARD_
              </div>

              <p className="text-lg md:text-xl text-cyan-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Computer Science grad @ Dayananda Sagar Institutions<br/>
                Building production-ready systems with clean code + intelligent solutions
              </p>
            </div>

            {/* Retro Buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/resume/samarth_resume.pdf"
                download
                className="retro-button neon-border-cyan px-8 py-4 text-cyan-400 hover:bg-[#00F0FF]/20 transition-all duration-300 text-lg font-bold uppercase"
                style={{ fontFamily: 'Press Start 2P, cursive', fontSize: '14px' }}
              >
                [DOWNLOAD_CV]
              </a>
              <a
                href="#contact"
                className="retro-button neon-border-pink px-8 py-4 text-[#FF10F0] hover:bg-[#FF10F0]/20 transition-all duration-300 text-lg font-bold uppercase"
                style={{ fontFamily: 'Press Start 2P, cursive', fontSize: '14px' }}
              >
                [CONNECT]
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-8 pt-8">
              <a href="https://github.com/samarthnayak" target="_blank" rel="noopener noreferrer" className="neon-text-cyan hover:neon-text-pink transition-colors transform hover:scale-110 duration-200">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/samarth-nayak" target="_blank" rel="noopener noreferrer" className="neon-text-cyan hover:neon-text-pink transition-colors transform hover:scale-110 duration-200">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <div className="neon-text-cyan hover:neon-text-pink transition-colors transform hover:scale-110 duration-200 font-bold text-2xl cursor-pointer" style={{ fontFamily: 'Press Start 2P, cursive' }}>
                LC
              </div>
            </div>

            {/* Retro Photo Frame */}
            <div className="pt-12">
              <div className="inline-block neon-border-purple p-2 bg-[#BD00FF]/10">
                <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden bg-[#0A0E27]">
                  <img
                    src="/samarth_photo.jpg"
                    alt="Samarth Nayak"
                    className="w-full h-full object-cover"
                    style={{ filter: 'contrast(1.2) saturate(0.8)' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-9xl">👾</div>';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6 md:px-12 bg-[#0A0E27]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold neon-text-cyan mb-4" style={{ fontFamily: 'Press Start 2P, cursive', lineHeight: '1.5' }}>
              [TECH_STACK]
            </h2>
            <p className="text-xl neon-text-purple" style={{ fontFamily: 'VT323, monospace', fontSize: '28px' }}>
              &gt; LOADING SKILLS.EXE...
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Languages */}
            <div className="retro-card neon-border-pink p-6 bg-[#050810]/80">
              <h3 className="text-2xl font-bold neon-text-pink mb-6 text-center" style={{ fontFamily: 'Press Start 2P, cursive', fontSize: '16px' }}>
                LANGUAGES
              </h3>
              <div className="space-y-3" style={{ fontFamily: 'VT323, monospace', fontSize: '24px' }}>
                {['C/C++', 'JavaScript', 'Python', 'PostgreSQL', 'MongoDB', 'MySQL'].map((skill) => (
                  <div key={skill} className="text-cyan-300 hover:neon-text-yellow transition-all cursor-pointer">
                    &gt; {skill}_
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="retro-card neon-border-cyan p-6 bg-[#050810]/80">
              <h3 className="text-2xl font-bold neon-text-cyan mb-6 text-center" style={{ fontFamily: 'Press Start 2P, cursive', fontSize: '16px' }}>
                FRAMEWORKS
              </h3>
              <div className="space-y-3" style={{ fontFamily: 'VT323, monospace', fontSize: '24px' }}>
                {['Node.js', 'React.js', 'Express.js', 'FastAPI', 'Tailwind', 'Dialogflow', 'OpenCV'].map((skill) => (
                  <div key={skill} className="text-cyan-300 hover:neon-text-yellow transition-all cursor-pointer">
                    &gt; {skill}_
                  </div>
                ))}
              </div>
            </div>

            {/* Concepts */}
            <div className="retro-card neon-border-purple p-6 bg-[#050810]/80">
              <h3 className="text-2xl font-bold neon-text-purple mb-6 text-center" style={{ fontFamily: 'Press Start 2P, cursive', fontSize: '16px' }}>
                CONCEPTS
              </h3>
              <div className="space-y-3" style={{ fontFamily: 'VT323, monospace', fontSize: '24px' }}>
                {['Docker', 'Git', 'REST APIs', 'JWT', 'DSA', 'ML/DL', 'System Design'].map((skill) => (
                  <div key={skill} className="text-cyan-300 hover:neon-text-yellow transition-all cursor-pointer">
                    &gt; {skill}_
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work" className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold neon-text-pink mb-4" style={{ fontFamily: 'Press Start 2P, cursive', lineHeight: '1.5' }}>
              [EXPERIENCE]
            </h2>
          </div>

          <div className="retro-card neon-border-cyan p-8 md:p-12 bg-[#0A0E27]/80 vhs-effect">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold neon-text-cyan mb-2" style={{ fontFamily: 'Press Start 2P, cursive', fontSize: '18px', lineHeight: '1.8' }}>
                  SOFTWARE DEV INTERN
                </h3>
                <h4 className="text-xl neon-text-purple mb-3" style={{ fontFamily: 'VT323, monospace', fontSize: '28px' }}>
                  &gt; Quantum Coherence Technologies Pvt. Ltd
                </h4>
                <p className="text-cyan-400 mb-6" style={{ fontFamily: 'VT323, monospace', fontSize: '24px' }}>
                  Feb 2025 - Jul 2025 | Bengaluru, India
                </p>
              </div>

              <div className="space-y-4" style={{ fontFamily: 'VT323, monospace', fontSize: '22px' }}>
                <div className="text-cyan-300 leading-relaxed">
                  ▹ Built Dialogflow ES webhook logic in Node.js achieving 91% intent routing accuracy
                </div>
                <div className="text-cyan-300 leading-relaxed">
                  ▹ Engineered core backend features for MERN meditation & stress analytics PWA
                </div>
                <div className="text-cyan-300 leading-relaxed">
                  ▹ Integrated ML inference for per-session personalised feedback
                </div>
                <div className="text-cyan-300 leading-relaxed">
                  ▹ Built real-time signal processing module using Python + OpenCV
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-6">
                {['Node.js', 'MERN', 'Dialogflow', 'Python', 'OpenCV', 'ML'].map((tech) => (
                  <span key={tech} className="px-4 py-2 neon-border-pink bg-[#FF10F0]/10 text-[#FF10F0] text-sm" style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}>
                    [{tech}]
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6 md:px-12 bg-[#0A0E27]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold neon-text-purple mb-4" style={{ fontFamily: 'Press Start 2P, cursive', lineHeight: '1.5' }}>
              [PROJECTS]
            </h2>
            <p className="text-xl neon-text-cyan" style={{ fontFamily: 'VT323, monospace', fontSize: '28px' }}>
              &gt; SELECT PROJECT: {currentIndex + 1}/3
            </p>
          </div>

          <div className="relative">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${index === currentIndex ? 'block' : 'hidden'} transition-all duration-500`}
              >
                <div className={`retro-card neon-border-${project.color} p-8 md:p-12 bg-[#050810]/90 vhs-effect`}>
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold neon-text-yellow mb-4" style={{ fontFamily: 'Press Start 2P, cursive', lineHeight: '1.8' }}>
                      {project.title}
                    </h3>
                    <p className="text-lg md:text-xl text-cyan-300 leading-relaxed" style={{ fontFamily: 'VT323, monospace', fontSize: '24px' }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-4 py-2 neon-border-cyan bg-[#00F0FF]/10 text-cyan-400 text-sm" style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}>
                          [{tech}]
                        </span>
                      ))}
                    </div>

                    <div className="pt-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-button neon-border-pink px-8 py-4 text-[#FF10F0] hover:bg-[#FF10F0]/20 transition-all inline-block"
                        style={{ fontFamily: 'Press Start 2P, cursive', fontSize: '14px' }}
                      >
                        [VIEW_PROJECT]
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation */}
            <div className="flex justify-center items-center gap-8 mt-12">
              <button
                onClick={prevProject}
                className="w-16 h-16 neon-border-cyan bg-[#00F0FF]/10 hover:bg-[#00F0FF]/30 transition-all text-cyan-400 text-3xl font-bold"
              >
                ◄
              </button>

              <div className="flex gap-4">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-4 h-4 transition-all ${
                      index === currentIndex
                        ? 'neon-border-pink bg-[#FF10F0] w-12'
                        : 'neon-border-cyan bg-transparent'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                className="w-16 h-16 neon-border-cyan bg-[#00F0FF]/10 hover:bg-[#00F0FF]/30 transition-all text-cyan-400 text-3xl font-bold"
              >
                ►
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold neon-text-yellow mb-4" style={{ fontFamily: 'Press Start 2P, cursive', lineHeight: '1.5' }}>
              [ACHIEVEMENTS]
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏆', title: '2ND PLACE', desc: 'Tic Tac Code DSA', border: 'neon-border-yellow' },
              { icon: '🎤', title: 'DELEGATE', desc: 'Tech Summit 2024', border: 'neon-border-cyan' },
              { icon: '👥', title: 'COORDINATOR', desc: 'Algosphere Club', border: 'neon-border-purple' }
            ].map((achievement, index) => (
              <div key={index} className={`retro-card ${achievement.border} p-8 bg-[#0A0E27]/80 text-center vhs-effect hover:scale-105 transition-transform`}>
                <div className="text-7xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold neon-text-pink mb-2" style={{ fontFamily: 'Press Start 2P, cursive', fontSize: '14px', lineHeight: '1.8' }}>
                  {achievement.title}
                </h3>
                <p className="text-cyan-400" style={{ fontFamily: 'VT323, monospace', fontSize: '22px' }}>
                  {achievement.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 md:px-12 bg-[#0A0E27]/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold neon-text-pink mb-8 glitch" style={{ fontFamily: 'Press Start 2P, cursive', lineHeight: '1.5' }}>
            [CONNECT]
          </h2>

          <div className="inline-block neon-border-green px-8 py-4 bg-[#00FF41]/10 mb-12" style={{ fontFamily: 'VT323, monospace', fontSize: '28px' }}>
            <span className="neon-text-green">STATUS: READY TO WORK</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:samarthnayak04@gmail.com"
              className="retro-card neon-border-cyan p-6 bg-[#050810]/80 hover:bg-[#00F0FF]/10 transition-all text-left"
            >
              <div className="text-cyan-400 mb-2" style={{ fontFamily: 'Press Start 2P, cursive', fontSize: '12px' }}>
                EMAIL
              </div>
              <div className="neon-text-cyan" style={{ fontFamily: 'VT323, monospace', fontSize: '22px' }}>
                samarthnayak04@gmail.com
              </div>
            </a>

            <a
              href="tel:+917977534214"
              className="retro-card neon-border-pink p-6 bg-[#050810]/80 hover:bg-[#FF10F0]/10 transition-all text-left"
            >
              <div className="text-[#FF10F0] mb-2" style={{ fontFamily: 'Press Start 2P, cursive', fontSize: '12px' }}>
                PHONE
              </div>
              <div className="neon-text-pink" style={{ fontFamily: 'VT323, monospace', fontSize: '22px' }}>
                +91 7977534214
              </div>
            </a>
          </div>

          <div className="text-cyan-400 text-sm" style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}>
            &gt; DESIGNED WITH RETRO VIBES ☕ • REACT + TAILWIND_
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 neon-border-purple py-8 text-center">
        <p className="neon-text-purple" style={{ fontFamily: 'VT323, monospace', fontSize: '24px' }}>
          &copy; 2025 SAMARTH NAYAK • ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}

export default App;
