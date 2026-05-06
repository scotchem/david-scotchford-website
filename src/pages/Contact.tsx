import { useEffect, useRef } from 'react';

interface ContactProps {
  setCurrentPage?: (page: string) => void;
}

export default function Contact({ setCurrentPage: _setCurrentPage }: ContactProps) {
  const mosaicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Parallax: each mosaic image moves at a slightly different rate as the hero scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (!mosaicRef.current) return;
      const scrollY = window.scrollY;
      const cells = mosaicRef.current.querySelectorAll<HTMLImageElement>('.contact-mosaic-img');
      const speeds = [0.06, 0.10, 0.07, 0.12, 0.08, 0.11];
      cells.forEach((img, i) => {
        img.style.transform = `translateY(${scrollY * speeds[i]}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mosaicImages = [
    { src: '/still_alex_flip.jpg', alt: 'Performance still' },
    { src: '/still_pascal_mia.png', alt: 'Lift performance' },
    { src: '/still_sandra_split.jpg', alt: 'Dance performance' },
    { src: '/contact_lift_silhouette.jpg', alt: 'Lift silhouette' },
    { src: '/contact_dirty_dancing_lift.jpg', alt: 'Dirty Dancing lift' },
    { src: '/contact_fmwl_poster.jpg', alt: 'From Miami With Love' },
  ];

  return (
    <div className="contact-page">
      {/* Hero with stills mosaic */}
      <section className="contact-hero">
        <div className="contact-mosaic" ref={mosaicRef}>
          {mosaicImages.map((img, i) => (
            <div key={i} className={`contact-mosaic-cell contact-mosaic-cell--${i + 1}`}>
              <img src={img.src} alt={img.alt} className="contact-mosaic-img" />
              <div className="contact-mosaic-overlay" />
            </div>
          ))}
          <div className="contact-mosaic-global-overlay" />
        </div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Let’s build something<br />together.</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="contact-intro">
        <div className="contact-intro-inner">
          <p className="contact-intro-text">
            Whether you’re developing an original concept, shaping a new production, looking for a creative collaborator, or simply want to explore what’s possible — reach out. Exciting things happen when creative people come together.
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
              <p className="contact-info-label">Creative Services Across</p>
              <p className="contact-info-value">Cruise Entertainment</p>
              <p className="contact-info-value">Broadway, Theatrical &amp; Concert Production</p>
              <p className="contact-info-value">Original Show &amp; Concept Development</p>
              <p className="contact-info-value">Creative Consulting</p>
              <p className="contact-info-value">Experiential Performance &amp; Live Events</p>
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
