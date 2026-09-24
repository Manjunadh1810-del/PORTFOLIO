import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import "./App.css";

const projects = [
  { title: "AI Resume Screening & Candidate Ranking", category: "NLP / Machine Learning", description: "Analyzes resumes, extracts skills and ranks candidates against job requirements.", details: "Built an AI-powered resume screening workflow using natural language processing and machine learning to identify candidate skills and compare resumes with job requirements.", technologies: ["Python", "Flask", "NLP", "spaCy", "Scikit-learn", "SQLite"], github: "https://github.com/manjunadh1810-del", icon: "📄" },
  { title: "Food Recognition & Calorie Estimation", category: "Computer Vision / CNN", description: "Recognizes food categories from images and estimates approximate calorie values.", details: "Developed a CNN-based image classification project that recognizes food items and estimates approximate calories from the predicted food category.", technologies: ["Python", "TensorFlow/Keras", "CNN", "OpenCV", "NumPy", "Pandas"], github: "https://github.com/manjunadh1810-del", icon: "🍱" },
  { title: "Hand Gesture Recognition", category: "Computer Vision / CNN", description: "Classifies hand gestures from images and video for real-time recognition.", details: "Created a computer vision model using CNN-based image classification to recognize hand gestures from images and video streams.", technologies: ["Python", "TensorFlow/Keras", "CNN", "OpenCV", "NumPy"], github: "https://github.com/manjunadh1810-del", icon: "✋" },
  { title: "Personality Prediction from CV Analysis", category: "AI / Computer Vision", description: "Explores facial-feature analysis with computer vision and machine learning classification.", details: "Developed an internship project applying computer vision and machine learning techniques to facial feature analysis and personality-related classification.", technologies: ["Python", "OpenCV", "TensorFlow/Keras", "CNN", "NumPy"], github: "https://github.com/manjunadh1810-del", icon: "🧠" },
  { title: "Heart Disease Detection", category: "Machine Learning / Healthcare", description: "Uses patient-related features to estimate the likelihood of heart disease.", details: "Built a machine learning workflow for heart disease prediction, including data preprocessing, model training and performance evaluation.", technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"], github: "https://github.com/manjunadh1810-del", icon: "❤️" },
];

const skills = {
  Programming: ["Python", "Java (Basic)", "HTML"],
  "AI / Machine Learning": ["Machine Learning", "Deep Learning", "Generative AI", "LLMs", "NLP", "CNN", "Model Training", "Model Evaluation"],
  "Frameworks & Libraries": ["TensorFlow", "NumPy", "Streamlit", "OpenCV", "Pandas", "spaCy", "Scikit-learn", "Flask"],
  "Backend & Cloud": ["Firebase Authentication", "Realtime Database", "Cloud Firestore"],
  Databases: ["MySQL", "Firebase Realtime Database", "SQLite"],
  "Developer Tools": ["Git", "GitHub", "VS Code", "Antigravity", "Qoder", "Cursor"],
  Coursework: ["Compiler Design", "Software Engineering", "Formal Languages & Automata", "Machine Learning", "Deep Learning"],
};

const certifications = [{ title: "Cloud Computing", organization: "NPTEL" }];

const softSkills = ["Compiler Design", "Software Engineering", "Machine Learning", "Deep Learning"];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [githubRepos, setGithubRepos] = useState([]);
  const [githubLoading, setGithubLoading] = useState(true);
  const [visitorCount, setVisitorCount] = useState(1);

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode]);

  useEffect(() => {
    const storedCount = Number(
      localStorage.getItem("manjunadh_portfolio_visitors") || "0"
    );

    const newCount = storedCount + 1;

    localStorage.setItem(
      "manjunadh_portfolio_visitors",
      String(newCount)
    );

    setVisitorCount(newCount);
  }, []);

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/manjunadh1810-del/repos?sort=updated&per_page=6"
        );

        if (!response.ok) {
          throw new Error("GitHub request failed");
        }

        const data = await response.json();

        setGithubRepos(data);
      } catch (error) {
        console.error("GitHub error:", error);
      } finally {
        setGithubLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:mademanjunadh@gmail.com?subject=${subject}&body=${body}`;

    showToast("Opening your email application...");
    form.reset();
  };

  const openGithub = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="app">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onResumeClick={() => setResumeOpen(true)}
      />

      {/* HERO */}
      <section id="home" className="hero section">
        <div className="hero-background">
          <div className="gradient-blob blob-one"></div>
          <div className="gradient-blob blob-two"></div>
        </div>

        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">
              ✦ AI / ML • COMPUTER VISION • GENERATIVE AI
            </span>

            <h1>
              Hi, I'm{" "}
              <span className="gradient-text">Manjunadh</span>
              <br />
              <span className="hero-subtitle">
                AI / ML Engineer.
              </span>
            </h1>

            <p className="hero-description">
              Computer Science Engineering student at Godavari Institute of Engineering and Technology, building AI, machine learning, deep learning and Generative AI solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work
                <span>↗</span>
              </a>

              <button
                className="secondary-button"
                onClick={() => setResumeOpen(true)}
              >
                View Resume
              </button>
            </div>

            <div className="hero-mini-stats">
              <div>
                <strong>8.53</strong>
                <span>CGPA</span>
              </div>

              <div>
                <strong>AI / ML</strong>
                <span>Engineer</span>
              </div>

              <div>
                <strong>2027</strong>
                <span>B.Tech</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-photo-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <div className="photo-glow"></div>

            <div className="profile-frame">
              <img
                src="/linkedin profile.png"
                alt="Manjunadh Prakash Madem"
                className="profile-image"
              />
            </div>

            <div className="photo-caption">
              <span className="status-dot"></span>
              Open to opportunities
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="quick-section">
        <div className="container quick-grid">
          <motion.div
            className="quick-card"
            whileHover={{ y: -5 }}
          >
            <span className="quick-icon">🤖</span>
            <div>
              <strong>AI & ML</strong>
              <p>Intelligent solutions</p>
            </div>
          </motion.div>

          <motion.div
            className="quick-card"
            whileHover={{ y: -5 }}
          >
            <span className="quick-icon">📈</span>
            <div>
              <strong>Data</strong>
              <p>Insights & analytics</p>
            </div>
          </motion.div>

          <motion.div
            className="quick-card"
            whileHover={{ y: -5 }}
          >
            <span className="quick-icon">💻</span>
            <div>
              <strong>Development</strong>
              <p>Modern applications</p>
            </div>
          </motion.div>

          <motion.div
            className="quick-card"
            whileHover={{ y: -5 }}
          >
            <span className="quick-icon">🚀</span>
            <div>
              <strong>Learning</strong>
              <p>Always exploring</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section content-section">
        <div className="container">
          <SectionHeading
            eyebrow="01 / ABOUT"
            title="A little about me"
            description="A Computer Science Engineering student exploring AI, machine learning, deep learning and Generative AI."
          />

          <div className="about-grid">
            <motion.div
              className="about-main card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="card-label">PROFILE</span>

              <h3>
                Building with{" "}
                <span className="gradient-text">
                  intelligence & creativity.
                </span>
              </h3>

              <p>
                I am Manjunadh Prakash Madem, a Computer Science Engineering student at Godavari Institute of Engineering and Technology (2024–2027).
              </p>

              <p>
                My interests include artificial intelligence, machine learning, deep learning, Generative AI, computer vision and intelligent applications.
              </p>

              <p>
                I have developed project experience in resume screening, food recognition, gesture recognition, CV analysis and healthcare prediction.
              </p>
            </motion.div>

            <motion.div
              className="about-side"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="info-card">
                <span>EDUCATION</span>
                <strong>B.Tech Computer Science</strong>
                <p>Godavari Institute of Engineering and Technology</p>
              </div>

              <div className="info-card">
                <span>LOCATION</span>
                <strong>Andhra Pradesh, India</strong>
                <p>India</p>
              </div>

              <div className="info-card">
                <span>TECHNICAL FOCUS</span>
                <strong>AI & Generative AI</strong>
                <p>Machine learning and deep learning</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="section expertise-section">
        <div className="container">
          <SectionHeading
            eyebrow="02 / EXPERTISE"
            title="What I work with"
            description="A growing technical toolkit across AI, data and application development."
          />

          <div className="expertise-grid">
            <ExpertiseCard
              icon="🧠"
              title="Artificial Intelligence"
              text="Machine learning, deep learning and Generative AI training, with hands-on project work."
            />

            <ExpertiseCard
              icon="📊"
              title="Data & Analytics"
              text="Data preparation and model evaluation for AI and machine learning projects."
            />

            <ExpertiseCard
              icon="⚙️"
              title="Application Development"
              text="Python, Flask, Streamlit and Firebase services for AI applications."
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section content-section">
        <div className="container">
          <SectionHeading
            eyebrow="03 / SKILLS"
            title="Technical toolkit"
            description="Technologies and concepts included in my current skill set."
          />

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                className="skill-card"
                key={category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <div className="skill-card-header">
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{category}</h3>
                </div>

                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <SectionHeading
            eyebrow="04 / PROJECTS"
            title="Things I've built"
            description="Selected AI, machine learning and computer vision projects from my resume."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
              >
                <div className="project-top">
                  <span className="project-icon">
                    {project.icon}
                  </span>

                  <span className="project-index">
                    0{index + 1}
                  </span>
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    className="small-button"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                  </button>

                  <button
                    className="github-button"
                    onClick={() => openGithub(project.github)}
                  >
                    GitHub ↗
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* GITHUB */}
      <section className="section github-section">
        <div className="container">
          <SectionHeading
            eyebrow="05 / GITHUB"
            title="Live repositories"
            description="A live view of public repositories from my GitHub profile."
          />

          {githubLoading ? (
            <div className="loading-box">
              Loading GitHub repositories...
            </div>
          ) : githubRepos.length > 0 ? (
            <div className="github-grid">
              {githubRepos.map((repo) => (
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="github-card"
                  key={repo.id}
                  whileHover={{ y: -5 }}
                >
                  <div className="github-card-top">
                    <span className="github-symbol">
                      ◉
                    </span>

                    <span>↗</span>
                  </div>

                  <h3>{repo.name}</h3>

                  <p>
                    {repo.description ||
                      "Public GitHub repository."}
                  </p>

                  <div className="repo-meta">
                    {repo.language && (
                      <span>{repo.language}</span>
                    )}

                    <span>★ {repo.stargazers_count}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          ) : (
            <div className="loading-box">
              GitHub repositories could not be loaded.
              <br />
              <a
                href="https://github.com/manjunadh1810-del"
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub →
              </a>
            </div>
          )}

          <div className="github-profile-button-wrapper">
            <a
              href="https://github.com/manjunadh1810-del"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              View GitHub Profile ↗
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section content-section">
        <div className="container">
          <SectionHeading
            eyebrow="06 / EXPERIENCE"
            title="Training & project experience"
            description="GenAI training and internship projects from my resume."
          />

          <div className="timeline">
            <TimelineItem year="GenAI Training" title="Generative Artificial Intelligence Trainee" company="Techwing Cooperative Branch" text="Currently learning large language models, machine learning and deep learning concepts." current />
            <TimelineItem year="Internship Project" title="AI Resume Screening & Candidate Ranking" company="Future Interns" text="Applied NLP and machine learning to extract resume skills and rank candidates against job requirements." />
            <TimelineItem year="Internship Projects" title="Food Recognition & Hand Gesture Recognition" company="Prodigy Info Tech" text="Built CNN-based computer vision projects for food image classification and gesture recognition." />
            <TimelineItem year="Internship Projects" title="Personality Prediction & Heart Disease Detection" company="HexSoftware Pvt Ltd" text="Applied computer vision and machine learning to classification and healthcare prediction tasks." />
            <TimelineItem year="2024 — 2027" title="B.Tech — Computer Science Engineering" company="Godavari Institute of Engineering and Technology" text="Currently pursuing the degree with a CGPA of 8.53." current />
          </div>
        </div>
      </section>

      {/* EDUCATION + CERTIFICATIONS */}
      <section className="section education-section">
        <div className="container">
          <div className="two-column">
            <div>
              <SectionHeading
                eyebrow="07 / EDUCATION"
                title="Education"
                description=""
              />

              <div className="education-card card">
                <span className="education-year">2024 — 2027</span>
                <h3>B.Tech in Computer Science Engineering</h3>
                <p>Godavari Institute of Engineering and Technology, Rajahmundry</p>
                <strong>CGPA: 8.53</strong>
              </div>

              <div className="education-card card">
                <span className="education-year">2019 — 2022</span>
                <h3>Diploma in Mechanical Engineering</h3>
                <p>B.V.C. College of Engineering, Palacharla, Rajahmundry</p>
                <strong>Percentage: 78.42%</strong>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="08 / CERTIFICATIONS"
                title="Certifications"
                description=""
              />

              <div className="certification-list">
                {certifications.map((cert) => (
                  <motion.div
                    className="cert-card"
                    key={cert.title}
                    whileHover={{ x: 5 }}
                  >
                    <span className="cert-icon">✦</span>

                    <div>
                      <h3>{cert.title}</h3>
                      <p>{cert.organization}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="soft-card">
                <span className="card-label">
                  ACADEMIC COURSEWORK
                </span>

                <div className="skill-tags">
                  {softSkills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESUME CTA */}
      <section className="resume-banner">
        <div className="container resume-banner-inner">
          <div>
            <span className="eyebrow">MY RESUME</span>

            <h2>
              Explore my
              <span className="gradient-text">
                {" "}
                resume
              </span>
            </h2>

            <p>
              Explore my education, AI projects, technical skills and training.
            </p>
          </div>

          <div className="resume-buttons">
            <button
              className="primary-button"
              onClick={() => setResumeOpen(true)}
            >
              Preview Resume ↗
            </button>

            <a
              href="/MANJUNADH_PRAKASH_MADEM.pdf"
              download
              className="secondary-button"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <SectionHeading
            eyebrow="09 / CONTACT"
            title="Let's connect"
            description="Have an opportunity, project idea or simply want to say hello?"
          />

          <div className="contact-grid">
            <div className="contact-info">
              <motion.div
                className="contact-card"
                whileHover={{ y: -5 }}
              >
                <span className="contact-icon">✉</span>

                <div>
                  <small>EMAIL</small>
                  <a href="mailto:mademanjunadh@gmail.com">
                    mademanjunadh@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="contact-card"
                whileHover={{ y: -5 }}
              >
                <span className="contact-icon">in</span>

                <div>
                  <small>LINKEDIN</small>
                  <a
                    href="https://www.linkedin.com/in/manjunadh-prakash-madem-3ba71636a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/manjunadh-prakash-madem-3ba71636a
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="contact-card"
                whileHover={{ y: -5 }}
              >
                <span className="contact-icon">⌘</span>

                <div>
                  <small>GITHUB</small>
                  <a
                    href="https://github.com/manjunadh1810-del"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/manjunadh1810-del
                  </a>
                </div>
              </motion.div>

              <div className="visitor-card">
                <span>👀</span>

                <div>
                  <strong>{visitorCount}</strong>
                  <p>Portfolio visits on this browser</p>
                </div>
              </div>
            </div>

            <motion.form
              className="contact-form"
              onSubmit={handleContactSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="form-row">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </label>
              </div>

              <label>
                Message
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Tell me about your opportunity or idea..."
                  required
                ></textarea>
              </label>

              <button
                type="submit"
                className="primary-button form-button"
              >
                Send Message
                <span>↗</span>
              </button>

              <p className="form-note">
                This opens your email application with the
                message prepared.
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>Manjunadh Prakash Madem</strong>
            <p>AI / ML Engineer • Computer Science Student</p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/manjunadh1810-del"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/manjunadh-prakash-madem-3ba71636a"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:mademanjunadh@gmail.com">
              Email
            </a>
          </div>

          <p className="copyright">
            © {new Date().getFullYear()} Manjunadh Prakash Madem
          </p>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal project-modal"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <span className="project-icon large">
                {selectedProject.icon}
              </span>

              <span className="project-category">
                {selectedProject.category}
              </span>

              <h2>{selectedProject.title}</h2>

              <p className="modal-description">
                {selectedProject.details}
              </p>

              <div className="project-tech modal-tech">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="modal-actions">
                <button
                  className="primary-button"
                  onClick={() =>
                    openGithub(selectedProject.github)
                  }
                >
                  View GitHub ↗
                </button>

                <button
                  className="secondary-button"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RESUME MODAL */}
      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setResumeOpen(false)}
          >
            <motion.div
              className="modal resume-modal"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setResumeOpen(false)}
              >
                ×
              </button>

              <div className="resume-modal-header">
                <div>
                  <span className="eyebrow">RESUME</span>
                  <h2>Manjunadh Prakash Madem</h2>
                </div>

                <a
                  href="/MANJUNADH_PRAKASH_MADEM.pdf"
                  download
                  className="primary-button"
                >
                  Download PDF
                </a>
              </div>

              <iframe
                src="/MANJUNADH_PRAKASH_MADEM.pdf"
                title="Manjunadh Prakash Madem Resume"
                className="resume-frame"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOAST */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            ✓ {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

function ExpertiseCard({ icon, title, text }) {
  return (
    <motion.div
      className="expertise-card"
      whileHover={{ y: -7 }}
    >
      <span className="expertise-icon">{icon}</span>

      <h3>{title}</h3>

      <p>{text}</p>
    </motion.div>
  );
}

function TimelineItem({
  year,
  title,
  company,
  text,
  current = false,
}) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="timeline-marker">
        <span className={current ? "active-marker" : ""}></span>
      </div>

      <div className="timeline-content">
        <span className="timeline-year">{year}</span>

        <h3>{title}</h3>

        <strong>{company}</strong>

        <p>{text}</p>
      </div>
    </motion.div>
  );
}

export default App;
