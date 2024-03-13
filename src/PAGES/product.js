import React, { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import Particle from "../components/Particle";
import Tecnologia from "../MEDIA/images/Productos/Producto2.jpg";
import Hogar from "../MEDIA/images/Productos/Producto1.jpg";


const mockProducts = [
  
  { id: 1 ,title: "Televisores y entretenimiento" , category: "Categoría A", imageUrl: Tecnologia},
  { id: 2, title: "Computadoras y tablet", category: "Categoría B", imageUrl: Hogar },
  { id: 3, title: "Celulares y accesorios", category: "Categoría A", imageUrl:Tecnologia },
  { id: 4, title: "Linea blanca", category: "Categoría B", imageUrl: Hogar },
  { id: 5, title: "Electrodomesticos", category: "Categoría A", imageUrl:Tecnologia },
  { id: 6, title: "Audio", category: "Categoría B", imageUrl: Hogar },
  { id: 7, title: "Audifonos", category: "Categoría A", imageUrl:Tecnologia },
  { id: 8, title: "Gamin", category: "Categoría B", imageUrl: Hogar },
  { id: 9, title: "Electrodomesticos", category: "Categoría A", imageUrl:Tecnologia },
  { id: 10, title: "Audio", category: "Categoría B", imageUrl: Hogar },
  { id: 11, title: "Audifonos", category: "Categoría A", imageUrl:Tecnologia },
  { id: 12, title: "Gamin", category: "Categoría B", imageUrl: Hogar },

];

function Product() {
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
      <Particle />
      <h1 className="product-gallery-header">GALERÍA DE PRODUCTOS</h1>
      <InputGroup className="mb-3 search-bar-container">
        <FormControl
          placeholder="Buscar productos..."
          onChange={handleSearchChange}
        />
        <Button variant="outline-secondary">Buscar</Button>
      </InputGroup>
      <Row>
  {filteredProducts.map(product => (
    <Col key={product.id} xs={12} md={4} lg={3} className="mb-4">
      <div className="product-item">
        {/* Asegúrate de que product.imageUrl apunte a la URL correcta */}
        <img src={product.imageUrl} alt={product.title} className="img-fluid" />
        <h5>{product.title}</h5>
      </div>
    </Col>
  ))}
</Row>

    </Container>
  );
}

export default Product;


