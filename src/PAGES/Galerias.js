import React from "react";
import { Container, Row, Col,  } from "react-bootstrap";
import "react-image-lightbox/style.css";
import Particle from "../components/Particle";
import ProjectCard from "../components/cards";
import { MdContactPhone } from "react-icons/md";

// Tus imágenes importadas
import baleada from "../MEDIA/images/Cards Gallery/baleada.jpg";
import retrato from "../MEDIA/images/Cards Gallery/retrato.jpg";
import bici from "../MEDIA/images/Cards Gallery/bici.jpg";
import { Link } from "react-router-dom";

function Galerias() {
  return (
    <Container fluid className="gallery-section">
      <Particle />
      <Container>
        
        <h1 className="project-heading">          
          <p>            
          </p>
          Nuestra <strong className="purple"> Galería </strong>
        </h1>
        <p style={{ color: "white" }}>Lenguaje III</p>
        <Row style={{ justifyContent: "center", paddingBottom: "0px" }}>

          {/* Cards de Alimentos*/}
          <Col md={4} className="project-card">        


            <Link to="/food"className="text-decoration-none">
            <ProjectCard   

              imgPath={baleada}
              isBlog={false}
              title="Galería de alimentos"
              description=" "          
              />
              </Link>
          </Col>

          {/* Card de Retratos */}          
          <Col md={4} className="project-card">          

            <Link to="/portrait"className="text-decoration-none">
            <ProjectCard
              imgPath={retrato}
              isBlog={false}
              title="Retratos profesionales"
              description=" "              
            />
            </Link>
          </Col>

          {/* Card de Productos*/} 
          <Col md={4} className="project-card">
          <Link to="/product"className="text-decoration-none">
            <ProjectCard
              imgPath={bici}
              isBlog={false}
              title=" Productos"
              description=""              
            />
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Galerias;
