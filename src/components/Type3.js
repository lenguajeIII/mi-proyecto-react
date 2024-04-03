import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";

function Type3() {
  return (
    <Container>
      <br></br>
    <Typewriter
      options={{
        strings: [
          // "Bienvenidos a nuestro Portafolio",
          "Productos",
          
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 500,
      }}
    />
    </Container>
  );
}

export default Type3;
