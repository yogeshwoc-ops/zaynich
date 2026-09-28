import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import CountUp from '../components/CountUp';
import TableScroll from '../components/TableScroll';

const TITLE = 'Safety Profile | ZAYNICH™ (cefepime and zidebactam) for Injection';
const DESCRIPTION =
  'Adverse reactions, discontinuations, warnings and precautions for ZAYNICH™ from the Phase 3 trial.';

export default function SafetyProfile() {
  usePageMeta(TITLE, DESCRIPTION);
  return (
    <>
      <div className="page-banner">
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/img/banners/safety-m.jpg" />
          <img
            src="/assets/img/banners/safety.jpg"
            width="2400"
            height="475"
            alt="Illustrated bacteria: one says “Relax, side effects will get it discontinued.” and the other replies “Not with this safety profile, genius.”"
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
          <li aria-current="page">Safety Profile</li>
        </ol>
      </nav>
      <header className="page-head wrap">
        <h1>
          The safety profile of ZAYNICH<sup>™</sup>
        </h1>
        <p className="lead">
          The safety of ZAYNICH
          <sup>™</sup> was evaluated in a Phase 3 clinical trial in adults with complicated urinary tract
          infections (cUTI), including pyelonephritis.
        </p>
      </header>
      <section className="section section--tight" aria-label="Safety population">
        <div className="wrap">
          <ul className="split-n">
            <li>
              <CountUp as="p" value={352} className="stat__num">
                352
              </CountUp>
              <span>
                patients received ZAYNICH<sup>™</sup>
              </span>
            </li>
            <li>
              <CountUp as="p" value={177} className="stat__num">
                177
              </CountUp>
              <span>patients received meropenem</span>
            </li>
          </ul>
          <p>The median duration of therapy was 8 days in both treatment groups.</p>
        </div>
      </section>
      <section className="section section--mist" aria-labelledby="arTitle">
        <div className="wrap">
          <h2 id="arTitle">Most common adverse reactions</h2>
          <p className="intro">
            The most frequently reported adverse reactions occurring in ≥2% of patients treated with ZAYNICH
            <sup>™</sup> were diarrhea, hypertension, headache, and hypokalemia.
          </p>
          <TableScroll role="region" aria-labelledby="arTitle" tabIndex="0" style={{ maxWidth: '760px' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">Adverse reaction</th>
                  <th scope="col" className="num col-z">
                    ZAYNICH<sup>™</sup>
                    <br />
                    (N=352)
                  </th>
                  <th scope="col" className="num">
                    Meropenem
                    <br />
                    (N=177)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Diarrhea</th>
                  <td className="num col-z">4%</td>
                  <td className="num">4%</td>
                </tr>
                <tr>
                  <th scope="row">Hypertension*</th>
                  <td className="num col-z">3%</td>
                  <td className="num">2%</td>
                </tr>
                <tr>
                  <th scope="row">Headache</th>
                  <td className="num col-z">3%</td>
                  <td className="num">5%</td>
                </tr>
                <tr>
                  <th scope="row">Hypokalemia</th>
                  <td className="num col-z">3%</td>
                  <td className="num">1%</td>
                </tr>
              </tbody>
            </table>
          </TableScroll>
          <p className="footnotes">
            *Hypertension includes blood pressure inadequately controlled and hypertension.
          </p>
          <p className="note note--important">
            Trial 1 was not designed to evaluate meaningful comparisons of the incidence of adverse reactions
            between the ZAYNICH
            <sup>™</sup> and meropenem treatment groups.
          </p>
        </div>
      </section>
      <section className="section" aria-labelledby="discTitle">
        <div className="wrap two-col">
          <div>
            <h2 id="discTitle">Discontinuations due to adverse reactions</h2>
            <p>
              <span className="stat__num" style={{ fontSize: '40px', display: 'block', marginBottom: '8px' }}>
                1.4%
              </span>
              (5/352) of patients receiving ZAYNICH
              <sup>™</sup> discontinued treatment due to an adverse reaction.
            </p>
          </div>
          <div>
            <p>The adverse reactions resulting in discontinuation were:</p>
            <ul className="plain-list">
              <li>Anaphylactic reaction</li>
              <li>
                <em>Clostridioides difficile</em> colitis
              </li>
              <li>Hyperbilirubinemia</li>
              <li>Drug hypersensitivity</li>
              <li>Enterococcal urinary tract infection</li>
            </ul>
            <p>
              Each occurred in 0.3% (1/352) of ZAYNICH<sup>™</sup>-treated patients.
            </p>
            <p>
              <strong>No deaths were reported in the Phase 3 trial.</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="section section--mist" aria-labelledby="wpTitle">
        <div className="wrap">
          <h2 id="wpTitle">Warnings and precautions</h2>
          <ul className="warn-grid">
            <li>
              <h3>Hypersensitivity reactions</h3>
              <p>
                Serious hypersensitivity reactions, including anaphylaxis, have been reported in patients
                treated with ZAYNICH
                <sup>™</sup>.
              </p>
              <p>
                Before initiating ZAYNICH
                <sup>™</sup>, carefully inquire about previous hypersensitivity reactions to cefepime,
                cephalosporins, penicillins, or other beta-lactams because cross-hypersensitivity among
                beta-lactam antibacterial drugs has been reported.
              </p>
              <p>
                If an allergic reaction to ZAYNICH
                <sup>™</sup> occurs, discontinue ZAYNICH
                <sup>™</sup> and institute appropriate supportive measures.
              </p>
            </li>
            <li>
              <h3>Neurotoxicity</h3>
              <p>
                Neurotoxicity has been reported during treatment with cefepime, a component of ZAYNICH
                <sup>™</sup>, including life-threatening or fatal occurrences. Reported manifestations
                include:
              </p>
              <ul>
                <li>Encephalopathy, including confusion, hallucinations, stupor, and coma</li>
                <li>Aphasia</li>
                <li>Myoclonus</li>
                <li>Seizures</li>
                <li>Nonconvulsive status epilepticus</li>
              </ul>
              <p>
                Most cases occurred in patients with renal impairment who did not receive appropriate dosage
                adjustment. However, cases have also occurred in patients who received dosage adjustment
                appropriate for their degree of renal impairment.
              </p>
              <p>
                If neurotoxicity associated with ZAYNICH
                <sup>™</sup> therapy occurs, discontinue ZAYNICH
                <sup>™</sup> and institute appropriate supportive measures.
              </p>
            </li>
            <li>
              <h3>
                <em>Clostridioides difficile</em> infection
              </h3>
              <p>
                <em>Clostridioides difficile</em> infection (CDI) has been reported with nearly all
                antibacterial agents, including ZAYNICH
                <sup>™</sup>, and may range in severity from mild diarrhea to fatal colitis.
              </p>
              <p>
                Consider CDI in patients who develop diarrhea following antibacterial drug use. CDI has been
                reported to occur more than 2 months after administration of antibacterial agents.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="section" aria-labelledby="addTitle">
        <div className="wrap">
          <h2 id="addTitle">Additional warnings and precautions</h2>
          <ul className="warn-list">
            <li>
              <h3>Positive direct Coombs’ tests</h3>
              <p>
                Positive direct Coombs’ tests, with or without hemolysis, have been reported during treatment
                with cefepime, a component of ZAYNICH
                <sup>™</sup>.
              </p>
            </li>
            <li>
              <h3>Prolonged prothrombin time</h3>
              <p>
                Decreased prothrombin activity has been reported with cephalosporins, including cefepime.
                Monitor prothrombin time in patients at risk and administer exogenous vitamin K as indicated.
              </p>
            </li>
            <li>
              <h3>Interactions with urine glucose testing</h3>
              <p>
                Cefepime may result in a false-positive reaction for glucose in the urine with certain testing
                methods. Glucose tests based on enzymatic glucose oxidase reactions are recommended.
              </p>
            </li>
            <li>
              <h3>Development of drug-resistant bacteria</h3>
              <p>
                Prescribing ZAYNICH
                <sup>™</sup> in the absence of a proven or strongly suspected bacterial infection or
                prophylactic indication is unlikely to provide benefit and increases the risk of developing
                drug-resistant bacteria.
              </p>
            </li>
          </ul>
          <h2 style={{ marginTop: '56px' }}>Contraindications</h2>
          <p style={{ maxWidth: '70ch' }}>
            ZAYNICH
            <sup>™</sup> is contraindicated in patients with a known history of serious hypersensitivity to
            cefepime or zidebactam or other beta-lactam antibacterial drugs.
          </p>
        </div>
      </section>
      <section className="section section--plum" aria-labelledby="renalFnTitle">
        <div className="wrap callout">
          <div>
            <h2 id="renalFnTitle">Renal function matters</h2>
            <Link to="/dosage/#zaynichDosage" className="btn btn--light" style={{ marginTop: '14px' }}>
              View dosing in renal impairment
            </Link>
          </div>
          <div>
            <p style={{ fontWeight: '600', marginBottom: '14px' }}>
              Adjust ZAYNICH
              <sup>™</sup> dosing in patients with renal impairment.
            </p>
            <p style={{ marginBottom: '14px' }}>
              Dosage adjustment is recommended in adults with an eGFR &lt;60 mL/min, including patients
              receiving intermittent hemodialysis.
            </p>
            <p>
              Because neurotoxicity has been reported with cefepime and most cases occurred in patients with
              renal impairment who did not receive appropriate dosage adjustment, renal function and
              appropriate dosing should be considered when treating patients with ZAYNICH
              <sup>™</sup>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
