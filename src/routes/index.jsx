import { lazy } from 'react';

// Home ships in the initial chunk; the rest split out and load on navigation.
import Home from '../pages/Home';

const FoodProducts = lazy(() => import('../pages/FoodProducts'));
const Electronics = lazy(() => import('../pages/Electronics'));
const ImportExport = lazy(() => import('../pages/ImportExport'));
const Industries = lazy(() => import('../pages/Industries'));
const Certifications = lazy(() => import('../pages/Certifications'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Terms = lazy(() => import('../pages/Terms'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/food-products', element: <FoodProducts /> },
  { path: '/electronics', element: <Electronics /> },
  { path: '/import-export', element: <ImportExport /> },
  { path: '/industries', element: <Industries /> },
  { path: '/certifications', element: <Certifications /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
  { path: '*', element: <NotFound /> },
];
