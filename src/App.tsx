import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import VideoGallery from './pages/VideoGallery';
import Credits from './pages/Credits';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'portfolio' | 'video' | 'credits' | 'testimonials' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'video':
        return <VideoGallery />;
      case 'credits':
        return <Credits />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-warm-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
