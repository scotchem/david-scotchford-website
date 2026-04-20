import { useState } from 'react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Celestial Reverie',
      category: 'cruise',
      description: 'A sophisticated theatrical experience blending contemporary choreography with immersive staging.',
      year: 2023,
    },
    {
      id: 2,
      title: 'Urban Narratives',
      category: 'theatrical',
      description: 'Original theatrical production exploring urban storytelling through movement and design.',
      year: 2023,
    },
    {
      id: 3,
      title: 'Luminescence',
      category: 'experiential',
      description: 'Immersive entertainment experience for premium venue, featuring innovative choreography.',
      year: 2022,
    },
    {
      id: 4,
      title: 'Metamorphosis',
      category: 'cruise',
      description: 'Large-scale production showcasing ensemble choreography and theatrical storytelling.',
      year: 2022,
    },
    {
      id: 5,
      title: 'Resonance',
      category: 'theatrical',
      description: 'Contemporary theatrical work exploring human connection and artistic expression.',
      year: 2022,
    },
    {
      id: 6,
      title: 'Ethereal Motion',
      category: 'experiential',
      description: 'Bespoke entertainment experience combining choreography, technology, and artistic vision.',
      year: 2021,
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ marginTop: '60px', textAlign: 'center' }}>
        <div className="container">
          <h1>Selected Work</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', maxWidth: '700px', margin: '1.5rem auto 0' }}>
            A curated portfolio of premium entertainment experiences
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section" style={{ background: 'var(--dark-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'cruise', label: 'Cruise Entertainment' },
                { id: 'theatrical', label: 'Theatrical' },
                { id: 'experiential', label: 'Experiential' },
              ].map((cat) => (
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

          {/* Projects Grid */}
          <div className="grid grid-2">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card">
                <div
                  className="card-image"
                  style={{
                    background: `linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)`,
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                  <h3 className="card-title">{project.title}</h3>
                  <span style={{ color: 'var(--muted-gold)', fontSize: '0.85rem' }}>{project.year}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {project.category === 'cruise' && 'Cruise Entertainment'}
                  {project.category === 'theatrical' && 'Theatrical Production'}
                  {project.category === 'experiential' && 'Experiential Experience'}
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
          <div className="section-header">
            <h2>Featured Project</h2>
            <p>
              A deep dive into a signature creative work
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
                height: '500px',
                borderRadius: '4px',
              }}
            />
            <div>
              <h3 style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                Cruise Entertainment
              </h3>
              <h2>Celestial Reverie</h2>
              <p>
                A sophisticated theatrical experience that redefined premium cruise entertainment.
                This original production combines contemporary choreography with immersive staging,
                creating a narrative journey that resonates with discerning audiences.
              </p>
              <p style={{ marginTop: '1.5rem' }}>
                The show features innovative ensemble choreography, cutting-edge technical integration,
                and a carefully curated artistic vision. Every element—from movement vocabulary to
                lighting design—works in concert to create an unforgettable experience.
              </p>
              <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <p style={{ color: 'var(--muted-gold)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Duration</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>45 Minutes</p>
                </div>
                <div>
                  <p style={{ color: 'var(--muted-gold)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Ensemble Size</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>12 Performers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" style={{ background: 'var(--dark-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Creative Process</h2>
            <p>
              How we develop premium entertainment experiences
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              {
                step: '01',
                title: 'Concept & Vision',
                description: 'Deep creative exploration to establish the artistic foundation and core narrative.',
              },
              {
                step: '02',
                title: 'Development & Design',
                description: 'Choreography, staging, and technical design work in concert to realize the vision.',
              },
              {
                step: '03',
                title: 'Refinement & Integration',
                description: 'Meticulous attention to detail, performer training, and technical integration.',
              },
              {
                step: '04',
                title: 'Execution & Excellence',
                description: 'Bringing the complete artistic vision to life with precision and artistry.',
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '2rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(139, 125, 107, 0.2)' }}>
                <div>
                  <p style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-gold)' }}>{item.step}</p>
                </div>
                <div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to Create Something Extraordinary?</h2>
          <p style={{ fontSize: '1.125rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
            Let's discuss how creative vision can elevate your entertainment experience.
          </p>
          <button className="cta-button">Start a Conversation</button>
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
