import { useEffect, useState } from "react";
import profileImage from "./assets/img2.JPG";
import ResumeSection from "./components/ResumeSection";

const portfolio = {
  name: "Milan Belal",
  title: "Software Developer & BCA Student",
  objective:
    "Motivated and detail-oriented BCA student seeking opportunities to leverage programming skills and practical project experience. Passionate about software development and eager to contribute to dynamic teams while enhancing knowledge in the field.",
  aboutDescription:
    "I am a dedicated BCA student from Dhangadhi, Nepal, with a strong passion for software development and technology. Recently completed my Bachelor’s degree and have hands-on experience in multiple programming languages and have led several development projects. My goal is to contribute to innovative solutions while continuously learning and growing in the tech industry.",
  profileImage,
  education: [
    {
      degree: "Bachelor of Computer Application",
      institution: "National Academy of Science and Technology",
      period: "Nov 2021 - May 2026 ",
      grade: "Pursuing",
      location: "Dhangadhi",
    },
    {
      degree: "Higher Secondary Education (+2)",
      institution: "Sudurpaschimanchal Academy",
      period: "Aug 2019 - Sep 2021",
      grade: "Grade XI: B+ (GPA: 2.96) | Grade XII: B+ (GPA: 2.82)",
      location: "Dhangadhi",
    },
    {
      degree: "Secondary Education Examination (SEE)",
      institution: "Shree Navadeep Vidhya Niketan Boarding School",
      period: "Apr 2007 - Apr 2019",
      grade: "B+ (GPA: 3.2)",
      location: "Salena, Doti",
    },
  ],
  technicalSkills: [
    {
      name: "Programming Languages",
      icon: "💻",
      items: ["C/C++", "Java", "JavaScript", "PHP"],
    },
    {
      name: "Web Development",
      icon: "🌐",
      items: ["HTML5", "CSS3", "JavaScript", "PHP"],
    },
    {
      name: "Frameworks & Tools",
      icon: "🛠️",
      items: [".NET Framework", "Visual Basic", "MySQL", "Laravel"],
    },
    {
      name: "Database",
      icon: "🗄️",
      items: ["MySQL", "Database Design", "SQL Queries"],
    },
  ],
  softSkills: [
    "Problem-Solving",
    "Team Collaboration",
    "Time Management",
    "Project Leadership",
    "Communication",
  ],
  languages: ["Nepali", "English", "Hindi", "Doteli"],
  projects: [
    {
      id: 1,
      name: "Inventory Management System",
      role: "Project Lead/Developer",
      description:
        "A comprehensive inventory management system built with C Programming to handle stock management, product tracking, and inventory operations efficiently.",
      technologies: ["C Programming", "File Management", "Data Structures"],
      icon: "📦",
      links: [
        { label: "View Details", href: "#project-1" },
        { label: "GitHub", href: "https://github.com/Belal172" },
      ],
    },
    {
      id: 2,
      name: "Two Wheeler Rental System",
      role: "Project Leader/Developer",
      description:
        "A complete rental management system for two-wheelers developed using Visual Basic with .NET Framework, featuring booking management and customer tracking.",
      technologies: ["Visual Basic", ".NET Framework", "Database Management"],
      icon: "🏍️",
      links: [
        { label: "View Details", href: "#project-2" },
        { label: "GitHub", href: "https://github.com/Belal172" },
      ],
    },
    {
      id: 3,
      name: "My CityHub",
      role: "Project Lead/Developer",
      description:
        "A dynamic city information website providing local services, news, and community features built with modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      icon: "🏙️",
      links: [
        { label: "View Details", href: "#project-3" },
        { label: "GitHub", href: "https://github.com/Belal172" },
      ],
    },
    {
      id: 4,
      name: "Internal Evaluation System",
      role: "Tester and FrontEnd Developer",
      description:
        "A system built for the automation of internal marks for Pokhara University affiliated colleges.",
      technologies: ["HTML", "Bootstrap", "React Js"],
      icon: "📊",
      links: [
        { label: "View Project", href: "https://rps.yubrajdhungana.com.np" },
        { label: "GitHub", href: "https://github.com/Belal172" },
      ],
    },
  ],
  contact: {
    email: "mohitbelal9@gmail.com",
    linkedin: "https://www.linkedin.com/in/milan-belal-8a522b352/",
    location: "Dhangadhi, Nepal 10900",
    github: "github.com/Belal172",
  },
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });

    const handleScroll = () => {
      const nextScrolled = window.scrollY > 50;
      setScrolled(nextScrolled);

      const heroBackground = document.querySelector(".hero-background");
      if (heroBackground) {
        heroBackground.style.transform = `translateY(${window.pageYOffset * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);

    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }

    setMobileMenuOpen(false);
  };

  const handleAnchorClick = (event, elementId) => {
    event.preventDefault();
    scrollToSection(elementId);
  };

  return (
    <div id="app">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="nav-container">
            <div className="logo">{portfolio.name}</div>
            <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
              <li>
                <a
                  href="#home"
                  onClick={(event) => handleAnchorClick(event, "home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(event) => handleAnchorClick(event, "about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(event) => handleAnchorClick(event, "skills")}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  onClick={(event) => handleAnchorClick(event, "resume")}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(event) => handleAnchorClick(event, "projects")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(event) => handleAnchorClick(event, "contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
            <button
              type="button"
              className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}
              onClick={() => setMobileMenuOpen((value) => !value)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>{portfolio.name}</h1>
          <p className="subtitle">{portfolio.title}</p>
          <p className="hero-description">{portfolio.objective}</p>
          <div className="hero-buttons">
            <a
              href="#projects"
              className="cta-button primary"
              onClick={(event) => handleAnchorClick(event, "projects")}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="cta-button secondary"
              onClick={(event) => handleAnchorClick(event, "contact")}
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1" />
            <div className="shape shape-2" />
            <div className="shape shape-3" />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="profile-section">
              <div className="profile-image-container">
                <img
                  src={portfolio.profileImage}
                  alt={portfolio.name}
                  className="profile-image"
                />
                <div className="profile-decoration" />
              </div>
            </div>
            <div className="about-text">
              <p className="about-description">{portfolio.aboutDescription}</p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-number">
                    {new Date().getFullYear() - 2021}+
                  </span>
                  <span className="highlight-text">Years Learning</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">
                    {portfolio.projects.length}
                  </span>
                  <span className="highlight-text">Projects</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">
                    {portfolio.languages.length}
                  </span>
                  <span className="highlight-text">Languages</span>
                </div>
              </div>
              <div className="languages">
                <h4>Languages I Speak</h4>
                <div className="language-tags">
                  {portfolio.languages.map((language) => (
                    <span key={language} className="language-tag">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-container">
            <div className="technical-skills">
              <h3 className="skills-subtitle">Technical Skills</h3>
              <div className="skills-grid">
                {portfolio.technicalSkills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <h4>{skill.name}</h4>
                    <div className="skill-items">
                      {skill.items.map((item) => (
                        <span key={item} className="skill-item">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="soft-skills">
              <h3 className="skills-subtitle">Soft Skills</h3>
              <div className="soft-skills-list">
                {portfolio.softSkills.map((skill) => (
                  <div key={skill} className="soft-skill-item">
                    <span className="soft-skill-icon">✨</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResumeSection />

      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {portfolio.projects.map((project) => (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="project-card"
              >
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                  <div className="project-role">{project.role}</div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links?.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="project-link"
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        <span className="link-icon">🔗</span>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section achievements-section">
        <div className="container">
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3>Hackathon Participant</h3>
              <p>Participated in Hackathons 2024</p>
              <span className="achievement-year">2024</span>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🎓</div>
              <h3>BCA Student</h3>
              <p>
                Recently Completed My Graduation in Bachelors of Computer
                Application(BCA)
              </p>
              <span className="achievement-year">2021-2026</span>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">💻</div>
              <h3>Project Leader</h3>
              <p>Led multiple development projects</p>
              <span className="achievement-year">Ongoing</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <div className="contact-intro">
              <p>
                I'm always excited to discuss new opportunities, collaborate on
                projects, or just have a chat about technology. Feel free to
                reach out!
              </p>
            </div>
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <h3>Email</h3>
                <a href="mailto:mohitbelal9@gmail.com">
                  {portfolio.contact.email}
                </a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <h3>linkedin</h3>
                <a href="https://www.linkedin.com/in/milan-belal-8a522b352">
                  {portfolio.contact.linkedin}
                </a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <h3>Location</h3>
                <p>{portfolio.contact.location}</p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💻</div>
                <h3>GitHub</h3>
                <a
                  href="https://github.com/Belal172"
                  target="_blank"
                  rel="noreferrer"
                >
                  {portfolio.contact.github}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h3>{portfolio.name}</h3>
              <p>{portfolio.title}</p>
            </div>
            <div className="footer-right">
              <div className="social-links">
                <a
                  href="mailto:mohitbelal9@gmail.com"
                  className="social-link"
                  title="Email"
                >
                  📧
                </a>
                <a
                  href="https://github.com/Belal172"
                  className="social-link"
                  title="GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  💻
                </a>
                <a
                  href="tel:+9779821671720"
                  className="social-link"
                  title="linkedin"
                >
                  📱
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} {portfolio.name}. All rights
              reserved. Made with React 💙
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
