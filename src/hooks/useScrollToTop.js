import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Resets scroll position on route change — SPAs keep it otherwise. */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
}
