import { useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="resume-page">
      {/* Hero Image */}
      <section className="resume-hero">
        <div className="resume-hero-img-wrap">
          <img
            src="/headshot.png"
            alt="David Scotchford"
            className="resume-hero-img"
          />
          <div className="resume-hero-overlay" />
        </div>
        <div className="resume-hero-content">
          <h1 className="resume-hero-name">David Scotchford</h1>
          <p className="resume-hero-title-text">Choreographer · Creative Director · Entertainment Consultant</p>
        </div>
      </section>

      {/* Download Bar */}
      <div className="resume-download-bar">
        <div className="resume-download-inner">
          <p className="resume-download-label">Full Resume Available for Download</p>
          <a
            href="/DavidScotchford_Resume.pdf"
            download="DavidScotchford_Resume.pdf"
            className="resume-download-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>
      </div>

      {/* Resume Content */}
      <div className="resume-body">
        <div className="resume-content-wrap">

          {/* Broadway */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Broadway</h2>
            <div className="resume-divider" />
            <div className="resume-entries">
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">The Music Man</span>
                  <span className="resume-entry-role">Associate Choreographer</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">Choreography by Warren Carlyle · Broadway Revival</span>
                  <span className="resume-entry-year">2022</span>
                </div>
              </div>
            </div>
          </section>

          {/* Cruise Entertainment */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Cruise Entertainment</h2>
            <div className="resume-divider" />
            <div className="resume-entries">
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Celebrity Cruises</span>
                  <span className="resume-entry-role">Choreographer · Creative Director</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">Large-scale production development and entertainment direction</span>
                  <span className="resume-entry-year">Ongoing</span>
                </div>
              </div>
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Norwegian Cruise Line</span>
                  <span className="resume-entry-role">Choreographer · Entertainment Developer</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">Premium entertainment programming and production choreography</span>
                  <span className="resume-entry-year">Ongoing</span>
                </div>
              </div>
            </div>
          </section>

          {/* Theatrical Productions */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Theatrical Productions</h2>
            <div className="resume-divider" />
            <div className="resume-entries">
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Dirty Dancing</span>
                  <span className="resume-entry-role">Choreographer</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">National Tour & Regional Productions</span>
                  <span className="resume-entry-year">Various</span>
                </div>
              </div>
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">In Tandem</span>
                  <span className="resume-entry-role">Creator · Choreographer</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">Original concept for cruise and theatrical performance</span>
                  <span className="resume-entry-year">Various</span>
                </div>
              </div>
            </div>
          </section>

          {/* Original Concepts */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Original Concepts</h2>
            <div className="resume-divider" />
            <div className="resume-entries">
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">From Miami With Love</span>
                  <span className="resume-entry-role">Creator · Choreographer · Director</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">Original full-length production concept for cruise & theatrical environments</span>
                  <span className="resume-entry-year">In Development</span>
                </div>
              </div>
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">In Tandem</span>
                  <span className="resume-entry-role">Creator · Choreographer</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">Intimate pas de deux concept for experiential and theatrical performance</span>
                  <span className="resume-entry-year">In Development</span>
                </div>
              </div>
            </div>
          </section>

          {/* Creative Consulting */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Creative Consulting</h2>
            <div className="resume-divider" />
            <div className="resume-entries">
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Creative Development & Consulting</span>
                  <span className="resume-entry-role">Creative Consultant</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">Ongoing work with producers and creative teams — refining, elevating, and shaping live entertainment concepts from early development through production</span>
                  <span className="resume-entry-year">Ongoing</span>
                </div>
              </div>
            </div>
          </section>

          {/* Training & Education */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Training</h2>
            <div className="resume-divider" />
            <div className="resume-entries">
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Extensive training in ballet, jazz, contemporary, and ballroom</span>
                </div>
              </div>
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Specialization in partner work, lifts, and theatrical movement</span>
                </div>
              </div>
            </div>
          </section>

          {/* Download CTA at bottom */}
          <div className="resume-bottom-cta">
            <a
              href="/DavidScotchford_Resume.pdf"
              download="DavidScotchford_Resume.pdf"
              className="resume-download-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Full Resume (PDF)
            </a>
          </div>

        </div>
      </div>

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
