import React from "react";
import { Link } from "react-router-dom"; // Importar Link de React Router
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Link to="/portrait" style={{ textDecoration: "none", color: "inherit" }}>
      <Typewriter
        options={{
          strings: [
            "Retratos",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </Link>
  );
}

export default Type;

