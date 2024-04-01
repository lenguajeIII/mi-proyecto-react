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
          <h1 class="h1txt">¡Contáctanos!

          <p>
          Puedes Registrarte
          <p>
          para agregar imágenes
          </p>
          </p>
          
          </h1>
          <div class="background_ctm">
            <div class="container_ctm">
              <h2>Registro</h2>
              <form action="#" method="post">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" requid></input>
                <label for="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" required></input>
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" placeholder="ejemplo@gmail.com" required></input>
                <label for="telefono">Teléfono:</label>
                <input type="number" id="telefono" name="telefono" inputMode="numeric" required></input>
                <label for="edad">Edad:</label>
                <input type="number" id="edad" name="edad" required></input>
                <input type="submit" value="Registrarse"></input>
              </form>
            </div>
          </div>
        </body>
      </html>


    </Container>  
  );
}

export default Contactme;