import React from "react";
import { Container, Row, Col } from "react-bootstrap"; //componentes específicos de la biblioteca React Bootstrap
import {  AiFillInstagram, AiOutlineWhatsApp,} from "react-icons/ai"; //iconos de la biblioteca de iconos React (react-icons) para usar en el footer. 
//AiFillInstagram y AiOutlineWhatsApp representan los iconos de Instagram y WhatsApp, respectivamente.


function Footer() {
  let date = new Date(); 
  let year = date.getFullYear();//año actual utilizando el objeto Date de JavaScript.

  //Este bloque de código renderiza una fila (Row) dentro de un contenedor (Container) 
  //con la clase footer. Contiene tres columnas (Col), cada una ocupando 1/3 del ancho del contenedor en dispositivos de tamaño medio (md="4"). 
  
  return (
    <Container fluid className="footer">
      <Row>
      {/*//La primera columna muestra el mensaje "Website designed by team 4" 
      dentro de un encabezado de nivel 3 (<h3>).*/}
        <Col md="4" className="footer-copywright">
          <h3>Website designed by team 4</h3>
        </Col>

        {/* La segunda columna muestra el mensaje de derechos de autor 
        con el año actual obtenido anteriormente.*/}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} HN</h3>
        </Col>

        {/* La tercera columna contiene una lista no ordenada (<ul>) con la clase footer-icons. 
        Cada ítem de la lista es un icono social (<li className="social-icons">) que contiene un enlace (<a>) a un perfil de redes sociales. 
        El enlace se abre en una nueva pestaña (target="_blank") y utiliza los iconos importados (AiFillInstagram y AiOutlineWhatsApp).*/}

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
           <li className="social-icons">
              <a
                href="https://www.instagram.com/delcidaziel/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>

        {/* Este bloque de código cierra el componente Footer y exporta la función Footer para que pueda ser utilizada en otros archivos. */}

            <li className="social-icons">
              <a
                href="https://wa.me/50433979041"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>          

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
