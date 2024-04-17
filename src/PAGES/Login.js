
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
import Particle from "../components/Particle";
import { LuUser } from "react-icons/lu";
// import leaf from "../../Assets/Projects/leaf.jpg";
// import baleada from "../../MEDIA/images/baleada.jpg";
// import retrato from "../../MEDIA/images/retrato.jpeg";
// import bici from "../../MEDIA/images/bici.jpg";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";





import { useState, useEffect } from "react";
// import fs from "fs-extra";

export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [showImageUploadButton, setShowImageUploadButton] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setShowImageUploadButton(true);
    }
  }, [isAuthenticated]);

  const handleImageUpload = async () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const imageData = e.target.result;
          // Guardar la imagen en una carpeta local de Windows
          await saveImageLocally(file.name, imageData);
        };
        reader.readAsDataURL(file);
      }
    };
    fileInput.click();
  };

  const saveImageLocally = async (fileName, imageData) => {
    try {
      // Crea la carpeta si no existe
      // await fs.ensureDir('images');
      // Guarda la imagen en la carpeta
      // await fs.writeFile(`images/${fileName}`, imageData);
      alert('Imagen cargada exitosamente');
    } catch (error) {
      console.error('Error al guardar la imagen:', error);
      alert('Error al guardar la imagen');
    }
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <button className="transparent-button" onClick={handleLogout}>
            Logout /
          </button>
          {showImageUploadButton && (
            <button className="transparent-button" onClick={handleImageUpload}>
              / Agregar Imágenes
            </button>
          )}
        </>
      ) : (
        <button className="transparent-button" onClick={handleLogin}>
          <LuUser style={{ marginBottom: "4px" }} />
          Login
        </button>
      )}
    </div>
  );
};



// export const LoginButton = () => {
//   const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

//   return (
//     <div>
//       {isAuthenticated ? (
//         <button className="transparent-button" onClick={() => logout({ returnTo: window.location.origin })}>
//           Logout
//         </button>
//       ) : (
//         <button className="transparent-button" onClick={() => loginWithRedirect()}>
//           <LuUser style={{ marginBottom: "4px" }}/>
//           Login
//         </button>
//       )}
//     </div>
//   );
// };


// export const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   return (
//     <button className="transparent-button" onClick={() => loginWithRedirect()}>
//       <LuUser style={{ marginBottom: "4px" }}/>
//       Login
//     </button>
//   );
// }


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
