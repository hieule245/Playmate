import React, { useState } from 'react';
import background_2 from '../../assets/2x/backgroud-blur-2.jpg'
import product from '../../assets/2x/product_thorog.png'
import product_1 from '../../assets/2x/Rectangle 2085.png'
import product_2 from '../../assets/2x/Rectangle 2086.png'
import product_3 from '../../assets/2x/Rectangle 2088.png'
import type_purple from '../../assets/2x/purple_product.png'

import Header from '../../../src/components/User/Header';
import { Button, Card, Carousel, Col, Container, Modal, Row } from 'react-bootstrap';
import Footer from '../../components/User/Footer'
import BackToTopButton from '../../components/User/BackToTop';
import BreadcrumbComponent from '../../components/User/BreadcrumbComponent';

function Cart() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    return (
        <div className="App" style={{ background: 'linear-gradient(135deg, #3574B9 0%, #F7AD7E 50%, #76C26E 100%)', height: '100%' }}>
            <Container fluid className='p-3' >
                <div className='rounded-3' style={{ background: 'rgba(0, 0, 0, 0.4)' }}>
                    {/* Header */}
                    <Card className='position-sticky top-0 z-3 rounded-3' >
                        <Header />
                    </Card>

                    {/* Content-header */}
                    <div className="sticky-top z-1 text-light">
                        <BreadcrumbComponent
                            backgroundImage={background_2}
                            title="Thorog Token"
                            breadcrumbLabels={['Home', 'Store', 'Token Collection', 'Thorog Token']}
                        />

                        {/* Content-body */}
                        <Container>
                            <Row>
                                <Col xs={4} className='d-flex flex-column align-items-center'>
                                    <Carousel className='z-0' slide={false}>
                                        <Carousel.Item>
                                            <img className='p-1 w-100 h-100'
                                                src={product}
                                                alt="Playmates Pics"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className='p-1 w-100 h-100'
                                                src={product_1}
                                                alt="Playmates Pics"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className='p-1 w-100 h-100'
                                                src={product_2}
                                                alt="Playmates Pics"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className='p-1 w-100 h-100'
                                                src={product_3}
                                                alt="Playmates Pics"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                    <Row className='w-100'>
                                        <Col xs={3} className='p-0'>
                                            <img className='p-1 w-100 h-100'
                                                src={product}
                                                alt="Playmates Pics"
                                            />
                                        </Col>
                                        <Col xs={3} className='p-0'>
                                            <img className='p-1 w-100 h-100'
                                                src={product_1}
                                                alt="Playmates Pics"
                                            />
                                        </Col>
                                        <Col xs={3} className='p-0'>
                                            <img className='p-1 w-100 h-100'
                                                src={product_2}
                                                alt="Playmates Pics"
                                            />
                                        </Col>
                                        <Col xs={3} className='p-0'>
                                            <img className='p-1 w-100 h-100'
                                                src={product_3}
                                                alt="Playmates Pics"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={8}>
                                    <div className='d-flex align-items-center'>
                                        <p className='m-0'><span className='p-1 pe-2 ps-2 small best-seller me-2'>Best Seller</span></p>
                                        <h3 className='fw-bolder m-0'>Throgo Token</h3>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <div className='text-warning d-flex align-items-center'>
                                            <p className='text-decoration-underline m-0 me-2'>2.5</p>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star-half-alt"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <p className='text-light opacity-50 m-0 me-3 ms-3'>|</p>
                                        <div className='text-light d-flex align-items-center'>
                                            <p className='text-decoration-underline m-0 me-2'>1.5K</p>
                                            <p className='m-0'>Ratings</p>
                                        </div>
                                        <p className='text-light opacity-50 m-0 me-3 ms-3'>|</p>
                                        <div className='text-light d-flex align-items-center'>
                                            <p className='text-decoration-underline m-0 me-2'>#9</p>
                                            <p className='m-0'>Best-selling</p>
                                        </div>
                                    </div>
                                    <Row className='mt-2'>
                                        <Col xs={1}>
                                            <p className='small d-flex align-items-center text-decoration-line-through text-light'>60.000<sup>&#8363;</sup></p>
                                        </Col>
                                        <Col xs={11}>
                                            <h3 className='d-flex fw-bolder align-items-center'>50.000<sup>&#8363;</sup></h3>
                                        </Col>
                                        <Col xs={1}>
                                            <p className='small d-flex text-light'>Return</p>
                                        </Col>
                                        <Col xs={11}>
                                            <h5 className='d-flex fw-bolder align-items-center'><i class="fas fa-hand-holding-usd small me-2"></i>2 Days Return</h5>
                                        </Col>
                                        <Col xs={1}>
                                            <p className='small d-flex text-light'>Shipping</p>
                                        </Col>
                                        <Col xs={11}>
                                            <div className='d-flex'>
                                                <h5 className='d-flex fw-lighter align-items-center'><span className='fw-bolder'><i class="fas fas fa-truck small me-2 "></i></span>Shipping To</h5>
                                                <button onClick={handleShow} className='text-light btn-outline-info' style={{ background: 'rgba(0,0,0,0)', border: '0px' }}>
                                                    <h5 className='d-flex fw-bolder align-items-center ms-2'>Your address <i class="far fa-edit ms-2"></i></h5>
                                                </button>

                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Modal heading</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={handleClose}>
                                                            Save Changes
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </div>
                                            <div className='d-flex'>
                                                <h5 className='d-flex fw-lighter align-items-center'><span className='fw-bolder'><i class="fas fas fa-truck small me-2 "></i></span>Shipping Fee</h5>
                                                <h5 className='d-flex fw-bolder align-items-center ms-2'>0<sup>&#8363;</sup></h5>
                                            </div>
                                        </Col>
                                        <Col xs={1}>
                                            <p className='small d-flex text-light'>Color</p>
                                        </Col>
                                        <Col xs={11} className='mb-2'>
                                            <Row className='justify-content-between'>
                                                <Col xs={3} className='mt-2'>
                                                    <button className='w-100 btn-outline-unique d-flex align-items-center'>
                                                        <img className='p-1 w-100'
                                                            src={product}
                                                            height={54}
                                                            alt="Playmates Pics"
                                                        />
                                                        <h4 className='text-unique m-0'>Painting</h4>
                                                    </button>
                                                </Col>
                                                <Col xs={3} className='mt-2'>
                                                    <button className='w-100 btn-outline-purple d-flex align-items-center'>
                                                        <img className='p-1'
                                                            src={type_purple}
                                                            height={54}
                                                            alt="Playmates Pics"
                                                        />
                                                        <h4 className='m-0'>Purple</h4>
                                                    </button>
                                                </Col>
                                                <Col xs={3} className='mt-2'>
                                                    <button className='w-100 btn-outline-turquoise d-flex align-items-center'>
                                                        <img className='p-1 w-100'
                                                            src={product_2}
                                                            height={54}
                                                            alt="Playmates Pics"
                                                        />
                                                        <h4 className='text-unique text-turquoise m-0'>Painting</h4>
                                                    </button>
                                                </Col>
                                                <Col xs={3} className='mt-2'>
                                                    <button className='w-100 btn-outline-unique d-flex align-items-center'>
                                                        <img className='p-1 w-100'
                                                            src={product}
                                                            height={54}
                                                            alt="Playmates Pics"
                                                        />
                                                        <h4 className='text-unique m-0'>Painting</h4>
                                                    </button>
                                                </Col>
                                                <Col xs={3} className='mt-2'>
                                                    <button className='w-100 btn-outline-unique d-flex align-items-center'>
                                                        <img className='p-1 w-100'
                                                            src={product}
                                                            height={54}
                                                            alt="Playmates Pics"
                                                        />
                                                        <h4 className='text-unique m-0'>Painting</h4>
                                                    </button>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={1}>
                                            <p className='small d-flex text-light'>Quantity</p>
                                        </Col>
                                        <Col xs={11} className='mb-2'>
                                            <div className="d-flex quantity-input">
                                                <button onClick={handleDecrease} className="quantity-btn rounded-start-2">-</button>
                                                <input type="text" value={quantity} readOnly />
                                                <button onClick={handleIncrease} className="quantity-btn rounded-end-2">+</button>
                                            </div>
                                            <p className='small d-flex text-light opacity-50'>687 tokens available</p>
                                        </Col>
                                        <Col xs={3}>
                                        <button className='pt-2 pb-2 w-100 fw-bolder btn-outline-unique text-unique rounded-2 '><i class="fas fa-cart-plus me-2 "></i>Add To Cart</button>
                                        </Col>
                                        <Col xs={3}>
                                        <button className='rounded-2 border-0 pt-2 pb-2 w-100 fw-bolder btn-unique text-light'><i class="fas fa-shopping-basket me-2"></i>Buy Now</button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>

                        {/* Footer */}
                        <div className='mt-3 z-1' >
                            <Footer />
                        </div>
                    </div>
                </div>
            </Container>
            <BackToTopButton />
        </div>
    );
}

export default Cart;
