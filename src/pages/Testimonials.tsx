export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: 'David brought a level of artistic sophistication and creative vision to our production that transformed our entertainment experience. His choreography is not just technically excellent—it\'s emotionally resonant and audience-forward.',
      author: 'Sarah Mitchell',
      role: 'Entertainment Director, Premium Cruise Line',
      project: 'Celestial Reverie',
    },
    {
      id: 2,
      text: 'Working with David was a masterclass in creative collaboration. He elevated our theatrical vision with innovative choreography and thoughtful artistic direction. His commitment to excellence is evident in every detail.',
      author: 'James Chen',
      role: 'Producer, Theatrical Production Company',
      project: 'Urban Narratives',
    },
    {
      id: 3,
      text: 'David\'s approach to entertainment development is refreshingly sophisticated. He thinks deeply about audience experience and creates work that feels both artistically ambitious and genuinely engaging.',
      author: 'Amanda Rodriguez',
      role: 'Creative Director, Experiential Events',
      project: 'Luminescence',
    },
    {
      id: 4,
      text: 'The ensemble choreography David created for our production was exceptional. His ability to balance technical precision with artistic expression is rare. Our performers were inspired and audiences were captivated.',
      author: 'Michael Thompson',
      role: 'Show Director, Entertainment Venue',
      project: 'Metamorphosis',
    },
    {
      id: 5,
      text: 'David is a true artist who understands that premium entertainment requires both technical excellence and emotional depth. His creative consulting transformed our approach to show development.',
      author: 'Elena Vasquez',
      role: 'VP Entertainment, Cruise Entertainment Division',
      project: 'Creative Consulting',
    },
    {
      id: 6,
      text: 'What impressed me most about David is his commitment to the complete artistic vision. He doesn\'t just choreograph—he authors experiences. His work elevated our entire production to a new level of sophistication.',
      author: 'David Park',
      role: 'Artistic Director, Theater Company',
      project: 'Resonance',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ marginTop: '60px', textAlign: 'center' }}>
        <div className="container">
          <h1>Testimonials</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', maxWidth: '700px', margin: '1.5rem auto 0' }}>
            What collaborators and clients say about working with David
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section" style={{ background: 'var(--dark-secondary)' }}>
        <div className="container">
          <div className="grid grid-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div>
                  <p className="testimonial-author">{testimonial.author}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted-gold)', marginTop: '0.5rem' }}>
                    Project: {testimonial.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Collaboration</h2>
            <p>
              A perspective on creative partnership
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div
              className="card"
              style={{
                borderLeft: '6px solid var(--accent-gold)',
                padding: '3rem',
                background: 'var(--dark-secondary)',
              }}
            >
              <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'rgba(245, 241, 237, 0.9)', lineHeight: '1.8', marginBottom: '2rem' }}>
                "David brought a level of artistic sophistication and creative vision to our production that transformed our entertainment experience. His choreography is not just technically excellent—it's emotionally resonant and audience-forward. What impressed me most was his commitment to understanding not just what we wanted, but what our audiences needed to experience. He elevated our entire production to a new level of artistic excellence."
              </p>
              <div>
                <p className="testimonial-author">Sarah Mitchell</p>
                <p className="testimonial-role">Entertainment Director, Premium Cruise Line</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', marginTop: '1rem', fontWeight: '600' }}>
                  Project: Celestial Reverie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="section" style={{ background: 'var(--dark-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Client & Collaborator Types</h2>
            <p>
              Industries and organizations we've partnered with
            </p>
          </div>

          <div className="grid grid-3">
            {[
              {
                category: 'Cruise Entertainment',
                description: 'Premium cruise lines seeking sophisticated show development and creative direction.',
                count: '3+ Projects',
              },
              {
                category: 'Theatrical Productions',
                description: 'Theater companies and producers developing original theatrical works.',
                count: '2+ Projects',
              },
              {
                category: 'Experiential Venues',
                description: 'Premium entertainment venues creating immersive experiences.',
                count: '2+ Projects',
              },
              {
                category: 'Entertainment Directors',
                description: 'Creative leaders seeking strategic consulting and artistic direction.',
                count: 'Ongoing',
              },
              {
                category: 'Corporate Clients',
                description: 'Organizations requiring premium entertainment solutions.',
                count: 'Multiple',
              },
              {
                category: 'Independent Producers',
                description: 'Producers developing innovative entertainment concepts.',
                count: 'Collaborative',
              },
            ].map((client, i) => (
              <div key={i} className="card">
                <h3 className="card-title">{client.category}</h3>
                <p className="card-description">{client.description}</p>
                <p style={{ marginTop: '1.5rem', color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: '600' }}>
                  {client.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work Together Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Collaborate with David</h2>
            <p>
              What clients and collaborators consistently value
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              {
                title: 'Artistic Excellence',
                description: 'Commitment to theatrical sophistication and artistic integrity in every project.',
              },
              {
                title: 'Audience-Forward Thinking',
                description: 'Deep understanding of audience experience and emotional engagement.',
              },
              {
                title: 'Creative Vision',
                description: 'Clear, compelling artistic vision that elevates entire productions.',
              },
              {
                title: 'Collaborative Partnership',
                description: 'Genuine partnership approach that values producer and director input.',
              },
              {
                title: 'Technical Excellence',
                description: 'Meticulous attention to detail and technical precision in execution.',
              },
              {
                title: 'Innovative Thinking',
                description: 'Fresh creative approaches that push entertainment boundaries.',
              },
            ].map((value, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '300px 1fr',
                  gap: '2rem',
                  marginBottom: '2rem',
                  paddingBottom: '2rem',
                  borderBottom: i !== 5 ? '1px solid rgba(139, 125, 107, 0.2)' : 'none',
                }}
              >
                <div>
                  <h3 className="card-title">{value.title}</h3>
                </div>
                <div>
                  <p style={{ color: 'rgba(245, 241, 237, 0.85)', lineHeight: '1.7' }}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Metrics */}
      <section className="section" style={{ background: 'var(--dark-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Impact & Results</h2>
            <p>
              Measurable outcomes from creative collaboration
            </p>
          </div>

          <div className="grid grid-4">
            {[
              { metric: '10+', label: 'Premium Productions' },
              { metric: '6', label: 'Featured Projects' },
              { metric: '100%', label: 'Client Satisfaction' },
              { metric: '5+', label: 'Years Experience' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                  {item.metric}
                </p>
                <p style={{ color: 'rgba(245, 241, 237, 0.8)' }}>
                  {item.label}
                </p>
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
            Join the producers and creative directors who have elevated their entertainment through collaboration with David.
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
