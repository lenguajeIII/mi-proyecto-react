import React, { useState } from "react";
import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Particle from "../components/Particle";
import ProjectCard from "../components/cards";

// Tus imágenes importadas
import baleada from "../MEDIA/images/baleada.jpg";
import retrato from "../MEDIA/images/retrato.jpeg";
import bici from "../MEDIA/images/bici.jpg";
import alimen_1 from "../MEDIA/images/1.jpg";
import alimen_2 from "../MEDIA/images/2.jpg";
import alimen_3 from "../MEDIA/images/3.jpg";
import alimen_4 from "../MEDIA/images/4.jpg";
import alimen_5 from "../MEDIA/images/5.jpg";
import alimen_6 from "../MEDIA/images/6.jpg";
import alimen_7 from "../MEDIA/images/7.jpg";
import alimen_8 from "../MEDIA/images/8.jpg";
import alimen_9 from "../MEDIA/images/9.jpg";
import alimen_10 from "../MEDIA/images/10.jpg";

function Galerias() {
  const [showModal, setShowModal] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Array con las imágenes importadas
  const images = [alimen_1, alimen_2, alimen_3, alimen_4, alimen_5, alimen_6, alimen_7, alimen_8, alimen_9, alimen_10];
  
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  
  const openLightbox = (index) => {
    setShowModal(false);
    
    setTimeout(() => {
      setActiveIndex(index);
      setLightboxOpen(true);
    }, 300);
  };
  
  return (
    <Container fluid className="gallery-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Nuestra <strong className="purple"> Galería </strong>
        </h1>
        <p style={{ color: "white" }}>Lenguaje III</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baleada}
              isBlog={false}
              title="Ver Galería de alimentos"
              description="Haga clic para ver más"
              onCardClick={openModal}
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={retrato}
              isBlog={false}
              title="Retratos profesionales"
              description="###"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bici}
              isBlog={false}
              title="Productos"
              description="###"
              />
          </Col>
        </Row>
      </Container>

      {/* TODO: Componente del modal */}
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Body>
          <Carousel
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            interval={1700}
            nextLabel=""
            prevLabel=""
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
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setActiveIndex((activeIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setActiveIndex((activeIndex + 1) % images.length)
          }
        />
      )}
    </Container>
  );
}

export default Galerias;
