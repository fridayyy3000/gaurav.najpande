import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Portfolio } from './components/Portfolio';
import { PhotographyPage } from './components/PhotographyPage';
import { AnimatedBackground } from './components/AnimatedBackground';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="bg-black min-h-screen selection:bg-blue-500/30">
        <AnimatedBackground />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/photography" element={<PhotographyPage />} />
        </Routes>
      </main>
    </Router>
  );
}
