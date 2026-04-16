import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const MonHistoire = () => <div style={{ padding: '50px' }}>Mon Histoire</div>;
const Accompagnements = () => <div style={{ padding: '50px' }}>Accompagnements</div>;
const Contact = () => <div style={{ padding: '50px' }}>Contact</div>;
const Connexion = () => <div style={{ padding: '50px' }}>Connexion</div>;

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mon-histoire" element={<MonHistoire />} />
            <Route path="/accompagnements" element={<Accompagnements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connexion" element={<Connexion />} />
        </Routes>
    );
};

export default AppRoutes;