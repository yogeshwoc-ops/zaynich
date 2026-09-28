import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import TableScroll from '../components/TableScroll';
import Bars from '../components/Bars';

const TITLE = 'Clinical Efficacy | ZAYNICH™ (cefepime and zidebactam) for Injection';
const DESCRIPTION =
  'Phase 3 efficacy results for ZAYNICH™ versus meropenem in adults with cUTI, including pyelonephritis.';

export default function Efficacy() {
  usePageMeta(TITLE, DESCRIPTION);
  return (
    <>
      <div className="page-banner">
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/img/banners/efficacy-m.jpg" />
          <img
            src="/assets/img/banners/efficacy.jpg"
            width="2400"
            height="475"
            alt="Illustrated bacteria: one says “It’s below MIC” and the other replies “Then why are we still dying?”"
            fetchPriority="high"
          />
        </picture>
      </div>
      <nav className="crumbs wrap" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Clinical Data</li>
          <li aria-current="page">Clinical Efficacy</li>
        </ol>
      </nav>
      <header className="page-head wrap">
        <h1>Proven efficacy in adults with cUTI, including pyelonephritis</h1>
        <p className="lead">
          In a multinational, double-blind, noninferiority trial, ZAYNICH
          <sup>™</sup> was evaluated versus meropenem in adults with complicated urinary tract infections
          (cUTI), including pyelonephritis.
        </p>
      </header>
      <section className="section section--tight" aria-labelledby="trialTitle">
        <div className="wrap">
          <h2 id="trialTitle">
            The ZAYNICH<sup>™</sup> clinical trial
          </h2>
          <p className="intro">
            A multinational Phase 3 study in adults with cUTI, including pyelonephritis. A total of 530 adults
            were randomized 2:1 to receive:
          </p>
          <div className="arms">
            <div className="arm">
              <h3>
                ZAYNICH<sup>™</sup>
              </h3>
              <p>2 g cefepime + 1 g zidebactam, IV every 8 hours</p>
            </div>
            <span className="arms__or">or</span>
            <div className="arm arm--comparator">
              <h3>Meropenem</h3>
              <p>1 g IV every 8 hours</p>
            </div>
          </div>
          <div className="prose">
            <p style={{ fontSize: '17px', fontWeight: '400', color: 'inherit' }}>
              Both treatments were infused over 1 hour for 7 to 10 days. Dose adjustments were made for
              patients with renal impairment. Switching from IV to oral antibacterial therapy was not
              permitted.
            </p>
            <p>
              The primary efficacy analysis was conducted in the microbiological modified intent-to-treat
              (mMITT) population, which included 281 ZAYNICH
              <sup>™</sup>
              -treated patients and 136 meropenem-treated patients.
            </p>
            <p>
              At baseline, 68% of patients had cUTI and 32% had pyelonephritis. Concomitant bacteremia was
              identified in 6% of ZAYNICH
              <sup>™</sup>
              -treated patients and 7% of meropenem-treated patients.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--mist" aria-labelledby="primaryTitle">
        <div className="wrap">
          <h2 id="primaryTitle">
            ZAYNICH
            <sup>™</sup> demonstrated an 89% composite response at Test of Cure
          </h2>
          <p className="intro">
            Composite response was defined as both clinical cure and microbiological response at the Test of
            Cure (TOC) visit, 10 days after the end of treatment.
          </p>
          <Bars aria-label="Composite response at Test of Cure, mMITT population" className="bars">
            <li className="bar">
              <div className="bar__label">
                <span className="bar__name">
                  ZAYNICH<sup>™</sup>
                </span>
                <span className="bar__value">
                  89.0%<small>(250/281)</small>
                </span>
              </div>
              <div className="bar__track" aria-hidden="true">
                <div className="bar__fill" style={{ '--w': '89.0%' }}></div>
              </div>
            </li>
            <li className="bar bar--comparator">
              <div className="bar__label">
                <span className="bar__name">Meropenem</span>
                <span className="bar__value">
                  68.4%<small>(93/136)</small>
                </span>
              </div>
              <div className="bar__track" aria-hidden="true">
                <div className="bar__fill" style={{ '--w': '68.4%' }}></div>
              </div>
            </li>
          </Bars>
          <p className="diff">
            Treatment difference: <strong>20.6%</strong> (95% CI: 12.3, 29.5)
          </p>
        </div>
      </section>
      <section className="section" aria-labelledby="outcomesTitle">
        <div className="wrap">
          <h2 id="outcomesTitle">High rates of clinical cure and microbiological response</h2>
          <p className="intro">At the Test of Cure visit (mMITT population):</p>
          <TableScroll role="region" aria-labelledby="outcomesTitle" tabIndex="0">
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">Efficacy outcome</th>
                  <th scope="col" className="num col-z">
                    ZAYNICH<sup>™</sup>
                    <br />
                    n/N (%)
                  </th>
                  <th scope="col" className="num">
                    Meropenem
                    <br />
                    n/N (%)
                  </th>
                  <th scope="col" className="num">
                    Treatment difference
                    <br />
                    (95% CI)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Composite response (clinical cure and microbiological response)</th>
                  <td className="num col-z">250/281 (89.0)</td>
                  <td className="num">93/136 (68.4)</td>
                  <td className="num">20.6 (12.3, 29.5)</td>
                </tr>
                <tr>
                  <th scope="row">Clinical cure</th>
                  <td className="num col-z">272/281 (96.8)</td>
                  <td className="num">129/136 (94.9)</td>
                  <td className="num">1.9 (−1.9, 7.3)</td>
                </tr>
                <tr>
                  <th scope="row">Microbiological response</th>
                  <td className="num col-z">256/281 (91.1)</td>
                  <td className="num">96/136 (70.6)</td>
                  <td className="num">20.5 (12.6, 29.2)</td>
                </tr>
              </tbody>
            </table>
          </TableScroll>
          <p className="footnotes">
            CI = confidence interval; mMITT = microbiological modified intent-to-treat; TOC = Test of Cure.
          </p>
          <ul className="checks">
            <li>
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <circle cx="10" cy="10" r="10" fill="currentColor" opacity=".14" />
                <path
                  d="M5.5 10.5l3 3 6-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p style={{ margin: '0' }}>
                Clinical cure was defined as complete resolution, or return to premorbid state, of baseline
                signs and symptoms of cUTI or pyelonephritis present at screening, with no new urinary
                symptoms or worsening of symptoms.
              </p>
            </li>
            <li>
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <circle cx="10" cy="10" r="10" fill="currentColor" opacity=".14" />
                <path
                  d="M5.5 10.5l3 3 6-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p style={{ margin: '0' }}>
                Microbiological response was defined as reduction of the baseline qualifying pathogen(s) to
                &lt;10
                <sup>3</sup> CFU/mL in urine.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="section section--mist" aria-labelledby="pathogenTitle">
        <div className="wrap">
          <h2 id="pathogenTitle">Composite response at Test of Cure by baseline pathogen</h2>
          <p className="intro">Gram-negative pathogens, mMITT population.</p>
          <TableScroll role="region" aria-labelledby="pathogenTitle" tabIndex="0">
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">Gram-negative pathogen</th>
                  <th scope="col" className="num col-z">
                    ZAYNICH<sup>™</sup>
                    <br />% (n/N)
                  </th>
                  <th scope="col" className="num">
                    Meropenem
                    <br />% (n/N)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <em>Escherichia coli</em>
                  </th>
                  <td className="num col-z">92% (162/176)</td>
                  <td className="num">69% (60/87)</td>
                </tr>
                <tr>
                  <th scope="row">
                    <em>Klebsiella pneumoniae</em>
                  </th>
                  <td className="num col-z">79% (41/52)</td>
                  <td className="num">63% (15/24)</td>
                </tr>
                <tr>
                  <th scope="row">
                    <em>Proteus mirabilis</em>
                  </th>
                  <td className="num col-z">88% (22/25)</td>
                  <td className="num">86% (6/7)</td>
                </tr>
                <tr>
                  <th scope="row">
                    <em>Enterobacter cloacae</em> complex
                    <em />
                  </th>
                  <td className="num col-z">85% (11/13)</td>
                  <td className="num">57% (4/7)</td>
                </tr>
                <tr>
                  <th scope="row">
                    <em>Pseudomonas aeruginosa</em>
                  </th>
                  <td className="num col-z">57% (4/7)</td>
                  <td className="num">20% (1/5)</td>
                </tr>
              </tbody>
            </table>
          </TableScroll>
        </div>
      </section>
      <section className="section" aria-labelledby="esblTitle">
        <div className="wrap">
          <h2 id="esblTitle">Efficacy in ESBL-screen-positive isolates</h2>
          <p className="intro">
            Among patients with <em>E. coli</em>, <em>K. pneumoniae</em>, or <em>P. mirabilis</em> isolates
            with an extended-spectrum beta-lactamase (ESBL)-screen-positive phenotype, composite response at
            Test of Cure was:
          </p>
          <Bars aria-label="Composite response in ESBL-screen-positive isolates" className="bars">
            <li className="bar">
              <div className="bar__label">
                <span className="bar__name">
                  ZAYNICH<sup>™</sup>
                </span>
                <span className="bar__value">
                  89%<small>(62/70)</small>
                </span>
              </div>
              <div className="bar__track" aria-hidden="true">
                <div className="bar__fill" style={{ '--w': '89%' }}></div>
              </div>
            </li>
            <li className="bar bar--comparator">
              <div className="bar__label">
                <span className="bar__name">Meropenem</span>
                <span className="bar__value">
                  70%<small>(31/44)</small>
                </span>
              </div>
              <div className="bar__track" aria-hidden="true">
                <div className="bar__fill" style={{ '--w': '70%' }}></div>
              </div>
            </li>
          </Bars>
        </div>
      </section>
    </>
  );
}
