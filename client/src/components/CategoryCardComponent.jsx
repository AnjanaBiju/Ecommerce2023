import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryCardComponent = ({category,idx}) => {
    const images = [
        "./assets/Category/1cat.jpg",
        "./assets/Category/1cat.jpg",
        "./assets/Category/1cat.jpg",
        "./assets/Category/1cat.jpg",
        "./assets/Category/1cat.jpg",
        "./assets/Category/1cat.jpg",
        "./assets/Category/1cat.jpg",
        "./assets/Category/1cat.jpg",
        "./assets/Category/1cat.jpg",
        
      ];
      return (
        <Card>
          <Card.Img crossorigin="" variant="top" src={images[idx]} />
          <Card.Body>
            <Card.Title>{category}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <LinkContainer to="/product-list">
              <Button variant="primary">Go to the Category</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      );
    
}

export default CategoryCardComponent
