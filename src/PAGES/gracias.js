import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import "../STYLES/contactme.css";


function Gracias() {
  return (
    <Container fluid className="contactme-section">
      <Particle />

      <html lang="es">
        
            <h2 className="h2txt">Muchas gracias por ponerse en contacto.
            </h2>
        
      </html>
    </Container>  
  );
}

export default Gracias;