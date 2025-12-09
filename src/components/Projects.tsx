import { motion } from 'motion/react';
import { ExternalLink, Github, Star } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Task Management App',
      description: 'Clean and intuitive task manager built with React and Firebase. Learning deployment and user feedback.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      stars: 23,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Portfolio Generator',
      description: 'Tool to help developers create beautiful portfolios quickly. My first project with paying users!',
      tags: ['Next.js', 'TypeScript', 'Stripe'],
      stars: 45,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather app with beautiful UI. Practicing API integration and responsive design.',
      tags: ['React', 'OpenWeather API', 'CSS'],
      stars: 18,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Code Snippet Manager',
      description: 'Personal tool to organize and share code snippets. Built to solve my own problem.',
      tags: ['Next.js', 'MongoDB', 'TailwindCSS'],
      stars: 34,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Habit Tracker',
      description: 'Simple habit tracking app with streak counters. Learning about user engagement and retention.',
      tags: ['React', 'LocalStorage', 'Charts.js'],
      stars: 29,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Landing Page Builder',
      description: 'Experimenting with drag-and-drop interfaces. Exploring potential SaaS opportunities.',
      tags: ['React', 'DnD', 'Tailwind'],
      stars: 12,
      gradient: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From side projects to successful startups, here's what I've been building
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-transparent hover:shadow-2xl transition-all relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-slate-400">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{project.stars}</span>
                  </div>
                </div>

                <p className="text-slate-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}