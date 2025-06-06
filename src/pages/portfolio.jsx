import { useEffect, useState } from 'react';
import corte1 from '../assets/cortes/corte1.jpg';
import corte2 from '../assets/cortes/corte2.jpg';
import corte3 from '../assets/cortes/corte3.jpg';
import corte4 from '../assets/cortes/corte4.jpg';

export const Portfolio = () => {
  const images = [
    { src: corte1, alt: 'Corte 1' },
    { src: corte2, alt: 'Corte 2' },
    { src: corte3, alt: 'Corte 3' },
    { src: corte4, alt: 'Corte 4' },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);


  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="relative w-full max-w-4xl mx-auto h-[600px] rounded-lg shadow-lg overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            onClick={() => openModal(index)}
            className={`
            absolute inset-0 w-full h-full cursor-pointer
            object-cover object-[center_80%] transition-opacity duration-1000 ease-in-out
            ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        {images.slice(1).map(({ src, alt }, i) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            className="flex-grow flex-shrink basis-[30%] h-48 rounded-lg shadow-md border border-gray-200 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(i + 1)}
          />
        ))}
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl max-h-[80vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-[70vh] rounded-lg shadow-lg object-contain"
            />

            <button
              onClick={closeModal}
              className="absolute top-3 right-5 cursor-pointer text-white text-3xl font-bold hover:text-gray-300"
              aria-label="Fechar modal"
            >
              &times;
            </button>

            <button
              onClick={prevImage}
              className="absolute top-1/2 left-5 cursor-pointer transform -translate-y-1/2 text-white text-3xl font-bold hover:text-gray-300"
              aria-label="Imagem anterior"
            >
              &#10094;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-5 cursor-pointer transform -translate-y-1/2 text-white text-3xl font-bold hover:text-gray-300"
              aria-label="Próxima imagem"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}

      <div className="mt-8">
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div
          className="elfsight-app-93815d72-3c0d-4714-8f2f-bf6cd225d48a"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
};
