const skillGroups = [
  {
    title: "Languages & Frameworks",
    skills: ["Python", "TypeScript", "JavaScript", "React", "FastAPI", "Electron", "Node.js", "C#", "SQL"],
  },
  {
    title: "Backend & Data",
    skills: ["PostgreSQL", "Supabase", "SQLite", "WebSockets", "REST APIs", "LLM/AI integration"],
  },
  {
    title: "DevOps & Deployment",
    skills: ["Netlify", "Render", "cloud hosting", "CI/CD", "Git & GitHub"],
  },
  {
    title: "Infrastructure & Systems",
    skills: ["Network config & troubleshooting", "server maintenance", "Windows & Linux", "CCTV", "hardware diagnostics", "IT support"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="text-white px-6 md:p-10 max-w-3xl mx-auto"
      itemScope
      itemType="http://schema.org/ItemList"
    >
      <h2
        className="text-3xl font-bold text-blue-400 mb-6 text-center md:text-left"
        itemProp="name"
      >
        Skills
      </h2>

      <div className="space-y-8">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400"
          >
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
