import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import StarryBackground from './components/StarryBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

// This acts as the main landing page view
const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="relative font-sans text-white min-h-screen">
          <StarryBackground />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
