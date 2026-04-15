const stats = [
  { value: "15,000+", label: "Companies" },
  { value: "75M+", label: "Learners" },
  { value: "220,000+", label: "Courses" },
  { value: "830M+", label: "Course enrollments" },
  { value: "75+", label: "Languages" },
];

const logos = ["Volkswagen", "Samsung", "Cisco", "Citi", "P&G", "Hewlett Packard"];

const TrustedBanner = () => (
  <section className="bg-muted py-10">
    <div className="udemy-container">
      <h2 className="text-2xl font-bold text-udemy-heading text-center">
        Trusted by over 16,000 companies and millions of learners around the world
      </h2>

      {/* Logos */}
      <div className="flex flex-wrap items-center justify-center gap-8 mt-8 opacity-50">
        {logos.map((logo) => (
          <span key={logo} className="text-lg font-bold text-udemy-text-muted tracking-wide uppercase">{logo}</span>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-bold text-udemy-heading">{stat.value}</div>
            <div className="text-sm text-udemy-text-muted mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBanner;
