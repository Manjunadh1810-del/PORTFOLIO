import { motion } from "motion/react";

function Navbar({ darkMode, setDarkMode, onResumeClick }) {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <a href="#home" className="nav-logo">
        <span className="logo-letter">M</span>

        <div className="logo-text">
          <strong>Manjunadh</strong>
          <small>AI / ML Engineer</small>
        </div>
      </a>

      <div className="nav-links">
        {links.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          {darkMode ? "☀" : "☾"}
        </button>

        <button className="nav-resume" onClick={onResumeClick}>
          Resume
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;