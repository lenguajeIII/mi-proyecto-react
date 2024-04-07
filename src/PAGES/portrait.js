
import React, { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import "../style.css";




import retrato1 from "../MEDIA/images/retrato2.jpg";
import retrato2 from "../MEDIA/images/retrato3.jpg";
import retrato3 from "../MEDIA/images/retrato1.jpg";
import retrato4 from "../MEDIA/images/retrato5.jpeg";
import retrato5 from "../MEDIA/images/retrato6.jpg";
import retrato6 from "../MEDIA/images/retrato7.jpg";
import retrato7 from "../MEDIA/images/retrato8.jpg";
import retrato8 from "../MEDIA/images/retrato4.jpg";
import retrato9 from "../MEDIA/images/retrato9.jpg";
import retrato10 from "../MEDIA/images/retrato10.jpeg";
import retrato11 from "../MEDIA/images/retrato11.jpg";
import retrato12 from "../MEDIA/images/retrato12.jpg";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon ,
  WhatsappIcon
} from "react-share";


  // Get the URL of the current page dynamically
const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  // Get the Title of the current page dynamically
const title = typeof document !== 'undefined' ? document.title : 'Check out this awesome content!';


const mockProducts = [
  
  { id: 1 ,title: "MODA" , category: "Categoría A", imageUrl: retrato1},
  { id: 2, title: "CIELO", category: "Categoría B", imageUrl: retrato2 },
  { id: 3, title: "MODELAJE", category: "Categoría A", imageUrl:retrato3 },
  { id: 4, title: "TENDENCIA", category: "Categoría B", imageUrl: retrato4 },
  { id: 5, title: "ARTE", category: "Categoría A", imageUrl:retrato5 },
  { id: 6, title: "ABSTRACTO", category: "Categoría B", imageUrl: retrato6 },
  { id: 7, title: "VIAJERO", category: "Categoría A", imageUrl:retrato7 },
  { id: 8, title: "CABELLO", category: "Categoría B", imageUrl: retrato8 },
  { id: 9, title: "ARBOLES", category: "Categoría A", imageUrl:retrato9 },
  { id: 10, title: "ROSTROS", category: "Categoría B", imageUrl: retrato10 },
  { id: 11, title: "VER", category: "Categoría A", imageUrl:retrato11 },
  { id: 12, title: "VISTA", category: "Categoría B", imageUrl: retrato12 },

];

function Portrait() {
  const [products] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
    
  );

  return (
    <Container>
     
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <h4 className="product-gallery-header">GALERÍA DE RETRATOS PROFESIONALES</h4>
     
      <InputGroup className="mb-3 search-bar-container">
        <FormControl
          placeholder="Buscar retratos..."
          onChange={handleSearchChange}
        />
       
      </InputGroup>
     
      <Row>
  {filteredProducts.map(product => (
    <Col key={product.id} xs={12} md={4} lg={3} className="mb-4">
      <div className="product-item">
        {/* Asegúrate de que product.imageUrl apunte a la URL correcta */}
        <img src={product.imageUrl} alt={product.title} className="img-fluid" />
        <h4>{product.title}</h4>
        <h6>{product.category}</h6>

        <div className="App">
      <div className="main">
        <h6>¡Comparte en tus redes sociales!</h6>
      </div>
      <div className="share-buttons">
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon round  />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon round />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon round/>
        </WhatsappShareButton>
      </div>
    </div>

      </div>
     
    </Col>
  ))}
</Row>
 
    </Container>
  );
}



export default Portrait;


