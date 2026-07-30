/**
 * Integration points for the backend.
 *
 * The endpoints are the PHP scripts in `public/api/`, which Vite copies into
 * the build output. They are resolved against the deploy sub-folder
 * (import.meta.env.BASE_URL) so the same code works wherever the site is
 * mounted. Set VITE_API_BASE_URL to point at another origin — the Vite dev
 * server cannot execute PHP, so development needs it aimed at Laragon or the
 * live host. See .env.example.
 */
const API_BASE = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/+$/, '');

const ENDPOINTS = {
  enquiry: 'api/enquiry.php',
  contact: 'api/contact.php',
  newsletter: 'api/newsletter.php',
};

const GENERIC_ERROR =
  'We could not send your message. Please try again or email us directly.';

const endpointUrl = (path) =>
  API_BASE ? `${API_BASE}/${path}` : `${import.meta.env.BASE_URL}${path}`;

async function post(endpoint, payload) {
  let response;

  try {
    response = await fetch(endpointUrl(endpoint), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    // Offline, DNS failure or a blocked cross-origin request.
    throw new Error(GENERIC_ERROR);
  }

  // A misconfigured server can answer with an HTML error page, so treat any
  // unparseable body as a failure rather than a silent success.
  const data = await response.json().catch(() => null);

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || GENERIC_ERROR);
  }

  return data;
}

export const submitEnquiry = (payload) => post(ENDPOINTS.enquiry, payload);
export const submitContact = (payload) => post(ENDPOINTS.contact, payload);
export const subscribeToNewsletter = (payload) => post(ENDPOINTS.newsletter, payload);
