import { Hero } from './components/Hero';
import { About } from './components/About';
// import { Projects } from './components/Projects';
import { StartupJourney } from './components/StartupJourney';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <StartupJourney />
      <Contact />
    </div>
  );
}
