import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Horizontally scrollable table region with a right-edge fade and a
 * "scroll sideways" hint that only appear while the content overflows.
 */
export default function TableScroll({ children, ...rest }) {
  const scrollerRef = useRef(null);
  const [overflow, setOverflow] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const update = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const over = el.scrollWidth - el.clientWidth > 2;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
    setOverflow(over);
    setHasMore(over && !atEnd);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  return (
    <>
      <div className={'table-wrap' + (hasMore ? ' has-more' : '')}>
        <div className="table-scroll" ref={scrollerRef} onScroll={update} {...rest}>
          {children}
        </div>
      </div>
      <p className="table-hint" hidden={!overflow}>
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path
            d="M1 8h14M11 4l4 4-4 4M5 4L1 8l4 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Scroll sideways to see the full table.
      </p>
    </>
  );
}
