// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "../components/cards";
// import Particle from "../components/Particle";
// // import leaf from "../../Assets/Projects/leaf.jpg";
// import baleada from "../MEDIA/images/baleada.jpg";
// import retrato from "../MEDIA/images/retrato.jpeg";
// import bici from "../MEDIA/images/bici.jpg";
// // import emotion from "../../Assets/Projects/emotion.png";
// // import editor from "../../Assets/Projects/codeEditor.png";
// // import chatify from "../../Assets/Projects/chatify.png";
// // import suicide from "../../Assets/Projects/suicide.png";
// // import bitsOfCode from "../../Assets/Projects/blog.png";

// function Galeria() {
//   return (
//     <Container fluid className="galery-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           Nuestra<strong className="purple"> Galeria</strong>
//         </h1>
//         <p style={{ color: "white" }}>
//          Lenguaje Programacion III
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
                       
//               imgPath={baleada}
//               isBlog={false}
//               title="Ver Galería de alimentos"
              
//               description="
//               ### Criterios de Aceptación:

// - Debe haber una sección dedicada a la fotografía de alimentos en la página principal.
// - Los usuarios deben poder hacer clic en la sección de alimentos y ver una galería de imágenes.
// - Las imágenes deben poder expandirse para una vista más detallada.

// ### Tareas de Diseño y Frontend en React:

// - Crear un componente de sección para alimentos en la página principal.
// - Implementar una galería de imágenes utilizando un componente de carrusel en React.
// - Diseñar un modal o lightbox para mostrar imágenes en tamaño completo.
//               "
//               // ghLink="https://github.com/soumyajit4419/Chatify"
//               // demoLink="https://chatify-49.web.app/"
              
//             />
//             <p
//             style={{ color: "white" }}> 
//             Ver gallery
//             </p>       
            
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={retrato}
//               isBlog={false}
//               title="Retratos profesionales"
//               description="
//               ### Criterios de Aceptación:

// - Debe haber una sección dedicada a retratos en la página principal.
// - Los usuarios deben poder hacer clic en la sección de retratos y ver una galería de imágenes.
// - Debe haber una opción para filtrar retratos por estilo o tipo de retrato.

// ### Tareas de Diseño y Frontend en React:

// - Crear un componente de sección para retratos en la página principal.
// - Implementar un filtro de imágenes por estilo utilizando componentes de botón en React.
// - Diseñar una galería de imágenes para mostrar los retratos.
//               "
//               // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
//               // demoLink="https://blogs.soumya-jit.tech/"
//             />
//           </Col>
// {/* 
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Editor.io"
//               description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
//               ghLink="https://github.com/soumyajit4419/Editor.io"
//               demoLink="https://editor.soumya-jit.tech/"              
//             />
//           </Col> */}

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bici}
//               isBlog={false}
//               title="Productos"
//               description="
//               ### Criterios de Aceptación:

// - Debe haber una sección dedicada a productos en la página principal.
// - Los usuarios deben poder hacer clic en la sección de productos y ver una galería de imágenes.
// - Debe haber una opción para buscar productos por categoría o tipo.

// ### Tareas de Diseño y Frontend en React:

// - Crear un componente de sección para productos en la página principal.
// - Implementar un sistema de búsqueda utilizando un componente de barra de búsqueda en React.
// - Diseñar una galería de imágenes para mostrar los productos destacados."
//               // ghLink="https://github.com/soumyajit4419/Plant_AI"
//               // demoLink="https://plant49-ai.herokuapp.com/"
//             />
//           </Col>

//           {/* <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="Ai For Social Good"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
//               // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="Face Recognition and Emotion Detection"
//               description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
//               Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
//               ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
//               // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
//             />
//           </Col> */}
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Galeria;
