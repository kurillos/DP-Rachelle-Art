import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-[85vh] bg-black text-white px-6 py-16 md:px-20 font-extralight flex items-center justify-center">
            {/* CONTAINER GLOBAL (GRILLE) */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start w-full">

                {/* CONTAINER GAUCHE : La Photo */}
                <div className="flex justify-center">
                    <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden rounded-xl group shadow-2xl border-2 border-gray-900 transition-all duration-700">
                        <img
                            src="https://relhizcttlephxvoxebp.supabase.co/storage/v1/object/public/galerie-publique/moi.jpg"
                            alt="Rachelle - Photographe"
                            className="absolute inset-0 w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                    </div>
                </div>

                {/* CONTAINER DROITE : Le bloc de texte */}
                <div className="flex flex-col items-start space-y-10 w-full">

                    {/* Titre centré */}
                    <div className="flex flex-col items-center w-full">
                        <h1 className="text-4xl md:text-5xl font-serif italic text-white whitespace-nowrap">
                            Qui suis-je ?
                        </h1>
                        <div className="w-68 h-1.5 bg-art-purple rounded-full mt-2 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                    </div>

                    {/* Textes */}
                    <div className="text-gray-300 space-y-6 text-xl leading-relaxed text-left">
                        <p>
                            Avant tout, une passionnée de photos et de créations, diplômée de photos et de graphisme.<br />
                            J'ai élargi mes services afin de donner naissance à votre projet.
                        </p>
                        <p>
                            Je serai à l'écoute de vos besoins afin que votre projet soit le plus proche de vos attentes.
                        </p>
                        <div className="pt-4 space-y-4 italic text-white/90 border-l border-art-purple/30 pl-4">
                            <p>"Un projet ? Et si vous me faisiez confiance dès le début ?"</p>
                            <p className="text-lg text-art-purple">
                                Nous pouvons le réaliser ensemble : un mariage, un packaging, un logo, une charte graphique...
                            </p>
                        </div>
                        <div className="pt-8">
                            <Link
                                to="/contact"
                                className="inline-block bg-art-purple text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-art-purple/40 transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
                            >
                                Prendre rendez-vous dès maintenant
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;