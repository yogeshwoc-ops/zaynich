import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import CountUp from '../components/CountUp';

const TITLE = 'What is AMR? | ZAYNICH™ (cefepime and zidebactam) for Injection';
const DESCRIPTION =
  'The global and US burden of antimicrobial resistance, and the risks it carries for hospitalized patients.';

export default function WhatIsAmr() {
  usePageMeta(TITLE, DESCRIPTION);
  return (
    <>
      <div className="page-banner">
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/img/banners/amr-m.jpg" />
          <img
            src="/assets/img/banners/amr.jpg"
            width="2400"
            height="475"
            alt="Illustrated drug-resistant bacteria saying “We’ve been expecting you” and “Think you can stop us?”"
            fetchPriority="high"
          />
        </picture>
      </div>
      <nav className="crumbs wrap" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Burden of Anti-Microbial Resistance</li>
          <li aria-current="page">What is AMR?</li>
        </ol>
      </nav>
      {/* MLR REVIEW: every statistic on this page needs a numbered reference (source, year) before US launch. The live site showed none. */}
      <header className="page-head wrap">
        <h1>What is antimicrobial resistance?</h1>
        <p className="lead">WHO ranks AMR among the top 10 global public health threats facing humanity.</p>
      </header>
      <section className="section section--tight" aria-labelledby="burdenTitle">
        <div className="wrap">
          <h2 id="burdenTitle" className="visually-hidden">
            The burden of AMR today
          </h2>
          <div className="stat-groups">
            <div className="stat-group">
              <h3>Globally</h3>
              <div className="stat">
                <CountUp as="p" value={4.95} decimals={2} suffix="M" className="stat__num">
                  4.95M
                </CountUp>
                <p className="stat__text">deaths globally (2019) associated with bacterial AMR</p>
              </div>
              <div className="stat">
                <CountUp as="p" value={1.27} decimals={2} suffix="M" className="stat__num">
                  1.27M
                </CountUp>
                <p className="stat__text">deaths directly attributable to resistant infections (2019)</p>
              </div>
            </div>
            <div className="stat-group">
              <h3>United States</h3>
              <div className="stat">
                <CountUp as="p" value={2.8} decimals={1} suffix="M+" className="stat__num">
                  2.8M+
                </CountUp>
                <p className="stat__text">resistant infections occur every year in the U.S.</p>
              </div>
              <div className="stat">
                <CountUp as="p" value={35000} decimals={0} suffix="+" separator className="stat__num">
                  35,000+
                </CountUp>
                <p className="stat__text">deaths each year as a direct result</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--plum" aria-labelledby="futureTitle">
        <div className="wrap callout">
          <div>
            <h2 id="futureTitle">What happens if AMR goes untreated</h2>
            <p className="intro" style={{ marginBottom: '0' }}>
              Without new treatments and stronger stewardship, projections point to a steep and accelerating
              human toll.
            </p>
          </div>
          <div>
            <div className="stat-group">
              <h3>By 2050, globally</h3>
              <div className="stat">
                <CountUp as="p" value={10} decimals={0} suffix="M" className="stat__num">
                  10M
                </CountUp>
                <p className="stat__text">
                  deaths projected per year from AMR if left unaddressed, surpassing today’s annual toll from
                  cancer.
                </p>
              </div>
              <div className="stat">
                <CountUp as="p" value={39} decimals={0} suffix="M" className="stat__num">
                  39M
                </CountUp>
                <p className="stat__text">
                  estimated lives lost worldwide 2025–2050 under current resistance trends
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="amrRisk" aria-labelledby="amrRiskTitle">
        <div className="wrap">
          <h2 id="amrRiskTitle">AMR risk and hospitalization</h2>
          <p className="intro">
            Resistant infections behave differently in hospitalized patients: they are harder to identify
            quickly, harder to treat effectively, and far riskier when treatment is delayed or wrong.
          </p>
          <h3>When appropriate therapy is delayed</h3>
          <ul className="stat-row">
            <li>
              <CountUp as="p" value={20} suffix="%" prefix="~" className="stat__num">
                ~20%
              </CountUp>
              <p className="stat__text">higher risk of in-hospital mortality or discharge to hospice</p>
            </li>
            <li>
              <CountUp as="p" value={70} suffix="%" prefix="~" className="stat__num">
                ~70%
              </CountUp>
              <p className="stat__text">increase in length of hospital stay</p>
            </li>
            <li>
              <CountUp as="p" value={65} suffix="%" prefix="~" className="stat__num">
                ~65%
              </CountUp>
              <p className="stat__text">increase in total in-hospital treatment costs</p>
            </li>
          </ul>
          <p className="note">
            A separate meta-analysis of 39 studies found inappropriate empiric therapy nearly tripled the
            adjusted odds of mortality in Gram-negative infections (OR 3.30).
          </p>
        </div>
      </section>
      <section className="section section--mist" aria-labelledby="windowTitle">
        <div className="wrap callout">
          <h2 id="windowTitle">The window to act is narrowing</h2>
          <p>
            From 2.8 million U.S. infections a year to a projected 10 million global deaths annually by 2050,
            the data points to one conclusion: earlier, more effective treatment for drug-resistant infections
            saves lives and lowers the cost of care.
          </p>
        </div>
      </section>
    </>
  );
}
