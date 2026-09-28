import { useEffect } from 'react';

const SITE = 'https://zaynichweb.netlify.app';

function setMeta(selector, create, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

/** Sets <title>, meta description and canonical URL for the current page. */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;

    const desc = setMeta('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.name = 'description';
      return m;
    });
    desc.content = description || '';

    const canonical = setMeta('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.rel = 'canonical';
      return l;
    });
    const path = window.location.pathname.replace(/\/?$/, '/');
    canonical.href = SITE + path;
  }, [title, description]);
}
