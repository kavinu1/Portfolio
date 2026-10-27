import React, { useState, useEffect } from "react";
import {
  Terminal,
  Menu,
  X,
  User,
  GraduationCap,
  Cpu,
  Award,
  Briefcase,
  MessageSquare,
  Github,
  Linkedin,
  ChevronRight,
} from "lucide-react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const resumeHref = `${import.meta.env.BASE_URL}Kavinu Vanniarachchi CV.pdf`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Active section logic using Intersection Observer
    const sections = [
      "home",
      "about",
      "education",
      "experience",
      "skills",
      "certifications",
      "projects",
      "contact",
    ];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const themeQuery = window.matchMedia("(prefers-color-scheme: light)");
    const applyTheme = () => {
      document.documentElement.dataset.theme = themeQuery.matches ? "light" : "dark";
    };

    applyTheme();
    themeQuery.addEventListener("change", applyTheme);
    return () => themeQuery.removeEventListener("change", applyTheme);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about", id: "about", icon: <User size={20} /> },
    {
      name: "Education",
      href: "#education",
      id: "education",
      icon: <GraduationCap size={20} />,
    },
    {
      name: "Experience",
      href: "#experience",
      id: "experience",
      icon: <Briefcase size={20} />,
    },
    { name: "Skills", href: "#skills", id: "skills", icon: <Cpu size={20} /> },
    {
      name: "Certifications",
      href: "#certifications",
      id: "certifications",
      icon: <Award size={20} />,
    },
    {
      name: "Projects",
      href: "#projects",
      id: "projects",
      icon: <Briefcase size={20} />,
    },
    { name: "Contact", href: "#contact", id: "contact", icon: <MessageSquare size={20} /> },
  ];

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-content">
        <a
          href="#home"
          className="logo"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Terminal className="logo-icon" size={26} />
          <span className="logo-text">
            Kavinu<span className="text-gradient">V</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                  aria-current={activeSection === link.id ? "page" : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <a
              href={resumeHref}
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open CV (PDF)"
            >
              CV
            </a>
          </div>
        </nav>

        <div className="mobile-actions">
          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`mobile-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mobile-nav-header">
          <Terminal size={22} className="mobile-header-icon" />
          <span className="mobile-header-title">Navigation Hub</span>
        </div>

        <ul className="mobile-nav-list">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              style={{ "--delay": `${index * 0.06}s` } as React.CSSProperties}
            >
              <a
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? "active" : ""}`}
                aria-current={activeSection === link.id ? "page" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mobile-link-icon">{link.icon}</span>
                <span className="mobile-link-text">{link.name}</span>
                <ChevronRight size={18} className="mobile-link-arrow" />
              </a>
            </li>
          ))}
          <li
            style={
              { "--delay": `${navLinks.length * 0.06}s` } as React.CSSProperties
            }
          >
            <a
              href={resumeHref}
              className="mobile-resume-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open CV (PDF)"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mobile-link-text">Download CV</span>
            </a>
          </li>
        </ul>

        <div className="mobile-nav-footer">
          <span className="mobile-footer-text">Get in touch</span>
          <div className="mobile-social-links">
            <a
              href="https://github.com/kavinu1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/kavinuv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
