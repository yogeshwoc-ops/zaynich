import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import TableScroll from '../components/TableScroll';

const TITLE = 'Dosage | ZAYNICH™ (cefepime and zidebactam) for Injection';
const DESCRIPTION =
  'Recommended dosage of ZAYNICH™, including dosage adjustment in adults with renal impairment.';

export default function Dosage() {
  usePageMeta(TITLE, DESCRIPTION);
  return (
    <>
      <div className="page-banner">
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/img/banners/dosage-m.jpg" />
          <img
            src="/assets/img/banners/dosage.jpg"
            width="2400"
            height="475"
            alt="Illustrated bacteria: one says “Throw more β-lactamases at it” and the other replies “It played them like amateurs.”"
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
          <li aria-current="page">Dosage</li>
        </ol>
      </nav>
      <header className="page-head wrap" id="zaynichDosage">
        <h1>Dosage</h1>
        <p className="lead">
          Recommended dosage is ZAYNICH
          <sup>™</sup> 3 grams (2 grams cefepime and 1 gram zidebactam) every 8 hours by intravenous infusion
          over 1 hour for 7 to 10 days in adult patients with an estimated glomerular filtration rate (eGFR)
          greater than or equal to 60 mL/min.
        </p>
      </header>
      <section className="section section--tight" aria-labelledby="renalTitle">
        <div className="wrap">
          <div className="prose" style={{ marginBottom: '32px' }}>
            <p style={{ fontSize: '17px', fontWeight: '400', color: 'inherit' }}>
              Dosage adjustment is recommended in adult patients with renal impairment who have an eGFR less
              than 60 mL/min. Administer each intravenous infusion over 1 hour for patients with renal
              impairment.
            </p>
          </div>
          <TableScroll role="region" aria-labelledby="renalTitle" tabIndex="0">
            <table className="data-table">
              <caption id="renalTitle">
                Recommended dosage of ZAYNICH
                <sup>™</sup> in adult patients with renal impairment (2.2)
              </caption>
              <thead>
                <tr>
                  <th scope="col">
                    eGFR<sup>a</sup> (mL/min)
                  </th>
                  <th scope="col">
                    Dose<sup>b</sup>
                  </th>
                  <th scope="col">Dosing interval</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">60 to 89</th>
                  <td>
                    ZAYNICH 3 grams<sup>c</sup>
                  </td>
                  <td>Every 8 hours</td>
                </tr>
                <tr>
                  <th scope="row">30 to 59</th>
                  <td>
                    ZAYNICH 1.5 grams<sup>d</sup>
                  </td>
                  <td>Every 8 hours</td>
                </tr>
                <tr>
                  <th scope="row">15 to 29</th>
                  <td>
                    ZAYNICH 1.5 grams<sup>d</sup>
                  </td>
                  <td>Every 12 hours</td>
                </tr>
                <tr>
                  <th scope="row">
                    8 to 14, with or without intermittent hemodialysis (IHD)<sup>e</sup>
                  </th>
                  <td>
                    ZAYNICH 1.5 grams<sup>d</sup>
                  </td>
                  <td>Every 24 hours</td>
                </tr>
              </tbody>
            </table>
          </TableScroll>
          <ol className="footnotes">
            <li>
              <sup>a</sup>
              As calculated using the 4-variable Modification of Diet in Renal Disease (MDRD) formula.
            </li>
            <li>
              <sup>b</sup>The total duration of treatment is for 7 to 10 days.
            </li>
            <li>
              <sup>c</sup>Provides 2 grams cefepime and 1 gram zidebactam.
            </li>
            <li>
              <sup>d</sup>Provides 1 gram cefepime and 0.5 grams zidebactam.
            </li>
            <li>
              <sup>e</sup>
              On hemodialysis days, recommended dose should be administered after a hemodialysis session. On
              days when hemodialysis is not performed, administer recommended dose 24 hours after the previous
              dose.
            </li>
          </ol>
          <p className="note">
            See full{' '}
            <a href="/assets/pdfs/zaynich-prescribing-information.pdf" target="_blank" rel="noopener">
              Prescribing Information
            </a>{' '}
            for preparation, reconstitution, and administration instructions (2.3) and drug compatibilities
            (2.4).
          </p>
        </div>
      </section>
    </>
  );
}
