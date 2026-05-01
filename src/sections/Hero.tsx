import { ArrowRight } from "@/components/icons";

const meta = [
  { label: "Role",     value: "Full Stack Data Scientist" },
  { label: "Focus",    value: "AI · Data · Web" },
  { label: "Location", value: "Singapore" },
  { label: "Status",   value: "Selectively open to opportunities" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-inner">

          <div>
            <div className="hero-status">
              <span className="status-dot" />
              Q2 2026 · Focused on current commitments
            </div>

            <h1 className="hero-display">
              Building <em>intelligent</em>
              <br />
              systems at the intersection
              <br />
              of AI, data, and web.
            </h1>

            <p className="hero-sub">
              Final-year Data Science + Computer Science @ NUS.
              I design, build and deploy end-to-end solutions.
            </p>

            <div className="btn-row">
              <a href="#projects" className="btn btn-primary">
                View projects
                <ArrowRight />
              </a>
              <a href="#contact" className="btn">Get in touch</a>
            </div>
          </div>

          <aside className="hero-meta">
            {meta.map(({ label, value }) => (
              <div key={label} className="hero-meta-row">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </aside>

        </div>
      </div>
    </section>
  );
}