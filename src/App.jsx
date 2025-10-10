import React, { Suspense, lazy, useState } from 'react';
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
const Results = lazy(() => import('./components/Results'));
const Gallery = lazy(() => import('./components/Gallery'));
const GospelService = lazy(() => import('./components/GospelService'));
const GospelNeed = lazy(() => import('./components/GospelNeed'));
const AdmissionRegistration = lazy(() => import('./components/AdmissionRegistration'));
const ResearchPapers = lazy(() => import('./components/ResearchPapers'));
const Footer = lazy(() => import('./components/Footer'));

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

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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
      <div className="lg:pl-20 pt-[1px]">
        <main>
          <Hero />

          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
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
              <Results />
              <Gallery />
              <GospelService />
              <GospelNeed />
              <AdmissionRegistration />
              <ResearchPapers />
              
              <Footer />
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
};

export default App;
