/**
 * App.jsx - Root application component with React Router.
 * Manages routing between all pages and shared layout (Navbar + Footer).
 */
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Display the loading screen before the app content */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {/* The main app content (hidden behind loader until it finishes) */}
      <Router>
        <CustomCursor />
        {/* Persistent navigation across all pages */}
        <Navbar />

        {/* Page routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Persistent footer across all pages */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
