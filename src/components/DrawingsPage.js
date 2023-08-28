// Import required modules and assets
import React, { useState, useEffect } from 'react';
import '../assets/css/DrawingPage.css';

// Import images for the gallery and icons for navigation
import image1 from '../assets/images/artworks/1.jpg';
import image2 from '../assets/images/artworks/2.jpg';
import image3 from '../assets/images/artworks/3.jpg';
import image4 from '../assets/images/artworks/4.jpg';
import image5 from '../assets/images/artworks/5.jpg';
import image6 from '../assets/images/artworks/6.jpg';
import image7 from '../assets/images/artworks/7.jpg';
import image8 from '../assets/images/artworks/8.jpg';
import image9 from '../assets/images/artworks/9.jpg';
import image10 from '../assets/images/artworks/10.jpg';
import left from '../assets/icon/left.png';
import right from '../assets/icon/right.png';

const DrawingPage = () => {
  // Initialize state variables
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle next image display in the modal
  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    setEnlargedImage(images[nextIndex]);
  };

  // Handle previous image display in the modal
  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
    setEnlargedImage(images[prevIndex]);
  };

  // Open image modal
  const openModal = (image) => {
    setEnlargedImage(image);
    setModalOpened(true);
  };

  // Close image modal
  const closeModal = () => {
    setModalOpened(false);
    setTimeout(() => {
      setEnlargedImage(null);
    }, 200);
  };

  // Add event listeners for escape key and outside click to close modal
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };

    const handleOutsideClick = (event) => {
      if (event.target.id === 'modal-overlay' && event.target === event.currentTarget) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // Handle image load
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Handle image hover to add a class for styling
  const handleImageHover = (event) => {
    event.target.classList.add('hover');
  };

  // Handle image hover end to remove the class
  const handleImageHoverEnd = (event) => {
    event.target.classList.remove('hover');
  };

  // Render the component
  return (
    <div className='gallery'>
      <h1 className="gallery-title">Gallery</h1>
      <p className="gallery-description">
        Welcome to the gallery, with a collection of artworks created with Photoshop and Procreate.
      </p>
      <div className="gallery-grid">
        <div className="gallery-column">
          { [image1, image2, image3, image4].map((image, index) => (
            <img className='small-image' src={image} alt={`Image ${index + 1}`} onClick={() => openModal(image)} onLoad={handleImageLoad} onMouseOver={handleImageHover} onMouseLeave={handleImageHoverEnd} />
          ))}
        </div>
        <div className="gallery-column">
          { [image5, image6, image7].map((image, index) => (
            <img className='small-image' src={image} alt={`Image ${index + 5}`} onClick={() => openModal(image)} onLoad={handleImageLoad} onMouseOver={handleImageHover} onMouseLeave={handleImageHoverEnd} />
          ))}
        </div>
        <div className="gallery-column">
          { [image8, image9, image10].map((image, index) => (
            <img className='small-image' src={image} alt={`Image ${index + 8}`} onClick={() => openModal(image)} onLoad={handleImageLoad} onMouseOver={handleImageHover} onMouseLeave={handleImageHoverEnd} />
          ))}
        </div>
      </div>
      {enlargedImage && (
        <div id="modal-overlay" className="modal-overlay">
          <img src={left} alt="Previous" className="prev-button button" onClick={handlePrevImage} /> {/* Left button */}
          <div className="close-button button" onClick={closeModal}>X</div> {/* Close button */}
          <div className="modal-content">
            <div className="modal-image" onClick={closeModal}>
              <img src={enlargedImage} alt="Enlarged Image" />
            </div>
          </div>
          <img src={right} alt="Next" className="next-button button" onClick={handleNextImage} /> {/* Right button */}
          <div className="pagination">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${currentImageIndex === index ? 'active-thumbnail' : ''}`}
            onClick={() => { setCurrentImageIndex(index); setEnlargedImage(images[index]); }}
          />
        ))}
      </div>
    </div>
  )}
    </div>
  );
};

export default DrawingPage;
