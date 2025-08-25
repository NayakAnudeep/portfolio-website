import { useState } from 'react';

function App() {
  const projects = [
    {
      id: 1,
      title: "Journal Buddy",
      description: "AI-powered mental health journaling platform using Django and Neo4j graph database. Features intelligent pattern recognition in journal entries, personalized insights for mood tracking, and therapeutic prompts based on user responses. Built with privacy-first architecture and deployed on Railway with Neo4j AuraDB integration.",
      technologies: ["Django", "Neo4j", "Python", "Mental Health Tech", "AuraDB", "AI Pattern Recognition", "Railway Deployment"],
      github: "https://journalbuddy.up.railway.app/"
    },
    {
      id: 2,
      title: "AniTA Network (AI TA)",
      description: "Educational Network Analysis Dashboard with Django-based visualization for analyzing relationships between students, instructors, and courses. Features network theory modeling, interactive visualizations, and performance analytics with data simulation capabilities.",
      technologies: ["Django", "NetworkX", "Python", "Data Visualization", "Network Analysis", "Educational Analytics"],
      github: "https://github.com/NayakAnudeep/network-project"
    },
    {
      id: 3,
      title: "Clearhead",
      description: "Smart Todo app specifically designed for people with ADHD using React Native and Expo. Features Random Forest algorithm for smart categorization, priority-based task sorting, minimal distractions interface, and shows only top 3 tasks to reduce overwhelm.",
      technologies: ["React Native", "Expo", "TypeScript", "Random Forest", "Cross-platform", "ADHD-focused Design"],
      github: "https://github.com/NayakAnudeep/Clearhead"
    },
    {
      id: 4,
      title: "LLM-Powered Dota Chat",
      description: "Advanced LLM-powered search system providing context-based answers for Dota 2 players. Enhanced version with improved accuracy and contextual understanding using modern language models for game-specific queries.",
      technologies: ["Python", "LLM Integration", "Context Search", "Game Analytics", "Natural Language Processing"],
      github: "https://github.com/NayakAnudeep/LLM-powered-dota-chat"
    },
    {
      id: 5,
      title: "Mail-buddy",
      description: "AI-powered email automation system that helps craft professional emails to avoid spam filters. Features multi-AI provider support (Claude, OpenAI, Gemini), smart role detection for tech positions, and bulk processing capabilities for job applications.",
      technologies: ["Node.js", "JavaScript", "Claude API", "OpenAI GPT", "Google Gemini", "Email APIs", "Web Interface"],
      github: "https://github.com/NayakAnudeep/Mail-buddy"
    },
    {
      id: 6,
      title: "Audio Emotion Analysis",
      description: "System that converts audio to text and analyzes emotional undertones in the transcribed content. Utilizes Speech-to-Text capabilities combined with sentiment analysis for comprehensive audio emotion detection.",
      technologies: ["Python", "Jupyter Notebook", "NLP", "Audio Processing", "Sentiment Analysis", "Speech-to-Text"],
      github: "https://github.com/NayakAnudeep/audio_emotion_analysis"
    },
    {
      id: 7,
      title: "Email Resume Automation",
      description: "Automated system to send personalized emails to recruiters and hiring managers with resume attachments, streamlining the job application process with template management and bulk sending capabilities.",
      technologies: ["Python", "Email APIs", "Automation", "Template Management", "CSV Processing"],
      github: "https://github.com/NayakAnudeep/email_resume"
    },
    {
      id: 8,
      title: "Movie Guesser",
      description: "Machine learning system that predicts movies based on user preferences using collaborative filtering techniques and recommendation algorithms to provide personalized movie suggestions.",
      technologies: ["Python", "Jupyter Notebook", "Machine Learning", "Collaborative Filtering", "Recommendation Systems", "Data Science"],
      github: "https://github.com/NayakAnudeep/movieGuesser"
    },
    {
      id: 9,
      title: "Movie Runtime vs Commercial Success",
      description: "Data analysis project exploring the correlation between movie runtime and commercial success using statistical methods, data visualization, and predictive modeling techniques.",
      technologies: ["Python", "Data Analysis", "Statistical Modeling", "Data Visualization", "Pandas", "Matplotlib"],
      github: "https://github.com/NayakAnudeep/movie-runtime-vs-commercial-success"
    },
    {
      id: 10,
      title: "GRE Vocab Builder App",
      description: "Interactive vocabulary building application designed for GRE preparation. Features spaced repetition, progress tracking, and personalized learning to help users master challenging vocabulary efficiently.",
      technologies: ["JavaScript", "Web Development", "Local Storage", "Interactive UI", "Educational Technology"],
      github: "https://github.com/NayakAnudeep/gre-vocab-builder-app"
    },
    {
      id: 11,
      title: "Hyprland Dotfiles",
      description: "Custom configuration files for Hyprland window manager, featuring optimized workflows, custom keybindings, and aesthetic improvements for enhanced Linux desktop productivity.",
      technologies: ["Shell Scripting", "Linux", "Hyprland", "Window Manager", "System Configuration", "Productivity Tools"],
      github: "https://github.com/NayakAnudeep/hyprland-dotfiles"
    }
  ];

  const workExperience = [
    {
      id: 1,
      company: "GE Healthcare",
      position: "Software Engineer",
      duration: "July 2022 - August 2023",
      location: "Bangalore, India",
      responsibilities: [
        "Led the end-to-end development of over 20 features using Java, Vaadin, REST API, and SQL, improving product functionality and efficiency",
        "Successfully employed NYMI APIs collaborating with the client, a system to authenticate supply chain data entries, reducing time to authenticate the signature by over 80%",
        "Resolved 40+ bugs within a year to ensure system stability and seamless operation. Collaborative team effort in bug resolution reduced downtime by over 20%",
        "Played a key role in deployment, version control and code reviews, resolved critical bugs promptly to ensure zero downtime and updated relevant documentation"
      ],
      technologies: ["Java", "Vaadin", "REST API", "SQL", "NYMI APIs"]
    },
    {
      id: 2,
      company: "GE Renewable Energy",
      position: "Software Engineering Intern",
      duration: "January 2022 - June 2022",
      location: "Bangalore, India",
      responsibilities: [
        "Designed and implemented a modernized user interface using Angular 11 from Angular 6 using HTML5, CSS and TypeScript, completing over 12 user stories in span of 6 months",
        "Built a model that categorizes incoming inconsistent data into the right categories using fuzzy logic with 98% accuracy, reducing data inconsistency in system",
        "Helped the team with code cleanup and unit testing, resulting in SonarQube Metrics for coverage going up from 45% to 80%, duplication decreasing from 10% to 5%",
        "Developed and designed a ratings page to capture NPS as a KPI index. The redesign increased the number of people giving ratings by 10%"
      ],
      technologies: ["Angular 11", "HTML5", "CSS", "TypeScript", "Fuzzy Logic", "SonarQube"]
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
    <div className="min-h-screen bg-off-white font-poppins">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-off-white/95 backdrop-blur-sm flex justify-between items-center px-6 md:px-12 lg:px-20 xl:px-32 py-8">
        <div className="text-2xl font-bold text-gray-dark">
          Anudeep
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-dark hover:text-gray-light transition-colors duration-200">About</a>
          <a href="#skills" className="text-gray-dark hover:text-gray-light transition-colors duration-200">Skills</a>
          <a href="#education" className="text-gray-dark hover:text-gray-light transition-colors duration-200">Education</a>
          <a href="#work-experience" className="text-gray-dark hover:text-gray-light transition-colors duration-200">Experience</a>
          <a href="#projects" className="text-gray-dark hover:text-gray-light transition-colors duration-200">Projects</a>
          <a href="#part-time" className="text-gray-dark hover:text-gray-light transition-colors duration-200">Part-time</a>
          <a href="#certificates" className="text-gray-dark hover:text-gray-light transition-colors duration-200">Certificates</a>
          <a href="#contact" className="text-gray-dark hover:text-gray-light transition-colors duration-200">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="px-6 md:px-12 lg:px-20 xl:px-32 py-24 md:py-32 pt-32 md:pt-40">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-light text-xl">Hey there! I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-dark leading-tight">
                Anudeep Nayak
              </h1>
              <a 
                href="/resume/anudeep_swp.pdf" 
                download="Anudeep_Nayak_Resume.pdf"
                className="bg-gray-dark text-off-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-light transition-colors duration-200 w-fit"
              >
                Resume
              </a>
            </div>
            
            <div className="flex items-start space-x-4">
              <img 
                src="/black-cat.png" 
                alt="Black cat icon" 
                className="w-8 h-8 mt-1 flex-shrink-0"
              />
              <p className="text-gray-dark text-xl leading-relaxed">
                Data Science MS candidate with software engineering experience at GE Healthcare, combining AI/ML expertise and full-stack development skills.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-96 md:w-96 md:h-[500px]">
              <img 
                src="/IMG_7121.PNG" 
                alt="Anudeep Nayak" 
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                style={{
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 md:px-12 lg:px-20 xl:px-32 py-28 bg-gray-light/10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <img src="/cat_skills.png" alt="Skills" className="w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark">Technical Skills</h2>
          </div>
          <p className="text-gray-light text-xl text-center">
            Technologies and tools I work with to build impactful solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Languages & Database */}
          <div>
            <h3 className="text-2xl font-bold text-gray-dark mb-6 text-center">Languages & Database</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-200 transition-colors duration-200">
                Python
              </span>
              <span className="bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-orange-200 transition-colors duration-200">
                Java
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-yellow-200 transition-colors duration-200">
                Javascript
              </span>
              <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-200 transition-colors duration-200">
                Typescript
              </span>
              <span className="bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-200 transition-colors duration-200">
                SQL
              </span>
              <span className="bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-green-200 transition-colors duration-200">
                Django
              </span>
              <span className="bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-orange-200 transition-colors duration-200">
                MySQL
              </span>
              <span className="bg-cyan-100 text-cyan-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-cyan-200 transition-colors duration-200">
                React
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-emerald-200 transition-colors duration-200">
                Neo4j
              </span>
              <span className="bg-teal-100 text-teal-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-teal-200 transition-colors duration-200">
                AuraDB
              </span>
              <span className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-200 transition-colors duration-200">
                ArangoDB
              </span>
              <span className="bg-pink-100 text-pink-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-pink-200 transition-colors duration-200">
                AQL
              </span>
              <span className="bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-green-200 transition-colors duration-200">
                R
              </span>
              <span className="bg-red-100 text-red-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-red-200 transition-colors duration-200">
                HTML
              </span>
              <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-200 transition-colors duration-200">
                CSS
              </span>
              <span className="bg-red-100 text-red-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-red-200 transition-colors duration-200">
                Redis
              </span>
            </div>
          </div>

          {/* Tools & Technology */}
          <div>
            <h3 className="text-2xl font-bold text-gray-dark mb-6 text-center">Tools & Technology</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-slate-100 text-slate-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-slate-200 transition-colors duration-200">
                Git
              </span>
              <span className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                Github
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-emerald-200 transition-colors duration-200">
                Agile
              </span>
              <span className="bg-teal-100 text-teal-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-teal-200 transition-colors duration-200">
                CI/CD
              </span>
              <span className="bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-amber-200 transition-colors duration-200">
                Jenkins
              </span>
              <span className="bg-lime-100 text-lime-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-lime-200 transition-colors duration-200">
                REST APIs
              </span>
              <span className="bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-orange-200 transition-colors duration-200">
                AWS
              </span>
              <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-200 transition-colors duration-200">
                Azure Cloud
              </span>
              <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-200 transition-colors duration-200">
                IBM Cloud
              </span>
              <span className="bg-red-100 text-red-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-red-200 transition-colors duration-200">
                GCP
              </span>
              <span className="bg-cyan-100 text-cyan-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-cyan-200 transition-colors duration-200">
                Docker
              </span>
              <span className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-200 transition-colors duration-200">
                Kafka
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="px-6 md:px-12 lg:px-20 xl:px-32 py-28">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <img src="/cat_education.png" alt="Education" className="w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark">Education</h2>
          </div>
          <p className="text-gray-light text-xl text-center">
            My academic background in Computer Science and Data Science.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Masters Degree */}
          <div className="bg-off-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-dark mb-2">MS in Data Science</h3>
                <h4 className="text-xl text-gray-light font-medium mb-1">University of Colorado Boulder</h4>
                <p className="text-gray-light">GPA: 3.93</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="bg-gray-dark text-off-white px-4 py-2 rounded-full text-sm font-medium">
                  August 2023 - May 2025
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Data Science</span>
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Machine Learning</span>
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">AI</span>
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Statistical Analysis</span>
            </div>
          </div>

          {/* Bachelors Degree */}
          <div className="bg-off-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-dark mb-2">B. Tech in Computer Science and Engineering</h3>
                <h4 className="text-xl text-gray-light font-medium mb-1">Manipal Institute of Technology</h4>
                <p className="text-gray-light">Manipal, India</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="bg-gray-dark text-off-white px-4 py-2 rounded-full text-sm font-medium">
                  August 2018 - June 2022
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Computer Science</span>
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Software Engineering</span>
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Algorithms</span>
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Data Structures</span>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work-experience" className="px-6 md:px-12 lg:px-20 xl:px-32 py-28 bg-gray-light/10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <img src="/cat_work_experience.png" alt="Work Experience" className="w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark">Work Experience</h2>
          </div>
          <p className="text-gray-light text-xl text-center">
            My professional journey and the impact I've made at various organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {workExperience.map((job, index) => (
            <div key={job.id} className="relative">
              {/* Timeline line */}
              {index !== workExperience.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gray-light/30"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gray-dark rounded-full"></div>
              
              {/* Content */}
              <div className="ml-16 mb-16">
                <div className="bg-off-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-dark mb-2">{job.position}</h3>
                      <h4 className="text-xl text-gray-light font-medium mb-1">{job.company}</h4>
                      <p className="text-gray-light">{job.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-gray-dark text-off-white px-4 py-2 rounded-full text-sm font-medium">
                        {job.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-dark mb-3">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gray-dark mr-2 mt-1">•</span>
                          <span className="text-gray-light leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-gray-dark mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, idx) => {
                        const colorClasses = [
                          "bg-blue-100 text-blue-800",
                          "bg-orange-100 text-orange-800", 
                          "bg-yellow-100 text-yellow-800",
                          "bg-indigo-100 text-indigo-800",
                          "bg-cyan-100 text-cyan-800",
                          "bg-purple-100 text-purple-800",
                          "bg-pink-100 text-pink-800",
                          "bg-green-100 text-green-800",
                          "bg-red-100 text-red-800",
                          "bg-slate-100 text-slate-800",
                          "bg-emerald-100 text-emerald-800",
                          "bg-teal-100 text-teal-800"
                        ];
                        const colorClass = colorClasses[idx % colorClasses.length];
                        return (
                          <span key={idx} className={`${colorClass} px-3 py-1 rounded-full text-sm font-medium hover:opacity-80 transition-opacity duration-200`}>
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="px-6 md:px-12 lg:px-20 xl:px-32 py-28">
        <div>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <img src="/cat_projects.png" alt="Projects" className="w-8 h-8 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark">Featured Projects</h2>
            </div>
            <p className="text-gray-light text-xl text-center leading-relaxed">
              Here are some of my recent works that showcase my skills and experience.
            </p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-dark text-off-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-light transition-colors duration-200 shadow-lg"
            >
              ←
            </button>
            <button 
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-dark text-off-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-light transition-colors duration-200 shadow-lg"
            >
              →
            </button>

            {/* Projects Container */}
            <div className="overflow-hidden mx-16">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-off-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 max-w-2xl mx-auto">
                      <div className="p-10 space-y-6">
                        <h3 className="text-3xl font-bold text-gray-dark">{project.title}</h3>
                        <p className="text-gray-light text-lg leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, index) => {
                            const colorClasses = [
                              "bg-blue-100 text-blue-800",
                              "bg-orange-100 text-orange-800", 
                              "bg-yellow-100 text-yellow-800",
                              "bg-indigo-100 text-indigo-800",
                              "bg-cyan-100 text-cyan-800",
                              "bg-purple-100 text-purple-800",
                              "bg-pink-100 text-pink-800",
                              "bg-green-100 text-green-800",
                              "bg-red-100 text-red-800",
                              "bg-slate-100 text-slate-800",
                              "bg-emerald-100 text-emerald-800",
                              "bg-teal-100 text-teal-800"
                            ];
                            const colorClass = colorClasses[index % colorClasses.length];
                            return (
                              <span key={index} className={`${colorClass} px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity duration-200`}>
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                        <div className="flex gap-6 pt-4">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-dark hover:text-gray-light transition-colors duration-200 font-medium">
                            {project.github.includes('github.com') ? 'GitHub →' : 'Website →'}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-gray-dark' : 'bg-gray-light/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Part-time Roles Section */}
      <section id="part-time" className="px-6 md:px-12 lg:px-20 xl:px-32 py-28 bg-gray-light/10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <img src="/cat_part_time.png" alt="Part-time" className="w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark">Part-time Roles</h2>
          </div>
          <p className="text-gray-light text-xl text-center">
            Additional work experience during my graduate studies at University of Colorado Boulder.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Usher Position */}
          <div className="bg-off-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-dark mb-2">Usher</h3>
                <h4 className="text-xl text-gray-light font-medium mb-1">Macky Auditorium, University of Colorado Boulder</h4>
                <p className="text-gray-light">Boulder, CO</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="bg-gray-dark text-off-white px-4 py-2 rounded-full text-sm font-medium">
                  September 2023 - May 2025
                </span>
              </div>
            </div>
            
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-gray-dark mb-3">Key Responsibilities:</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-dark mr-2 mt-1">•</span>
                  <span className="text-gray-light leading-relaxed">Managed ticketing operations and guest check-in processes for events at Macky Auditorium</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-dark mr-2 mt-1">•</span>
                  <span className="text-gray-light leading-relaxed">Provided exceptional customer service and assistance to guests attending performances and events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-dark mr-2 mt-1">•</span>
                  <span className="text-gray-light leading-relaxed">Ensured smooth event operations and maintained crowd control during performances</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Customer Service</span>
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Event Management</span>
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Ticketing Systems</span>
            </div>
          </div>

          {/* Student Assistant II */}
          <div className="bg-off-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-dark mb-2">Student Assistant II - Catering</h3>
                <h4 className="text-xl text-gray-light font-medium mb-1">University of Colorado Boulder</h4>
                <p className="text-gray-light">Boulder, CO</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="bg-gray-dark text-off-white px-4 py-2 rounded-full text-sm font-medium">
                  February 2024 - December 2024
                </span>
              </div>
            </div>
            
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-gray-dark mb-3">Key Responsibilities:</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-dark mr-2 mt-1">•</span>
                  <span className="text-gray-light leading-relaxed">Ensured food quality and proper presentation standards for university catering events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-dark mr-2 mt-1">•</span>
                  <span className="text-gray-light leading-relaxed">Coordinated food delivery and setup for various campus events and functions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-dark mr-2 mt-1">•</span>
                  <span className="text-gray-light leading-relaxed">Managed event operations and supervised new employees as Student Assistant II</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-dark mr-2 mt-1">•</span>
                  <span className="text-gray-light leading-relaxed">Mentored and trained new catering staff members on procedures and standards</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Team Leadership</span>
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Event Coordination</span>
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Quality Control</span>
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Mentoring</span>
            </div>
          </div>

          {/* Graduate Scholarship Assistant */}
          <div className="bg-off-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-dark mb-2">Graduate Scholarship Assistant</h3>
                <h4 className="text-xl text-gray-light font-medium mb-1">University of Colorado Boulder</h4>
                <p className="text-gray-light">Boulder, CO</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="bg-gray-dark text-off-white px-4 py-2 rounded-full text-sm font-medium">
                  October 2024 - April 2025
                </span>
              </div>
            </div>
            
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-gray-dark mb-3">Key Responsibilities:</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-dark mr-2 mt-1">•</span>
                  <span className="text-gray-light leading-relaxed">Assisted students with scholarship application questions and requirement clarifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-dark mr-2 mt-1">•</span>
                  <span className="text-gray-light leading-relaxed">Automated scholarship requirement tracking systems to improve efficiency and accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-dark mr-2 mt-1">•</span>
                  <span className="text-gray-light leading-relaxed">Conducted scholarship counseling sessions to support students with academic and personal challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-dark mr-2 mt-1">•</span>
                  <span className="text-gray-light leading-relaxed">Provided guidance on scholarship maintenance and academic success strategies</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Student Counseling</span>
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Process Automation</span>
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Academic Support</span>
              <span className="bg-gray-light/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium">Administrative Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates & Awards Section */}
      <section id="certificates" className="px-6 md:px-12 lg:px-20 xl:px-32 py-28">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <img src="/cat_certificates.png" alt="Certificates" className="w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark">Certificates & Awards</h2>
          </div>
          <p className="text-gray-light text-xl text-center">
            Professional certifications and recognition of achievements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Certificates */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-dark mb-8 text-center">Certificates</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-off-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/ibm.png" alt="IBM" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-dark">Enterprise Design Thinking – Practitioner</h4>
                    <p className="text-gray-light text-sm">IBM</p>
                  </div>
                </div>
              </div>

              <div className="bg-off-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/ibm.png" alt="IBM" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-dark">Team Essentials for AI</h4>
                    <p className="text-gray-light text-sm">IBM</p>
                  </div>
                </div>
              </div>

              <div className="bg-off-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/CU-Boulder-Symbol.png" alt="University of Colorado Boulder" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-dark">Expressway to Data Science: R Programming and Tidyverse Specialization</h4>
                    <p className="text-gray-light text-sm">University of Colorado Boulder</p>
                  </div>
                </div>
              </div>

              <div className="bg-off-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/michigan.png" alt="University of Michigan" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-dark">Programming for Everybody (Getting Started with Python)</h4>
                    <p className="text-gray-light text-sm">University of Michigan</p>
                  </div>
                </div>
              </div>

              <div className="bg-off-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/CU-Boulder-Symbol.png" alt="University of Colorado Boulder" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-dark">Data Analysis with Tidyverse</h4>
                    <p className="text-gray-light text-sm">University of Colorado Boulder</p>
                  </div>
                </div>
              </div>

              <div className="bg-off-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/google.png" alt="Google" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-dark">Foundations: Data, Data, Everywhere</h4>
                    <p className="text-gray-light text-sm">Google</p>
                  </div>
                </div>
              </div>

              <div className="bg-off-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/CU-Boulder-Symbol.png" alt="University of Colorado Boulder" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-dark">Introduction to R Programming and Tidyverse</h4>
                    <p className="text-gray-light text-sm">University of Colorado Boulder</p>
                  </div>
                </div>
              </div>

              <div className="bg-off-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/CU-Boulder-Symbol.png" alt="University of Colorado Boulder" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-dark">R Programming and Tidyverse Capstone Project</h4>
                    <p className="text-gray-light text-sm">University of Colorado Boulder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-2xl font-bold text-gray-dark mb-8 text-center">Awards</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-off-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/awards.png" alt="Award" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-dark">GE Renewables DT Hackathon - First Prize</h4>
                    <p className="text-gray-light">Resume Classification System</p>
                    <p className="text-gray-light text-sm mt-1">83% classification accuracy using KNN algorithm and custom NLP</p>
                  </div>
                </div>
              </div>

              <div className="bg-off-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/CU-Boulder-Symbol.png" alt="University" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-dark">High Academic Performance</h4>
                    <p className="text-gray-light">MS Data Science - GPA 3.93</p>
                    <p className="text-gray-light text-sm mt-1">University of Colorado Boulder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <section id="referrals" className="px-6 md:px-12 lg:px-20 xl:px-32 py-28">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <img src="/cat_reference.png" alt="References" className="w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark">Professional References</h2>
          </div>
          <p className="text-gray-light text-xl text-center">
            Contact these professionals to learn more about my work, skills, and contributions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Reference 1 - Manager Placeholder */}
            <div className="bg-off-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/user.png" alt="User" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-dark mb-2">Raghav Vanmali</h3>
              <p className="text-gray-light font-medium mb-1">Sebuir Director Technical Product Management</p>
              <p className="text-gray-light text-sm mb-4">GE Healthcare</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-gray-dark">📧</span>
                  <a href="mailto:raghav.vanmali@ge.com" className="text-gray-light hover:text-gray-dark transition-colors text-sm">
                    raghav.vanmali@ge.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-gray-dark">📱</span>
                  <a href="tel:+91 8197788829" className="text-gray-light hover:text-gray-dark transition-colors text-sm">
                    +91 8197788829
                  </a>
                </div>
              </div>
            </div>

            {/* Reference 2 - Supervisor Placeholder */}
            <div className="bg-off-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/user.png" alt="User" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-dark mb-2">Sanchayan Maity</h3>
              <p className="text-gray-light font-medium mb-1">Global Analytics Leader</p>
              <p className="text-gray-light text-sm mb-4">GE Vernova</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-gray-dark">📧</span>
                  <a href="mailto:sanchayanmaity@gmail.com" className="text-gray-light hover:text-gray-dark transition-colors text-sm">
                    sanchayanmaity@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-gray-dark">📱</span>
                  <a href="tel:+91 80959977717" className="text-gray-light hover:text-gray-dark transition-colors text-sm">
                    +91 8095997717
                  </a>
                </div>
              </div>
            </div>

            {/* Reference 3 - Supervisor Placeholder */}
            <div className="bg-off-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/user.png" alt="User" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-dark mb-2">Rojana Savoye</h3>
              <p className="text-gray-light font-medium mb-1">Front House Director</p>
              <p className="text-gray-light text-sm mb-4">Macky, University of Colorado Boulder</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-gray-dark">📧</span>
                  <a href="mailto:rojana.savoye@colorado.edu" className="text-gray-light hover:text-gray-dark transition-colors text-sm">
                    rojana.savoye@colorado.edu
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-gray-dark">📱</span>
                  <a href="tel:+1234567892" className="text-gray-light hover:text-gray-dark transition-colors text-sm">
                    +1 (234) 567-8902
                  </a>
                </div>
              </div>
            </div>

          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-light text-lg">
              References are available upon request. Please feel free to contact any of the above professionals for detailed insights about my work performance and contributions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-12 lg:px-20 xl:px-32 py-28 bg-gray-dark">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <img src="/cat_contact.png" alt="Contact" className="w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-off-white">Let's Work Together</h2>
          </div>
          <p className="text-gray-light text-xl mb-6">
            I'm actively seeking full-time opportunities to contribute to innovative teams and impactful projects.
          </p>
          <div className="bg-off-white/10 rounded-2xl px-8 py-4 mb-12 inline-block">
            <p className="text-off-white font-semibold text-lg">
              ✅ Available to start immediately
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-12 h-12 bg-off-white rounded-full flex items-center justify-center">
                  <img src="/Mail-logomark-noborder.png" alt="Email" className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-off-white font-semibold">Email</h3>
                  <a href="mailto:anudeep.nayak@protonmail.com" className="text-gray-light hover:text-off-white transition-colors">
                    anudeep.nayak@protonmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-12 h-12 bg-off-white rounded-full flex items-center justify-center">
                  <img src="/phone.png" alt="Phone" className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-off-white font-semibold">Phone</h3>
                  <a href="tel:+13032699785" className="text-gray-light hover:text-off-white transition-colors">
                    +1 (303) 269-9785
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-8">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-12 h-12 bg-off-white rounded-full flex items-center justify-center">
                  <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-off-white font-semibold">LinkedIn</h3>
                  <a href="https://linkedin.com/in/Anudeep-Nayak" target="_blank" rel="noopener noreferrer" className="text-gray-light hover:text-off-white transition-colors">
                    linkedin.com/in/Anudeep-Nayak
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-12 h-12 bg-off-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-off-white font-semibold">GitHub</h3>
                  <a href="https://github.com/NayakAnudeep" target="_blank" rel="noopener noreferrer" className="text-gray-light hover:text-off-white transition-colors">
                    github.com/NayakAnudeep
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Text */}
          <div className="border-t border-gray-light/20 pt-12">
            <p className="text-gray-light text-lg mb-6">
              Have an opportunity that matches my skills? Let's discuss how I can contribute to your team.
            </p>
            <div className="text-gray-light text-xs space-y-1">
              <p>Icons created by:</p>
              <p><a href="https://www.flaticon.com/free-icons/black-cat" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors">Yasashii std</a> • <a href="https://www.flaticon.com/authors/aomam" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors">AomAm</a> • <a href="https://www.flaticon.com/authors/agustrisana" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors">agustrisana</a> • <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors">Freepik</a> • <a href="https://www.flaticon.com/authors/madness" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors">madness</a> • <a href="https://www.flaticon.com/authors/iconjam" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors">Iconjam</a> • <a href="https://www.flaticon.com/authors/vectors-market" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors">Vectors Market</a> • <a href="https://www.flaticon.com/authors/indra-maulana-yusuf" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors">Indra Maulana Yusuf</a> - Flaticon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
