import React from "react";
import { Link } from "react-router-dom"; // Importar Link de React Router
import Typewriter from "typewriter-effect";

function Type3() {
  return (
    <Link to="/product" style={{ textDecoration: "none", color: "inherit" }}>
      <Typewriter
        options={{
          strings: [
            "Productos",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </Link>
  );
}

export default Type3;
