const skillGroups = [
  {
    category: "Languages",
    emoji: "💻",
    skills: ["Python", "C", "Java", "SQL", "MATLAB", "R"]
  },
  {
    category: "Frontend",
    emoji: "🎨",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "TypeScript"],
  },
  {
    category: "Backend & Data",
    emoji: "⚙️",
    skills: ["PostgreSQL", "Node.js", "FastAPI", "MongoDB", "REST APIs"],
  },
  {
    category: "ML & Data Science",
    emoji: "🤖",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "pandas", "NumPy", "HuggingFace"],
  },
  {
    category: "Tools & DevOps",
    emoji: "🛠️",
    skills: ["Git", "GitHub", "Linux", "Google Cloud Platform", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-pink-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-pink-500 font-medium text-sm uppercase tracking-widest mb-2">
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-2xl p-6 border border-pink-100 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-pink-50 rounded-xl flex items-center justify-center text-lg">
                  {group.emoji}
                </div>
                <h3 className="font-semibold text-gray-700">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-gray-600 bg-gray-50 hover:bg-pink-50 hover:text-pink-500 border border-gray-100 hover:border-pink-100 px-3 py-1 rounded-full transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
