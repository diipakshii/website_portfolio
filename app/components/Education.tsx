const coursework = [
  "Artificial Intelligence",
  "Applied Machine Learning",
  "Natural Language Processing",
  "Databases",
  "Data Structures & Algorithms",
  "Advanced Programming in C",
  "Probability Theory"
];

const activities = [
  { name: "Columbia Raas", role: "Dancer", period: "2023 - Present" },
  { name: "Columbia Quant Group", role: "Member", period: "2024 - Present" },
  { name: "Columbia AI Alignment Club", role: "Member", period: "2025 - Present" },
  { name: "Columbia Data Science Society", role: "Executive Board Member", period: "2023 - 2025" },
  { name: "Columbia Space Initiative", role: "Lead Software Engineer", period: "2023 – 2025" },
  { name: "Columbia Science Olympiad", role: "Event Supervisor", period: "2023 – 2024" },
  ];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-pink-500 font-medium text-sm uppercase tracking-widest mb-2">
            Academic Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Education
          </h2>
        </div>

        {/* Undergrad card */}
       <div className="bg-pink-50 border border-pink-100 rounded-2xl p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-fuchsia-50 text-fuchsia-500 border border-fuchsia-100 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Bachelor of Science
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                Columbia University
              </h3>
              <p className="text-pink-500 font-medium">
                Computer Science & Applied Mathematics
              </p>
              <p className="text-gray-400 text-sm mt-1">New York, NY</p>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
              <span className="text-sm text-gray-400 font-medium bg-white px-4 py-1.5 rounded-full border border-pink-100 whitespace-nowrap">
                Aug 2023 – May 2027
              </span>
              <span className="text-sm font-semibold text-pink-500 bg-white px-4 py-1.5 rounded-full border border-pink-100">
                GPA: 3.7 / 4.0
              </span>
            </div>
          </div>
        </div>

        {/* Masters card */}
        <div className="bg-pink-50 border border-pink-100 rounded-2xl p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-fuchsia-50 text-fuchsia-500 border border-fuchsia-100 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Master of Science
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                Columbia University
              </h3>
              <p className="text-pink-500 font-medium">
                Computer Science (Machine Learning Track)
              </p>
              <p className="text-gray-400 text-sm mt-1">New York, NY</p>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
              <span className="text-sm text-gray-400 font-medium bg-white px-4 py-1.5 rounded-full border border-pink-100 whitespace-nowrap">
                Expected Dec 2027
              </span>
              <span className="text-sm font-semibold text-pink-500 bg-white px-4 py-1.5 rounded-full border border-pink-100">
                Masters Express Program
              </span>
            </div>
          </div>
        </div>

        {/* Coursework */}
        <div className="bg-pink-50 border border-pink-100 rounded-2xl p-8 mb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span
                key={course}
                className="text-sm bg-white text-pink-600 border border-pink-100 px-4 py-1.5 rounded-full font-medium hover:bg-pink-50 transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* Awards / Honors */}
        <div className="bg-pink-50 border border-pink-100 rounded-2xl p-8 mb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Honors & Awards
          </p>
          <div className="flex flex-col gap-3">
            {[
              { award: "Dean's List", detail: "All Semesters" },
              { award: "C. Prescott Davis Scholar", detail: "Awarded by Columbia Engineering · 2023" },
              { award: "Columbia Program of Mathematical Genomics Scholar", detail: "Awarded by Columbia Medical Center · 2024" }
            ].map((a, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white rounded-xl px-5 py-3 border border-pink-100"
              >
                <div>
                  <p className="font-medium text-gray-700 text-sm">{a.award}</p>
                  <p className="text-pink-400 text-xs">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="bg-pink-50 border border-pink-100 rounded-2xl p-8 mb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Activities & Involvement
          </p>
          <div className="flex flex-col gap-3">
            {activities.map((a, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white rounded-xl px-5 py-3 border border-pink-100"
              >
                <div>
                  <p className="font-medium text-gray-700 text-sm">{a.name}</p>
                  <p className="text-pink-400 text-xs">{a.role}</p>
                </div>
                <span className="text-xs text-gray-400">{a.period}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}