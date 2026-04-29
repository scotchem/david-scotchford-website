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
  // Row 1
  {
    id: 1,
    title: 'Choreography Reel',
    category: 'Reel',
    description:
      'Featuring a choreography reel and extended reel spanning cruise, international, and regional theatrical productions.',
    thumbnail: '/still_reel_hero.jpg',
    year: '2024',
    clips: [
      { id: '315517275', label: 'Featured Reel' },
      { id: '374811280', label: 'Extended Reel' },
    ],
  },
  {
    id: 2,
    title: 'From Miami With Love',
    category: 'Original Concept',
    description:
      'A full-length original production concept inspired by the rhythm, heat, and romance of Miami — a vivid celebration of belonging, connection, and living life to the fullest.',
    thumbnail: '/fmwl_poster.jpg',
    year: 'In Development',
  },
  {
    id: 3,
    title: 'Fly Right',
    category: 'Original Concept',
    description:
      'A fly-by-the-seat-of-your-pants ride into the roots of early jazz, where rhythm, risk, and improvisation reign supreme.',
    thumbnail: '/still_fly_right.png',
    year: 'In Development',
  },
  // Row 2
  {
    id: 4,
    title: 'In Tandem',
    category: 'Original Concept',
    description:
      'A partner-driven dance production created for Step One Dance Company with RWS, exploring the interplay of movement, connection, and relationship aboard Holland America Line.',
    thumbnail: '/still_in_tandem.jpg',
    year: 'In Development',
    clips: [
      { id: '1156632794', label: 'Besamé Mucho' },
      { id: '1156910168', label: 'Let\'s Get Loud' },
      { id: '1156910196', label: 'She Bangs' },
    ],
  },
  {
    id: 5,
    title: 'The Music Man',
    category: 'Broadway',
    description:
      'Assistant choreographer to Tony Award–winning choreographer Warren Carlyle on the acclaimed Broadway revival.',
    thumbnail: '/still_music_man.png',
    year: '2022',
  },
  {
    id: 6,
    title: 'Dirty Dancing',
    category: 'International Theatrical',
    description:
      'Choreography for International and US tour productions — Dirty Dancing is a smash hit in all theatrical markets.',
    thumbnail: '/still_dirty_dancing.jpg',
    year: 'Various',
  },
  // Row 3
  {
    id: 7,
    title: 'In Development',
    category: 'In Development',
    description:
      'Exploration of various dance styles and themes.',
    thumbnail: '/still_in_development.jpg',
    year: '',
    clips: [
      { id: '63744328', label: 'Wonderful Town' },
      { id: '63575805', label: 'Say It To Me Now' },
    ],
  },
  {
    id: 8,
    title: 'Class Work',
    category: 'Class Work',
    description:
      'Excerpts from Int/Adv Theater classes. Previous guest teacher at Steps On Broadway and Broadway Dance Center NYC.',
    thumbnail: '/still_teaching_tango.jpg',
    year: 'Ongoing',
    clips: [
      { id: '136342738', label: 'Hernando\'s Hideaway' },
      { id: '78206052', label: 'Dance At The Gym' },
    ],
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
                    className={`video-card-img${video.id === 3 ? ' video-card-img--contain' : ''}${video.id === 7 ? ' video-card-img--top' : ''}`}
                  />
                  <div className="video-card-img-overlay" />
                  {video.id !== 7 && video.id !== 8 && <div className="video-card-category">{video.category}</div>}
                </div>
                <div className="video-card-body">
                  <div className="video-card-header">
                    <h3 className="video-card-title">{video.title}</h3>
                    {video.year && <span className="video-card-year">{video.year}</span>}
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



      {/* Footer */}
      <footer>
        <div className="container">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/david-scotchford-7744665a/" title="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
            <a href="https://www.instagram.com/d.scotch/" title="Instagram" target="_blank" rel="noopener noreferrer">@</a>
            <a href="mailto:scotchem@gmail.com" title="Email">✉</a>
          </div>
          <p>&copy; 2026 David Scotchford. All rights reserved.</p>
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
