import { useEffect } from 'react';

const setMeta = (selector, attr, content) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    const [, key, value] = selector.match(/\[(.+?)="(.+?)"\]/) ?? [];
    if (key && value) tag.setAttribute(key, value);
    document.head.appendChild(tag);
  }
  tag.setAttribute(attr, content);
};

/**
 * Syncs title, description, canonical and OG/Twitter tags per route.
 * A small alternative to react-helmet for a site this size.
 */
export function useSeo({ title, description, image } = {}) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }

    if (title) {
      setMeta('meta[property="og:title"]', 'content', title);
      setMeta('meta[name="twitter:title"]', 'content', title);
    }

    if (image) {
      setMeta('meta[property="og:image"]', 'content', image);
      setMeta('meta[name="twitter:image"]', 'content', image);
    }

    const url = window.location.href;
    setMeta('meta[property="og:url"]', 'content', url);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, image]);
}
