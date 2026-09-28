import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import TableScroll from '../components/TableScroll';

const TITLE = 'Broad Spectrum | ZAYNICH™ (cefepime and zidebactam) for Injection';
const DESCRIPTION = 'In vitro spectrum data for ZAYNICH™ (cefepime and zidebactam) for Injection.';

export default function BroadSpectrum() {
  usePageMeta(TITLE, DESCRIPTION);
  return (
    <>
      <div className="page-banner">
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/img/banners/spectrum-m.jpg" />
          <img
            src="/assets/img/banners/spectrum.jpg"
            width="2400"
            height="475"
            alt="Illustrated bacteria: one shouts “Use everything!” and the other replies “We used KPC, NDM, OXA, IMP, VIM, AmpC. We’ve run out of alphabets.”"
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
          <li aria-current="page">Broad Spectrum</li>
        </ol>
      </nav>
      {/* MLR REVIEW (high priority): comparative in vitro claims ("broadest spectrum") vs. other agents, and organisms outside the labeled indication (A. baumannii, S. maltophilia), carry significant OPDP risk on a US promotional site. Add study references and the required in vitro / clinical-significance disclaimer, or remove. */}
      <header className="page-head wrap">
        <h1>
          Broadest spectrum of ZAYNICH<sup>™</sup> established through independently published studies
        </h1>
      </header>
      <section className="section section--tight" aria-labelledby="spectrumCaption">
        <div className="wrap">
          <TableScroll role="region" aria-labelledby="spectrumCaption" tabIndex="0">
            <table className="data-table spectrum-table">
              <caption id="spectrumCaption">In vitro coverage by organism and resistance mechanism</caption>
              <thead>
                <tr>
                  <th scope="col">Organism</th>
                  <th scope="col">Resistance mechanism</th>
                  <th scope="col" className="num col-z">
                    ZAYNICH
                    <sup>™</sup>
                    <br />
                    <span style={{ fontWeight: '400' }}>zidebactam (1 g) + cefepime (2 g)</span>
                  </th>
                  <th scope="col" className="num">
                    Cefiderocol
                  </th>
                  <th scope="col" className="num">
                    Ceftazidime/
                    <br />
                    avibactam
                  </th>
                  <th scope="col" className="num">
                    Meropenem/
                    <br />
                    vaborbactam
                  </th>
                  <th scope="col" className="num">
                    Aztreonam/
                    <br />
                    avibactam
                  </th>
                  <th scope="col" className="num">
                    Cefepime/
                    <br />
                    taniborbactam
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <em>Acinetobacter baumannii</em>
                  </th>
                  <td>OXA-carbapenemases</td>
                  <td className="num col-z">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--var" aria-hidden="true">
                      ±
                    </span>
                    <span className="visually-hidden">Variable coverage</span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <em>Pseudomonas aeruginosa</em>
                  </th>
                  <td>NDM + efflux + porin loss</td>
                  <td className="num col-z">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--var" aria-hidden="true">
                      ±
                    </span>
                    <span className="visually-hidden">Variable coverage</span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <em>Stenotrophomonas maltophilia</em>
                  </th>
                  <td>MBLs</td>
                  <td className="num col-z">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--var" aria-hidden="true">
                      ±
                    </span>
                    <span className="visually-hidden">Variable coverage</span>
                  </td>
                </tr>
                <tr>
                  <th scope="rowgroup" rowSpan="2">
                    <em>Escherichia coli</em>
                  </th>
                  <td>NDM + PBP3 insert</td>
                  <td className="num col-z">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--var" aria-hidden="true">
                      ±
                    </span>
                    <span className="visually-hidden">Variable coverage</span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--var" aria-hidden="true">
                      ±
                    </span>
                    <span className="visually-hidden">Variable coverage</span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>OXA-48-like</td>
                  <td className="num col-z">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="rowgroup" rowSpan="4">
                    <em>Klebsiella pneumoniae</em>
                  </th>
                  <td>KPC</td>
                  <td className="num col-z">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>NDM</td>
                  <td className="num col-z">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--var" aria-hidden="true">
                      ±
                    </span>
                    <span className="visually-hidden">Variable coverage</span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--var" aria-hidden="true">
                      ±
                    </span>
                    <span className="visually-hidden">Variable coverage</span>
                  </td>
                </tr>
                <tr>
                  <td>OXA-48-like</td>
                  <td className="num col-z">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>NDM + OXA-48-like</td>
                  <td className="num col-z">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--var" aria-hidden="true">
                      ±
                    </span>
                    <span className="visually-hidden">Variable coverage</span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--no">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="visually-hidden">Less than 30% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--yes">
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2.5 7.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="visually-hidden">Greater than 90% coverage</span>
                    </span>
                  </td>
                  <td className="num">
                    <span className="mark mark--var" aria-hidden="true">
                      ±
                    </span>
                    <span className="visually-hidden">Variable coverage</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </TableScroll>
          <ul className="legend" aria-label="Key">
            <li>
              <span className="mark mark--yes">
                <svg viewBox="0 0 14 14" aria-hidden="true">
                  <path
                    d="M2.5 7.5l3 3 6-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{' '}
              &gt;90% coverage
            </li>
            <li>
              <span className="mark mark--no">
                <svg viewBox="0 0 14 14" aria-hidden="true">
                  <path
                    d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              &lt;30% coverage
            </li>
            <li>
              <span className="mark mark--var" aria-hidden="true">
                ±
              </span>{' '}
              Variable coverage
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
