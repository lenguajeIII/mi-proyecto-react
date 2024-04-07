import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import homeLogo from "../MEDIA/images/Herosection/retrato3.jpg";
import homeLogo2 from "../MEDIA/images/Herosection/6.jpg";
import homeLogo3 from "../MEDIA/images/Herosection/Reloj.jpg";
// import Particle from "../Particle";
import Particle from "../components/Particle";
//import Home2 from "./Home2";
import Type from "../components/Type";
import Type2 from "../components/Type2";
import Type3 from "../components/Type3";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton,FacebookIcon,TwitterIcon,WhatsappIcon } from 'react-share';

const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
// Get the Title of the current page dynamically
const title = typeof document !== 'undefined' ? document.title : 'Check out this awesome content!';
function Home() {
  return (
    <section>
      <Container >
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={10} className="home-header">
             
              

              {/* <h1 className="heading-name">
                Somos el 
                <strong className="main-name"> GRUPO #4</strong>
              </h1> */}

              {/* <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div> */}
            </Col>
            

            {/* <Col md={4} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ marginTrim: "450px" }}
              />
            </Col> */}
          </Row>
        </Container>
        <div style={{ padding: 50, textAlign: "center" }}>
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

            <div style={{ padding: 50, textAlign: "center" }}>
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

            <div style={{ padding: 50, textAlign: "center" }}>
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
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
