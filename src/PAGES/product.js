import React, { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import Particle from "../components/Particle";

import StarRatingComponent from 'react-star-rating-component';

// ... Tus importaciones de imágenes ...
import Samsung from "../MEDIA/images/Productos/televisores/samsung65.avif";
import LG from "../MEDIA/images/Productos/televisores/lg.avif";
import Tekno from "../MEDIA/images/Productos/televisores/tekno.webp";
import Jvc from "../MEDIA/images/Productos/televisores/jvc.webp";
import s23 from "../MEDIA/images/Productos/celulares/s23.jpeg";
import S22 from "../MEDIA/images/Productos/celulares/s22.jpeg";
import Vasos from "../MEDIA/images/Productos/celulares/vasos.jpeg";
const mockProducts = [
  
  { id: 1 ,title: "Televisores Samsung" , category: "Categoría A", imageUrl: Samsung,rating: 0 },
  { id: 2, title: "Televisores LG", category: "Categoría A", imageUrl: LG,rating: 0  },
  { id: 3, title: "Televisores JVC", category: "Categoría A", imageUrl: Jvc ,rating: 0 },
  { id: 4, title: "TTelevisores Tekno", category: "Categoría A", imageUrl: Tekno,rating: 0  },
  // celulares
  { id: 1 ,title: "Celular Samsung S23" , category: "Categoría B", imageUrl: s23,rating: 0 },
  { id: 2, title: "Celular Samsung S22", category: "Categoría B", imageUrl: S22,rating: 0 },
  { id: 3, title: "Celular Samsung S21", category: "Categoría B", imageUrl:s23,rating: 0  },
  { id: 4, title: "Celular Samsung S20", category: "Categoría B", imageUrl: S22,rating: 0  },
  // vidreria
  { id: 1 ,title: "Vasos" , category: "Categoría C", imageUrl: Vasos,rating: 0 },

 
];




function Product() {
  const [products,setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    // Actualizar el estado con la categoría seleccionada
    setSelectedCategory(event.target.value);
  };

  // starRating

  const onStarClick = (nextValue, prevValue, productId) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, rating: nextValue };
      }
      return product;
    });
    setProducts(updatedProducts);
  };


  // Filtrar productos por término de búsqueda y categoría seleccionada
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory ? product.category === selectedCategory : true)
  );

  return (
    <Container>
      <Particle />
      <hr></hr>
      <hr></hr>
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
          <option value="Categoría C">Vasos</option>
        </FormControl>
        <Button variant="outline-secondary">Buscar</Button>
      </InputGroup>
      <Row>
        {filteredProducts.map(product => (
          <Col key={product.id} xs={12} md={4} lg={3} className="mb-4">
            <div className="product-item">
              <img src={product.imageUrl} alt={product.title} className="img-fluid" />
              <h5>{product.title}</h5>
              <StarRatingComponent 
                name="product-rating" 
                starCount={5}
                value={product.rating}
                onStarClick={(nextValue, prevValue) => onStarClick(nextValue, prevValue, product.id)}
              />
            </div>
          </Col>
        ))}


      </Row>
    </Container>
  );
}

export default Product;