import { useEffect, useState } from 'react';

interface VimeoClip {
  id: string;
  label: string;
}

interface VideoItem {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  year: string;
  clips?: VimeoClip[];
}

const videos: VideoItem[] = [
  {
    id: 1,
    title: 'From Miami With Love',
    category: 'Original Concept',
    description:
      'A full-length original production concept blending Latin, jazz, and contemporary movement — capturing the heat, romance, and spectacle of Miami\'s cultural landscape.',
    thumbnail: '/fmwl_poster.jpg',
    year: 'In Development',
  },
  {
    id: 2,
    title: 'In Tandem',
    category: 'Original Concept',
    description:
      'An intimate pas de deux exploring the dialogue between two performers in motion — the push and pull, the surrender and the lead.',
    thumbnail: '/still_pascal_mia.png',
    year: 'In Development',
    clips: [
      { id: '1156632794', label: 'In Tandem — Clip 1' },
      { id: '1156910196', label: 'In Tandem — Clip 2' },
      { id: '1156910168', label: 'In Tandem — Clip 3' },
    ],
  },
  {
    id: 3,
    title: 'Dirty Dancing',
    category: 'Theatrical',
    description:
      'Choreography for national tour and regional productions — capturing the raw energy and iconic movement of the original.',
    thumbnail: '/still_alex_flip.jpg',
    year: 'Various',
  },
  {
    id: 4,
    title: 'The Music Man',
    category: 'Broadway',
    description:
      'Associate choreographer to Tony Award–winning choreographer Warren Carlyle on the acclaimed Broadway revival.',
    thumbnail: '/still_music_man.png',
    year: '2022',
  },
  {
    id: 5,
    title: 'Selected Cruise Entertainment',
    category: 'Cruise',
    description:
      'Large-scale production choreography and creative direction for Celebrity Cruises and Norwegian Cruise Line — shaping premium entertainment experiences at sea.',
    thumbnail: '/still_performance1.jpg',
    year: 'Ongoing',
  },
  {
    id: 6,
    title: 'Rehearsal & Development',
    category: 'Process',
    description:
      'Behind the work — the rehearsal room, the development process, and the collaborative creative environment where productions are built.',
    thumbnail: '/still_teaching_tango.jpg',
    year: 'Various',
  },
];

export default function VideoGallery() {
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null);
  const [activeClip, setActiveClip] = useState<VimeoClip | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalVideo]);

  const openModal = (video: VideoItem) => {
    setModalVideo(video);
    setActiveClip(video.clips ? video.clips[0] : null);
  };

  const closeModal = () => {
    setModalVideo(null);
    setActiveClip(null);
  };

  return (
    <div className="video-page">
      {/* Hero */}
      <section className="video-hero">
        <div className="video-hero-bg">
          <img src="/still_silhouette_hero.png" alt="" className="video-hero-img" />
          <div className="video-hero-overlay" />
        </div>
        <div className="video-hero-content">
          <p className="video-hero-eyebrow">Portfolio</p>
          <h1 className="video-hero-title">The Work</h1>
          <p className="video-hero-sub">
            A curated selection of productions, concepts, and collaborations across cruise,
            Broadway, and theatrical performance.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="video-grid-section">
        <div className="video-grid-container">
          <div className="video-grid">
            {videos.map((video) => (
              <div key={video.id} className="video-card">
                <div className="video-card-thumb">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="video-card-img"
                  />
                  <div className="video-card-img-overlay" />
                  <div className="video-card-category">{video.category}</div>
                </div>
                <div className="video-card-body">
                  <div className="video-card-header">
                    <h3 className="video-card-title">{video.title}</h3>
                    <span className="video-card-year">{video.year}</span>
                  </div>
                  <p className="video-card-desc">{video.description}</p>
                  {video.clips && (
                    <button
                      className="video-card-watch-btn"
                      onClick={() => openModal(video)}
                    >
                      <span className="video-card-watch-icon">▶</span>
                      Watch
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reel CTA */}
      <section className="video-reel-section">
        <div className="video-reel-inner">
          <p className="video-reel-label">Choreography Reel</p>
          <h2 className="video-reel-title">Full Reel Available Upon Request</h2>
          <p className="video-reel-text">
            A complete choreography reel showcasing the full range of David's work across
            Broadway, cruise, and theatrical productions is available for industry professionals.
          </p>
          <a
            href="mailto:david@davidscotchford.com"
            className="cta-button"
            style={{ display: 'inline-block', textDecoration: 'none' }}
          >
            Request Reel →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="social-links">
            <a href="#" title="LinkedIn">in</a>
            <a href="#" title="Instagram">@</a>
            <a href="#" title="Email">✉</a>
          </div>
          <p>&copy; 2025 David Scotchford. All rights reserved.</p>
        </div>
      </footer>

      {/* Video Modal */}
      {modalVideo && (
        <div className="vmodal-backdrop" onClick={closeModal}>
          <div className="vmodal" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button className="vmodal-close" onClick={closeModal} aria-label="Close">✕</button>

            {/* Header */}
            <div className="vmodal-header">
              <p className="vmodal-eyebrow">{modalVideo.category}</p>
              <h2 className="vmodal-title">{modalVideo.title}</h2>
            </div>

            {/* Active Player */}
            {activeClip && (
              <div className="vmodal-player-wrap">
                <iframe
                  key={activeClip.id}
                  src={`https://player.vimeo.com/video/${activeClip.id}?autoplay=1&color=a89968&title=0&byline=0&portrait=0`}
                  className="vmodal-iframe"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={activeClip.label}
                />
              </div>
            )}

            {/* Clip Selector */}
            {modalVideo.clips && modalVideo.clips.length > 1 && (
              <div className="vmodal-clips">
                {modalVideo.clips.map((clip, i) => (
                  <button
                    key={clip.id}
                    className={`vmodal-clip-btn${activeClip?.id === clip.id ? ' vmodal-clip-btn--active' : ''}`}
                    onClick={() => setActiveClip(clip)}
                  >
                    <span className="vmodal-clip-num">{i + 1}</span>
                    <span className="vmodal-clip-label">{clip.label}</span>
                    {activeClip?.id === clip.id && <span className="vmodal-clip-playing">▶ Playing</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
