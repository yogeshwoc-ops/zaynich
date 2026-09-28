import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Isi from './Isi';
import IsiTray from './IsiTray';
import HcpGate from './HcpGate';
import ScrollManager from './ScrollManager';

const GATE_KEY = 'zaynich_us_hcp_confirmed';

function readConfirmed() {
  try {
    return window.sessionStorage.getItem(GATE_KEY) === 'true';
  } catch {
    return false; // storage blocked
  }
}

/** Shared page chrome: header, <main> (page + ISI), footer, ISI tray, HCP gate. */
export default function Layout() {
  const [confirmed, setConfirmed] = useState(readConfirmed);

  const confirm = () => {
    try {
      window.sessionStorage.setItem(GATE_KEY, 'true');
    } catch {
      /* ignore */
    }
    setConfirmed(true);
  };

  return (
    <>
      <ScrollManager />
      {/* Everything behind the dialog is inert while the gate is open */}
      <div inert={!confirmed}>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main">
          <Outlet />
          <Isi />
        </main>
        <Footer />
        <IsiTray />
      </div>
      {!confirmed && <HcpGate onConfirm={confirm} />}
    </>
  );
}
