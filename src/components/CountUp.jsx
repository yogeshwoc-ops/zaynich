import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

function format(value, { decimals, separator, prefix, suffix }) {
  const str = separator
    ? value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : value.toFixed(decimals);
  return prefix + str + suffix;
}

/**
 * Animated number. The final text (children) is always what is rendered by default,
 * so screen readers, SEO and reduced-motion users get the real value.
 *
 * <CountUp as="p" className="stat__num" value={4.95} decimals={2} suffix="M">4.95M</CountUp>
 */
export default function CountUp({
  as: Tag = 'p',
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  separator = false,
  duration = 1600,
  children,
  ...rest
}) {
  const [ref, inView] = useInView(0.4);
  const [display, setDisplay] = useState(null); // null => show final text

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf;
    let start = null;
    const opts = { decimals, separator, prefix, suffix };
    const step = (ts) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      if (p < 1) {
        setDisplay(format(value * eased, opts));
        raf = requestAnimationFrame(step);
      } else {
        setDisplay(null);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, decimals, separator, prefix, suffix, duration]);

  return (
    <Tag ref={ref} aria-label={String(children)} {...rest}>
      {display ?? children}
    </Tag>
  );
}
