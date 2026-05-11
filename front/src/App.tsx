import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accompagnements from './pages/Accompagnements';

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col text-white">

      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-black">
        <Routes>
          {/* Route par défaut (Accueil) */}
          <Route path="/" element={<Carousel />} />

          {/* Route pour la page About */}
          <Route path="/about" element={<About />} />

          {/* Route pour la page Accompagnements */}
          <Route path="/accompagnements" element={<Accompagnements />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;