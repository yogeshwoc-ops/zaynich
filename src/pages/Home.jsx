import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import Hero from '../components/Hero';

const TITLE = 'ZAYNICH™ (cefepime and zidebactam) for Injection | For US Healthcare Professionals';
const DESCRIPTION =
  'Information for US healthcare professionals about ZAYNICH™ (cefepime and zidebactam) for Injection, including Indication, Important Safety Information, and full Prescribing Information.';

export default function Home() {
  usePageMeta(TITLE, DESCRIPTION);
  return (
    <>
      <Hero />
      <section className="glance" aria-labelledby="glanceTitle">
        <div className="wrap">
          <div className="glance__head">
            <h2 id="glanceTitle">
              ZAYNICH<sup>™</sup> at a glance
            </h2>
            <p>
              Indicated for adults with complicated urinary tract infections (cUTI), including pyelonephritis,
              caused by designated susceptible microorganisms.
            </p>
          </div>
          <ul className="glance__list">
            <li className="glance__item">
              <img
                className="glance__icon"
                src="/assets/img/icons/mechanism.svg"
                width="84"
                height="84"
                alt=""
              />
              <h3>Novel mechanism of action</h3>
              <p>Synergistically targets multiple penicillin-binding proteins (PBP1a/b, 2 and 3).</p>
              <Link to="/mechanism-of-action/" className="text-link">
                See the mechanism of action{' '}
                <svg viewBox="0 0 14 14" aria-hidden="true">
                  <path
                    d="M1 7h11M8 3l4 4-4 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
            <li className="glance__item">
              <img
                className="glance__icon"
                src="/assets/img/icons/efficacy.svg"
                width="84"
                height="84"
                alt=""
              />
              <h3>Clinical efficacy</h3>
              <p>
                In the Phase 3 ENHANCE1 clinical trial, ZAYNICH
                <sup>™</sup> demonstrated higher combined clinical cure and microbiologic eradication at the
                test of cure versus meropenem, and was generally well tolerated.
              </p>
              <Link to="/efficacy/" className="text-link">
                Review the efficacy data{' '}
                <svg viewBox="0 0 14 14" aria-hidden="true">
                  <path
                    d="M1 7h11M8 3l4 4-4 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
            <li className="glance__item">
              <img
                className="glance__icon"
                src="/assets/img/icons/safety.svg"
                width="84"
                height="84"
                alt=""
              />
              <h3>Most common adverse reactions</h3>
              <p>
                The most common adverse reactions occurring in ≥2% of patients receiving ZAYNICH
                <sup>™</sup> were diarrhea, hypertension, headache, and hypokalemia.
              </p>
              <Link to="/safety-profile/" className="text-link">
                View the safety profile{' '}
                <svg viewBox="0 0 14 14" aria-hidden="true">
                  <path
                    d="M1 7h11M8 3l4 4-4 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="explore" aria-labelledby="exploreTitle">
        <div className="wrap">
          <h2 id="exploreTitle">
            Explore ZAYNICH<sup>™</sup>
          </h2>
          <ul className="explore__list">
            <li>
              <Link to="/what-is-amr/" className="explore__link">
                <span>
                  <span className="explore__title">Burden of anti-microbial resistance</span>{' '}
                  <span className="explore__desc">
                    What AMR is, and the risks it carries for hospitalized patients.
                  </span>
                </span>{' '}
                <span className="explore__arrow" aria-hidden="true">
                  <svg viewBox="0 0 14 14">
                    <path
                      d="M1 7h11M8 3l4 4-4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/the-zaynich-journey/" className="explore__link">
                <span>
                  <span className="explore__title">
                    The Zaynich<sup>™</sup> journey
                  </span>{' '}
                  <span className="explore__desc">
                    How ZAYNICH<sup>™</sup> was discovered and developed.
                  </span>
                </span>{' '}
                <span className="explore__arrow" aria-hidden="true">
                  <svg viewBox="0 0 14 14">
                    <path
                      d="M1 7h11M8 3l4 4-4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/broad-spectrum/" className="explore__link">
                <span>
                  <span className="explore__title">
                    How Zaynich<sup>™</sup> works
                  </span>{' '}
                  <span className="explore__desc">
                    Spectrum of activity, mechanism of action, and dosage.
                  </span>
                </span>{' '}
                <span className="explore__arrow" aria-hidden="true">
                  <svg viewBox="0 0 14 14">
                    <path
                      d="M1 7h11M8 3l4 4-4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/efficacy/" className="explore__link">
                <span>
                  <span className="explore__title">Clinical data</span>{' '}
                  <span className="explore__desc">Efficacy and safety results from clinical trials.</span>
                </span>{' '}
                <span className="explore__arrow" aria-hidden="true">
                  <svg viewBox="0 0 14 14">
                    <path
                      d="M1 7h11M8 3l4 4-4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
