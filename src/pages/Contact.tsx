import { useEffect } from 'react';

interface ContactProps {
  setCurrentPage?: (page: string) => void;
}

export default function Contact({ setCurrentPage: _setCurrentPage }: ContactProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      {/* Contact Details */}
      <section className="contact-details-section">
        <div className="contact-details-wrap">

          <div className="contact-details-image-col">
            <img src="/still_david_097.png" alt="David Scotchford" className="contact-details-img" />
          </div>

          <div className="contact-details-info-col">
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
            <div className="contact-info-block">
              <p className="contact-info-label">Phone</p>
              <a href="tel:+12125181707" className="contact-info-link">
                +1 212 518 1707
              </a>
            </div>
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
            <a href="mailto:scotchem@gmail.com" title="Email">✉</a>
          </div>
          <p>&copy; 2025 David Scotchford. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
