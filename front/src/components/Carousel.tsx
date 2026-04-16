import { useEffect, useState } from 'react';

interface Image {
    id: number;
    url: string;
    alt?: string;
}

const Carousel = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/carousel')
            .then(res => res.json())
            .then(data => {
                console.log("Images reçues :", data);
                setImages(data);
            })
            .catch(err => console.error("Erreur Fetch Carousel:", err));
    }, []);

    if (images.length === 0) return <div className="p-10 text-center">Chargement des œuvres...</div>;

    return (
        <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden bg-white">
            {images.map((img, index) => (
                <div
                    key={img.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={img.url}
                        className="w-full h-full object-contain md:object-cover"
                        alt="Oeuvre"
                    />
                </div>
            ))}
        </div>
    );
};

export default Carousel;