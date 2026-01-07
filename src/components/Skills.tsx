const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "JavaScript",
  "TailwindCSS",
  "Git",
  "HTML",
  "CSS",
  "SaSS",
  "Java",
  "C",
];

const SkillsPage = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="flex flex-wrap gap-3 justify-between">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-3 bg-[hsl(var(--skill-badge))] text-[hsl(var(--skill-badge-foreground))] rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
