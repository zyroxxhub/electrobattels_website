import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-luxury-black text-luxury-white">

        {/* Navigation Bar */}
        <Navbar />

        {/* Scroll To Top helper and visual button */}
        <ScrollToTop />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </main>

        {/* Studio Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
