type Role = {
  period: string;
  title: string;
  company: string;
  desc: string;
  location: string;
};

const roles: Role[] = [
  {
    period: "2024 — Now",
    title: "Senior Software Engineer",
    company: "Company Name",
    desc: "Led the migration of a legacy monolith to a service-oriented architecture. Built the data platform powering analytics for 100k+ users.",
    location: "Remote",
  },
  {
    period: "2022 — 2024",
    title: "Software Engineer",
    company: "Previous Co.",
    desc: "Shipped customer-facing features across web and API. Owned the search experience end-to-end.",
    location: "City, Country",
  },
  {
    period: "2020 — 2022",
    title: "Data Engineer",
    company: "Earlier Place",
    desc: "Built ETL pipelines and ML feature stores. Reduced batch-job latency by 70%.",
    location: "City, Country",
  },
  {
    period: "2018 — 2020",
    title: "Engineering Intern",
    company: "First Gig",
    desc: "Internal tools and prototypes for the data team.",
    location: "City, Country",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">02 — Experience</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Where I&apos;ve <em>worked</em>.
            </h2>
          </div>
          <p className="section-meta">Roles in chronological order, most recent first.</p>
        </div>

        <div className="experience-list">
          {roles.map((role) => (
            <div key={role.period} className="exp-item">
              <div className="exp-period">{role.period}</div>
              <div className="exp-body">
                <h3>
                  {role.title} · <span className="exp-company">{role.company}</span>
                </h3>
                <p className="exp-desc">{role.desc}</p>
              </div>
              <div className="exp-location">{role.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}