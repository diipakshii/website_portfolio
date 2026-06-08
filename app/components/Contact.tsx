const socials = [
  {
    name: "GitHub",
    handle: "@diipakshii",
    href: "https://github.com/diipakshii",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Dipakshi Pal",
    href: "https://www.linkedin.com/in/dipakshi-pal/", 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    handle: "dp3245@columbia.edu",
    href: "mailto:dp3245@columbia.edu",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <p className="text-pink-500 font-medium text-sm uppercase tracking-widest mb-2">
          Let&apos;s Connect
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          I&apos;m currently looking for internships and exciting projects to
          work on. Whether you have a question, an opportunity, or just want to
          say hi, my inbox is always open!
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:dipakship23@email.com"
          className="inline-flex items-center gap-2 bg-pink-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-pink-600 transition-all hover:shadow-xl hover:shadow-pink-200 hover:-translate-y-0.5 mb-14"
        >
          Say Hello
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>

        {/* Social links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.name !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-gray-100 hover:border-pink-200 hover:bg-pink-50 px-5 py-3 rounded-xl text-gray-500 hover:text-pink-500 transition-all group w-full sm:w-auto justify-center"
            >
              <span className="text-gray-400 group-hover:text-pink-400 transition-colors">
                {s.icon}
              </span>
              <div className="text-left">
                <p className="text-xs text-gray-400">{s.name}</p>
                <p className="text-sm font-medium">{s.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
