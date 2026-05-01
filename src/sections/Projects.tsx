import { ArrowUpRight } from "@/components/icons";

type ProjectSize = "lg" | "md" | "sm" | "tall" | "wide";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  size: ProjectSize;
  placeholder: string;
  href?: string;
};

const projects: Project[] = [
  {
    title: "Atlas — Analytics Platform",
    desc: "Real-time dashboarding for a fleet-management startup. Postgres, Next.js, Python ETL.",
    tags: ["Next.js", "Postgres", "Python"],
    size: "lg",
    placeholder: "Project shot · 16:10",
  },
  {
    title: "Echo",
    desc: "A retrieval-augmented chatbot framework.",
    tags: ["LangChain", "FastAPI"],
    size: "sm",
    placeholder: "1:1",
  },
  {
    title: "Helix Reader",
    desc: "A focused reading app for academic papers with inline annotation and citation graphs.",
    tags: ["SwiftUI", "CoreData"],
    size: "tall",
    placeholder: "Portrait · 3:4",
  },
  {
    title: "Forecaster",
    desc: "Time-series forecasting toolkit with notebooks + interactive visualizations.",
    tags: ["Pandas", "Plotly"],
    size: "md",
    placeholder: "4:3",
  },
  {
    title: "Mailmerge.dev",
    desc: "Open-source email automation CLI.",
    tags: ["Go"],
    size: "sm",
    placeholder: "1:1",
  },
  {
    title: "Northstar — Internal Design System",
    desc: "Component library + Figma kit used across 6 product teams. Tokens, theming, accessibility audits.",
    tags: ["React", "Tokens", "Storybook"],
    size: "wide",
    placeholder: "Wide hero · 21:7",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project size-${project.size}`}>
      <div className="project-thumb">
        <div className="project-thumb-inner placeholder">
          <span className="placeholder-label">{project.placeholder}</span>
        </div>
      </div>
      <div className="project-meta">
        <div className="project-title">
          <span>{project.title}</span>
          <ArrowUpRight />
        </div>
        <div className="project-desc">{project.desc}</div>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">01 — Selected work</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              A sample of <em>recent</em> projects.
            </h2>
          </div>
          <p className="section-meta">
            A dynamic grid that scales — drop in more cards in any size; the layout flows around them.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}