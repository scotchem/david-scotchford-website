export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'From Miami With Love',
      category: 'Original Concept',
      description: 'An original entertainment concept capturing the vibrant energy, romance, and spectacle of Miami\'s cultural landscape. Blending choreography, music, and visual storytelling into an immersive experience that celebrates movement, passion, and the electric spirit of the city.',
      year: '2024',
    },
    {
      id: 2,
      title: 'In Tandem',
      category: 'Cruise Entertainment',
      description: 'Original choreography for RWS Step One Dance Company, created for premium cruise entertainment. A dynamic, movement-driven production designed for large-scale performance environments and global audiences.',
      year: '2023',
    },
    {
      id: 3,
      title: 'Dirty Dancing',
      category: 'International Theatrical',
      description: 'Choreography for international productions of the iconic stage musical, bringing the signature movement language of Dirty Dancing to audiences across multiple territories.',
      year: 'Various',
    },
    {
      id: 4,
      title: 'The Music Man',
      category: 'Broadway',
      description: 'Associate choreographer to Tony Award–winning choreographer Warren Carlyle on the acclaimed Broadway revival, contributing to the development and staging of one of Broadway\'s most celebrated productions.',
      year: '2022',
    },
    {
      id: 5,
      title: 'Selected Cruise Entertainment',
      category: 'Cruise Entertainment',
      description: 'Creative direction, choreography, and entertainment development across premium cruise entertainment environments, shaping large-scale productions for Celebrity Cruises and Norwegian Cruise Line.',
      year: 'Ongoing',
    },
    {
      id: 6,
      title: 'Creative Development & Consulting',
      category: 'Consulting',
      description: 'Ongoing creative consulting work with producers and creative teams — refining, elevating, and shaping live entertainment concepts from early development through production.',
      year: 'Ongoing',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ marginTop: '60px', textAlign: 'center', paddingBottom: '4rem' }}>
        <div className="container">
          <h1>Selected Work</h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section" style={{ background: 'var(--dark-secondary)', paddingTop: '0' }}>
        <div className="container">
          <div className="grid grid-2">
            {projects.map((project) => (
              <div key={project.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                  <h3 className="card-title">{project.title}</h3>
                  <span style={{ color: 'var(--muted-gold)', fontSize: '0.85rem', whiteSpace: 'nowrap', marginLeft: '1rem' }}>{project.year}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                  {project.category}
                </p>
                <p className="card-description">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Spotlight */}
      <section className="section">
        <div className="container">
          <div className="featured-project">
            <div className="featured-image-wrapper">
              <img
                src="/FMWLPoster1.jpeg"
                alt="From Miami With Love"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="featured-content">
              <p className="featured-label">Original Concept</p>
              <h2 className="featured-title">From Miami With Love</h2>
              <p className="featured-description">
                An original entertainment concept that captures the vibrant energy, romance, and spectacle of Miami's cultural landscape. This signature world blends choreography, music, and visual storytelling to create an immersive experience that celebrates movement, passion, and the electric spirit of the city.
              </p>
              <p className="featured-description" style={{ marginTop: '1.5rem' }}>
                Designed for cruise, theatrical, and experiential performance environments, From Miami With Love represents the kind of authored, concept-driven entertainment that defines David Scotchford's approach to original show creation.
              </p>
              <a href="#" className="cta-button" style={{ display: 'inline-block', marginTop: '2rem', textDecoration: 'none' }}>
                Explore Concepts →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center', background: 'var(--dark-secondary)' }}>
        <div className="container">
          <h2 style={{ maxWidth: '700px', margin: '0 auto 1.5rem' }}>Start a Conversation</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', color: 'rgba(245,241,237,0.75)' }}>
            Whether developing an original concept, shaping a new production, or refining an existing work — let's talk.
          </p>
          <button className="cta-button">Get in Touch</button>
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
    </div>
  );
}
