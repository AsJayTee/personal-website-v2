type Testimonial = {
  quote: string;
  initials: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "One of the most thoughtful engineers I've worked with. Calm in a crisis, careful with the codebase, generous with what they know.",
    initials: "AB",
    name: "Alex Brennan",
    role: "Engineering Manager · Company",
  },
  {
    quote: "Took an ambiguous data problem, scoped it, and shipped a system that's still load-bearing two years later. Rare combination of speed and rigor.",
    initials: "PK",
    name: "Priya Kapoor",
    role: "CTO · Previous Co.",
  },
  {
    quote: "Equal parts product mind and engineer. They'll ask the right question before writing a line of code — and the code is always good.",
    initials: "JM",
    name: "Jordan Mei",
    role: "Product Designer",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">04 — Testimonials</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Kind words from <em>collaborators</em>.
            </h2>
          </div>
          <p className="section-meta">A few words from people I&apos;ve worked with closely.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <article key={t.name} className="testimonial">
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <div className="avatar">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}