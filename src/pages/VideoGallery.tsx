import { useState } from 'react';

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      title: 'Celestial Reverie - Full Show',
      category: 'full-show',
      duration: '45:00',
      description: 'Complete performance of the signature cruise entertainment production.',
    },
    {
      id: 2,
      title: 'Choreography Reel 2024',
      category: 'reel',
      duration: '5:30',
      description: 'Highlights of recent choreography and creative direction work.',
    },
    {
      id: 3,
      title: 'Urban Narratives - Theatrical Production',
      category: 'full-show',
      duration: '38:00',
      description: 'Original theatrical work exploring urban storytelling through movement.',
    },
    {
      id: 4,
      title: 'Ensemble Choreography Showcase',
      category: 'reel',
      duration: '4:15',
      description: 'Selection of ensemble choreography from recent productions.',
    },
    {
      id: 5,
      title: 'Luminescence - Experiential Experience',
      category: 'full-show',
      duration: '22:00',
      description: 'Immersive entertainment experience featuring innovative choreography.',
    },
    {
      id: 6,
      title: 'Creative Direction & Staging',
      category: 'reel',
      duration: '6:45',
      description: 'Behind-the-scenes look at creative direction and staging process.',
    },
    {
      id: 7,
      title: 'Metamorphosis - Production Highlights',
      category: 'full-show',
      duration: '41:00',
      description: 'Large-scale cruise production showcasing ensemble choreography.',
    },
    {
      id: 8,
      title: 'Movement Vocabulary Exploration',
      category: 'reel',
      duration: '3:20',
      description: 'Exploration of signature movement vocabulary and artistic approach.',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Videos' },
    { id: 'full-show', label: 'Full Shows' },
    { id: 'reel', label: 'Reels & Highlights' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(v => v.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ marginTop: '60px', textAlign: 'center' }}>
        <div className="container">
          <h1>Video Gallery</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', maxWidth: '700px', margin: '1.5rem auto 0' }}>
            Premium choreography and entertainment experiences
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section" style={{ background: 'var(--dark-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: selectedCategory === cat.id ? 'var(--accent-gold)' : 'var(--dark-secondary)',
                    color: selectedCategory === cat.id ? 'var(--dark-bg)' : 'var(--accent-gold)',
                    border: `2px solid var(--accent-gold)`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '1rem',
                    fontWeight: '500',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-2">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video.id)}
                style={{
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '4px',
                }}
              >
                <div
                  className="card"
                  style={{
                    padding: 0,
                    border: selectedVideo === video.id ? '2px solid var(--accent-gold)' : '1px solid rgba(139, 125, 107, 0.2)',
                  }}
                >
                  <div
                    className="card-image"
                    style={{
                      background: `linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '3rem',
                        color: 'var(--accent-gold)',
                        opacity: 0.7,
                      }}
                    >
                      ▶
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '1rem',
                        right: '1rem',
                        background: 'rgba(10, 10, 10, 0.8)',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        color: 'var(--accent-gold)',
                      }}
                    >
                      {video.duration}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 className="card-title">{video.title}</h3>
                    <p className="card-description">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reel Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Choreography Reel</h2>
            <p>
              A comprehensive showcase of creative direction and choreographic work
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
                aspectRatio: '16 / 9',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
              }}
            >
              <div
                style={{
                  fontSize: '4rem',
                  color: 'var(--accent-gold)',
                  opacity: 0.7,
                }}
              >
                ▶
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 className="card-title">Choreography Reel 2024</h3>
              <p style={{ fontSize: '1rem', color: 'rgba(245, 241, 237, 0.8)', marginTop: '1rem' }}>
                A curated selection of recent choreography, creative direction, and entertainment
                development work. This reel showcases the range, sophistication, and artistic vision
                that defines premium live entertainment creation.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted-gold)', marginTop: '1.5rem' }}>
                Duration: 5:30 | Format: 4K | Year: 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Categories Section */}
      <section className="section" style={{ background: 'var(--dark-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Video Collections</h2>
            <p>
              Organized by content type and production focus
            </p>
          </div>

          <div className="grid grid-2">
            {[
              {
                title: 'Full Productions',
                description: 'Complete shows and full-length performances from cruise, theatrical, and experiential productions.',
                count: '4 videos',
              },
              {
                title: 'Reels & Highlights',
                description: 'Curated reels showcasing choreography, creative direction, and artistic highlights.',
                count: '4 videos',
              },
            ].map((collection, i) => (
              <div key={i} className="card">
                <h3 className="card-title">{collection.title}</h3>
                <p className="card-description">{collection.description}</p>
                <p style={{ marginTop: '1.5rem', color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: '600' }}>
                  {collection.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Behind the Scenes</h2>
            <p>
              The creative process and artistic vision
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
                height: '400px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  color: 'var(--accent-gold)',
                  opacity: 0.7,
                }}
              >
                ▶
              </div>
            </div>
            <div>
              <h2>Creative Development Process</h2>
              <p>
                Explore the creative process behind premium entertainment development. From initial
                concept through final execution, see how artistic vision becomes reality.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                {[
                  'Concept development and creative direction',
                  'Choreography and movement design',
                  'Ensemble training and refinement',
                  'Technical integration and staging',
                  'Final performance and execution',
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.75rem', color: 'rgba(245, 241, 237, 0.8)' }}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center', background: 'var(--dark-secondary)' }}>
        <div className="container">
          <h2>Interested in Collaboration?</h2>
          <p style={{ fontSize: '1.125rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
            Let's discuss how creative vision and artistic excellence can elevate your entertainment project.
          </p>
          <button className="cta-button">Get in Touch</button>
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
          <p>&copy; 2024 David Scotchford. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
