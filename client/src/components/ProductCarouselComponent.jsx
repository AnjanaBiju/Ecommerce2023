import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';
const ProductCarouselComponent = () => {
    const cursorP = {
        cursor : "pointer"
    }
  return (

    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin='anonymous'
          className="d-block w-100"
          src="./assets/saleoffer2.png"
          style={{height:'500px', objectFit:"cover"}}
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Festive</h3>
          </LinkContainer>
          <p>Festive western wear</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'500px',objectFit:"cover"}}
          src="./assets/saleoffer8.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Festive</h3>
          </LinkContainer>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/saleoffer10.jpg"
          style={{height:'500px',objectFit:"cover"}}
          alt="Third slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Festive</h3>
          </LinkContainer>
          
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarouselComponent
