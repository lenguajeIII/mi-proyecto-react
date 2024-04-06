import React from "react";
import { Container, Row, Col,  } from "react-bootstrap";
import "react-image-lightbox/style.css";
import Particle from "../components/Particle";
import ProjectCard from "../components/cards";

// Tus imágenes importadas
import baleada from "../MEDIA/images/baleada.jpg";
import retrato from "../MEDIA/images/retrato.jpeg";
import bici from "../MEDIA/images/bici.jpg";
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Cards de Alimentos*/}
          <Col md={4} className="project-card">        

            <Link to="/food">
            <ProjectCard   

              imgPath={baleada}
              isBlog={false}
              title="Ver Galería de alimentos"
              description=" "          
              />
              </Link>
          </Col>

          {/* Card de Retratos */}          
          <Col md={4} className="project-card">          

            <Link to="/portrait">
            <ProjectCard
              imgPath={retrato}
              isBlog={false}
              title="Ver Retratos profesionales"
              description=" "              
            />
            </Link>
          </Col>

          {/* Card de Productos*/} 
          <Col md={4} className="project-card">
          <Link to="/product">
            <ProjectCard
              imgPath={bici}
              isBlog={false}
              title=" Ver Productos"
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
