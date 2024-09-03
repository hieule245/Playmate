import React, { useState } from 'react';
import background_2 from '../../assets/2x/backgroud-blur-2.jpg'

import Header from '../../../src/components/User/Header';
import { Button, Card, CardText, CardTitle, Col, Container, Dropdown, Form, FormCheck, FormControl, FormLabel, InputGroup, Offcanvas, Row } from 'react-bootstrap';
import Footer from '../../components/User/Footer'
import BackToTopButton from '../../components/User/BackToTop';
import BreadcrumbComponent from '../../components/User/BreadcrumbComponent';
import products from '../../assets/2x/product_thorog.png'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import CustomPagination from '../../components/User/PaginationComponent';

function Cart() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('most popular');
    const [currentProductPage, setCurrentProductPage] = useState(1);
    const [currentVoucherPage, setCurrentVoucherPage] = useState(1); // State for current page
    const itemsPerPage = 5; // Items per page
    const voucherPerPage = 3; // Voucher per page

    const handleSearch = () => {
        // Gửi searchTerm và filter đến backend
        console.log('Searching for:', searchTerm, 'with filter:', filter);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productsData = [1, 2, 3, 4, 5, 6, 7]; // Array representing your product items
    const voucherData = [1, 2, 3, 4, 5, 6, 7];
    const totalItems = productsData.length; // Total number of products
    const totalVouchers = voucherData.length;

    // Calculate products to display based on current page
    const displayedProducts = productsData.slice((currentProductPage - 1) * itemsPerPage, currentProductPage * itemsPerPage);
    const displayedVouchers = productsData.slice((currentVoucherPage - 1) * voucherPerPage, currentVoucherPage * voucherPerPage);

    const handleProductPageChange = (page) => {
        setCurrentProductPage(page);
    };

    const handleVoucherPageChange = (page) => {
        setCurrentVoucherPage(page);
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
                            title="Cart"
                            breadcrumbLabels={['Home', 'Cart']}
                        />

                        {/* Content-body */}
                        <Container>
                            {/* Filter */}
                            <Row>
                                <Col xs={10}>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <i className='icon-user' class="fas fa-search"></i>
                                        </InputGroup.Text>
                                        <FormControl
                                            placeholder="Search name token..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                        <Button variant="primary" onClick={handleSearch}>
                                            Search
                                        </Button>
                                    </InputGroup>
                                </Col>
                                <Col xs={2}>
                                    <Dropdown>
                                        <Dropdown.Toggle className='rounded-2' variant="outline-light" style={{ width: '139px' }}>
                                            {filter}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => setFilter('Most popular')}>Most Popular</Dropdown.Item>
                                            <Dropdown.Item onClick={() => setFilter('Latest')}>Latest</Dropdown.Item>
                                            <Dropdown.Item onClick={() => setFilter('Highest rated')}>Highest Rated</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>

                            {/* Tokens */}
                            <Row>
                                <Col xs={8}>
                                    <div>
                                        <Form>
                                            <FormCheck className='w-100 bg-light mt-2 d-flex p-3 ps-4 rounded-2'>
                                                <FormLabel className='text-black m-0' style={{ fontSize: 'larger' }}><FormCheckInput /> Choose all</FormLabel>
                                            </FormCheck>

                                            {displayedProducts.map((_, index) => (
                                                <FormCheck key={index} className='w-100 bg-light mt-2 d-flex p-3 rounded-2'>
                                                    <FormLabel className='w-100 text-black m-0' style={{ fontSize: 'larger' }} >
                                                        <Row className='w-100 justify-content-between'>
                                                            <Col xs={1}><FormCheckInput /></Col>
                                                            <Col xs={3}>
                                                                <img className='p-1 w-100' src={products} alt="Playmates Logo" />
                                                            </Col>
                                                            <Col xs={8} className='d-flex flex-column justify-content-between'>
                                                                <div>
                                                                    <h2 className='text-start'>Throgo Token <sup><span className='discount-tag rounded-1'>19%</span></sup></h2>
                                                                    <p className='m-0 small text-danger text-start'>#9 Best-selling</p>
                                                                </div>
                                                                <Row>
                                                                    <Col xs={6}>
                                                                        <div>
                                                                            <p className='m-0 text-decoration-line-through strong text-secondary text-start'>60.000<sup>&#8363;</sup></p>
                                                                            <h3 className='m-0 text-start'>50.000<sup>&#8363;</sup></h3>
                                                                        </div>
                                                                    </Col>
                                                                    <Col xs={6} className='d-flex justify-content-evenly align-items-end'>
                                                                        <Row>
                                                                            <Col xs={9}>
                                                                                <input
                                                                                    id="cartItemQuantity"
                                                                                    name="quantity"
                                                                                    min="1"
                                                                                    type="number"
                                                                                    placeholder='Quantity...'
                                                                                    className="h-100 form-control form-control-sm text-success fw-bolder text-center"
                                                                                />
                                                                            </Col>
                                                                            <Col xs={3}>
                                                                                <button className='w-100 trash-icon-border trash-icon-color'><i class="far fa-trash-alt"></i></button>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </FormLabel>
                                                </FormCheck>
                                            ))}

                                            {/* Pagination */}
                                            <CustomPagination
                                                totalItems={totalItems}
                                                itemsPerPage={itemsPerPage}
                                                currentPage={currentProductPage}
                                                onPageChange={handleProductPageChange}
                                            />
                                        </Form>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div className='position-sticky summary-card z-3 rounded-3'>
                                        <Card className='p-2 m-4 d-flex flex-column align-items-start'>
                                            <CardTitle className='fw-bolder'>Order Summary</CardTitle>
                                            {/* Tên các món hàng đã đặt */}
                                            <CardText className='small'>Throgo token,...</CardText>
                                            <Row className='w-100'>
                                                <Col xs={6} className='d-flex align-items-center justify-content-start'>
                                                    <Button variant="primary" onClick={handleShow}>
                                                        <i class="fas fa-shipping-fast"></i> Free Ship
                                                    </Button>
                                                    <Offcanvas show={show} onHide={handleClose}>
                                                        <Offcanvas.Header closeButton>
                                                            <InputGroup>
                                                                <InputGroup.Text>
                                                                    <i className="fas fa-search"></i>
                                                                </InputGroup.Text>
                                                                <FormControl
                                                                    placeholder="Search name token..."
                                                                    value={searchTerm}
                                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                                />
                                                                <Button variant="primary" onClick={handleSearch}>
                                                                    Search
                                                                </Button>
                                                            </InputGroup>
                                                        </Offcanvas.Header>
                                                        <Offcanvas.Body>
                                                            {displayedVouchers.map((_, index) => (
                                                                <button key={index} className='w-100 p-0 rounded-1 border border-2 border-success'>
                                                                    <div className='h-100 rounded-1'>
                                                                        <div className='btn-offcanvas text-light float-start d-flex flex-column justify-content-center'>
                                                                            <h1><i className="fas fa-shipping-fast"></i></h1>
                                                                            <Offcanvas.Title>Ship</Offcanvas.Title>
                                                                        </div>
                                                                        <div className='h-100 float-end btn-content-offcanvas d-flex flex-column '>
                                                                            <h6 className='d-flex align-items-center mt-1'>Shipping Fee up to <sup>&#8363;</sup>15k Off</h6>
                                                                            <p className='small d-flex mb-5'>Min. Spend ₫0</p>
                                                                            <p className='border-success border w-50 justify-content-center d-flex small text-success mb-1'>15.8.2024</p>
                                                                            <p className='d-flex align-items-center text-secondary m-0'><i className="far fa-clock"></i> 2 days</p>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            ))}

                                                            {/* Pagination for Offcanvas */}
                                                            <CustomPagination
                                                                className='m-3'
                                                                totalItems={totalVouchers}
                                                                itemsPerPage={voucherPerPage}
                                                                currentPage={currentVoucherPage}
                                                                onPageChange={handleVoucherPageChange}
                                                            />
                                                        </Offcanvas.Body>
                                                    </Offcanvas>
                                                </Col>
                                                <Col xs={6} className='d-flex flex-column align-items-end p-0'>
                                                    <span className='small text-danger'>Bonus 10 point</span>
                                                    <h3 className='m-0' >50.000<sup>&#8363;</sup></h3>
                                                    <p className='m-0 text-decoration-line-through strong text-secondary'>60.000<sup>&#8363;</sup></p>
                                                </Col>
                                            </Row>
                                            <Button href='/purchase' className='btn-unique w-75 text-uppercase align-self-center'>Pay now (2)</Button>
                                        </Card>
                                        <Card className='p-2 m-4 d-flex flex-column align-items-start'>
                                            <CardTitle className='fw-bolder'>You can pay with</CardTitle>
                                            {/* Tên các món hàng đã đặt */}
                                            < div className='d-flex flex-wrap'>
                                                <div className='icon-trans bg-success text-light p-1 small rounded-1 me-1 mt-1'><i class="fas fa-money-bill-wave"></i> Cash</div>
                                                <div className='icon-trans border-dark border text-dark p-1 small rounded-1 me-1 mt-1'><i class="fab fa-cc-visa"></i> CC Visa</div>
                                                <div className='icon-trans border-primary border text-primary p-1 small rounded-1 me-1 mt-1'><i class="fab fa-cc-paypal"></i> Paypal</div>
                                                <div className='icon-trans border-danger border text-danger p-1 small rounded-1 me-1 mt-1'><i class="fab fa-cc-mastercard"></i> CC Mastercard</div>
                                                <div className='icon-trans border-secondary border text-secondary p-1 small rounded-1 me-1 mt-1'><i class="fas fa-qrcode"></i> QR Code</div>
                                            </div>
                                        </Card>
                                    </div>
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
