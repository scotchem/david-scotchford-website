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
      { id: '1156632794', label: 'Clip 1' },
      { id: '1156910196', label: 'Clip 2' },
      { id: '1156910168', label: 'Clip 3' },
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
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [playingClip, setPlayingClip] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleExpand = (video: VideoItem) => {
    if (expandedId === video.id) {
      setExpandedId(null);
      setPlayingClip(null);
    } else {
      setExpandedId(video.id);
      setPlayingClip(null);
    }
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
          <div className="video-grid-with-panels">
            {videos.map((video) => (
              <div key={video.id} className="video-grid-item-wrap">
                {/* Card */}
                <div
                  className={`video-card${video.clips ? ' video-card--has-clips' : ''}${expandedId === video.id ? ' video-card--expanded' : ''}`}
                  onClick={() => video.clips && toggleExpand(video)}
                >
                  <div className="video-card-thumb">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="video-card-img"
                    />
                    <div className="video-card-img-overlay" />
                    <div className="video-card-category">{video.category}</div>
                    {video.clips && (
                      <div className="video-card-play-badge">
                        <span>{expandedId === video.id ? '✕' : '▶'}</span>
                      </div>
                    )}
                  </div>
                  <div className="video-card-body">
                    <div className="video-card-header">
                      <h3 className="video-card-title">{video.title}</h3>
                      <span className="video-card-year">{video.year}</span>
                    </div>
                    <p className="video-card-desc">{video.description}</p>
                    {video.clips && (
                      <p className="video-card-clips-hint">
                        {expandedId === video.id ? 'Click to collapse' : `▶  ${video.clips.length} videos — click to watch`}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Expand Panel — spans full width, inserted after the row containing In Tandem */}
            {expandedId !== null && (() => {
              const video = videos.find(v => v.id === expandedId);
              if (!video?.clips) return null;
              return (
                <div className="video-expand-panel">
                  <div className="video-expand-header">
                    <div>
                      <p className="video-expand-eyebrow">{video.category}</p>
                      <h3 className="video-expand-title">{video.title}</h3>
                    </div>
                    <button
                      className="video-expand-close"
                      onClick={() => { setExpandedId(null); setPlayingClip(null); }}
                    >
                      ✕ Close
                    </button>
                  </div>
                  <div className="video-expand-clips">
                    {video.clips.map((clip, i) => (
                      <div key={clip.id} className="video-expand-clip">
                        {playingClip === clip.id ? (
                          <div className="video-expand-player-wrap">
                            <iframe
                              src={`https://player.vimeo.com/video/${clip.id}?autoplay=1&color=a89968&title=0&byline=0&portrait=0`}
                              className="video-expand-iframe"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                              title={clip.label}
                            />
                          </div>
                        ) : (
                          <div
                            className="video-expand-thumb"
                            onClick={() => setPlayingClip(clip.id)}
                          >
                            <img
                              src={`https://vumbnail.com/${clip.id}.jpg`}
                              alt={clip.label}
                              className="video-expand-thumb-img"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = video.thumbnail;
                              }}
                            />
                            <div className="video-expand-thumb-overlay" />
                            <div className="video-expand-play-btn">▶</div>
                          </div>
                        )}
                        <p className="video-expand-clip-label">
                          <span className="video-expand-clip-num">{i + 1}</span>
                          {clip.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
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
    </div>
  );
}
