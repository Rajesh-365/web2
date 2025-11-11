import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import { Menu } from 'lucide-react';

// Always-loaded components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';

// Lazy components
const BrandingGrid = lazy(() => import('./components/BrandingGrid'));
const JohnGospelFellowship = lazy(() => import('./components/JohnGospelFellowship'));
const Churches = lazy(() => import('./components/Churches'));
const EIT = lazy(() => import('./components/EIT'));
const ExecutiveCouncil = lazy(() => import('./components/ExecutiveCouncil'));
const GospelActivists = lazy(() => import('./components/GospelActivists'));
const RegionalCoordinators = lazy(() => import('./components/RegionalCoordinators'));
const Courses = lazy(() => import('./components/Courses'));
const EmmausTV = lazy(() => import('./components/EmmausTV'));
const Examination = lazy(() => import('./components/Examination'));
const GospelService = lazy(() => import('./components/GospelService'));
const GospelNeed = lazy(() => import('./components/GospelNeed'));
const AdmissionRegistration = lazy(() => import('./components/AdmissionRegistration'));
const ResearchPapers = lazy(() => import('./components/ResearchPapers'));
const Footer = lazy(() => import('./components/Footer'));

// Standalone Pages
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));

// Simple error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-red-600">
          <h2>⚠️ Component failed to load.</h2>
          <pre>{this.state.error.message}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// Main content component with sidebar
const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const location = useLocation();
  
  // Check if we're on a standalone page
  const isStandalonePage = location.pathname === '/gallery' || location.pathname === '/results';

  // Handle hash navigation when coming from standalone pages
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.replace('#', '');
      const el = document.getElementById(sectionId);
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const extraSpacing = 16;

      if (el) {
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - extraSpacing;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      {/* Fixed header at the very top */}
      <Header onSidebarToggle={toggleSidebar} />

      {/* Mobile sidebar open button */}
      {!isSidebarOpen && (
        <button
          className="fixed bottom-6 left-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Sidebar starts below the header */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Add top padding to prevent overlap with fixed header */}
      <div className={[
        'lg:pl-20',
        isStandalonePage ? 'pt-32' : 'pt-[1px]'
      ].join(' ')}>
        <main>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Home page with all sections */}
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <BrandingGrid />
                      <JohnGospelFellowship />
                      <Churches />
                      <GospelActivists />
                      <EIT />
                      <ExecutiveCouncil />
                      <RegionalCoordinators />
                      <Courses />
                      <EmmausTV />
                      <Examination />
                      <GospelService />
                      <GospelNeed />
                      <AdmissionRegistration />
                      <ResearchPapers />
                      <Footer />
                    </>
                  }
                />

                {/* Standalone pages */}
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/results" element={<ResultsPage />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};

export default App;