import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import "../STYLES/contactme.css";

function Contactme() {

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch("https://formsubmit.co/ajax/vanellyolmedo2019@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: event.target.nombre.value,
          email: event.target.email.value,
          phone: event.target.telefono.value,
          age: event.target.edad.value,
          message: event.target.message.value,
        }),
      }).finally(window.location.href = "/gracias");

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container fluid className="contactme-section">
      <Particle />

      <html lang="es">
        <body className="flp">
          <h2 className="h2txt">
            Puedes contactar al Fotógrafo
            <p>para contratar sus servicios ó</p>
            <p>hacer tus preguntas</p>
          </h2>
          <div className="background_ctm">
            <div className="container_ctm">
              <h2>¡Contáctanos!</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                  required
                ></input>
                <label htmlFor="telefono">Teléfono:</label>
                <input
                  type="number"
                  id="telefono"
                  name="telefono"
                  inputMode="numeric"
                  placeholder="Teléfono"
                  required
                ></input>
                <label htmlFor="edad">Edad:</label>
                <input
                  type="number"
                  id="edad"
                  name="edad"
                  placeholder="Edad"
                  required
                ></input>
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ejemplo@gmail.com"
                  required
                ></input>
                <label htmlFor="message">Mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="5"
                  placeholder="Mensaje"
                  required
                ></textarea>
                <div className="form-txt">
                  <a href="#">Política de Seguridad <br/> Términos y Condiciones</a>
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