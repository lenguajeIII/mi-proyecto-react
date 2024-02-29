
import React from "react";
import { Container } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
import Particle from "../components/Particle";
// import leaf from "../../Assets/Projects/leaf.jpg";
// import baleada from "../../MEDIA/images/baleada.jpg";
// import retrato from "../../MEDIA/images/retrato.jpeg";
// import bici from "../../MEDIA/images/bici.jpg";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Login() {
  return (
    <Container fluid className="login-section">
      <Particle />
      <html lang="en">
       {/* <div class="background"></div> */}
        <div class="container">
        <div class="item">
            
            <h2 class="logo"><i class='bx bxs-building'></i>LOGO</h2>
             
          </div>
        </div>
        <div class="login-section">
            <div class="form-box login">
                <form action="">
                    <h2>Iniciar Sesión</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-user-account'></i></span>
                        <input type="text" required></input>
                        <label>Usuario</label>                     
                        
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password"  required></input>
                        <label>Contraseña</label>
                    </div>
                    <div class="remember-password">
                    <label for=""><input type="checkbox"></input>Recordar</label>
                    {/* <a href="#">Olvidaste tu contraseña</a> */}
                    </div>
                    {/* <input class="remember-password">
                        <label for=""><input type="checkbox">Recuerda</input></label>
                        <a href="#">Olvidaste tu contraseña</a>
                    </input> */}
                    
                    <button class="btn">Ingresar</button>
                    {/* <div class="create-account">
                        <p>¿Aún no tienes cuenta?<a href="#" class="register-link"> 
                            Registrarse</a></p>
                    </div> */}
                </form>
            </div>
          </div>
          <script src="../src/index.js"></script>
      </html>    
    </Container>  
  );
}

export default Login;
