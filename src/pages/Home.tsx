import { useEffect, useRef, useState } from 'react';

interface HomeProps {
  setCurrentPage?: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const [scrolled, setScrolled] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const section4VideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Safari autoplay fix
  useEffect(() => {
    const tryPlay = (video: HTMLVideoElement | null) => {
      if (video) { video.muted = true; video.play().catch(() => {}); }
    };
    tryPlay(heroVideoRef.current);
    tryPlay(section4VideoRef.current);
    const handleInteraction = () => {
      tryPlay(heroVideoRef.current);
      tryPlay(section4VideoRef.current);
    };
    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('click', handleInteraction, { once: true });
    return () => {
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  return (
    <div className="home-page">
      {/* Section 1: Hero */}
      <section className="hero-section">
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-video"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">David Scotchford</h1>
          <p className="hero-subtitle">Choreographer · Director · Original Content Creator</p>
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
            Premium live entertainment created with musical impact, theatrical detail, and authentic audience connection.
          </p>
        </div>
      </section>

      {/* Section 3: About / Philosophy */}
      <section className="philosophy-section">
        <div className="section-container">
          <p className="philosophy-text">
            Live entertainment should do more than impress — it should transport. Grounded in theatrical craft and shaped by experience across cruise, stage, and large-scale production environments, each project is designed to be vivid, immersive, and alive — made to be felt as much as seen.
          </p>
        </div>
      </section>

      {/* Section: Meet David */}
      <section className="meet-david-section">
        <div className="meet-david-inner">
          <div className="meet-david-text">
            <p className="meet-david-eyebrow">Meet David</p>
            <p className="meet-david-subheading">A rehearsal-room creative with an intuitive, people-first approach.</p>
            <p className="meet-david-body">David is at his best inside the room: shaping ideas, reading the energy of performers, solving problems quickly, and helping material become clearer, sharper, and more alive.</p>
            <p className="meet-david-body">His process is built on respect, collaboration, and a genuine enjoyment of the work itself. He believes the best results come when people feel supported, challenged, and free enough to play — when the room has structure, but also energy, humor, and trust.</p>
            <p className="meet-david-body">Whether working with dancers, singers, actors, or production teams, David brings a calm, musical, process-oriented approach that helps performers do their best work and helps the material connect more deeply with an audience.</p>
          </div>
          <div className="meet-david-photo">
            <img src="/david-rehearsal.jpg" alt="David Scotchford in the rehearsal room" />
          </div>
        </div>
      </section>

      {/* Section 4: What I Create */}
      <section className="pillars-section pillars-section--video">
        <video
          ref={section4VideoRef}
          className="pillars-bg-video"
          src="/section4_bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="pillars-video-overlay" />
        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="pillars-heading">What I Help Create</h2>
          <p className="pillars-subheading">David works with producers, directors, and entertainment teams to shape live performance from the inside out — clarifying the idea, building the creative language, and helping the work connect with an audience.</p>
          <div className="pillars-grid">
            <div className="pillar">
              <h3 className="pillar-title">Original Concepts</h3>
              <p className="pillar-text">New show ideas, audience experiences, music-driven worlds, and entertainment formats developed from the ground up.</p>
            </div>
            <div className="pillar">
              <h3 className="pillar-title">Creative Development</h3>
              <p className="pillar-text">Collaboration on new or existing material to clarify the concept, strengthen the structure, sharpen the rhythm, and elevate the audience journey.</p>
            </div>
            <div className="pillar">
              <h3 className="pillar-title">Direction &amp; Choreography</h3>
              <p className="pillar-text">Staging, movement, and performance direction that bring the piece to life with musicality, theatrical detail, and emotional impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Featured Project */}
      <section className="featured-project-section">
        <div className="section-container">
          <h2 className="section-title">Featured Concept</h2>
          <div className="featured-project">
            <div className="featured-image-wrapper">
              <img src="/fmwl.jpg" alt="From Miami With Love" className="featured-image" />
            </div>
            <div className="featured-content">
              <h3 className="featured-title">From Miami With Love</h3>
              <p className="featured-description featured-description--sub">
                An original live entertainment concept created for cruise and theatrical performance environments.
              </p>
              <p className="featured-description">
                Built around the heat, Cuban-inflected rhythms, and spectacle of Miami, From Miami With Love invites audiences into a world that is sensual, musical, and alive. Salsa heat meets midnight cool as nightlife, ocean air, and human connection collide in a vivid celebration of movement, desire, and belonging.
              </p>
              <button className="featured-link" onClick={() => setCurrentPage && setCurrentPage('originalwork')}>Explore Concepts →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Selected Credits */}
      <section className="credits-section">
        <div className="section-container">
          <h2 className="section-title">Selected Credits</h2>
          <p className="credits-text">
            David has contributed to the development and realization of live entertainment across Broadway, cruise, and international production environments. He spent several years as an associate to Tony Award–winning choreographer Warren Carlyle, contributing to numerous productions and workshops, including the Broadway revival of <em>The Music Man</em>. His work in premium cruise entertainment and international musical production rollouts has given him deep experience in shaping large-scale productions for global audiences, alongside choreography credits that include international productions of <em>Dirty Dancing</em> and <em>In Tandem</em> for RWS Step One Dance Company.
          </p>
          <button className="credits-portfolio-link credits-portfolio-link--boxed" onClick={() => setCurrentPage && setCurrentPage('portfolio')}>View Full Portfolio →</button>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">What Collaborators Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p className="testimonial-quote">
                "I have worked with David Scotchford on a number of shows in which he was associate choreographer until, the latest, our Stockholm production where he was the choreographer. He is a vibrant and inventive choreographer; as a colleague I find him endlessly innovative, responsible, flexible, indefatigable. He has a natural rapport with the dancers that makes them love and respect him. In short — I would work with him again in a flash, intend to do so — and consider myself lucky to have the chance."
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
          <button className="cta-button" onClick={() => setCurrentPage && setCurrentPage('contact')}>Start a Conversation</button>
        </div>
      </section>
    </div>
  );
}
