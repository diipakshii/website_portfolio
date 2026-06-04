const languageTags = ["Python", "C", "C++", "Java", "SQL", "R", "MATLAB", "TypeScript", "JavaScript", "HTML", "PostgreSQL", "PyTorch"];

const projects = [
  {
    title: "Earnings Call Alpha Engine (FIX)",
    description:
      "Description",
    tags: ["NLP", "LLMs", "Financial Modeling", "Python"],
    github: "https://github.com/diipakshii/Earnings-Call-Alpha-Engine",
    demo: null,
    featured: true,
  }, 
  {
    title: "Numerical Project (FIX)",
    description:
      "Description",
    tags: ["Options Pricing", "Monte Carlo Simulation", "Black-Scholes", "Python"],
    github: "https://github.com/diipakshii",
    demo: null,
    featured: true,
  },
  {
    title: "Predicting Heart Disease",
    description:
      "Description",
    tags: ["Healthcare", "Classification", "Python"],
    github: "https://github.com/diipakshii/AML_A1",
    demo: null,
    featured: true,
  },
  {
    title: "Predicting Loan Default with GBDT and MLP",
    description:
      "Description",
    tags: ["Credit Risk", "Neural Networks", "Python", "PyTorch"],
    github: "https://github.com/diipakshii/AML_A2",
    demo: null,
    featured: true,
  },
  {
    title: "Transformer is All You Need",
    description:
      "Description",
    tags: ["Transformer", "Attention", "NLP", "Python", "PyTorch"],
    github: "https://github.com/diipakshii/AML_A3",
    demo: null,
    featured: true,
  },
  {
    title: "Anchored Preference Optimization for Mathematical Reasoning in Small Open Source Models (FIX)",
    description:
      "Description",
    tags: ["NLP", "Fine-tuning", "Reinforcement Learning", "Python", "PyTorch"],
    github: "https://github.com",
    demo: null,
    featured: true,
  },
  {
    title: "HTTP Web Server (FIX)",
    description:
      "Description",
    tags: ["Systems", "Networking", "C"],
    github: "https://github.com",
    demo: null,
    featured: true,
  }, 
  {
    title: "Social Media Data Management (FIX)",
    description:
      "Description",
    tags: ["Databases", "Data Modeling", "HTML", "PostgreSQL", "SQL"],
    github: "https://github.com/diipakshii/coms4111-databases-proj",
    demo: null,
    featured: true,
  },
  {
    title: "Exoplanet Visualization Dashboard (FIX)",
    description:
      "Description",
    tags: ["Astronomy", "NASA", "Data Visualization", "Python"],
    github: "https://github.com",
    demo: null,
    featured: true,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-pink-500 font-medium text-sm uppercase tracking-widest mb-2">
            What I&apos;ve Built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-50 transition-all duration-300 flex flex-col">
      {/* Top bar */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center group-hover:bg-pink-100 transition-colors">
          <svg
            className="w-5 h-5 text-pink-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
        </div>

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              aria-label="Live demo"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-3 py-1 rounded-full font-medium ${
              languageTags.includes(tag)
                ? "bg-purple-50 text-purple-500 border border-purple-100"
                : "bg-pink-50 text-pink-500"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
