import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Dashboards from '@/components/Dashboards';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className='min-h-screen bg-[#f8fafc] text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900'>
      <Navbar />
      <main id='main-content'>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Dashboards />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
