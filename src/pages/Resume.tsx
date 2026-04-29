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
            src="/resume_hero.png"
            alt="David Scotchford"
            className="resume-hero-img"
          />
          <div className="resume-hero-overlay" />
        </div>
        <div className="resume-hero-content">
          <h1 className="resume-hero-name">David Scotchford</h1>
          <p className="resume-hero-title-text">Choreographer &nbsp;·&nbsp; Director &nbsp;·&nbsp; Educator</p>
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}>
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

          {/* Selected Credits */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Selected Credits</h2>
            <div className="resume-divider" />
            <p className="resume-credits-summary">
              The Music Man (Broadway) &nbsp;·&nbsp; Dirty Dancing (International Productions) &nbsp;·&nbsp; In Tandem (RWS Step One Dance Company) &nbsp;·&nbsp; Oklahoma! (Weston Playhouse) &nbsp;·&nbsp; Install Director – Celebrity Cruises
            </p>
          </section>

          {/* Choreography */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Choreography</h2>
            <div className="resume-divider" />
            <div className="resume-entries">

              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">In Tandem</span>
                  <span className="resume-entry-role">Co-Choreographer</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">RWS Step One Dance Company &nbsp;·&nbsp; with Melanie Lewis-Yribar</span>
                </div>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Dirty Dancing</span>
                  <span className="resume-entry-role">Choreographer</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">Stockholm, Sweden &nbsp;·&nbsp; Dir. Anders Albien</span>
                </div>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Oklahoma!</span>
                  <span className="resume-entry-role">Choreographer</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">Weston Playhouse (VT) &nbsp;·&nbsp; Dir. Reginald Douglas</span>
                </div>
              </div>

            </div>
          </section>

          {/* Broadway / Development */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Broadway / Development</h2>
            <div className="resume-divider" />
            <div className="resume-entries">

              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">The Music Man</span>
                  <span className="resume-entry-role">Assistant Choreographer</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">Broadway &nbsp;·&nbsp; Choreo. Warren Carlyle &nbsp;·&nbsp; Dir. Jerry Zaks</span>
                </div>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Jerome Robbins Project</span>
                  <span className="resume-entry-role">Assistant Director</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">New York City Center &nbsp;·&nbsp; Dir. Warren Carlyle</span>
                </div>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Pirates of Penzance</span>
                  <span className="resume-entry-role">Development</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">Roundabout Theatre Company &nbsp;·&nbsp; Choreo. Warren Carlyle</span>
                </div>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Carefree: Dancing with Fred &amp; Ginger</span>
                  <span className="resume-entry-role">Assistant Director</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">NJPAC / RKO Stage &nbsp;·&nbsp; Dir./Choreo. Warren Carlyle</span>
                </div>
              </div>

            </div>
          </section>

          {/* International Productions */}
          <section className="resume-section">
            <h2 className="resume-section-heading">International Productions</h2>
            <div className="resume-divider" />
            <div className="resume-entries">

              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Dirty Dancing</span>
                  <span className="resume-entry-role">Associate Choreographer</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">US Tour (2014–2017), West End – London, 1st US Tour (2008), Germany, Toronto, Netherlands</span>
                </div>
                <div className="resume-entry-detail" style={{ marginTop: '0.25rem' }}>
                  <span className="resume-entry-info" style={{ fontStyle: 'italic' }}>Dir. James Powell &nbsp;·&nbsp; Choreo. Kate Champion</span>
                </div>
              </div>

            </div>
          </section>

          {/* Install Directing / Show Supervisor */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Install Directing / Show Supervisor</h2>
            <div className="resume-divider" />
            <div className="resume-entries">

              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Celebrity Cruises</span>
                  <span className="resume-entry-role">Install Director</span>
                </div>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Norwegian Cruise Line — Palace of Lights</span>
                  <span className="resume-entry-role">Associate Director</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">Dir./Choreo. Warren Carlyle</span>
                </div>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Norwegian Cruise Line — ¡Havana!</span>
                  <span className="resume-entry-role">Assistant Director / Choreography Assistant / Latin Ballroom Consultant</span>
                </div>
              </div>

            </div>
          </section>

          {/* Teaching */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Teaching</h2>
            <div className="resume-divider" />
            <div className="resume-entries">
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Steps On Broadway &amp; BDC New York</span>
                  <span className="resume-entry-role">Guest Teacher</span>
                </div>
                <div className="resume-entry-detail">
                  <span className="resume-entry-info">Jazz, Theater Jazz</span>
                </div>
              </div>
            </div>
          </section>

          {/* Affiliations */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Affiliations</h2>
            <div className="resume-divider" />
            <div className="resume-entries">
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Stage Directors and Choreographers Society (SDC)</span>
                </div>
              </div>
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <span className="resume-entry-title">Actors' Equity Association (AEA)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact line */}
          <div className="resume-contact-line">
            <span>212.518.1707</span>
            <span className="resume-contact-dot">·</span>
            <a href="mailto:scotchem@gmail.com" className="resume-contact-link">scotchem@gmail.com</a>
          </div>

          {/* Download CTA at bottom */}
          <div className="resume-bottom-cta">
            <a
              href="/DavidScotchford_Resume.pdf"
              download="DavidScotchford_Resume.pdf"
              className="resume-download-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}>
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
            <a href="https://www.linkedin.com/in/david-scotchford-7744665a/" title="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
            <a href="https://www.instagram.com/d.scotch/" title="Instagram" target="_blank" rel="noopener noreferrer">@</a>
            <a href="mailto:scotchem@gmail.com" title="Email">✉</a>
          </div>
          <p>&copy; 2025 David Scotchford. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
