import { Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useRoutes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop, { ScrollProgress } from '../components/ui/ScrollToTop';
import EnquiryDrawer from '../components/sections/EnquiryDrawer';
import { PageLoader } from '../components/ui/Spinner';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { routes } from '../routes';
import { pageTransition } from '../utils/motion';

export default function Layout() {
  const location = useLocation();
  const element = useRoutes(routes, location);

  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Header />

      <main id="main" className="flex-1">
        <Suspense fallback={<PageLoader />}>
          {/* Keyed on pathname so each route fades through its own transition. */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={location.pathname} {...pageTransition}>
              {element}
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
      <ScrollToTop />
      <EnquiryDrawer />
    </div>
  );
}
