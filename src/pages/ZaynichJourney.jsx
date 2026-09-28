import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const TITLE = 'The Zaynich™ Journey | ZAYNICH™ (cefepime and zidebactam) for Injection';
const DESCRIPTION = 'How ZAYNICH™ (cefepime and zidebactam) for Injection was discovered and developed.';

export default function ZaynichJourney() {
  usePageMeta(TITLE, DESCRIPTION);
  return (
    <>
      <div className="page-banner">
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/img/banners/journey-m.jpg" />
          <img
            src="/assets/img/banners/journey.jpg"
            width="2400"
            height="475"
            alt="Illustrated drug-resistant bacteria huddled together beside the words “Support groups have been formed.”"
            fetchPriority="high"
          />
        </picture>
      </div>
      <nav className="crumbs wrap" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li aria-current="page">The Zaynich™ Journey</li>
        </ol>
      </nav>
      <header className="page-head wrap">
        <h1>
          Relentless discovery and development efforts culminate in US FDA approval of ZAYNICH<sup>™</sup>
        </h1>
        <p className="lead">A watershed moment for India’s pharmaceutical innovation</p>
      </header>
      <section
        className="section section--tight"
        aria-label="Video: the ZAYNICH research and development story"
      >
        <div className="wrap">
          <div className="video-frame">
            <video controls playsInline preload="metadata" poster="/assets/img/banners/journey.jpg">
              <source src="/assets/video/zaynich-journey.mp4" type="video/mp4" /> Your browser does not
              support the video element.
            </video>
          </div>
        </div>
      </section>
      {/* MLR REVIEW (high priority): this copy names Acinetobacter baumannii and ICU use (outside the cUTI indication), claims a potential to "significantly reduce mortality", and describes "a new class" and "four novel antibiotics". Each needs substantiation or removal for a US promotional site. */}
      <section className="section section--tight" aria-label="The ZAYNICH story">
        <div className="wrap prose">
          <p>
            The US FDA approval of ZAYNICH
            <sup>™</sup> marks a defining milestone not only for Wockhardt but also for India’s pharmaceutical
            industry. Emerging after more than four decades without a major breakthrough in the Gram-negative
            antibiotic space, ZAYNICH
            <sup>™</sup> represents a new class of life-saving antibacterial therapy built upon a novel
            β-lactam enhancer mechanism.
          </p>
          <p>
            Its approval is a testament to Wockhardt’s unwavering commitment to scientific innovation and to
            India’s growing capability to discover, develop, and commercialize globally relevant medicines
            that address critical unmet medical needs.
          </p>
          <p>
            More than a product approval, ZAYNICH
            <sup>™</sup> symbolizes the transformation of India from a predominantly generic pharmaceutical
            supplier into a source of breakthrough innovation capable of delivering solutions to some of the
            world’s most pressing healthcare challenges.
          </p>
          <p>
            The achievement reflects the depth of scientific talent nurtured in India and demonstrates that
            Indian pharmaceutical companies can successfully navigate the long, high-risk, and scientifically
            demanding journey of drug discovery and development while meeting the stringent standards of the
            world’s most respected regulatory agencies.
          </p>
          <p>
            ZAYNICH
            <sup>™</sup> offers a promising therapeutic option against some of the most formidable
            multidrug-resistant Gram-negative pathogens encountered in intensive care units, including{' '}
            <em>Klebsiella pneumoniae</em>, <em>Pseudomonas aeruginosa</em>, and{' '}
            <em>Acinetobacter baumannii</em>.
          </p>
          <p>
            When used appropriately, it has the potential to significantly reduce mortality associated with
            these difficult-to-treat infections and improve outcomes for critically ill patients worldwide.
          </p>
          <p>
            The approval also carries broader implications for India’s innovation ecosystem. It serves as a
            compelling signal to policymakers, regulators, investors, and academic institutions that sustained
            investment in research and innovation can generate globally competitive therapies with meaningful
            societal impact.
          </p>
          <p>
            As India continues to bear a disproportionate burden of antimicrobial resistance, the successful
            development and commercialization of four novel antibiotics demonstrates that Indian science can
            make substantial contributions towards combating one of the greatest public-health threats of our
            time.
          </p>
          <p>
            The global burden of AMR continues to rise at an alarming pace. Against this backdrop, the
            emergence of ZAYNICH
            <sup>™</sup> provides renewed hope to physicians and healthcare systems struggling with
            diminishing treatment options for severe resistant infections.
          </p>
          <p>
            Through an extensive compassionate-use program spanning more than two years and the successful
            completion of a global Phase 3 clinical trial, ZAYNICH
            <sup>™</sup> has generated considerable optimism among clinicians, researchers, and healthcare
            stakeholders.
          </p>
          <p>
            Its approval reinforces confidence that scientific innovation can play a pivotal role in
            mitigating the human and economic consequences of antimicrobial resistance.
          </p>
          <p>
            In many respects, ZAYNICH
            <sup>™</sup> embodies the aspirations of a New India: an India that not only manufactures generic
            medicines for the world but also discovers them, invests in science, embraces innovation, and
            contributes transformative solutions to global healthcare.
          </p>
          <p>
            For Wockhardt, ZAYNICH
            <sup>™</sup> represents the culmination of decades of perseverance, scientific excellence, and
            belief in the power of innovation to improve and save lives.
          </p>
        </div>
      </section>
    </>
  );
}
