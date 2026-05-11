import { useEffect, useState } from 'react';

interface Image {
    id: number;
    url: string;
    alt?: string;
}

const Carousel = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // 1. Récupération des images depuis le backend
    useEffect(() => {
        fetch('http://127.0.0.1:8000/carousel')
            .then(res => res.json())
            .then(data => {
                setImages(data);
            })
            .catch(err => console.error("Erreur Fetch Carousel:", err));
    }, []);

    // 2. Gestion du défilement automatique
    useEffect(() => {
        // On ne lance le timer que si on a des images
        if (images.length > 0) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    // On revient à 0 quand on arrive à la fin du tableau
                    (prevIndex + 1) % images.length
                );
            }, 5000); // 5000ms = 5 secondes par photo

            return () => clearInterval(timer);
        }
    }, [images]);

    if (images.length === 0) return <div className="p-10 text-center text-white">Chargement...</div>;

    return (
        <div className="w-full h-[80vh] relative overflow-hidden bg-black flex items-center justify-center">
            {images.map((img, index) => (
                <div
                    key={img.id}
                    className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center bg-black ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={img.url}
                        alt={img.alt}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export default Carousel;