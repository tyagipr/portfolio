import { motion } from 'motion/react';
import { Rocket, TrendingUp, Users, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function StartupJourney() {
  const milestones = [
    {
      year: '2025',
      title: 'The Decision',
      description: 'Decided to combine my coding skills with entrepreneurship',
      icon: Rocket,
    },
    {
      year: 'Q1 2025',
      title: 'Learning Phase',
      description: 'Reading startup books, taking courses, building side projects',
      icon: TrendingUp,
    },
    {
      year: 'Q2 2025',
      title: 'First Launch',
      description: 'Planning to launch my first product and get real users',
      icon: Users,
    },
    {
      year: '2025+',
      title: 'Growth Goals',
      description: 'Build in public, learn from feedback, iterate quickly',
      icon: Award,
    },
  ];

  const stats = [
    { value: '6+', label: 'Side Projects Built' },
    { value: '2', label: 'Active Products' },
    { value: '100+', label: 'Hours Learning' },
    { value: '1', label: 'Big Dream' },
  ];

  return (
    <section id="journey" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Startup Journey
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From shipping code to shipping products that customers love
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 text-center"
            >
              <div className="text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbXxlbnwxfHx8fDE3NjUyMTY4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Startup team collaboration"
              className="rounded-2xl shadow-2xl shadow-purple-500/10"
            />
          </motion.div>

          <div className="relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  <milestone.icon className="w-5 h-5 text-white" />
                </div>
                
                {index !== milestones.length - 1 && (
                  <div className="absolute left-5 top-10 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent" />
                )}

                <div className="text-sm text-cyan-400 mb-1">{milestone.year}</div>
                <h3 className="text-xl mb-2">{milestone.title}</h3>
                <p className="text-slate-400">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20"
        >
          <h3 className="text-2xl mb-4 text-center">My Startup Philosophy</h3>
          <p className="text-slate-300 text-center max-w-3xl mx-auto">
            "I believe the best way to learn entrepreneurship is by doing. As a developer, I have the 
            power to build and ship products quickly. I'm combining my technical skills with business 
            thinking, learning from failures, and staying persistent. Every project is a lesson, 
            every user is a teacher, and every day is progress toward building something meaningful."
          </p>
        </motion.div>
      </div>
    </section>
  );
}