import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      {/* Section 1: Hero */}
      <section className="hero-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">David Scotchford</h1>
          <p className="hero-subtitle">Creative Content Creator & Consultant</p>
        </div>
        <div className={`scroll-indicator${scrolled ? ' scroll-indicator--hidden' : ''}`}>
          <div className="scroll-arrow">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 9l7 7 7-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 2: Positioning */}
      <section className="positioning-section">
        <div className="section-container">
          <p className="positioning-text">
            Original show creation, direction, choreography, and creative development.
          </p>
        </div>
      </section>

      {/* Section 3: About / Philosophy */}
      <section className="philosophy-section">
        <div className="section-container">
          <p className="philosophy-text">
            Live entertainment should do more than impress — it should transport. Drawing on experience across theatrical, cruise, and large-scale production environments, we create experiences that are vivid, immersive, and designed to be felt as much as seen.
          </p>
        </div>
      </section>

      {/* Section 4: What I Create */}
      <section className="pillars-section pillars-section--video">
        <video
          className="pillars-bg-video"
          src="/section4_bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="pillars-video-overlay" />
        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="pillars-grid">
            <div className="pillar">
              <h3 className="pillar-title">Original Concepts</h3>
              <p className="pillar-text">Creating new live entertainment ideas and audience experiences from the ground up.</p>
            </div>
            <div className="pillar">
              <h3 className="pillar-title">Creative Development</h3>
              <p className="pillar-text">Collaborating with creative teams to refine, elevate, and strengthen work in development.</p>
            </div>
            <div className="pillar">
              <h3 className="pillar-title">Direction & Choreography</h3>
              <p className="pillar-text">Leading movement, performance, and rehearsal to bring each piece fully to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Selected Credits */}
      <section className="credits-section">
        <div className="section-container">
          <h2 className="section-title">Selected Credits</h2>
          <p className="credits-text">
            David has contributed to the development and realization of live entertainment across Broadway, cruise, and international production environments. He spent several years as an associate to Tony Award–winning choreographer Warren Carlyle, contributing to numerous productions and workshops, including the Broadway revival of <em>The Music Man</em>. His work in premium cruise entertainment and international musical production rollouts has given him deep experience in shaping large-scale productions for global audiences, alongside choreography credits that include international productions of <em>Dirty Dancing</em> and <em>In Tandem</em> for RWS Step One Dance Company.
          </p>
        </div>
      </section>

      {/* Section 6: Featured Project */}
      <section className="featured-project-section">
        <div className="section-container">
          <h2 className="section-title">Featured Concept</h2>
          <div className="featured-project">
            <div className="featured-image-wrapper">
              <img src="/fmwl.jpg" alt="From Miami With Love" className="featured-image" />
            </div>
            <div className="featured-content">
              <h3 className="featured-title">From Miami With Love</h3>
              <p className="featured-description">
                An original entertainment concept that captures the vibrant energy, romance, and spectacle of Miami's cultural landscape. This signature world blends choreography, music, and visual storytelling to create an immersive experience that celebrates movement, passion, and the electric spirit of the city.
              </p>
              <a href="#concepts" className="featured-link">Explore Concepts →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">What Collaborators Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p className="testimonial-quote">
                "I have worked with David Scotchford on a number of shows in which he was associate choreographer until, the latest, our Stockholm production where he was the choreographer. He is a vibrant and inventive choreographer; as a colleague I find him endlessly innovative, responsible, flexible, indefatigable. He has a natural rapport with the dancers that makes them love and respect him. In short -- I would work with him again in a flash, intend to do so -- and consider myself lucky to have the chance."
              </p>
              <p className="testimonial-author">Eleanor Bergstein</p>
              <p className="testimonial-title">Writer/Creator of Dirty Dancing (Film and Stage Production)</p>
            </div>

            <div className="testimonial">
              <p className="testimonial-quote">
                "I have had the privilege of watching David grow from a very talented local dancer into an international creative force. Apart from great artistry, his personal gift is his ability to engage and inspire his dancers while integrating seamlessly with the rest of the creative team. On my next production, I want David on the team."
              </p>
              <p className="testimonial-author">Conrad Helfrich</p>
              <p className="testimonial-title">International Musical Supervisor, Dirty Dancing (Stage Production)</p>
            </div>

            <div className="testimonial">
              <p className="testimonial-quote">
                "It is our pleasure to recommend choreographer/teacher David Scotchford to you. He brings a positive atmosphere and dynamic energy to his teaching that nurtures and motivates. He delivers a high energy class with a sharp approach to teaching style and footwork. He is highly specific in his teaching yet doesn't allow the student to become overwhelmed with detail. The learning process is balanced."
              </p>
              <p className="testimonial-author">Paul Christman & Lyn Cramer</p>
              <p className="testimonial-title">Oklahoma University's Weitzenhoffer School Of Musical Theatre</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Closing Invitation */}
      <section className="closing-section">
        <div className="section-container">
          <p className="closing-text">
            Whether developing an original concept, shaping a new production, or refining an existing work, David Scotchford brings a cinematic eye, choreographic intelligence, and a deep understanding of audience experience to the creation of premium live entertainment.
          </p>
          <a href="#contact" className="cta-button">Start a Conversation</a>
        </div>
      </section>
    </div>
  );
}
