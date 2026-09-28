import { useEffect, useState } from 'react';

/**
 * Sticky ISI tray. It collapses on demand and hides itself once the full ISI
 * (<section id="isi">) has scrolled into view.
 */
export default function IsiTray() {
  const [expanded, setExpanded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const isi = document.getElementById('isi');
    if (!isi || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const reached = entry.isIntersecting || entry.boundingClientRect.top < 0;
        setHidden(reached);
        if (reached) setExpanded(false);
      },
      { threshold: 0 },
    );
    observer.observe(isi);
    return () => observer.disconnect();
  }, []);

  // Body class used by the stylesheet to add / remove bottom padding
  useEffect(() => {
    document.body.classList.toggle('tray-gone', hidden);
    return () => document.body.classList.remove('tray-gone');
  }, [hidden]);

  const cls = 'isi-tray' + (expanded ? ' is-expanded' : '') + (hidden ? ' is-hidden' : '');

  return (
    <aside
      className={cls}
      id="isiTray"
      aria-label="Indication and Important Safety Information summary"
      aria-hidden={hidden ? 'true' : 'false'}
      inert={hidden}
      onClick={(e) => {
        // Links inside the tray that point to the full ISI collapse the tray
        if (e.target.closest('a[href="#isi"]')) setExpanded(false);
      }}
    >
      <div className="isi-tray__bar">
        <div className="wrap">
          <p className="isi-tray__title">Indication and Important Safety Information</p>
          <div className="isi-tray__actions">
            <a href="/assets/pdfs/zaynich-prescribing-information.pdf" target="_blank" rel="noopener">
              Prescribing Information
            </a>
            <button
              className="isi-tray__toggle"
              id="isiTrayToggle"
              type="button"
              aria-expanded={expanded ? 'true' : 'false'}
              aria-controls="isiTrayBody"
              onClick={() => setExpanded((v) => !v)}
            >
              <span className="isi-tray__toggle-label">{expanded ? 'Collapse' : 'Expand'}</span>
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="isi-tray__body" id="isiTrayBody">
        <div className="wrap">
          <h3>Indication and Usage</h3>
          <p>
            ZAYNICH
            <sup>™</sup> is indicated for the treatment of adult patients with complicated urinary tract
            infections (cUTI), including pyelonephritis caused by the following susceptible microorganisms:{' '}
            <em>Escherichia coli</em>, <em>Klebsiella pneumoniae</em>, <em>Proteus mirabilis</em>,{' '}
            <em>Enterobacter cloacae</em> complex, and <em>Pseudomonas aeruginosa</em>.
          </p>
          <h4>Contraindications</h4>
          <p>
            ZAYNICH
            <sup>™</sup> is contraindicated in patients with a known history of serious hypersensitivity to
            the components of ZAYNICH
            <sup>™</sup> (cefepime and zidebactam) or other beta-lactam antibacterial drugs.
          </p>
          <h4>Warnings and Precautions</h4>
          <ul>
            <li>
              <strong>Hypersensitivity Reactions:</strong> Serious hypersensitivity reactions, including
              anaphylaxis, have been reported in patients treated with ZAYNICH
              <sup>™</sup>. If an allergic reaction occurs, discontinue the drug and institute appropriate
              supportive measures.
            </li>
            <li>
              <strong>Neurotoxicity:</strong> Life-threatening or fatal encephalopathy, aphasia, myoclonus,
              seizures, and nonconvulsive status epilepticus have been reported with cefepime, most often in
              patients with renal impairment without appropriate dosage adjustment.
            </li>
            <li>
              <strong>
                <em>Clostridioides difficile</em> Infection (CDI)
              </strong>{' '}
              has been reported with nearly all antibacterial agents, including ZAYNICH
              <sup>™</sup>, and may range from mild diarrhea to fatal colitis.
            </li>
          </ul>
          <p>
            <a href="#isi">Read the full Important Safety Information</a> and see full{' '}
            <a href="/assets/pdfs/zaynich-prescribing-information.pdf" target="_blank" rel="noopener">
              Prescribing Information
            </a>
            .
          </p>
        </div>
      </div>
    </aside>
  );
}
