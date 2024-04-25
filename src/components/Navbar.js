import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import { AiOutlineHome} from "react-icons/ai";
import { IoCameraOutline } from "react-icons/io5";
import { LoginButton } from "../PAGES/Login";
import { MdContactPhone } from "react-icons/md";
//Aquí, se importan los módulos y componentes necesarios para construir la barra de navegación. 
//Se utilizan componentes de react-bootstrap para la estructura básica y estilos, y también se importan algunos íconos de React (AiOutlineHome, IoCameraOutline, MdContactPhone) 
//y un componente LoginButton desde otro archivo.


//Se define un componente de función llamado NavBar. Dentro de este componente, 
//se utilizan dos useState hooks para manejar el estado de la expansión de la barra de navegación (expand) 
//y el color del fondo de la barra de navegación (navColour).
function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

//*Se utiliza el componente Navbar de react-bootstrap con propiedades como expanded, fixed, expand, 
//y className para controlar su comportamiento y apariencia dependiendo del estado de los hooks.

  return (
    <Navbar 
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        
        <Navbar.Brand href="/" className="d-flex">
        </Navbar.Brand>

        {/*Se define el botón de alternar para expandir y contraer la barra de navegación en dispositivos móviles.*/}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

          {/*Aqui definimos la barra de navegación que se muestra en dispositivos móviles.
            Dentro de <Navbar.Collapse>, se encuentran una serie de elementos Nav.Item y Nav.Link que representan los diferentes elementos de la barra de navegación, 
            como enlaces a la página de inicio, galería, inicio de sesión y contacto. 
            Estos elementos utilizan el componente Link de react-router-dom para la navegación dentro de la aplicación React.*/}

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/galeria"
                onClick={() => updateExpanded(false)}
              >
                <IoCameraOutline
                  style={{ marginBottom: "2px" }}
                />{" "}
                Gallery
              </Nav.Link>
            </Nav.Item>

            <Nav>


            <Nav.Item>
              <Nav.Link>            
              <LoginButton />             
              </Nav.Link>
            </Nav.Item>

            </Nav>
            

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contactme"
                onClick={() => updateExpanded(false)}
              >
                <MdContactPhone
                  style={{ marginBottom: "2px" }}
                />{" "}
                Contactme
              </Nav.Link>
            </Nav.Item>

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
