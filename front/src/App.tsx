import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/index';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-gray-900">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;