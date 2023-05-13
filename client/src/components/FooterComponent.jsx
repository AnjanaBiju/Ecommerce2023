import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const FooterComponent = () => {
  return (
    <footer style={{position:'relative'}}> {/* remove inline style and add "footer" class */}
      <Container fluid>
        <Row>
          <Col className="bg-dark text-white text-center py-5">
            &copy; Best Online Shop {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
