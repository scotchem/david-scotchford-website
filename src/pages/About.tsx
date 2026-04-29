export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ marginTop: '60px', textAlign: 'center' }}>
        <div className="container">
          <h1>About David Scotchford</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', maxWidth: '700px', margin: '1.5rem auto 0' }}>
            A creative visionary who authors premium live entertainment experiences
          </p>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="section" style={{ background: 'var(--dark-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
                height: '500px',
                borderRadius: '4px',
              }}
            />
            <div>
              <h2>The Artist & Creator</h2>
              <p>
                David Scotchford is a creative entertainment professional specializing in the design
                and execution of premium live experiences. With a career spanning cruise entertainment,
                theatrical production, and experiential design, David has established himself as a
                trusted creative partner for producers and entertainment directors seeking elevated,
                audience-forward entertainment solutions.
              </p>
              <p style={{ marginTop: '1.5rem' }}>
                His work is characterized by theatrical sophistication, meticulous attention to detail,
                and a deep understanding of what moves audiences. Rather than simply choreographing
                movement, David authors complete entertainment narratives—from initial concept through
                final execution.
              </p>
              <p style={{ marginTop: '1.5rem' }}>
                David's philosophy centers on the belief that premium entertainment is an art form.
                Every show, every moment, every movement is intentional and purposeful, designed to
                create lasting impressions and emotional resonance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Core Expertise</h2>
            <p>
              Comprehensive capabilities across premium entertainment creation
            </p>
          </div>

          <div className="grid grid-2">
            {[
              {
                title: 'Original Show Creation',
                items: [
                  'Concept development and creative direction',
                  'Full production design and choreography',
                  'Narrative structure and audience engagement strategy',
                  'Technical integration and staging solutions',
                ],
              },
              {
                title: 'Creative Consulting',
                items: [
                  'Entertainment strategy and creative direction',
                  'Producer and director collaboration',
                  'Show development and refinement',
                  'Creative problem-solving for complex productions',
                ],
              },
              {
                title: 'Choreography & Movement Design',
                items: [
                  'Sophisticated movement vocabulary',
                  'Ensemble coordination and precision',
                  'Emotional storytelling through motion',
                  'Technical and theatrical integration',
                ],
              },
              {
                title: 'Entertainment Development',
                items: [
                  'Cruise line entertainment solutions',
                  'Theatrical production support',
                  'Experiential venue design',
                  'Performer training and direction',
                ],
              },
            ].map((expertise, i) => (
              <div key={i} className="card">
                <h3 className="card-title">{expertise.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {expertise.items.map((item, j) => (
                    <li key={j} style={{ marginBottom: '0.75rem', color: 'rgba(245, 241, 237, 0.8)' }}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section" style={{ background: 'var(--dark-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Creative Philosophy</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card" style={{ marginBottom: '2rem' }}>
              <h3 className="card-title">Authorship</h3>
              <p className="card-description">
                Entertainment is an art form. Every production is authored with intention, purpose,
                and a clear creative vision. David approaches each project as a complete creative
                work, not simply a collection of choreographed moments.
              </p>
            </div>

            <div className="card" style={{ marginBottom: '2rem' }}>
              <h3 className="card-title">Audience-Forward Thinking</h3>
              <p className="card-description">
                The audience experience is paramount. Every creative decision—from movement vocabulary
                to staging choices—is made with deep consideration for how audiences will receive,
                interpret, and remember the experience.
              </p>
            </div>

            <div className="card" style={{ marginBottom: '2rem' }}>
              <h3 className="card-title">Theatrical Sophistication</h3>
              <p className="card-description">
                Premium entertainment demands refined artistic sensibility. David brings theatrical
                depth and artistic integrity to every project, elevating entertainment into the realm
                of genuine artistic expression.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Collaborative Excellence</h3>
              <p className="card-description">
                The best creative work emerges from strong collaboration. David works closely with
                producers, directors, performers, and technical teams to bring shared visions to life
                with precision and artistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Industries */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Served Industries</h2>
            <p>
              Premium entertainment expertise across multiple sectors
            </p>
          </div>

          <div className="grid grid-3">
            {[
              { title: 'Cruise Entertainment', description: 'Premium shows and entertainment experiences for discerning cruise line audiences' },
              { title: 'Theatrical Production', description: 'Original theatrical works and production support for theater companies' },
              { title: 'Experiential Events', description: 'Immersive entertainment for high-end events and venues' },
              { title: 'Corporate Entertainment', description: 'Sophisticated entertainment solutions for corporate clients' },
              { title: 'Venue Development', description: 'Entertainment strategy and show development for entertainment venues' },
              { title: 'Producer Collaboration', description: 'Creative partnership with independent producers and production companies' },
            ].map((industry, i) => (
              <div key={i} className="card">
                <h3 className="card-title">{industry.title}</h3>
                <p className="card-description">{industry.description}</p>
              </div>
            ))}
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
            <a href="https://www.linkedin.com/in/david-scotchford-7744665a/" title="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
            <a href="https://www.instagram.com/d.scotch/" title="Instagram" target="_blank" rel="noopener noreferrer">@</a>
            <a href="mailto:scotchem@gmail.com" title="Email">✉</a>
          </div>
          <p>&copy; 2024 David Scotchford. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
