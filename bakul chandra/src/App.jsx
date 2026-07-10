import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './component/Header';
import Footer from './component/Footer';
import GlobalLoader from './component/GlobalLoader';
import SmoothScroll from './component/SmoothScroll';
import ChatbotWidget from './component/ChatbotWidget'; // <-- CHATBOT IMPORT KIYA
import Thoughts from './pages/Thoughts';

// Lazy Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Work = lazy(() => import('./pages/Work'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const Awards = lazy(() => import('./pages/Awards'));
const Contact = lazy(() => import('./pages/Contact'));
const Media = lazy(() => import('./pages/Media'));
const Career = lazy(() => import('./pages/Career'));
const Travel = lazy(() => import('./pages/Travel'));

// Scroll to Top Helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const location = useLocation();

  // Yahan check karein: Agar path "/" hai toh showLayout false hoga
  const showLayout = location.pathname !== "/";

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col font-archivo">
      
      {/* 1. Header: Sirf tab dikhega jab path "/" NA HO */}
      {showLayout && <Navbar />}

      <main className="flex-grow">
        <Suspense fallback={<GlobalLoader />}>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* Other Routes */}
            <Route path="/biography" element={<About />} />
            <Route path="/works-&-portfolio" element={<Work />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/awards-&-recognition" element={<Awards />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<Media />} />
            <Route path="/academic-&-career-progression" element={<Career />} />
            <Route path="/thoughts-in-prose" element={<Thoughts />} />
            <Route path="/travel-&-photography" element={<Travel />} />

            <Route path="*" element={<div className="pt-40 text-center">Page Not Found</div>} />
          </Routes>
        </Suspense>
      </main>

      {/* 2. Footer: Sirf tab dikhega jab path "/" NA HO */}
      {/* {showLayout && <Footer />} */}

      {/* 3. Global Floating Chatbot Widget */}
      {/* Agar aapko Home page par bhi chatbot nahi chahiye toh isko bhi {showLayout && <ChatbotWidget />} kar sakte hain */}
      <ChatbotWidget />

    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <AppContent />
      </SmoothScroll>
    </Router>
  );
}

export default App;