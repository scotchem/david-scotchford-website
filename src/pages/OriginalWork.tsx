import { useState, useEffect, useRef } from 'react';

interface Concept {
  id: number;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  label: string;
  accentColor: string;
  details: string[];
}

const concepts: Concept[] = [
  {
    id: 1,
    title: 'From Miami With Love',
    tagline: 'Heat. Rhythm. Romance. A city that awakens desire.',
    label: 'Original Concept · Cruise & Theatrical',
    accentColor: '#a89968',
    image: '/fmwl_poster.jpg',
    description:
      'An original entertainment concept alive with the vivid energy, romance, and spectacle of Miami.',
    longDescription:
      'From Miami With Love is a full-length original show concept built around music, color, connection, and celebration. Salsa heat meets midnight cool. Nightlife pulses against ocean air. Romance, belonging, and the joy of living fully move through every moment. Created for cruise, theatrical, and experiential performance environments, the production invites audiences into a vibrant Miami world — sensual, cinematic, and alive.',
    details: [
      'Full-length original production concept',
      'Designed for cruise & theatrical environments',
      'Integrates Latin, jazz, and contemporary movement',
      'Original music direction and visual world',
    ],
  },
  {
    id: 2,
    title: 'Fly Right',
    tagline: 'Rhythm. Risk. Improvisation. Fly high into the sound.',
    label: 'Original Concept · Experiential Club-Theatre',
    accentColor: '#c0392b',
    image: '/fly_right_poster_ow.png',
    description:
      'A fly-by-the-seat-of-your-pants ride into the roots of early jazz, where rhythm and improvisation reign supreme.',
    longDescription:
      'Fly Right invites audiences into the raw electricity of an intimate jazz-club world, where music, movement, and personality collide in real time. Rooted in the early spirit of swing, Lindy hop, tap, and improvisation, the show is built on creative danger: performers interrupt, challenge, seduce, and outdo one another as rhythm passes hand to hand. The result is a spontaneous-feeling theatrical jam session — full of kinetic camaraderie, effortless virtuosity, and the sense that what happens tonight could only happen tonight.',
    details: [
      'Original concept in development',
      'Experiential club-theatre format',
      'Rooted in early jazz, swing, and improvisation',
      'Designed for intimate and immersive performance environments',
    ],
  },
];

function ConceptCard({ concept, index }: { concept: Concept; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ow-visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`ow-concept-card ow-fade-in ${isEven ? 'ow-from-left' : 'ow-from-right'} ${concept.id === 1 ? 'ow-concept-card--fmwl' : ''}`}
    >
      {/* Image Panel */}
      <div className={`ow-concept-image-wrap ${isEven ? '' : 'ow-order-last'}`}>
        <div className="ow-concept-image-inner">
          <img
            src={concept.image}
            alt={concept.title}
            className="ow-concept-img"
          />
          <div className="ow-concept-image-overlay" />
        </div>
      </div>

      {/* Content Panel */}
      <div className="ow-concept-content">
        <p className="ow-concept-label">{concept.label}</p>
        <h2 className="ow-concept-title">{concept.title}</h2>
        <p className="ow-concept-tagline">"{concept.tagline}"</p>
        <p className="ow-concept-desc">{concept.description}</p>

        {expanded && (
          <div className="ow-concept-expanded">
            <p className="ow-concept-long-desc">{concept.longDescription}</p>
            <ul className="ow-concept-details">
              {concept.details.map((d, i) => (
                <li key={i}>
                  <span className="ow-detail-bullet">—</span> {d}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          className="ow-expand-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Close' : 'Explore This Concept'} {expanded ? '↑' : '→'}
        </button>
        {concept.id === 1 && (
          <div className="ow-scroll-arrow">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 9l7 7 7-7" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default function OriginalWork() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ow-page">
      {/* Hero */}
      <section className="ow-hero" ref={heroRef}>
        <div className="ow-hero-bg">
          <img src="/still_alex_flip.jpg" alt="" className="ow-hero-img" />
          <div className="ow-hero-overlay" />
        </div>
        <div className="ow-hero-content">
          <p className="ow-hero-eyebrow">Original Work</p>
          <h1 className="ow-hero-title">Worlds Built<br />From the Inside Out</h1>
          <p className="ow-hero-sub" style={{maxWidth: '640px'}}>
            Complete creative worlds — each with its own perspective, music, and atmosphere.
          </p>
        </div>
        <div className="ow-hero-scroll">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="ow-intro">
        <div className="ow-intro-inner">
          <p className="ow-intro-text">
            Each show concept begins with what moves us as humans: relationship, belonging, and music that summons feeling beyond words. These works are not built simply to be watched, but to be entered, felt, and carried beyond the final moment.
          </p>
        </div>
      </section>

      {/* Concepts */}
      <section className="ow-concepts">
        {concepts.map((concept, index) => (
          <ConceptCard key={concept.id} concept={concept} index={index} />
        ))}
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
