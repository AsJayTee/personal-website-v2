import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#" className="brand">
          <span>Siah Jin Thau</span>
        </a>
        <nav className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
