# ZAYNICH™ US HCP website — React (Vite)

The original static HTML/CSS/JS site, converted to React with the same design, copy and behaviour.

## Run

    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build -> dist/
    npm run preview    # serve dist/ locally

Deploy `dist/` to Netlify (or any host). `public/_redirects` sends every URL to `index.html`
so deep links like `/efficacy/` work when the page is refreshed.

## Structure

    src/
      main.jsx                 entry (router + global CSS)
      App.jsx                  the 8 routes + 404
      components/
        Layout.jsx             header + <main> + ISI + footer + tray + HCP gate (shared by every page)
        Header.jsx             navigation (data-driven: edit the NAV array to change the menu)
        Isi.jsx                Indication & Important Safety Information — edit ONCE, shows on every page
        IsiTray.jsx            sticky ISI tray (hides once the full ISI is on screen)
        HcpGate.jsx            US healthcare-professional confirmation dialog
        Footer.jsx
        Hero.jsx               home slideshow (pause/play, dots, lamp flicker)
        CountUp.jsx            animated statistics
        Bars.jsx               efficacy bars (grow when scrolled into view)
        TableScroll.jsx        scrollable tables with overflow hint
        ScrollManager.jsx      scroll-to-top / #hash scrolling on navigation
      hooks/                   usePageMeta (title + description), useInView, useMediaQuery
      pages/                   Home, WhatIsAmr, ZaynichJourney, BroadSpectrum,
                               MechanismOfAction, Dosage, Efficacy, SafetyProfile, Sitemap, NotFound
      styles/                  main.css, home.css, pages.css  (unchanged from the original)
    public/assets/             images, fonts, PDFs, video (served as /assets/...)

## Notes

- `build.py` is no longer needed: the header, footer and ISI are now single components.
- Every `MLR REVIEW` note from the original is kept as a comment in the code
  (search for `MLR REVIEW` in `src/`).
- Videos: `public/assets/video/zaynich-journey.mp4` and `zaynich-moa.mp4` were not in the
  original zip (see `public/assets/video/README.txt`). Add them and the two video pages will play.
- Page title, description and canonical URL are set per page by `usePageMeta`. Because this is a
  client-rendered SPA, crawlers that don't run JavaScript only see the home-page tags.
  If SEO matters, consider a prerender step or moving to a framework with static generation.
