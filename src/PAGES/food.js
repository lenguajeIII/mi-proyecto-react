import React, { useState, useRef } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useNavigate } from 'react-router-dom';
import { AiFillInstagram, AiOutlineWhatsApp, AiFillTwitterCircle } from "react-icons/ai";
import StarRatingComponent from 'react-star-rating-component';

// Importa tus imágenes aquí
import alimen_1 from '../MEDIA/images/Food/1.jpg';
import alimen_2 from '../MEDIA/images/Food/2.jpg';
import alimen_3 from '../MEDIA/images/Food/3.jpg';
import alimen_4 from '../MEDIA/images/Food/4.jpg';
import alimen_5 from '../MEDIA/images/Food/5.jpg';
import alimen_6 from '../MEDIA/images/Food/6.jpg';
import alimen_7 from '../MEDIA/images/Food/7.jpg';
import alimen_8 from '../MEDIA/images/Food/8.jpg';
import alimen_9 from '../MEDIA/images/Food/9.jpg';
import alimen_10 from '../MEDIA/images/Food/10.jpg';

function Food() {
  const [showModal, setShowModal] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [descriptionText, setDescriptionText] = useState('');
  const navigate = useNavigate();
  const images = [alimen_1, alimen_2, alimen_3, alimen_4, alimen_5, alimen_6, alimen_7, alimen_8, alimen_9, alimen_10];
  
  // Actualice la informacion de acuerdo con la imagen correspondiente.
  const descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
  ];
  const [ratings, setRatings] = useState(new Array(images.length).fill(0));

  const descriptionTimeoutRef = useRef(null);

  const handleRating = (index, newRating) => {
    //console.log('Handling rating:', index, newRating);
    const newRatings = [...ratings];
    newRatings[index] = newRating;
    setRatings(newRatings);
    //console.log(`Rating updated for image ${index}: ${newRating}`);
  };

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };


  const handleMouseEnter = (index) => {
    if (descriptionTimeoutRef.current) clearTimeout(descriptionTimeoutRef.current);
    descriptionTimeoutRef.current = setTimeout(() => {
      setDescriptionText(descriptions[index]);
      setShowDescription(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (descriptionTimeoutRef.current) clearTimeout(descriptionTimeoutRef.current);
    setShowDescription(false);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/galeria');
  };

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    setShowModal(false);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setShowModal(true);
  };

  return (
    <>
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Body>
          <Carousel activeIndex={activeIndex} onSelect={(selectedIndex) => setActiveIndex(selectedIndex)} interval={null}>
            {images.map((img, index) => (
              <Carousel.Item key={index} onClick={() => openLightbox(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative' }}>
                <img src={img} alt={`Slide ${index}`} className="d-block w-100" />
                {showDescription && activeIndex === index && (
                  <div className="custom--tooltip" style={{
                    visibility: showDescription ? 'visible' : 'hidden'
                  }}>{descriptionText}</div>
                )}
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>

        <Modal.Footer className="justify-content-center modal--footer ">
          
          <h6 className="mr-3">¡Comparte en tus redes sociales!</h6>
          <a href={`https://www.instagram.com/delcidaziel/`} target="_blank" rel="noopener noreferrer">
            <AiFillInstagram />
          </a>
          <a href={`https://wa.me/?text=Mira esta imagen: ${window.location.origin + images[activeIndex]}`} target="_blank" rel="noopener noreferrer">
            <AiOutlineWhatsApp />
          </a>
          <a href={`https://twitter.com/intent/tweet?text=Mira esta imagen&url=${window.location.origin + images[activeIndex]}`} target="_blank" rel="noopener noreferrer">
            <AiFillTwitterCircle />
          </a>

          <StarRatingComponent
            name={`rate${activeIndex}`}
            starCount={5}
            value={ratings[activeIndex]}
            className="star--rating--scale"
            onStarClick={(nextValue) => handleRating(activeIndex, nextValue)}
          />
        </Modal.Footer>
      </Modal>

      {lightboxOpen && (
        <Lightbox
          mainSrc={images[activeIndex]}
          nextSrc={images[(activeIndex + 1) % images.length]}
          prevSrc={images[(activeIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setActiveIndex((activeIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setActiveIndex((activeIndex + 1) % images.length)}
        />
      )}
    </>
  );
}


export default Food;