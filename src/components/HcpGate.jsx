import { useEffect, useRef } from 'react';

const NOT_HCP_URL = 'https://www.wockhardt.com/';

/**
 * US healthcare professional confirmation dialog.
 * The parent owns the "confirmed" state (stored in sessionStorage) so it can
 * make the rest of the page inert while this is open.
 */
export default function HcpGate({ onConfirm }) {
  const boxRef = useRef(null);
  const yesRef = useRef(null);
  const noRef = useRef(null);
  const previousFocus = useRef(document.activeElement);

  useEffect(() => {
    document.body.classList.add('gate-open');
    const t = setTimeout(() => boxRef.current?.focus(), 30);
    const prev = previousFocus.current;
    return () => {
      clearTimeout(t);
      document.body.classList.remove('gate-open');
      if (prev && prev.focus) prev.focus();
    };
  }, []);

  // Keep Tab inside the dialog
  const onKeyDown = (e) => {
    if (e.key !== 'Tab') return;
    const first = yesRef.current;
    const last = noRef.current;
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === boxRef.current)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="hcp-gate" id="hcpGate" onKeyDown={onKeyDown}>
      <div
        className="hcp-gate__box"
        ref={boxRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="hcpGateTitle"
        aria-describedby="hcpGateText"
        tabIndex={-1}
      >
        <img
          className="hcp-gate__logo"
          src="/assets/img/zaynich-logo.png"
          width="600"
          height="200"
          alt="ZAYNICH™ (cefepime and zidebactam) for Injection"
        />
        <h2 id="hcpGateTitle">This site is intended for US healthcare professionals.</h2>
        <p id="hcpGateText">Please confirm that you are a US healthcare professional to continue.</p>
        <div className="hcp-gate__actions">
          <button className="btn" id="hcpYes" type="button" ref={yesRef} onClick={onConfirm}>
            Yes, I am a US healthcare professional
          </button>
          <button
            className="btn btn--outline"
            id="hcpNo"
            type="button"
            ref={noRef}
            onClick={() => {
              window.location.href = NOT_HCP_URL;
            }}
          >
            No, I am not a US healthcare professional
          </button>
        </div>
      </div>
    </div>
  );
}
