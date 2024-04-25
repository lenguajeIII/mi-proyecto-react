import React from "react";  //Esta línea importa la biblioteca React, que necesitas para crear componentes de React.
import { Container, Row, Col } from "react-bootstrap"; //Estas líneas importan componentes específicos de la biblioteca React Bootstrap, que proporciona componentes de interfaz de usuario predefinidos para React.
import homeLogo from "../MEDIA/images/Herosection/retrato3.jpg"; 
import homeLogo2 from "../MEDIA/images/Herosection/6.jpg";
import homeLogo3 from "../MEDIA/images/Herosection/Reloj.jpg"; //Estas líneas importan imágenes que se utilizarán en la página Home.
import Particle from "../components/Particle"; 
import Type from "../components/Type";
import Type2 from "../components/Type2";
import Type3 from "../components/Type3"; //Estas líneas importan componentes personalizados que se usarán en la página principal.

function Home() { //Aquí se define la función Home, que representa el componente principal de la página home.
  return ( //Este bloque renderiza un componente llamado Particle dentro de un contenedor Container. Los componentes Particle podrían ser partículas animadas o efectos especiales.
    <section>
      <Container> 
        <Particle /> 
        {/* contenedor con la clase home-content. */}
        <Container className="home-content"> 
          <Row>
          </Row>
        </Container>      

{/* Bloque con componente llamado Type dentro de un <div> 
con un estilo específico de padding y alineación de texto.*/}
        <div style={{ padding: 50, textAlign: "left" }}>
          <Type />
        </div>

        {/* Bloque con una imagen (homeLogo) dentro de un contenedor de columna (Col) 
        con cierto tamaño (md={25}) y un estilo específico.*/}
        <Col md={25} style={{ paddingBottom: 10 }}>
          <img
            src={homeLogo}
            alt="home pic"
            className="img-fluid"
            style={{ marginTrim: "450px" }}
          />
        </Col>

        <div style={{ padding: 50, textAlign: "left" }}>
          <Type2 />
        </div>


        <Col md={20} style={{ paddingBottom: 40}}>
          <img
            src={homeLogo2}
            alt="home pic"
            className="img-fluid"
            style={{ marginTrim: "450px" }}
          />
        </Col>

        <div style={{ padding: 50, textAlign: "left" }}>
          <Type3 />
        </div>


        <Col md={15} style={{ paddingBottom: 20 }}>
          <img
            src={homeLogo3}
            alt="home pic"
            className="img-fluid"
            style={{ marginTrim: "450px" }}
            
          />
        </Col>
        
        <Container className="home-content">
          <Row>
            <Col md={10} className="home-header">
              
              <p>Misión: Comprometernos a proporcionar servicios profesionales y personalizados, utilizando tecnología de vanguardia y creatividad para inmortalizar momentos especiales</p>
              <p>Vision: Ser reconocidos como líderes en la industria de la fotografía, ofreciendo servicios innovadores y de alta calidad que capturen momentos especiales y emociones únicas. </p>
            
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
