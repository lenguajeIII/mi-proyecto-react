import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../MEDIA/images/Herosection/retrato3.jpg";
import homeLogo2 from "../MEDIA/images/Herosection/6.jpg";
import homeLogo3 from "../MEDIA/images/Herosection/Reloj.jpg";
import Particle from "../components/Particle";
import Type from "../components/Type";
import Type2 from "../components/Type2";
import Type3 from "../components/Type3";

function Home() {
  return (
    <section>
      <Container>
        <Particle /> 
        <Container className="home-content">
          <Row>
          </Row>
        </Container>      

        <div style={{ padding: 50, textAlign: "left" }}>
          <Type />
        </div>
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
        <Col md={20} style={{ paddingBottom: 40 }}>
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
              {/* Aquí puedes agregar el texto de misión */}
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
