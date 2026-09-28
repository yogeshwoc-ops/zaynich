import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__top">
          <div className="site-footer__brands">
            <Link to="/" aria-label="ZAYNICH home">
              <img
                className="footer-zaynich"
                src="/assets/img/zaynich-logo.png"
                width="600"
                height="200"
                alt="ZAYNICH™ (cefepime and zidebactam) for Injection"
              />
            </Link>{' '}
            <span className="footer-divider" aria-hidden="true"></span>{' '}
            <a
              className="footer-wockhardt"
              href="https://www.wockhardt.com/"
              target="_blank"
              rel="noopener"
              aria-label="Wockhardt (opens in a new tab)"
            >
              <img src="/assets/img/wockhardt-logo-new.svg" width="150" height="33" alt="Wockhardt" />
            </a>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <ul>
              <li>
                <a href="/assets/pdfs/zaynich-prescribing-information.pdf" target="_blank" rel="noopener">
                  Prescribing Information
                </a>
              </li>
              <li>
                <a href="#isi">Important Safety Information</a>
              </li>
              <li>
                <Link to="/sitemap/">Sitemap</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="site-footer__legal">
          <p>This site is intended for US healthcare professionals only.</p>
          <p>
            ZAYNICH
            <sup>™</sup> is a trademark of Wockhardt Bio AG. © 2026 Wockhardt Bio AG. All rights reserved.
          </p>
          {/* MLR REVIEW: replace with the approved US material/job code and date. */}
          <p className="job-code">US-ZAY-XXXXX 09/26</p>
        </div>
      </div>
    </footer>
  );
}
