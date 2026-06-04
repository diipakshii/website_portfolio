const experiences = [
  {
    type: "work",
    role: "Quant Intern",
    org: "Citibank",
    location: "New York, NY",
    period: "Jun 2026 – Aug 2026",
    bullets: [
      ],
    tags: ["Trading", "Optimization", "Python"],
  },
  {
    type: "research",
    role: "Undergraduate Research Assistant",
    org: "AlQurashi Lab, Columbia Medical Center",
    location: "New York, NY",
    period: "May 2024 – Present",
    bullets: [
      ],
    tags: ["Machine Learning", "Python", "PyTorch"],
  },
  {
    type: "work",
    role: "AI/ML Software Development Intern",
    org: "Qualcomm",
    location: "San Diego, CA",
    period: "May 2025 – Aug 2025",
    bullets: [
      ],
    tags: ["Autonomous Driving (ADAS)","Python", "C++"],
  },
];

const typeStyles: Record<string, { dot: string; badge: string; label: string }> = {
  education: {
    dot: "bg-fuchsia-400",
    badge: "bg-fuchsia-50 text-fuchsia-500 border-fuchsia-100",
    label: "Education",
  },
  work: {
    dot: "bg-pink-400",
    badge: "bg-pink-50 text-pink-500 border-pink-100",
    label: "Work",
  },
  research: {
    dot: "bg-rose-400",
    badge: "bg-rose-50 text-rose-500 border-rose-100",
    label: "Research",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-pink-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-pink-500 font-medium text-sm uppercase tracking-widest mb-2">
            Where I&apos;ve Been
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-pink-200" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => {
              const style = typeStyles[exp.type] ?? typeStyles.work;
              return (
                <div key={i} className="relative flex gap-6 md:gap-10">
                  {/* Dot */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className={`w-8 h-8 md:w-12 md:h-12 rounded-full ${style.dot} ring-4 ring-white flex items-center justify-center z-10`}
                    >
                      {exp.type === "education" ? (
                        <svg
                          className="w-3.5 h-3.5 md:w-5 md:h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                        </svg>
                    ) : exp.type === "work" ? (
                        <svg
                          className="w-3.5 h-3.5 md:w-5 md:h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-3.5 h-3.5 md:w-5 md:h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white rounded-2xl border border-pink-100 p-6 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-50 transition-all duration-300 mb-2">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${style.badge}`}
                          >
                            {style.label}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">
                          {exp.role}
                        </h3>
                        <p className="text-pink-500 font-medium text-sm">
                          {exp.org}{" "}
                          <span className="text-gray-400 font-normal">
                            · {exp.location}
                          </span>
                        </p>
                      </div>
                      <span className="text-sm text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 mb-4">
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="text-sm text-gray-500 leading-relaxed flex gap-2"
                        >
                          <span className="text-pink-300 mt-1.5 flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-pink-50 text-pink-500 px-3 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resume CTA */}
        <div className="mt-12 text-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-pink-200 text-pink-500 px-8 py-3 rounded-full font-medium hover:bg-pink-50 hover:border-pink-300 transition-all hover:-translate-y-0.5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            View Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}
