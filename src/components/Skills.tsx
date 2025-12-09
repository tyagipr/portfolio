import { motion } from 'motion/react';
import { useState } from 'react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: [
      { name: 'React.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'React Native', level: 85 },
    ],
    backend: [
      { name: 'Java', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Spring Boot', level: 82 },
    ],
    startup: [
      { name: 'Product Thinking', level: 75 },
      { name: 'MVP Development', level: 85 },
      { name: 'User Research', level: 70 },
      { name: 'Building in Public', level: 80 },
    ],
    tools: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'Figma', level: 88 },
      { name: 'AWS', level: 90 },
    ],
  };

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A diverse toolkit for building and launching successful products
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700"
            >
              <div className="flex justify-between mb-3">
                <span className="text-slate-200">{skill.name}</span>
                <span className="text-cyan-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}