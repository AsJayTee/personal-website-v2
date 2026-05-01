import { ArrowUpRight } from "@/components/icons";

const links = [
  { label: "GitHub",      href: "#" },
  { label: "LinkedIn",    href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "Read.cv",     href: "#" },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 24 }}>
          <span className="eyebrow">05 — Get in touch</span>
        </div>
        <div className="contact-inner">
          <h2 className="contact-display">
            Have a project in mind?
            <br />
            Let&apos;s <em>talk</em> — drop a line at
            <br />
            <a href="mailto:your@email.com">your@email.com</a>.
          </h2>
          <div className="contact-side">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="contact-link">
                <span>{link.label}</span>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}