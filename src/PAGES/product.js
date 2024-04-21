import React, { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import Particle from "../components/Particle";

import StarRatingComponent from 'react-star-rating-component';

// ... Tus importaciones de imágenes ...
import vtchileno from"../MEDIA/images/Productos/vasos/vasotqchile.jpeg";
import ttcopa from"../MEDIA/images/Productos/vasos/ttcopa.jpeg";
import pdecorativa from"../MEDIA/images/Productos/decoracion/plantadcorativa.jpeg";
import snavidad from"../MEDIA/images/Productos/servilletero/snavidad.jpeg";
import shome from"../MEDIA/images/Productos/servilletero/shome.jpeg";
import airpords from"../MEDIA/images/Productos/tecnologia/aipords.jpeg";
import paga from"../MEDIA/images/Productos/perfumes/paga.jpeg";
import aco from "../MEDIA/images/Productos/aretes/aritcasaoro.jpeg";

const mockProducts = [
  
  { id: 3,title: "Vasos Tequileros Chile", category: "Categoría A", imageUrl: vtchileno,rating: 0 },
  { id: 4,title: "Vasos Tequileros tipo copa", category: "Categoría A", imageUrl: ttcopa,rating: 0 },
  { id: 5,title: "Planta decorativa", category: "Categoría B", imageUrl: pdecorativa,rating: 0 },
  { id: 6,title: "Servilletero de Navidad", category: "Categoría C", imageUrl: snavidad,rating: 0 },
  { id: 7,title: "Servilletero Home", category: "Categoría C", imageUrl: shome,rating: 0 },
  { id: 8,title: "Apple Airpords", category: "Categoría D", imageUrl: airpords,rating: 0 },
  { id: 9,title: "Perfume Agua Gio Armany", category: "Categoría E", imageUrl: paga,rating: 0 },
  { id: 10,title: "Aretes casa de oro", category: "Categoría E", imageUrl: aco,rating: 0 },
  // celulares

  


 
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
          <option value="Categoría A">Vasos Tequileros</option>
          <option value="Categoría B">Decoracion</option>
          <option value="Categoría C">Servilletero</option>
          <option value="Categoría D">Tecnologia</option>
          <option value="Categoría E">Perfume</option>
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