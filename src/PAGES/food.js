
import React, { useState, useEffect } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useNavigate } from 'react-router-dom';

// Importa tus imágenes aquí
import alimen_1 from '../MEDIA/images/1.jpg';
import alimen_2 from '../MEDIA/images/2.jpg';
import alimen_3 from '../MEDIA/images/3.jpg';
import alimen_4 from '../MEDIA/images/4.jpg';
import alimen_5 from '../MEDIA/images/5.jpg';
import alimen_6 from '../MEDIA/images/6.jpg';
import alimen_7 from '../MEDIA/images/7.jpg';
import alimen_8 from '../MEDIA/images/8.jpg';
import alimen_9 from '../MEDIA/images/9.jpg';
import alimen_10 from '../MEDIA/images/10.jpg';

function Food() {
  const [showModal, setShowModal] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const images = [alimen_1, alimen_2, alimen_3, alimen_4, alimen_5, alimen_6, alimen_7, alimen_8, alimen_9, alimen_10];

  const closeModal = () => {
    setShowModal(false);
    navigate('/galeria'); // Asegúrate de que esta es la ruta correcta
  };

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    setShowModal(false); // Cierra el modal antes de abrir el Lightbox
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setShowModal(true); // Reabre el modal al cerrar el Lightbox
  };

  return (
    <>
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Body>
          <Carousel
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            interval={null} // Deshabilita la transición automática
          >
            {images.map((img, index) => (
              <Carousel.Item key={index} onClick={() => openLightbox(index)}>
                <img src={img} alt={`Slide ${index}`} className="d-block w-100" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
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
