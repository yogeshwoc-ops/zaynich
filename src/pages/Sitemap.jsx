import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const TITLE = 'Sitemap | ZAYNICH™ (cefepime and zidebactam) for Injection';
const DESCRIPTION = 'All pages on the ZAYNICH™ US healthcare professional website.';

export default function Sitemap() {
  usePageMeta(TITLE, DESCRIPTION);
  return (
    <>
      <nav className="crumbs wrap" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li aria-current="page">Sitemap</li>
        </ol>
      </nav>
      <header className="page-head wrap">
        <h1>Sitemap</h1>
      </header>
      <section className="section section--tight" aria-label="All pages">
        <div className="wrap">
          <ul className="sitemap-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span>Burden of Anti-Microbial Resistance</span>
              <ul>
                <li>
                  <Link to="/what-is-amr/">What is AMR?</Link>
                </li>
                <li>
                  <Link to="/what-is-amr/#amrRisk">Risks & Hospitalization</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/the-zaynich-journey/">
                The Zaynich<sup>™</sup> Journey
              </Link>
            </li>
            <li>
              <span>
                How Zaynich<sup>™</sup> Works?
              </span>
              <ul>
                <li>
                  <Link to="/broad-spectrum/">Broad Spectrum</Link>
                </li>
                <li>
                  <Link to="/mechanism-of-action/">Mechanism of Action</Link>
                </li>
                <li>
                  <Link to="/dosage/">Dosage</Link>
                </li>
              </ul>
            </li>
            <li>
              <span>Clinical Data</span>
              <ul>
                <li>
                  <Link to="/efficacy/">Clinical Efficacy</Link>
                </li>
                <li>
                  <Link to="/safety-profile/">Safety Profile</Link>
                </li>
              </ul>
            </li>
            <li>
              <span>Resources</span>
              <ul>
                <li>
                  <a href="/assets/pdfs/zaynich-prescribing-information.pdf" target="_blank" rel="noopener">
                    Prescribing Information (PDF)
                  </a>
                </li>
                <li>
                  <a href="#isi">Important Safety Information</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
