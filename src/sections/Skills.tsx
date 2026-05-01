type SkillGroup = {
  num: string;
  label: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    num: "01",
    label: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Go", "SQL", "Rust", "Bash"],
  },
  {
    num: "02",
    label: "Data Science & AI",
    skills: ["PyTorch", "Pandas", "NumPy", "scikit-learn", "LangChain", "Jupyter", "Hugging Face"],
  },
  {
    num: "03",
    label: "Web Development",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind", "tRPC"],
  },
  {
    num: "04",
    label: "Database & Infrastructure",
    skills: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "Kafka", "Prisma"],
  },
  {
    num: "05",
    label: "Cloud & Deployment",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">03 — Skills</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Tools I reach for, <em>often</em>.
            </h2>
          </div>
          <p className="section-meta">
            Grouped by domain. The grid auto-flows — add or remove pills freely.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.num} className="skill-group">
              <div className="skill-group-head">
                <span className="skill-num">{group.num}</span>
                <h3>{group.label}</h3>
              </div>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-pill">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}