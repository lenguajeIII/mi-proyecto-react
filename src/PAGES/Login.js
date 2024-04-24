
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LuUser } from "react-icons/lu";
import { useState, useEffect } from "react";
// import fs from "fs-extra";



export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [showImageUploadButton, setShowImageUploadButton] = useState(false);
  localStorage.setItem('estado','false');
  console.log('estado inicial:' +localStorage.getItem('estado'));

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
      alert('Imagen cargada exitosamente');
    } catch (error) {
      console.error('Error al guardar la imagen:', error);
      alert('Error al guardar la imagen');
    }
  };


  const handleLogin = () => {
    loginWithRedirect();
    localStorage.setItem('estado','false')
    console.log( localStorage.getItem('estado'));
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    localStorage.setItem('estado','true')
    console.log( localStorage.getItem('estado'));
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





































function Login() {
  // return (
  //   <Container fluid className="login-section">
  //     <Particle />
  //     <html lang="en">
       
  //       <div class="container">
  //       <div class="item">
            
  //           <h2 class="logo"><i class='bx bxs-building'></i>LOGO</h2>
             
  //         </div>
  //       </div>
  //       <div class="login-section">
  //           <div class="form-box login">
  //               <form action="">
  //                   <h2>Iniciar Sesión</h2>
  //                   <div class="input-box">
  //                       <span class="icon"><i class='bx bxs-user-account'></i></span>
  //                       <input type="text" required></input>
  //                       <label>Usuario</label>                     
                        
  //                   </div>
  //                   <div class="input-box">
  //                       <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
  //                       <input type="password"  required></input>
  //                       <label>Contraseña</label>
  //                   </div>
  //                   <div class="remember-password">
  //                   <label for=""><input type="checkbox"></input>Recordar</label>
                    
  //                   </div>
                    
                    
  //                   <button class="btn">Ingresar</button>
                    
  //               </form>
  //           </div>
  //         </div>
  //         <script src="../src/index.js"></script>
  //     </html>    
  //   </Container>  
  // );
}

export default Login;
