import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import "../STYLES/contactme.css";


function Gracias() {
  return (
    <Container fluid className="contactme-section">
      <Particle />

      <html lang="es">
        
      <h2 className="h2txt">¡Gracias por ponerse en contacto con El Fotógrafo!
          <br/>Estamos emocionados de escuchar de usted. <br/>Nos pondremos en contacto con usted pronto.</h2>
        
      </html>
    </Container>  
  );
}

export default Gracias;