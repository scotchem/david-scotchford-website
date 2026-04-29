import { useState, useEffect } from 'react';

interface ContactProps {
  setCurrentPage?: (page: string) => void;
}

export default function Contact({ setCurrentPage: _setCurrentPage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  };

  const mosaicImages = [
    { src: '/still_alex_flip.jpg', alt: 'Performance still' },
    { src: '/still_pascal_mia.png', alt: 'Lift performance' },
    { src: '/still_sandra_split.jpg', alt: 'Dance performance' },
    { src: '/still_carousel.jpg', alt: 'Carousel production' },
    { src: '/still_performance1.jpg', alt: 'Stage performance' },
    { src: '/still_teaching_tango.jpg', alt: 'Rehearsal' },
  ];

  return (
    <div className="contact-page">
      {/* Hero with stills mosaic */}
      <section className="contact-hero">
        <div className="contact-mosaic">
          {mosaicImages.map((img, i) => (
            <div key={i} className={`contact-mosaic-cell contact-mosaic-cell--${i + 1}`}>
              <img src={img.src} alt={img.alt} className="contact-mosaic-img" />
              <div className="contact-mosaic-overlay" />
            </div>
          ))}
          <div className="contact-mosaic-global-overlay" />
        </div>
        <div className="contact-hero-content">
          <p className="contact-hero-eyebrow">Let's Create Together</p>
          <h1 className="contact-hero-title">Start a<br />Conversation</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="contact-intro">
        <div className="contact-intro-inner">
          <p className="contact-intro-text">
            Whether you're developing an original concept, shaping a new production, looking for a creative collaborator, or simply want to explore what's possible — reach out. Every great project begins with a conversation.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-wrap">

          {/* Left: Info */}
          <div className="contact-info">
            <div className="contact-info-block">
              <p className="contact-info-label">Based in</p>
              <p className="contact-info-value">New York, NY</p>
            </div>
            <div className="contact-info-block">
              <p className="contact-info-label">Available for</p>
              <p className="contact-info-value">Cruise Entertainment</p>
              <p className="contact-info-value">Broadway &amp; Theatrical</p>
              <p className="contact-info-value">Original Concept Development</p>
              <p className="contact-info-value">Creative Consulting</p>
              <p className="contact-info-value">Experiential Performance</p>
            </div>
            <div className="contact-info-block">
              <p className="contact-info-label">Email</p>
              <a href="mailto:scotchem@gmail.com" className="contact-info-link">
                scotchem@gmail.com
              </a>
            </div>
            <div className="contact-info-image-wrap">
              <img src="/still_david_097.png" alt="David Scotchford" className="contact-info-img" />
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-container">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <h3 className="contact-success-title">Message Received</h3>
                <p className="contact-success-text">
                  Thank you for reaching out. David will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-field-row">
                  <div className="contact-field">
                    <label htmlFor="name" className="contact-label">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact-input"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="email" className="contact-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="contact-field-row">
                  <div className="contact-field">
                    <label htmlFor="organization" className="contact-label">Organization</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="contact-input"
                      placeholder="Company or production name"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="projectType" className="contact-label">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="contact-input contact-select"
                    >
                      <option value="">Select a category</option>
                      <option value="cruise">Cruise Entertainment</option>
                      <option value="broadway">Broadway / Theatrical</option>
                      <option value="original">Original Concept Development</option>
                      <option value="consulting">Creative Consulting</option>
                      <option value="experiential">Experiential Performance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="message" className="contact-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="contact-input contact-textarea"
                    placeholder="Tell me about your project, timeline, and what you're looking for..."
                    rows={6}
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={sending}
                >
                  {sending ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Bottom stills strip */}
      <section className="contact-strip">
        <div className="contact-strip-inner">
          <img src="/still_carousel4.jpg" alt="" className="contact-strip-img" />
          <img src="/still_performance3.jpg" alt="" className="contact-strip-img" />
          <img src="/still_performance2.png" alt="" className="contact-strip-img" />
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
