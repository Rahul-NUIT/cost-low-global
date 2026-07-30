/**
 * GA4 page views for a client-side router.
 *
 * The gtag snippet in index.html sets `send_page_view: false`, so the automatic
 * pageview never fires and every view — including the first — is sent from here.
 * Otherwise only the landing page is ever recorded: React Router swaps pages
 * without a document load, so gtag's built-in pageview runs once and never again.
 *
 * Called from useSeo rather than Layout because that is where document.title is
 * final. Routes are lazy and the page transition holds the incoming page back
 * until the outgoing one has animated out, so a Layout-level effect fires while
 * the previous page's title is still on the document.
 */
export function trackPageView(title) {
  if (typeof window.gtag !== 'function') return;

  const payload = {
    page_title: title ?? document.title,
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.search,
  };

  // Keep local runs out of the production property — the snippet loads in dev
  // too, so without this every `npm run dev` session lands in the reports.
  if (import.meta.env.DEV) {
    console.info('[analytics] page_view', payload);
    return;
  }

  window.gtag('event', 'page_view', payload);
}
