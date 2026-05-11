import { Link } from 'react-router-dom';

const services = [
    {
        id: 'photographie',
        title: 'Photographie',
        description: "Réalisation et capture de vos moments magiques. Pour un mariage, un anniversaire ou tout simplement capturer vos amis à quatre pattes, immortalisons ensemble ce moment.",
        image: 'https://relhizcttlephxvoxebp.supabase.co/storage/v1/object/public/galerie-publique/photographie.jpeg',
        link: '/galerie/photographie'
    },
    {
        id: 'faire-part',
        title: 'Faire-part',
        description: 'Pour un événement qui vous correspond et qui vous ressemble. Je vous aide à confectionner vos faire-part.',
        image: 'https://relhizcttlephxvoxebp.supabase.co/storage/v1/object/public/galerie-publique/faire_part.jpeg',
        link: '/galerie/faire-part'
    },
    {
        id: 'logo-graphisme',
        title: 'Logo & Graphisme',
        description: "Création de votre logo d'entreprise décliné sur les supports de votre choix.",
        image: 'https://relhizcttlephxvoxebp.supabase.co/storage/v1/object/public/galerie-publique/service_logo.jpeg',
        link: '/galerie/graphisme'
    },
    {
        id: 'mise-en-page',
        title: 'Mise en page',
        description: "Pour embellir vos impressions par une mise en page qui vous correspond. Je vous propose des trames et documents sur-mesure afin de refléter vos valeurs.",
        image: 'https://relhizcttlephxvoxebp.supabase.co/storage/v1/object/public/galerie-publique/mise_en_page.jpeg',
        link: '/galerie/mise-en-page'
    },
    {
        id: 'site-web',
        title: 'Site Web',
        description: "Un site internet qui devient un outil ou votre vitrine, selon vos besoins !",
        image: 'https://relhizcttlephxvoxebp.supabase.co/storage/v1/object/public/galerie-publique/site_web.jpg',
        link: '/galerie/site-web'
    }
];

const Accompagnements = () => {
    return (
        <div className="min-h-screen bg-white py-16 px-6 md:px-20 font-light">

            {/* Titre de la page fixe */}
            <div className="flex flex-col items-center mb-20 w-fit mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif italic text-gray-900">
                    Accompagnements
                </h1>
                <div className="w-full h-1.5 bg-art-purple rounded-full mt-2"></div>
            </div>

            {/* Grille de cartes */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="group p-[3px] rounded-[45px] bg-gradient-to-br from-[#00D2FF] via-[#7A5CFF] to-art-purple shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                    >
                        {/* Fond dégradé intérieur type "verre" */}
                        <div className="bg-gradient-to-b from-white/50 to-art-purple/30 backdrop-blur-md rounded-[42px] p-8 flex flex-col items-center flex-grow text-center">

                            {/* Image */}
                            <div className="w-full aspect-[4/3] mb-8 overflow-hidden rounded-3xl border-4 border-white/50 shadow-sm">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* TITRE AVEC SOULIGNEMENT ANIMÉ */}
                            <div className="flex flex-col items-center w-fit mb-6">
                                <h2 className="text-2xl font-serif italic text-black">
                                    {service.title}
                                </h2>
                                <div className="w-full h-1 mt-1 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-art-purple rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-800 text-base leading-relaxed mb-8 flex-grow font-normal">
                                {service.description}
                            </p>

                            {/* Bouton avec inversion de couleur Cyan au hover */}
                            <Link
                                to={service.link}
                                className="bg-art-purple text-white px-10 py-3 rounded-full text-sm font-bold hover:bg-[#00D2FF] hover:text-art-purple transition-all duration-300 shadow-md uppercase tracking-widest"
                            >
                                Voir la galerie
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accompagnements;