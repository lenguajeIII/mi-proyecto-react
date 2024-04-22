import React from "react";
import { Link } from "react-router-dom"; // Importar Link de React Router
import Typewriter from "typewriter-effect";

function Type2() {
  return (
    <Link to="/food" style={{ textDecoration: "none", color: "inherit" }}>
      <Typewriter
        options={{
          strings: [
            "Alimentos",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </Link>
  );
}

export default Type2;
