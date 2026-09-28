import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const DELAY = 5500;

const SLIDES = [
  {
    n: '09',
    alt: 'Illustrated Klebsiella pneumoniae bacterium wearing a name tag, under an interrogation lamp',
  },
  { n: '08', alt: 'Illustrated Escherichia coli bacterium wearing a name tag, under an interrogation lamp' },
  // MLR REVIEW: this image's name tag reads "Acinetobacter baumannii", which is not a
  // labeled organism in the cUTI indication. Confirm before US launch or remove this slide.
  {
    n: '07',
    alt: 'Illustrated Acinetobacter baumannii bacterium wearing a name tag, under an interrogation lamp',
  },
  {
    n: '06',
    alt: 'Illustrated Pseudomonas aeruginosa bacterium wearing a name tag, under an interrogation lamp',
  },
  { n: '05', alt: 'Illustrated Enterobacterales bacterium wearing a name tag, under an interrogation lamp' },
];

/**
 * Home hero: crossfading slides with a lamp flicker.
 * Accessible: pause/play control (WCAG 2.2.2), keyboard-operable dots, pauses when the
 * tab is hidden, and no autoplay for reduced-motion users.
 */
export default function Hero() {
  const reduceMotion = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const heroRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(!reduceMotion.current);
  const [tabVisible, setTabVisible] = useState(!document.hidden);
  // Only the first slide's image loads up front; the rest load after the page has loaded
  const [loaded, setLoaded] = useState(document.readyState === 'complete');

  useEffect(() => {
    if (loaded) return;
    const onLoad = () => setLoaded(true);
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, [loaded]);

  useEffect(() => {
    const onVis = () => setTabVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // Auto-advance. Depending on `index` restarts the timer after a manual change.
  useEffect(() => {
    if (!playing || !tabVisible) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), DELAY);
    return () => clearInterval(t);
  }, [playing, tabVisible, index]);

  // Lamp flicker on every slide change (skip the first render)
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (reduceMotion.current) return;
    const el = heroRef.current;
    if (!el) return;
    el.classList.remove('is-flickering');
    void el.offsetWidth; // restart the CSS animation
    el.classList.add('is-flickering');
  }, [index]);

  const go = useCallback((i) => setIndex(i), []);

  return (
    <section
      className="hero"
      id="hero"
      ref={heroRef}
      aria-roledescription="carousel"
      aria-label="ZAYNICH is coming"
    >
      <div className="hero__stage">
        <ul className="hero__slides">
          {SLIDES.map((s, i) => {
            const active = i === index;
            const show = i === 0 || loaded || active;
            return (
              <li
                key={s.n}
                className={'hero__slide' + (active ? ' is-active' : '')}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${SLIDES.length}`}
                aria-hidden={active ? undefined : 'true'}
              >
                <picture>
                  {show && (
                    <source media="(max-width: 768px)" srcSet={`/assets/img/hero/hero-${s.n}-m.jpg`} />
                  )}
                  <img
                    src={show ? `/assets/img/hero/hero-${s.n}.jpg` : undefined}
                    width="2400"
                    height="1350"
                    alt={s.alt}
                    fetchPriority={i === 0 ? 'high' : undefined}
                  />
                </picture>
              </li>
            );
          })}
        </ul>
        <div className="hero__flicker" aria-hidden="true"></div>
      </div>

      <div className="hero__content">
        <img className="hero__wing" src="/assets/img/zaynich-wing-white.svg" width="50" height="51" alt="" />
        <h1 className="hero__title">
          Zaynich<sup>™</sup>
          <span className="hero__title-sub">is coming</span>
        </h1>
        <p className="hero__generic">cefepime and zidebactam</p>
        <p className="hero__dose">For Injection (3g)</p>
        <Link className="btn btn--light" to="/mechanism-of-action/">
          Explore the science
        </Link>
      </div>

      <div className="hero__controls">
        <ul className="hero__dots" aria-label="Choose image">
          {SLIDES.map((s, i) => (
            <li key={s.n}>
              <button
                type="button"
                className="hero__dot"
                aria-label={`Show image ${i + 1} of ${SLIDES.length}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => go(i)}
              />
            </li>
          ))}
        </ul>
        <button
          className="hero__pause"
          type="button"
          aria-pressed={playing ? 'false' : 'true'}
          aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
          onClick={() => setPlaying((p) => !p)}
        >
          <svg
            className="icon-pause"
            viewBox="0 0 12 12"
            aria-hidden="true"
            style={{ display: playing ? '' : 'none' }}
          >
            <rect x="2" y="1.5" width="2.6" height="9" fill="currentColor" />
            <rect x="7.4" y="1.5" width="2.6" height="9" fill="currentColor" />
          </svg>
          <svg
            className="icon-play"
            viewBox="0 0 12 12"
            aria-hidden="true"
            style={{ display: playing ? 'none' : '' }}
          >
            <path d="M3 1.5v9l7.5-4.5z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </section>
  );
}
