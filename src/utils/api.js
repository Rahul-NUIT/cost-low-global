/**
 * Integration points for the backend.
 *
 * No endpoint ships with the source site, so these resolve locally and log the
 * payload. Point `ENDPOINTS` at the real API (or set VITE_API_BASE_URL) and
 * delete `simulate` to go live — the calling components need no changes.
 */
const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

const ENDPOINTS = {
  enquiry: '/api/enquiries',
  contact: '/api/contact',
  newsletter: '/api/newsletter',
};

const simulate = (payload) =>
  new Promise((resolve) => {
    if (import.meta.env.DEV) console.info('[api] submitted', payload);
    setTimeout(resolve, 900);
  });

async function post(endpoint, payload) {
  if (!BASE_URL) return simulate(payload);

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('We could not send your message. Please try again or email us directly.');
  }

  return response.json().catch(() => ({}));
}

export const submitEnquiry = (payload) => post(ENDPOINTS.enquiry, payload);
export const submitContact = (payload) => post(ENDPOINTS.contact, payload);
export const subscribeToNewsletter = (payload) => post(ENDPOINTS.newsletter, payload);
