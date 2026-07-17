import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import { EnquiryProvider } from './hooks/useEnquiry';

// Vite's BASE_URL carries a trailing slash ("/demo-new/"); React Router wants it
// without ("/demo-new"). Derived rather than hard-coded so the two cannot drift
// apart — set the path once, in vite.config.js.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <EnquiryProvider>
        <Layout />
      </EnquiryProvider>
    </BrowserRouter>
  );
}
