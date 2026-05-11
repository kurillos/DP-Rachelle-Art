import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import About from '../pages/About';

const Navbar = () => {
    return (
        <nav className="w-full bg-white px-4 md:px-10 py-4 flex justify-between items-center shadow-sm">
            {/* Logo à gauche */}
            <Link to="/" className="flex items-center">
                <img src={logo} alt="Rachelle Logo" className="h-12 md:h-16 object-contain" />
            </Link>

            {/* Liens Navbar */}
            <div className="hidden md:flex space-x-8 font-serif italic text-xl">
                <Link to="/about" className="nav-link-arty text-art-purple">
                    Mon Histoire
                </Link>
                <Link to="/accompagnements" className="nav-link-arty text-art-purple">
                    Accompagnements
                </Link>
                <Link to="/contact" className="nav-link-arty text-art-purple">
                    Contact
                </Link>
                <Link to="/connexion" className="nav-link-arty text-art-purple">
                    Connexion
                </Link>
            </div>

            {/* Menu Mobile Hamburger */}
            <button className="md:hidden text-art-purple">☰</button>
        </nav>
    );
};

export default Navbar;