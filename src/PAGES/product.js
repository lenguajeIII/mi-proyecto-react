import React, { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import Particle from "../components/Particle";

// ... Tus importaciones de imágenes ...
import Samsung from "../MEDIA/images/Productos/televisores/samsung65.avif";
import LG from "../MEDIA/images/Productos/televisores/lg.avif";
import Tekno from "../MEDIA/images/Productos/televisores/tekno.webp";
import Jvc from "../MEDIA/images/Productos/televisores/jvc.webp";
import Hogar from "../MEDIA/images/Productos/Producto1.jpg";
import Tecnologia from "../MEDIA/images/Productos/Producto2.jpg";

const mockProducts = [
  
  { id: 1 ,title: "Televisor Samsung" , category: "Categoría A", imageUrl: Samsung},
  { id: 2, title: "Televisor LG", category: "Categoría A", imageUrl: LG },
  { id: 3, title: "Televisor JVC", category: "Categoría A", imageUrl: Jvc },
  { id: 4, title: "Televisor Tekno", category: "Categoría A", imageUrl: Tekno },
  { id: 5 ,title: "Televisor Samsung" , category: "Categoría A", imageUrl:Samsung },
  { id: 6, title: "Televisor LG", category: "Categoría A", imageUrl:LG },
  { id: 7,title: "Televisor JVC", category: "Categoría A", imageUrl:Jvc },
  { id: 8, title: "Televisor Tekno", category: "Categoría A", imageUrl:Tekno},
  // celulares
  { id: 1 ,title: "Celular Samsung S23" , category: "Categoría B", imageUrl: Tecnologia},
  { id: 2, title: "Celular Samsung S22", category: "Categoría B", imageUrl: Hogar },
  { id: 3, title: "Celular Samsung S21", category: "Categoría B", imageUrl:Tecnologia },
  { id: 4, title: "Celular Samsung S20", category: "Categoría B", imageUrl: Hogar },
  { id: 5 ,title: "Celular Samsung S19" , category: "Categoría B", imageUrl: Tecnologia},
  { id: 6, title: "Celular Iphone X", category: "Categoría B", imageUrl: Hogar },
  { id: 7,title: "Celular Iphone 11", category: "Categoría B", imageUrl:Tecnologia },
  { id: 8, title: "Celular Iphone 12", category: "Categoría B", imageUrl: Hogar },
];

function Product() {
  const [products] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    // Actualizar el estado con la categoría seleccionada
    setSelectedCategory(event.target.value);
  };

  // Filtrar productos por término de búsqueda y categoría seleccionada
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory ? product.category === selectedCategory : true)
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
        <FormControl as="select" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">Todas las Categorías</option>
          <option value="Categoría A">Televisores</option>
          <option value="Categoría B">Celulares</option>
          <option value="Categoría C">Categoría C</option>
        </FormControl>
        <Button variant="outline-secondary">Buscar</Button>
      </InputGroup>
      <Row>
        {filteredProducts.map(product => (
          <Col key={product.id} xs={12} md={4} lg={3} className="mb-4">
            <div className="product-item">
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