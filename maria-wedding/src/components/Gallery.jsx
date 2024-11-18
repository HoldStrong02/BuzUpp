import React from 'react';
import '../assets/styles/Gallery.css';
import image1 from '../assets/images/react.svg'

const images = [
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    // Добави още снимки
];

const Gallery = () => {
    return (
        <section id="gallery" className="gallery">
            <h2>Галерия</h2>
            <div className="image-grid">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
                ))}
            </div>
        </section>
    );
};

export default Gallery;
