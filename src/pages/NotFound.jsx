import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const TITLE = 'Page not found | ZAYNICH™ (cefepime and zidebactam) for Injection';
const DESCRIPTION = 'Page not found.';

export default function NotFound() {
  usePageMeta(TITLE, DESCRIPTION);
  return (
    <>
      <header className="page-head wrap" style={{ paddingTop: '64px' }}>
        <h1>This page could not be found</h1>
        <p className="lead">
          The link may be out of date. Use the menu above, or go to the <Link to="/">home page</Link>.
        </p>
      </header>
    </>
  );
}
