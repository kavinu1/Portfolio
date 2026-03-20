import React, { useState, useEffect } from "react";
import { Terminal, Menu, X, Sun, Moon } from "lucide-react";
import "./Navbar.css";

type Theme = "dark" | "light";

const THEME_STORAGE_KEY = "theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // ignore
  }
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const resumeHref = `${import.meta.env.BASE_URL}Kavinu_Vanniarachchi_CV.pdf`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Active section logic using Intersection Observer
    const sections = [
      "home",
      "about",
      "education",
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
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const themeButtonLabel =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

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
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={themeButtonLabel}
              title={themeButtonLabel}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
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
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={themeButtonLabel}
            title={themeButtonLabel}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

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
        <ul className="mobile-nav-list">
          {navLinks.map((link, index) => (
            <li key={link.name} style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}>
              <a
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? "active" : ""}`}
                aria-current={activeSection === link.id ? "page" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li style={{ "--delay": `${navLinks.length * 0.1}s` } as React.CSSProperties}>
            <a
              href={resumeHref}
              className="resume-btn mobile-resume"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open CV (PDF)"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
