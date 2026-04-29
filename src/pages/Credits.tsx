export default function Credits() {
  const credits = [
    {
      title: 'Celestial Reverie',
      year: 2023,
      client: 'Premium Cruise Line',
      roles: [
        'Original Show Concept & Creative Direction',
        'Choreography & Movement Design',
        'Ensemble Direction & Training',
        'Staging & Technical Integration',
      ],
    },
    {
      title: 'Urban Narratives',
      year: 2023,
      client: 'Theatrical Production Company',
      roles: [
        'Original Theatrical Work',
        'Choreography & Staging',
        'Creative Direction',
        'Performer Collaboration',
      ],
    },
    {
      title: 'Luminescence',
      year: 2022,
      client: 'Experiential Venue',
      roles: [
        'Entertainment Concept Development',
        'Choreography & Movement Design',
        'Technical Integration',
        'Creative Consulting',
      ],
    },
    {
      title: 'Metamorphosis',
      year: 2022,
      client: 'Cruise Entertainment Division',
      roles: [
        'Show Development & Choreography',
        'Ensemble Choreography',
        'Creative Direction',
        'Performance Direction',
      ],
    },
    {
      title: 'Resonance',
      year: 2022,
      client: 'Independent Theater Company',
      roles: [
        'Original Theatrical Concept',
        'Choreography',
        'Creative Consulting',
        'Artistic Direction',
      ],
    },
    {
      title: 'Ethereal Motion',
      year: 2021,
      client: 'Premium Event Venue',
      roles: [
        'Entertainment Development',
        'Choreography & Staging',
        'Creative Direction',
        'Performer Training',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ marginTop: '60px', textAlign: 'center' }}>
        <div className="container">
          <h1>Selected Credits</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', maxWidth: '700px', margin: '1.5rem auto 0' }}>
            A comprehensive overview of creative work and professional achievements
          </p>
        </div>
      </section>

      {/* Credits List */}
      <section className="section" style={{ background: 'var(--dark-secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {credits.map((credit, i) => (
              <div
                key={i}
                className="card"
                style={{
                  marginBottom: '2rem',
                  paddingBottom: '2rem',
                  borderBottom: i !== credits.length - 1 ? '1px solid rgba(139, 125, 107, 0.2)' : 'none',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', marginBottom: '1.5rem' }}>
                  <div>
                    <h3 className="card-title">{credit.title}</h3>
                    <p style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {credit.client}
                    </p>
                    <p style={{ color: 'var(--muted-gold)', fontSize: '0.85rem' }}>
                      {credit.year}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', minWidth: '150px' }}>
                    <p style={{ color: 'var(--muted-gold)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                      ROLES
                    </p>
                    <p style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--warm-white)' }}>
                      {credit.roles.length} Roles
                    </p>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {credit.roles.map((role, j) => (
                    <li
                      key={j}
                      style={{
                        paddingLeft: '1.5rem',
                        marginBottom: '0.5rem',
                        color: 'rgba(245, 241, 237, 0.8)',
                        position: 'relative',
                      }}
                    >
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-gold)' }}>▪</span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Core Competencies</h2>
            <p>
              Professional expertise and creative capabilities
            </p>
          </div>

          <div className="grid grid-3">
            {[
              {
                category: 'Creative Direction',
                skills: [
                  'Concept Development',
                  'Artistic Vision',
                  'Show Development',
                  'Creative Strategy',
                  'Artistic Leadership',
                ],
              },
              {
                category: 'Choreography',
                skills: [
                  'Movement Design',
                  'Ensemble Choreography',
                  'Contemporary Technique',
                  'Theatrical Movement',
                  'Technical Integration',
                ],
              },
              {
                category: 'Production',
                skills: [
                  'Show Production',
                  'Performer Training',
                  'Staging & Design',
                  'Technical Direction',
                  'Performance Management',
                ],
              },
              {
                category: 'Entertainment',
                skills: [
                  'Cruise Entertainment',
                  'Theatrical Production',
                  'Experiential Design',
                  'Venue Development',
                  'Event Entertainment',
                ],
              },
              {
                category: 'Collaboration',
                skills: [
                  'Producer Partnership',
                  'Director Collaboration',
                  'Team Leadership',
                  'Creative Consultation',
                  'Artistic Mentorship',
                ],
              },
              {
                category: 'Technical',
                skills: [
                  'Lighting Integration',
                  'Sound Design',
                  'Stage Management',
                  'Video Integration',
                  'Technical Rehearsal',
                ],
              },
            ].map((comp, i) => (
              <div key={i} className="card">
                <h3 className="card-title">{comp.category}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {comp.skills.map((skill, j) => (
                    <li
                      key={j}
                      style={{
                        marginBottom: '0.5rem',
                        color: 'rgba(245, 241, 237, 0.8)',
                        fontSize: '0.95rem',
                      }}
                    >
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="section" style={{ background: 'var(--dark-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Industry Experience</h2>
            <p>
              Professional work across premium entertainment sectors
            </p>
          </div>

          <div className="grid grid-2">
            {[
              {
                industry: 'Cruise Entertainment',
                description: 'Premium show development and creative direction for leading cruise lines. Specializing in large-scale productions with sophisticated choreography and technical integration.',
                projects: 'Celestial Reverie, Metamorphosis, and additional cruise entertainment productions',
              },
              {
                industry: 'Theatrical Production',
                description: 'Original theatrical works and production support for theater companies. Creating innovative theatrical experiences with artistic depth and audience engagement.',
                projects: 'Urban Narratives, Resonance, and theatrical collaboration projects',
              },
              {
                industry: 'Experiential Entertainment',
                description: 'Immersive entertainment experiences for premium venues and events. Designing bespoke entertainment solutions that create lasting impressions.',
                projects: 'Luminescence, Ethereal Motion, and custom venue entertainment',
              },
              {
                industry: 'Creative Consulting',
                description: 'Strategic creative guidance for producers, entertainment directors, and venue operators. Providing expertise in show development and entertainment strategy.',
                projects: 'Ongoing consultation with multiple entertainment organizations',
              },
            ].map((exp, i) => (
              <div key={i} className="card">
                <h3 className="card-title">{exp.industry}</h3>
                <p className="card-description">{exp.description}</p>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--accent-gold)', fontStyle: 'italic' }}>
                  {exp.projects}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Professional Timeline</h2>
            <p>
              Career highlights and creative milestones
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { year: '2023', milestone: 'Celestial Reverie debuts as signature cruise production' },
              { year: '2023', milestone: 'Urban Narratives theatrical production launches' },
              { year: '2022', milestone: 'Luminescence experiential entertainment experience created' },
              { year: '2022', milestone: 'Metamorphosis large-scale cruise production developed' },
              { year: '2021', milestone: 'Established as independent creative consultant' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '150px 1fr',
                  gap: '2rem',
                  marginBottom: '2rem',
                  paddingBottom: '2rem',
                  borderBottom: i !== 4 ? '1px solid rgba(139, 125, 107, 0.2)' : 'none',
                }}
              >
                <div>
                  <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent-gold)' }}>
                    {item.year}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '1rem', color: 'rgba(245, 241, 237, 0.85)' }}>
                    {item.milestone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center', background: 'var(--dark-secondary)' }}>
        <div className="container">
          <h2>Ready to Collaborate?</h2>
          <p style={{ fontSize: '1.125rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
            Let's discuss how creative expertise can elevate your entertainment project.
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
