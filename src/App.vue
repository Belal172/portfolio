<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container">
        <div class="nav-container">
          <div class="logo">{{ portfolio.name }}</div>
          <ul class="nav-links">
            <li><a href="#home" @click="scrollTo('home')">Home</a></li>
            <li><a href="#about" @click="scrollTo('about')">About</a></li>
            <!-- <li><a href="#education" @click="scrollTo('education')">Education</a></li> -->
            <li><a href="#skills" @click="scrollTo('skills')">Skills</a></li>
            <li><a href="#projects" @click="scrollTo('projects')">Projects</a></li>
            <li><a href="#contact" @click="scrollTo('contact')">Contact</a></li>
          </ul>
          <div class="mobile-menu" @click="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <h1>{{ portfolio.name }}</h1>
        <p class="subtitle">{{ portfolio.title }}</p>
        <p class="hero-description">{{ portfolio.objective }}</p>
        <div class="hero-buttons">
          <a href="#projects" class="cta-button primary" @click="scrollTo('projects')">View Projects</a>
          <a href="#contact" class="cta-button secondary" @click="scrollTo('contact')">Contact Me</a>
        </div>
      </div>
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="profile-section">
            <div class="profile-image-container">
              <img :src="portfolio.profileImage" :alt="portfolio.name" class="profile-image">
              <div class="profile-decoration"></div>
            </div>
          </div>
          <div class="about-text">
            <p class="about-description">{{ portfolio.aboutDescription }}</p>
            <div class="about-highlights">
              <div class="highlight-item">
                <span class="highlight-number">{{ new Date().getFullYear() - 2021 }}+</span>
                <span class="highlight-text">Years Learning</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-number">{{ portfolio.projects.length }}</span>
                <span class="highlight-text">Projects</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-number">{{ portfolio.languages.length }}</span>
                <span class="highlight-text">Languages</span>
              </div>
            </div>
            <div class="languages">
              <h4>Languages I Speak</h4>
              <div class="language-tags">
                <span v-for="language in portfolio.languages" :key="language" class="language-tag">
                  {{ language }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <!-- <section id="education" class="section education-section">
      <div class="container">
        <h2 class="section-title">Education</h2>
        <div class="education-timeline">
          <div v-for="(edu, index) in portfolio.education" :key="index" class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="education-card">
                <h3 class="education-degree">{{ edu.degree }}</h3>
                <h4 class="education-institution">{{ edu.institution }}</h4>
                <p class="education-period">{{ edu.period }}</p>
                <p class="education-grade">{{ edu.grade }}</p>
                <p v-if="edu.location" class="education-location">📍 {{ edu.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Skills Section -->
    <section id="skills" class="section">
      <div class="container">
        <h2 class="section-title">Skills & Expertise</h2>
        <div class="skills-container">
          <div class="technical-skills">
            <h3 class="skills-subtitle">Technical Skills</h3>
            <div class="skills-grid">
              <div v-for="skill in portfolio.technicalSkills" :key="skill.name" class="skill-card">
                <div class="skill-icon">{{ skill.icon }}</div>
                <h4>{{ skill.name }}</h4>
                <div class="skill-items">
                  <span v-for="item in skill.items" :key="item" class="skill-item">{{ item }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="soft-skills">
            <h3 class="skills-subtitle">Soft Skills</h3>
            <div class="soft-skills-list">
              <div v-for="skill in portfolio.softSkills" :key="skill" class="soft-skill-item">
                <span class="soft-skill-icon">✨</span>
                <span>{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section projects-section">
      <div class="container">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          <div v-for="project in portfolio.projects" :key="project.id" class="project-card">
            <div class="project-header">
              <div class="project-icon">{{ project.icon }}</div>
              <div class="project-role">{{ project.role }}</div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.name }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
              <div class="project-links">
                <a href="#" class="project-link">
                  <span class="link-icon">🔗</span>
                  View Project
                </a>
                <a href="https://github.com/Belal172" class="project-link" target="_blank">
                  <span class="link-icon">📁</span>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements Section -->
    <section class="section achievements-section">
      <div class="container">
        <h2 class="section-title">Achievements</h2>
        <div class="achievements-grid">
          <div class="achievement-card">
            <div class="achievement-icon">🏆</div>
            <h3>Hackathon Participant</h3>
            <p>Participated in Hackathons 2024</p>
            <span class="achievement-year">2024</span>
          </div>
          <div class="achievement-card">
            <div class="achievement-icon">🎓</div>
            <h3>BCA Student</h3>
            <p>Currently pursuing Bachelor's in Computer Application</p>
            <span class="achievement-year">2021-2026</span>
          </div>
          <div class="achievement-card">
            <div class="achievement-icon">💻</div>
            <h3>Project Leader</h3>
            <p>Led multiple development projects</p>
            <span class="achievement-year">Ongoing</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact-section">
      <div class="container">
        <h2 class="section-title">Let's Connect</h2>
        <div class="contact-content">
          <div class="contact-intro">
            <p>I'm always excited to discuss new opportunities, collaborate on projects, or just have a chat about technology. Feel free to reach out!</p>
          </div>
          <div class="contact-grid">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:mohitbelal9@gmail.com">{{ portfolio.contact.email }}</a>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📱</div>
              <h3>Phone</h3>
              <a href="tel:+9779821671720">{{ portfolio.contact.phone }}</a>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <h3>Location</h3>
              <p>{{ portfolio.contact.location }}</p>
            </div>
            <div class="contact-item">
              <div class="contact-icon">💻</div>
              <h3>GitHub</h3>
              <a href="https://github.com/Belal172" target="_blank">{{ portfolio.contact.github }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-left">
            <h3>{{ portfolio.name }}</h3>
            <p>{{ portfolio.title }}</p>
          </div>
          <div class="footer-right">
            <div class="social-links">
              <a href="mailto:mohitbelal9@gmail.com" class="social-link" title="Email">📧</a>
              <a href="https://github.com/Belal172" class="social-link" title="GitHub" target="_blank">💻</a>
              <a href="tel:+9779821671720" class="social-link" title="Phone">📱</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} {{ portfolio.name }}. All rights reserved. Made with Vue.js 💚</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      mobileMenuOpen: false,
      portfolio: {
        name: "Milan Belal",
        title: "Software Developer & BCA Student",
        objective: "Motivated and detail-oriented BCA student seeking opportunities to leverage programming skills and practical project experience. Passionate about software development and eager to contribute to dynamic teams while enhancing knowledge in the field.",
        aboutDescription: "I am a dedicated BCA student from Dhangadhi, Nepal, with a strong passion for software development and technology. Currently in my final year, I have hands-on experience in multiple programming languages and have led several development projects. My goal is to contribute to innovative solutions while continuously learning and growing in the tech industry.",
        profileImage: 'assets/img1.JPG',
        education: [
          {
            degree: "Bachelor of Computer Application",
            institution: "National Academy of Science and Technology",
            period: "Nov 2021 - 2026 (Expected)",
            grade: "Pursuing",
            location: "Dhangadhi"
          },
          {
            degree: "Higher Secondary Education (+2)",
            institution: "Sudurpaschimanchal Academy",
            period: "Aug 2019 - Sep 2021",
            grade: "Grade XI: B+ (GPA: 2.96) | Grade XII: B+ (GPA: 2.82)",
            location: "Dhangadhi"
          },
          {
            degree: "Secondary Education Examination (SEE)",
            institution: "Shree Navadeep Vidhya Niketan Boarding School",
            period: "Apr 2007 - Apr 2019",
            grade: "B+ (GPA: 3.2)",
            location: "Salena, Doti"
          }
        ],
        technicalSkills: [
          {
            name: "Programming Languages",
            icon: "💻",
            items: ["C/C++", "Java", "JavaScript", "PHP"]
          },
          {
            name: "Web Development",
            icon: "🌐",
            items: ["HTML5", "CSS3", "JavaScript", "PHP"]
          },
          {
            name: "Frameworks & Tools",
            icon: "🛠️",
            items: [".NET Framework", "Visual Basic", "MySQL"]
          },
          {
            name: "Database",
            icon: "🗄️",
            items: ["MySQL", "Database Design", "SQL Queries"]
          }
        ],
        softSkills: [
          "Problem-Solving",
          "Team Collaboration",
          "Time Management",
          "Project Leadership",
          "Communication"
        ],
        languages: ["Nepali", "English", "Hindi", "Doteli"],
        projects: [
          {
            id: 1,
            name: "Inventory Management System",
            role: "Project Lead/Developer",
            description: "A comprehensive inventory management system built with C Programming to handle stock management, product tracking, and inventory operations efficiently.",
            technologies: ["C Programming", "File Management", "Data Structures"],
            icon: "📦"
          },
          {
            id: 2,
            name: "Two Wheeler Rental System",
            role: "Project Leader/Developer",
            description: "A complete rental management system for two-wheelers developed using Visual Basic with .NET Framework, featuring booking management and customer tracking.",
            technologies: ["Visual Basic", ".NET Framework", "Database Management"],
            icon: "🏍️"
          },
          {
            id: 3,
            name: "My CityHub",
            role: "Project Lead/Developer",
            description: "A dynamic city information website providing local services, news, and community features built with modern web technologies.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            icon: "🏙️"
          }
        ],
        contact: {
          email: "mohitbelal9@gmail.com",
          phone: "+977 98-21671720",
          location: "Dhangadhi, Nepal 10900",
          github: "github.com/Belal172"
        }
      }
    };
  },
  methods: {
    scrollTo(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  },
  mounted() {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
};
</script>

<style>
/* Import the CSS styles */
@import 'assets/style.css';
</style>