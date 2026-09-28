import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from '../hooks/useMediaQuery';

const PI_URL = '/assets/pdfs/zaynich-prescribing-information.pdf';

const Tm = () => <sup>™</sup>;

// Navigation is data, so adding a page is a one-line change.
const NAV = [
  { type: 'link', to: '/', label: 'Home' },
  {
    type: 'group',
    id: 'sub-amr',
    label: <>Burden of Anti-Microbial Resistance</>,
    items: [
      { to: '/what-is-amr/', label: 'What is AMR?' },
      { to: '/what-is-amr/#amrRisk', label: 'Risks & Hospitalization' },
    ],
  },
  {
    type: 'link',
    to: '/the-zaynich-journey/',
    label: (
      <>
        The Zaynich
        <Tm /> Journey
      </>
    ),
  },
  {
    type: 'group',
    id: 'sub-works',
    label: (
      <>
        How Zaynich
        <Tm /> Works?
      </>
    ),
    items: [
      { to: '/broad-spectrum/', label: 'Broad Spectrum' },
      { to: '/mechanism-of-action/', label: 'Mechanism of Action' },
      { to: '/dosage/', label: 'Dosage' },
    ],
  },
  {
    type: 'group',
    id: 'sub-clinical',
    label: 'Clinical Data',
    right: true,
    items: [
      { to: '/efficacy/', label: 'Clinical Efficacy' },
      { to: '/safety-profile/', label: 'Safety Profile' },
    ],
  },
];

const normalize = (p) => p.replace(/index\.html?$/, '').replace(/\/?$/, '/');

function Chevron() {
  return (
    <svg className="menu__chev" viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="M2 4l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const { pathname } = useLocation();
  const here = normalize(pathname);

  const isMobile = useMediaQuery('(max-width: 1180px)');
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');

  const [openGroup, setOpenGroup] = useState(null); // id of the open submenu
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const hoverTimer = useRef(null);

  // Section links (e.g. /what-is-amr/#amrRisk) are not "pages"
  const isCurrent = (to) => !to.includes('#') && normalize(to) === here;

  const closeAll = useCallback(() => {
    setOpenGroup(null);
  }, []);

  // Close everything on navigation
  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
  }, [pathname]);

  // Reset when crossing the mobile breakpoint
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [isMobile]);

  // Lock page scroll behind the mobile menu (stylesheet keys off body.nav-open)
  useEffect(() => {
    document.body.classList.toggle('nav-open', mobileOpen);
    return () => document.body.classList.remove('nav-open');
  }, [mobileOpen]);

  // Outside click closes desktop dropdowns; Escape closes everything
  useEffect(() => {
    const onDocClick = (e) => {
      if (!isMobile && navRef.current && !navRef.current.contains(e.target)) closeAll();
    };
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (openGroup && !isMobile) {
        const btn = navRef.current?.querySelector(`[aria-controls="${openGroup}"]`);
        setOpenGroup(null);
        btn?.focus();
      }
      if (mobileOpen) {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [isMobile, openGroup, mobileOpen, closeAll]);

  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  const hoverOK = !isMobile && canHover;

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="wrap">
          <p className="utility-bar__notice">For US Healthcare Professionals Only</p>
          <ul className="utility-bar__links">
            <li className="utility-bar__pi">
              <a href="/assets/pdfs/zaynich-prescribing-information.pdf" target="_blank" rel="noopener">
                Prescribing Information
              </a>
            </li>
            <li>
              <a href="#isi">Important Safety Information</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="nav-bar">
        <div className="wrap">
          <Link className="brand" to="/" aria-label="ZAYNICH home">
            <img
              src="/assets/img/zaynich-logo.png"
              width="600"
              height="200"
              alt="ZAYNICH™ (cefepime and zidebactam) for Injection (3g)"
            />
          </Link>

          <button
            className="menu-toggle"
            id="menuToggle"
            type="button"
            ref={toggleRef}
            aria-controls="primaryNav"
            aria-expanded={mobileOpen ? 'true' : 'false'}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="menu-toggle__bars" aria-hidden="true"></span>
          </button>

          <nav
            className={'primary-nav' + (mobileOpen ? ' is-open' : '')}
            id="primaryNav"
            ref={navRef}
            aria-label="Main"
            onClick={(e) => {
              // Following any link closes the mobile menu
              if (e.target.closest('a') && isMobile) setMobileOpen(false);
            }}
          >
            <ul className="menu">
              {NAV.map((item) => {
                if (item.type === 'link') {
                  const current = isCurrent(item.to);
                  return (
                    <li key={item.to}>
                      <Link
                        className={'menu__link' + (current ? ' is-current' : '')}
                        to={item.to}
                        aria-current={current ? 'page' : undefined}
                      >
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                }

                const open = openGroup === item.id;
                const groupCurrent = item.items.some((i) => isCurrent(i.to));
                return (
                  <li
                    key={item.id}
                    className={'has-submenu' + (open ? ' is-open' : '')}
                    onMouseEnter={() => {
                      if (!hoverOK) return;
                      clearTimeout(hoverTimer.current);
                      setOpenGroup(item.id);
                    }}
                    onMouseLeave={() => {
                      if (!hoverOK) return;
                      hoverTimer.current = setTimeout(
                        () => setOpenGroup((g) => (g === item.id ? null : g)),
                        160,
                      );
                    }}
                    onBlur={(e) => {
                      // Close when keyboard focus leaves the group (desktop)
                      if (isMobile) return;
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        setOpenGroup((g) => (g === item.id ? null : g));
                      }
                    }}
                  >
                    <button
                      className={'menu__link' + (groupCurrent ? ' is-current' : '')}
                      type="button"
                      aria-expanded={open ? 'true' : 'false'}
                      aria-controls={item.id}
                      onClick={() => setOpenGroup(open ? null : item.id)}
                    >
                      <span>{item.label}</span>
                      <Chevron />
                    </button>
                    <ul className={'submenu' + (item.right ? ' submenu--right' : '')} id={item.id}>
                      {item.items.map((sub) => {
                        const current = isCurrent(sub.to);
                        return (
                          <li key={sub.to}>
                            <Link
                              to={sub.to}
                              className={current ? 'is-current' : undefined}
                              aria-current={current ? 'page' : undefined}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}

              {/* Shown in the mobile menu only */}
              <li className="menu__utility">
                <a href={PI_URL} target="_blank" rel="noopener">
                  Prescribing Information
                </a>
                <a href="#isi">Important Safety Information</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
