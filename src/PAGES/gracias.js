import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import "../STYLES/contactme.css";


function Gracias() {
  return (
    <Container fluid className="contactme-section">
      <Particle />

      <html lang="es">
        <body className="flp">
          <h2 className="h2txt">Muchas gracias por ponerse en contacto.
          </h2>
          
        </body>
      </html>
    </Container>  
  );
}

export default Gracias;