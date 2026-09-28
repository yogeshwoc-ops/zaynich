import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** New page → scroll to top. Link with #hash → scroll to that element. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // wait a tick so the new page has rendered
      const t = setTimeout(() => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (el) el.scrollIntoView({ behavior: 'instant' });
      }, 0);
      return () => clearTimeout(t);
    }
    // The stylesheet enables smooth scrolling; a page change should jump like a normal page load
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
