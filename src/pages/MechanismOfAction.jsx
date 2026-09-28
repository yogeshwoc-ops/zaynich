import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const TITLE = 'Mechanism of Action | ZAYNICH™ (cefepime and zidebactam) for Injection';
const DESCRIPTION = 'Watch how cefepime and zidebactam work together.';

export default function MechanismOfAction() {
  usePageMeta(TITLE, DESCRIPTION);
  return (
    <>
      <div className="page-banner">
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/img/banners/moa-m.jpg" />
          <img
            src="/assets/img/banners/moa.jpg"
            width="2400"
            height="475"
            alt="Illustrated bacteria: one shouts “Close the porins!” and the other replies “We bricked them shut, but it used the back door.”"
            fetchPriority="high"
          />
        </picture>
      </div>
      <nav className="crumbs wrap" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>How Zaynich™ Works?</li>
          <li aria-current="page">Mechanism of Action</li>
        </ol>
      </nav>
      <header className="page-head wrap">
        <h1>
          Watch the dual mechanism of ZAYNICH<sup>™</sup>
        </h1>
      </header>
      <section className="section section--tight" aria-label="Video: ZAYNICH mechanism of action">
        <div className="wrap">
          <div className="video-frame">
            <video controls playsInline preload="metadata" poster="/assets/img/banners/moa.jpg">
              <source src="/assets/video/zaynich-moa.mp4" type="video/mp4" /> Your browser does not support
              the video element.
            </video>
          </div>
        </div>
      </section>
      <section className="section section--mist" aria-labelledby="moaTextTitle">
        <div className="wrap">
          <h2 id="moaTextTitle">Mechanism of action</h2>
          <div className="prose">
            <p>
              ZAYNICH
              <sup>™</sup> is a combination of cefepime, a cephalosporin antibacterial drug, and zidebactam, a
              beta-lactamase inhibitor and non-beta-lactam antibacterial.
            </p>
            <p>
              Cefepime primarily targets PBP3 in Gram-negative bacterial pathogens, while zidebactam
              selectively inhibits penicillin-binding protein-2 (PBP2). Cefepime and zidebactam work together
              by binding multiple PBPs, leading to bacterial killing.
            </p>
          </div>
          <p className="note">
            Source: ZAYNICH
            <sup>™</sup> Prescribing Information, section 12.4. See the full{' '}
            <a href="/assets/pdfs/zaynich-prescribing-information.pdf" target="_blank" rel="noopener">
              Prescribing Information
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
