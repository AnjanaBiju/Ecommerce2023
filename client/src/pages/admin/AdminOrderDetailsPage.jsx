import React from 'react'
import { Col, Container, Form, ListGroup, Row ,Button, Alert} from 'react-bootstrap'
import CartItemComponent from '../../components/CartItemComponent'

const AdminOrderDetailsPage = () => {
  return (
    <Container fluid>
        <Row className='mt-4'>
            <h1>Order Details</h1>
            <Col md={8}>
                <br/>
                <Row>
                    <Col md={4}>
                    <h2>Shipping</h2>
                    <b>Name</b>: User Name<br/>
                    <b>Adress</b>: Address Of User<br/>
                    <b>Phone</b>:456789

                    </Col>
                    <Col md={6}>
                    <h2>Payment Method</h2>
                    <Form.Select disabled={'flase'}>
                        <option value='pp'>
                            Paypal
                        </option>
                        <option value='pp'>
                            Cash On Delivery
                        </option>
                    </Form.Select>
                    </Col>
                    <Row>
                        <Col>
                            <Alert className='mt-3' variant='danger'>Not Delivered</Alert>
                        </Col>
                        <Col>
                            <Alert className='mt-3' variant='success'>Paid On 2023-03-01</Alert>
                        </Col>
                    </Row>
                </Row>
                <br/>
                <h2>Order Items</h2>
                <ListGroup variant='flush'>
                    {Array.from({ length:3 }).map((item,idx)=>(
                        <CartItemComponent key={idx}/>
                    ))}
                  
                </ListGroup>            
            </Col>
            <Col md={4}>
               <ListGroup>
                <ListGroup.Item>
                <h3>Order Summary</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                Item Prize
                </ListGroup.Item>
                <ListGroup.Item>
                Shipping  : <span className='fw-bold'>Included</span>
                </ListGroup.Item>
                <ListGroup.Item>
                Tax  : <span className='fw-bold'>Included</span>
                </ListGroup.Item>
                <ListGroup.Item className='text-danger'>
                Total Prize  : <span className='fw-bold'>$94</span>
                </ListGroup.Item>
                <ListGroup.Item >
                      <div className='d-grid'>
                      <Button size='lg' variant='danger' type='button'>
                            Mark as delivered
                        </Button>
                      </div>
                </ListGroup.Item>
               </ListGroup>
            </Col>
        </Row>
    </Container>
  )
}

export default AdminOrderDetailsPage
