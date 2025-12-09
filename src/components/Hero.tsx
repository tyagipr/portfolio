import { motion } from 'motion/react';
import { Terminal, Sparkles, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Learning to build, ship, and grow';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400">Developer & Entrepreneur</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <span className="block text-5xl md:text-7xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Code. Create. Launch.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 mb-8 min-h-[2rem]"
        >
          <Terminal className="w-5 h-5 text-purple-400" />
          <span className="text-xl text-slate-300">
            {displayText}
            <span className="inline-block w-0.5 h-5 bg-purple-400 ml-1 animate-pulse" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-slate-400 max-w-2xl mx-auto mb-12"
        >
          A developer taking the leap into entrepreneurship. Combining technical skills with 
          business thinking to build products that solve real problems and create value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            View Projects
          </button>
          <button className="px-8 py-3 border border-slate-700 rounded-lg hover:border-cyan-400 transition-colors">
            Get in Touch
          </button>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-slate-500" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}