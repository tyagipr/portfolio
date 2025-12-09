import { motion } from 'motion/react';
import { Code2, Lightbulb, Users, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable solutions with modern best practices',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative approaches',
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Building products that people love to use',
    },
    {
      icon: Zap,
      title: 'Execution',
      description: 'Moving fast from idea to MVP to market',
    },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A developer who thinks like an entrepreneur, and an entrepreneur who loves to code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1MTg3NTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Coding workspace"
              className="rounded-2xl shadow-2xl shadow-cyan-500/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-300">
              I'm a full-stack developer embarking on an exciting entrepreneurial journey. 
              With strong technical skills and a growing passion for building products that matter, 
              I'm ready to turn ideas into reality and solve real problems.
            </p>
            <p className="text-slate-300">
              While I'm new to the startup world, I bring valuable experience in building scalable 
              applications and a fresh perspective on combining technical excellence with business thinking. 
              Every day is a learning opportunity as I navigate the path from developer to founder.
            </p>
            <p className="text-slate-300">
              When I'm not coding or learning about entrepreneurship, you'll find me networking with 
              fellow founders, consuming startup podcasts, and experimenting with new ideas that could 
              become my next project.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all group"
            >
              <item.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}