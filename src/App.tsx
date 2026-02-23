import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';
import WhoAmI from './sections/WhoAmI';
import Stats from './sections/Stats';
import Timeline from './sections/Timeline';
import Gallery from './sections/Gallery';
import Story from './sections/Story';
import AdmiralQuotes from './sections/AdmiralQuotes';
import CurrentStatus from './sections/CurrentStatus';
import About from './sections/About';
import Footer from './sections/Footer';
import Navigation from './sections/Navigation';
import EditPage from './pages/EditPage';
import EditTimelinePage from './pages/EditTimelinePage';
import LessonsPage from './pages/LessonsPage';

function MainPage() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation visible={showNav} />
      <main>
        <Hero />
        <WhoAmI />
        <Stats />
        <Timeline />
        <Gallery />
        <Story />
        <AdmiralQuotes />
        <CurrentStatus />
        <About />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/edit-timeline" element={<EditTimelinePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
