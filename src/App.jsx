import { Suspense, lazy } from 'react';
import LoadingSpinner from './utils/LoadingSppiner';
import Navbar from './components/Navbar/Navbar';
import OneSection from './components/Sections/OneSection';
import AboutSection from './components/Sections/AboutSection';
import OurProjects from './components/Sections/OurProjects';
import Testimonials from './components/Sections/Testimonials';

const LazyHero = lazy(() => import('./components/Hero/Hero'));
const LazyFooter = lazy(() => import('./Footer/Footer'));
const LazyLastSection = lazy(() => import('./components/Sections/LastSection'));

function App() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <LazyHero />
      </Suspense>
      <OneSection />
      <AboutSection />
      <Testimonials />
      <OurProjects />
      <Suspense fallback={<LoadingSpinner />}>
        <LazyLastSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyFooter />
      </Suspense>
    </main>
  );
}

export default App;
