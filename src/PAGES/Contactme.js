import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import "../STYLES/contactme.css";


function Contactme() {
  return (
    <Container fluid className="contactme-section">
      <Particle />

      <html lang="es">
        <body class="flp">
          <h2 class="h2txt">Puedes contactar al Fotógrafo
          <p>
          para contratar sus servicios ó
          <p>
          hacer tus preguntas
          </p>
          </p>
          </h2>
          <div class="background_ctm">
            <div class="container_ctm">
              <h2>¡Contáctanos!</h2>
              <form action="https://formsubmit.co/vanellyolmedo2019@gmail.com" method="POST">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" placeholder="Nombre"requid></input>
               <label for="telefono">Teléfono:</label>
                <input type="number" id="telefono" name="telefono" inputMode="numeric" placeholder="Teléfono"required></input>
                <label for="edad">Edad:</label>
                <input type="number" id="edad" name="edad" placeholder="Edad"required></input>
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" placeholder="ejemplo@gmail.com" required></input>
                <label for="message">Mensaje:</label>
                <textarea id="message" name="message" cols="30" row="5" placeholder="Mensaje" required></textarea>
                <div class="form-txt">
                  <a href="#">Politica de Seguridad</a>
                  <a href="#">---</a>
                  <a href="#">Terminos y Condiciones</a>
                </div>
                <input type="submit" value="Enviar"></input>
              </form>
            </div>
          </div>
        </body>
      </html>
    </Container>  
  );
}

export default Contactme;