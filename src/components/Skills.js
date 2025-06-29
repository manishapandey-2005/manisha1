import React from "react";

export default function Skills() {
  const skills = [
    {
      category: "Web Development",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      category: "Database & Backend",
      items: ["MySQL", "Oracle", "SQL", "Java", "Python (Basic)"],
    },

    {
      category: "Tools",
      items: ["Git & GitHub", "VS Code", "Eclipse"],
    },
    {
      category: "Soft Skills",
      items: [
        "Problem Solving",
        "Team Collaboration",
        "Time Management",
        "Adaptability",
      ],
    },
  ];

  return (
    <section className=" py-12 px-4" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                {skill.category}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
