import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  useEffect(() => {
    // Prevent the browser from automatically restoring the scroll position on hard reloads
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Also force scroll to top on initial page load
    window.scrollTo(0, 0);
  }, []);

  return null;
}
