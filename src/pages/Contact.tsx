import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        projectType: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ marginTop: '60px', textAlign: 'center' }}>
        <div className="container">
          <h1>Get in Touch</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', maxWidth: '700px', margin: '1.5rem auto 0' }}>
            Let's discuss how creative vision can elevate your entertainment project
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section" style={{ background: 'var(--dark-secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              {/* Form */}
              <div>
                <h2 style={{ marginBottom: '2rem' }}>Send a Message</h2>
                {submitted ? (
                  <div
                    style={{
                      background: 'rgba(168, 153, 104, 0.1)',
                      border: '1px solid var(--accent-gold)',
                      padding: '2rem',
                      borderRadius: '4px',
                      textAlign: 'center',
                    }}
                  >
                    <p style={{ fontSize: '1.125rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                      ✓ Message Received
                    </p>
                    <p style={{ color: 'rgba(245, 241, 237, 0.8)' }}>
                      Thank you for reaching out. We'll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="organization">Organization</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="projectType">Project Type *</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a project type</option>
                        <option value="cruise">Cruise Entertainment</option>
                        <option value="theatrical">Theatrical Production</option>
                        <option value="experiential">Experiential Experience</option>
                        <option value="consulting">Creative Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project and creative vision..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="cta-button"
                      style={{ width: '100%' }}
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 style={{ marginBottom: '2rem' }}>Contact Information</h2>

                <div className="card" style={{ marginBottom: '1.5rem' }}>
                  <h3 className="card-title">Direct Contact</h3>
                  <p style={{ color: 'rgba(245, 241, 237, 0.8)', marginBottom: '1rem' }}>
                    For inquiries about creative collaboration and entertainment development:
                  </p>
                  <a href="mailto:hello@davidscotchford.com" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                    hello@davidscotchford.com
                  </a>
                </div>

                <div className="card" style={{ marginBottom: '1.5rem' }}>
                  <h3 className="card-title">Response Time</h3>
                  <p style={{ color: 'rgba(245, 241, 237, 0.8)' }}>
                    We typically respond to inquiries within 2-3 business days. For urgent matters, please indicate in your message.
                  </p>
                </div>

                <div className="card">
                  <h3 className="card-title">Connect</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.25rem' }}>in</span>
                      <span>LinkedIn</span>
                    </a>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.25rem' }}>@</span>
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>
              Common questions about collaboration and services
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              {
                question: 'What types of projects do you work on?',
                answer: 'We specialize in premium entertainment development across cruise lines, theatrical productions, experiential venues, and corporate events. Our expertise spans original show creation, creative consulting, choreography, and entertainment development.',
              },
              {
                question: 'How do you approach a new project?',
                answer: 'Every project begins with deep creative exploration to establish artistic vision and objectives. We collaborate closely with producers and directors to understand goals, then develop comprehensive creative solutions from concept through execution.',
              },
              {
                question: 'What is your typical project timeline?',
                answer: 'Timelines vary based on project scope and complexity. Initial consultations can begin immediately. Full production development typically ranges from 3-6 months depending on the scale and requirements of the entertainment experience.',
              },
              {
                question: 'Do you offer consulting services?',
                answer: 'Yes. We provide creative consulting for entertainment directors, producers, and venue operators. This includes strategic guidance on show development, creative direction, and entertainment strategy.',
              },
              {
                question: 'Can you work with existing productions?',
                answer: 'Absolutely. We can provide creative direction, choreography refinement, staging consultation, and performance direction for existing or in-development productions.',
              },
              {
                question: 'How do we get started?',
                answer: 'Simply reach out with details about your project and creative vision. We\'ll schedule an initial consultation to discuss your needs, goals, and how we can best support your entertainment objectives.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="card"
                style={{
                  marginBottom: '1.5rem',
                  paddingBottom: '1.5rem',
                  borderBottom: i !== 5 ? '1px solid rgba(139, 125, 107, 0.2)' : 'none',
                }}
              >
                <h3 className="card-title">{faq.question}</h3>
                <p className="card-description" style={{ marginTop: '1rem' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section" style={{ background: 'var(--dark-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Services & Collaboration Models</h2>
            <p>
              Different ways we can work together
            </p>
          </div>

          <div className="grid grid-2">
            {[
              {
                title: 'Full Show Development',
                description: 'Complete entertainment experience creation from concept through execution, including choreography, staging, and creative direction.',
              },
              {
                title: 'Creative Consulting',
                description: 'Strategic creative guidance and artistic direction for producers, entertainment directors, and creative teams.',
              },
              {
                title: 'Choreography Services',
                description: 'Sophisticated movement design and choreography for theatrical productions, cruise shows, and experiential entertainment.',
              },
              {
                title: 'Entertainment Development',
                description: 'Comprehensive development of entertainment concepts for specific venues, audiences, and creative objectives.',
              },
              {
                title: 'Production Support',
                description: 'Creative direction, performer training, staging consultation, and technical integration for existing productions.',
              },
              {
                title: 'Artistic Direction',
                description: 'Overall artistic vision and direction for entertainment projects, ensuring theatrical sophistication and audience engagement.',
              },
            ].map((service, i) => (
              <div key={i} className="card">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Let's Create Together</h2>
          <p style={{ fontSize: '1.125rem', marginTop: '1.5rem', marginBottom: '2rem', maxWidth: '600px', margin: '1.5rem auto 2rem' }}>
            Whether you're developing a new production, seeking creative consultation, or looking to elevate an existing project, we're ready to discuss how artistic excellence can transform your entertainment vision.
          </p>
          <button className="cta-button">Send a Message</button>
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
          <p>&copy; 2024 David Scotchford. All rights reserved. | Premium Live Entertainment Creator</p>
        </div>
      </footer>
    </div>
  );
}
