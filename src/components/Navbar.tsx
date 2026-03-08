import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const resumeHref = `${import.meta.env.BASE_URL}Kavinu_Vanniarachchi_CV.pdf`;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
            <div className="container navbar-content">
                <a href="#" className="logo">
                    <Terminal className="logo-icon" size={28} />
                    <span className="logo-text">
                        Kavinu<span className="text-gradient">V</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="nav-link">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={resumeHref}
                        className="resume-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href={resumeHref}
                            className="resume-btn mobile-resume"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
