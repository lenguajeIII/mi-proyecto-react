//Librerías
import React, { useEffect, useState } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {AiFillInstagram, AiOutlineWhatsApp, AiFillTwitterCircle} from "react-icons/ai";
import StarRatingComponent from 'react-star-rating-component';

//Imagenes
import retrato1 from "../MEDIA/images/Portrait/retrato2.jpg";
import retrato2 from "../MEDIA/images/Portrait/retrato3.jpg";
import retrato3 from "../MEDIA/images/Portrait/retrato1.jpg";
import retrato4 from "../MEDIA/images/Portrait/retrato5.jpg";
import retrato5 from "../MEDIA/images/Portrait/retrato6.jpg";
import retrato6 from "../MEDIA/images/Portrait/retrato7.jpg";
import retrato7 from "../MEDIA/images/Portrait/retrato8.jpg";
import retrato8 from "../MEDIA/images/Portrait/retrato4.jpg";
import retrato9 from "../MEDIA/images/Portrait/retrato9.jpg";
import retrato10 from "../MEDIA/images/Portrait/retrato10.jpg";
import retrato11 from "../MEDIA/images/Portrait/retrato11.jpg";
import retrato12 from "../MEDIA/images/Portrait/retrato12.jpg";

// Get the URL of the current page dynamically
const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
// Get the Title of the current page dynamically
const title = typeof document !== 'undefined' ? document.title : 'Check out this awesome content!';

const mockProducts = [
  { id: 1 ,title: "RFRESCANTE" , category: "Categoría A", imageUrl: retrato1,rating: 0, date: new Date("01/03/2024").toLocaleDateString()},
  { id: 2, title: "VINTAGE", category: "Categoría B", imageUrl: retrato2,rating: 0, date: new Date("01/03/2024").toLocaleDateString()},
  { id: 3, title: "MODELAJE", category: "Categoría C", imageUrl:retrato3,rating: 0, date: new Date("06/03/2024").toLocaleDateString()},
  { id: 4, title: "EN EL ESPEJO", category: "Categoría B", imageUrl: retrato4,rating: 0, date: new Date("07/06/2023").toLocaleDateString()},
  { id: 5, title: "SELFIE", category: "Categoría A", imageUrl:retrato5,rating: 0, date: new Date("05/03/2024").toLocaleDateString()},
  { id: 6, title: "NATURALEZA", category: "Categoría B", imageUrl: retrato6,rating: 0, date: new Date("05/03/2024").toLocaleDateString()},
  { id: 7, title: "CON MAMÁ", category: "Categoría A", imageUrl:retrato7,rating: 0, date: new Date("05/03/2024").toLocaleDateString()},
  { id: 8, title: "PLAYA", category: "Categoría B", imageUrl: retrato8,rating: 0, date: new Date("11/08/2023").toLocaleDateString()},
  { id: 9, title: "RUBIA", category: "Categoría A", imageUrl:retrato9,rating: 0, date: new Date("11/08/2023").toLocaleDateString()},
  { id: 10, title: "BARBA", category: "Categoría C", imageUrl: retrato10,rating: 0, date: new Date("11/07/2023").toLocaleDateString()},
  { id: 11, title: "A LA NADA", category: "Categoría A", imageUrl:retrato11,rating: 0, date: new Date("08/08/2023").toLocaleDateString()},
  { id: 12, title: "ELEGANTE", category: "Categoría B", imageUrl: retrato12,rating: 0, date: new Date("09/02/2024").toLocaleDateString()},
];

function Portrait() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [products, setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStar, setSelectedStar] = useState('');
  const [showDetails, setShowDetails] = useState(Array(mockProducts.length).fill(false));

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
      <h4 className="product-gallery-header">GALERÍA DE RETRATOS PROFESIONALES</h4>

      <InputGroup className="mb-3 search-bar-container">
        <FormControl
          placeholder="Buscar retratos..."
          onChange={handleSearchChange}
        />
        <FormControl as="select" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">Todas las Categorías</option>
          <option value="Categoría A">Categoría A</option>
          <option value="Categoría B">Categoría B</option>
          <option value="Categoría C">Categoría C</option>
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
              <img src={product.imageUrl} alt={product.title} className="img-fluid"/>
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

export default Portrait;
