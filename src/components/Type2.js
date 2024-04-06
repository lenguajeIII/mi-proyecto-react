import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";

function Type2() {
  return (
    <Container>
      <br></br>
    <Typewriter
      options={{
        strings: [
          // "Bienvenidos a nuestro Portafolio",
          "Alimentos",
          
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 500,
      }}
    />
    </Container>
  );
}

export default Type2;
