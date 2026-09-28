import { useInView } from '../hooks/useInView';

/** Efficacy bars — they grow once, the first time they scroll into view. */
export default function Bars({ className = 'bars', children, ...rest }) {
  const [ref, inView] = useInView(0.4);
  return (
    <ul ref={ref} className={className + (inView ? ' is-in' : '')} {...rest}>
      {children}
    </ul>
  );
}
