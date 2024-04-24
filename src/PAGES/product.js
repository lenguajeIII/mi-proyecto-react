//Librerías
import React, { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {AiFillInstagram, AiOutlineWhatsApp, AiFillTwitterCircle} from "react-icons/ai";
import StarRatingComponent from 'react-star-rating-component';

import vtchileno from"../MEDIA/images/Productos/vasos/vasotqchile.jpeg";
import ttcopa from"../MEDIA/images/Productos/vasos/ttcopa.jpeg";
import pdecorativa from"../MEDIA/images/Productos/decoracion/plantadcorativa.jpeg";
import snavidad from"../MEDIA/images/Productos/servilletero/snavidad.jpeg";
import shome from"../MEDIA/images/Productos/servilletero/shome.jpeg";
import airpords from"../MEDIA/images/Productos/tecnologia/aipords.jpeg";
import paga from"../MEDIA/images/Productos/perfumes/paga.jpeg";
import aco from "../MEDIA/images/Productos/aretes/aritcasaoro.jpeg";

// Get the URL of the current page dynamically
const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
// Get the Title of the current page dynamically
const title = typeof document !== 'undefined' ? document.title : 'Check out this awesome content!';

const mockProducts = [
  { id: 3,title: "Vasos Tequileros Chile", category: "Categoría A", imageUrl: vtchileno,rating: 0, date: new Date("01/01/2024").toLocaleDateString()},
  { id: 4,title: "Vasos Tequileros tipo copa", category: "Categoría A", imageUrl: ttcopa,rating: 0,date: new Date("01/02/2024").toLocaleDateString()},
  { id: 5,title: "Planta decorativa", category: "Categoría B", imageUrl: pdecorativa,rating: 0,date: new Date("01/03/2024").toLocaleDateString()}, 
  { id: 6,title: "Servilletero de Navidad", category: "Categoría C", imageUrl: snavidad,rating: 0,date: new Date("01/04/2024").toLocaleDateString()},
  { id: 7,title: "Servilletero Home", category: "Categoría C", imageUrl: shome,rating: 0,date: new Date("01/05/2024").toLocaleDateString()}, 
  { id: 8,title: "Apple Airpords", category: "Categoría D", imageUrl: airpords,rating: 0,date: new Date("01/06/2024").toLocaleDateString()}, 
  { id: 9,title: "Perfume Agua Gio Armany", category: "Categoría E", imageUrl: paga,rating: 0,date: new Date("01/07/2024").toLocaleDateString()},
  { id: 10,title: "Aretes casa de oro", category: "Categoría F", imageUrl: aco,rating: 0,date: new Date("01/08/2024").toLocaleDateString()},
 
];

function Product() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [products, setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStar, setSelectedStar] = useState('');
  const [showDetails, setShowDetails] = useState(Array(mockProducts.length).fill(false));

  //Expansion de imagenes
const [expandedImg, setExpandedImg] = useState(null); // Estado para controlar la imagen expandida

//Manejador para la expansión de la imagen
const handleImageClick = (id) => {
  setExpandedImg(expandedImg === id ? null : id);
};

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleStarChange = (event) => {
    setSelectedStar(event.target.value);
  };

  const onStarClick = (nextValue, _, productId) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, rating: nextValue };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleReset = () => {
    setSelectedDate(null);
    setSelectedCategory('');
    setSelectedStar('');
    setSearchTerm('');
  };

  const handleShowDetails = (productId) => {
    const updatedShowDetails = [...showDetails];
    updatedShowDetails[productId - 1] = !updatedShowDetails[productId - 1];
    setShowDetails(updatedShowDetails);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory ? product.category === selectedCategory : true) &&
    (selectedStar ? product.rating === parseInt(selectedStar) : true) &&
    (selectedDate ? new Date(product.date).toDateString() === selectedDate.toDateString() : true)
  );

  return (
    <Container>
      <hr />
      <hr />
      <hr />
      <h4 className="product-gallery-header">GALERÍA DE PRODUCTOS</h4>

      <InputGroup className="mb-3 search-bar-container">
        <FormControl
          placeholder="Buscar productos..."
          onChange={handleSearchChange}
        />
        <FormControl as="select" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">Todas las Categorías</option>
          <option value="Categoría A"> A-Vasos Tequileros</option>
          <option value="Categoría B"> B-Decoracion</option>
          <option value="Categoría C"> C-Servilletero</option>
          <option value="Categoría D"> D-Tecnologia</option>
          <option value="Categoría E"> E-Perfume</option>
          <option value="Categoría F"> F-Aretes</option>
        </FormControl>

        <FormControl as="select" onChange={handleStarChange} value={selectedStar}>
          <option value="">Todas las calificaciones</option>
          <option value="5">5 Estrellas</option>
          <option value="4">4 Estrellas</option>
          <option value="3">3 Estrellas</option>
          <option value="2">2 Estrellas</option>
          <option value="1">1 Estrella</option>
        </FormControl>
      </InputGroup>

      <InputGroup>
        <Row className="align-items-center">
          <Col xs={12} sm={6} md={6} lg={6}>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Seleccionar fecha"
              className="form-control"
            />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} className="mt-3 mt-sm-0 mt-md-0 mt-lg-0">
            <Button variant="primary" onClick={handleReset} block>
              Restablecer búsqueda
            </Button>
          </Col>
        </Row>
      </InputGroup>

      <Row>
        {filteredProducts.map(product => (
          <Col key={product.id} xs={12} md={4} lg={3} className="mb-4">
            <div className="product-item">
               {/* Imagen clickeable */}
        
               <img 
                src={product.imageUrl} 
                alt={product.title} 
                className={`img-fluid ${expandedImg === product.id ? 'expanded' : ''}`} 
                onClick={() => handleImageClick(product.id)}
              />
             
              <h4>{product.title}</h4>
              {showDetails[product.id - 1] && (
                <>
                  <h6>{product.category}</h6>
                  <h6>{new Date(product.date).toLocaleDateString()}</h6>
                  {/* Otros detalles del producto */}
                </>
              )}
              <Button variant="primary" onClick={() => handleShowDetails(product.id)}>
                {showDetails[product.id - 1] ? 'Mostrar menos' : 'Mostrar más'}
              </Button>
              {/* Compartir en redes sociales */}
              <div className="footer-body">
                <h6>¡Comparte en tus redes sociales!</h6>
                <a href="https://www.instagram.com/delcidaziel/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram />
                </a>
                <a href="https://wa.me/50433979041" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                  <AiOutlineWhatsApp />
                </a>
                <a href="https://twitter.com/home?lang=es" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                  <AiFillTwitterCircle />
                </a>
              </div>
              <StarRatingComponent 
                name="product-rating" 
                starCount={5}
                value={product.rating}
                onStarClick={(nextValue, _) => onStarClick(nextValue, _, product.id)}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;