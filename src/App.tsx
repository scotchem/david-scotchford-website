import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import VideoGallery from './pages/VideoGallery';
import OriginalWork from './pages/OriginalWork';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

type Page = 'home' | 'video' | 'originalwork' | 'resume' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'video':
        return <VideoGallery />;
      case 'originalwork':
        return <OriginalWork />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact setCurrentPage={(page: string) => setCurrentPage(page as Page)} />;
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
