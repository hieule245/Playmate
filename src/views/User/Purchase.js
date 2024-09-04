import React, { useState } from 'react';
import background_2 from '../../assets/2x/backgroud-blur-2.jpg'

import Header from '../../components/User/Header';
import { Button, Card, CardTitle, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Footer from '../../components/User/Footer'
import BackToTopButton from '../../components/User/BackToTop';
import BreadcrumbComponent from '../../components/User/BreadcrumbComponent';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import products from '../../assets/2x/product_thorog.png'

function Purchase() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    const renderVoucherTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Use only 1 code at a time and each code can only be used once.
        </Tooltip>
    );
    const renderPointTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            1 point = 10<sup>&#8363;</sup>
        </Tooltip>
    );

    const [formData, setFormData] = useState({
        country: 'VietNam',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        alternatePhoneNumber: '',
        streetAddress: '',
        district: '',
        city: '',
        postalCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Code to save the data can go here, e.g., sending data to an API
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
                            breadcrumbLabels={['Home', 'Cart', 'Purchase']}
                        />

                        {/* Content-body */}
                        <Container>
                            {/* Shipping Address */}
                            <Row>
                                <Col xs={8}>
                                    <Card className='p-4 mb-3'>
                                        <h2 className='text-uppercase fw-bolder'>Shipping Address</h2>
                                        <Form onSubmit={handleSubmit}>
                                            <p className="m-0 small opacity-50"><span className='text-danger'>*</span> Required information</p>
                                            <Form.Group className='form_group mb-3' controlId="formCountry">
                                                <Form.Label className='pe-3 ps-3 form_label m-0'>Country</Form.Label>
                                                <Form.Control
                                                    className='form_control pe-3 ps-3 bg-white text-dark p-0 w-100 text-start'
                                                    placeholder='Country'
                                                    type="text"
                                                    name="country"
                                                    value={formData.country}
                                                    disabled
                                                />
                                            </Form.Group>
                                            <Row>
                                                <Col xs={6}>
                                                    <Form.Group className='form_group mb-3' controlId="formFirstName">
                                                        <Form.Label className='form_label pe-3 ps-3 m-0'>First name<span className="text-danger">*</span></Form.Label>
                                                        <Form.Control
                                                            className='form_control pe-3 ps-3 bg-white text-dark p-0 w-100 text-start'
                                                            type="text"
                                                            name="firstName"
                                                            placeholder="First name"
                                                            value={formData.firstName}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Group className='form_group mb-3' controlId="formLastName">
                                                        <Form.Label className='form_label pe-3 ps-3 m-0'>Last name<span className="text-danger">*</span></Form.Label>
                                                        <Form.Control
                                                            className='form_control pe-3 ps-3 bg-white text-dark p-0 w-100 text-start'
                                                            type="text"
                                                            name="lastName"
                                                            placeholder="Last name"
                                                            value={formData.lastName}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group className='form_group mb-3' controlId="formPhoneNumber">
                                                <InputGroup>
                                                    <InputGroup.Text id="basic-addon1">VN +84</InputGroup.Text>
                                                    <Form.Control
                                                        placeholder="Phone number"
                                                        aria-label="phone number"
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className='form_group mb-3' controlId="formPhoneNumber">
                                                <InputGroup>
                                                    <InputGroup.Text id="basic-addon1">VN +84</InputGroup.Text>
                                                    <Form.Control
                                                        placeholder="Alternate Phone Number"
                                                        aria-label="alternatePhoneNumber"
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </InputGroup>
                                            </Form.Group>

                                            <Form.Group className='form_group mb-3' controlId="formStreetAddress">
                                                <Form.Label className='form_label pe-3 ps-3 m-0'>Street Address<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    className='form_control pe-3 ps-3 bg-white text-dark p-0 w-100 text-start'
                                                    type="text"
                                                    name="streetAddress"
                                                    placeholder="House Number, Street, Ward."
                                                    value={formData.streetAddress}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                            <Row>
                                                <Col>
                                                    <Form.Group className='form_group mb-3' controlId="formDistrict">
                                                        <Form.Label className='form_label pe-3 ps-3 m-0'>District<span className="text-danger">*</span></Form.Label>
                                                        <Form.Select className='form_control pe-3 ps-3 pt-2 pb-2 d-flex justify-content-between bg-white border-white text-dark p-0 w-100 text-start'>
                                                            <option disabled>Choose district</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group className='form_group mb-3' controlId="formCity">
                                                        <Form.Label className='form_label pe-3 ps-3 m-0'>City / Province<span className="text-danger">*</span></Form.Label>
                                                        <Form.Select className='form_control pe-3 ps-3 pt-2 pb-2 d-flex justify-content-between bg-white border-white text-dark p-0 w-100 text-start'>
                                                            <option disabled>Choose voucher</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group className='form_group mb-3' controlId="formPostalCode">
                                                <Form.Label className='form_label pe-3 ps-3 m-0'>Postal Code<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    className='form_control pe-3 ps-3 bg-white text-dark p-0 w-100 text-start'
                                                    type="text"
                                                    name="postalCode"
                                                    placeholder="Postal Code"
                                                    value={formData.postalCode}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                            <div className='d-flex justify-content-center'>
                                                <button className='btn-outline-unique text-unique w-25 fw-bolder' type="submit">
                                                    SAVE
                                                </button>
                                            </div>
                                        </Form>
                                    </Card>
                                    <Card className='p-4 mb-3'>
                                        <h2>Order details</h2>
                                        <Row>
                                            <Col xs={2}>
                                                <img className='p-1 w-100' src={products} alt="Thorog Token" />
                                                <div className="d-flex border border-dark rounded-3 quantity-input">
                                                    <button onClick={handleDecrease} className="quantity-btn border border-end rounded-start-2">-</button>
                                                    <input type="text" className='text-dark' value={quantity} />
                                                    <button onClick={handleIncrease} className="quantity-btn border border-start rounded-end-2">+</button>
                                                </div>
                                            </Col>
                                            <Col xs={2}>
                                                <img className='p-1 w-100' src={products} alt="Thorog Token" />
                                                <div className="d-flex border border-dark rounded-3 quantity-input">
                                                    <button onClick={handleDecrease} className="quantity-btn border border-end rounded-start-2">-</button>
                                                    <input type="text" className='text-dark' value={quantity} />
                                                    <button onClick={handleIncrease} className="quantity-btn border border-start rounded-end-2">+</button>
                                                </div>
                                            </Col>
                                            <Col xs={2}>
                                                <img className='p-1 w-100' src={products} alt="Thorog Token" />
                                                <div className="d-flex border border-dark rounded-3 quantity-input">
                                                    <button onClick={handleDecrease} className="quantity-btn border border-end rounded-start-2">-</button>
                                                    <input type="text" className='text-dark' value={quantity} />
                                                    <button onClick={handleIncrease} className="quantity-btn border border-start rounded-end-2">+</button>
                                                </div>
                                            </Col>
                                            <Col xs={2}>
                                                <img className='p-1 w-100' src={products} alt="Thorog Token" />
                                                <div className="d-flex border border-dark rounded-3 quantity-input">
                                                    <button onClick={handleDecrease} className="quantity-btn border border-end rounded-start-2">-</button>
                                                    <input type="text" className='text-dark' value={quantity} />
                                                    <button onClick={handleIncrease} className="quantity-btn border border-start rounded-end-2">+</button>
                                                </div>
                                            </Col>
                                            <Col xs={2}>
                                                <img className='p-1 w-100' src={products} alt="Thorog Token" />
                                                <div className="d-flex border border-dark rounded-3 quantity-input">
                                                    <button onClick={handleDecrease} className="quantity-btn border border-end rounded-start-2">-</button>
                                                    <input type="text" className='text-dark' value={quantity} />
                                                    <button onClick={handleIncrease} className="quantity-btn border border-start rounded-end-2">+</button>
                                                </div>
                                            </Col>
                                            <Col xs={2}>
                                                <img className='p-1 w-100' src={products} alt="Thorog Token" />
                                                <div className="d-flex border border-dark rounded-3 quantity-input">
                                                    <button onClick={handleDecrease} className="quantity-btn border border-end rounded-start-2">-</button>
                                                    <input type="text" className='text-dark' value={quantity} />
                                                    <button onClick={handleIncrease} className="quantity-btn border border-start rounded-end-2">+</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                    <Card className='p-4'>
                                        <CardTitle className='fw-bolder'>Payment Method</CardTitle>
                                        {/* Tên các món hàng đã đặt */}
                                        <Form>
                                            <Form.Check type="radio" className='d-flex align-items-center' aria-label="radio 1" >
                                                <Form.Check.Input className='me-2' name='trans-method' type="radio" isValid />
                                                <Form.Check.Label>
                                                    <div className='icon-trans bg-success text-light p-1 small rounded-1 me-1 mt-1'><i class="fas fa-money-bill-wave"></i> Cash</div>
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type="radio" className='d-flex align-items-center' aria-label="radio 1" >
                                                <Form.Check.Input className='me-2' name='trans-method' type="radio" isValid />
                                                <Form.Check.Label>
                                                    <div className='icon-trans border-danger border text-danger p-1 small rounded-1 me-1 mt-1'><i class="fas fa-credit-card"></i> CC Visa / CC Mastercard</div>
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type="radio" className='d-flex align-items-center' aria-label="radio 1" >
                                                <Form.Check.Input className='me-2' name='trans-method' type="radio" isValid />
                                                <Form.Check.Label>
                                                    <div className='icon-trans border-primary border text-primary p-1 small rounded-1 me-1 mt-1'><i class="fab fa-cc-paypal"></i> Paypal</div>
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type="radio" className='d-flex align-items-center' aria-label="radio 1" >
                                                <Form.Check.Input className='me-2' name='trans-method' type="radio" isValid />
                                                <Form.Check.Label>
                                                    <div className='icon-trans border-secondary border text-secondary p-1 small rounded-1 me-1 mt-1'><i class="fas fa-qrcode"></i> QR Code</div>
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Form>
                                    </Card>
                                </Col>
                                <Col xs={4}>
                                    <div className='position-sticky summary-card z-3 rounded-3'>
                                        <Card className='p-2 me-4 ms-4 d-flex flex-column align-items-start'>
                                            <CardTitle className='fw-bolder'>Order Summary</CardTitle>
                                            <Row className='w-100'>
                                                <Col xs={6} className='d-flex align-items-center fw-bolder justify-content-start'>
                                                    <p>Retail price:</p>
                                                </Col>
                                                <Col xs={6} className='d-flex flex-column align-items-end p-0'>
                                                    <p className='m-0 small text-secondary'>50.000<sup>&#8363;</sup></p>
                                                </Col>
                                                <Col xs={6} className='d-flex align-items-center fw-bolder justify-content-start'>
                                                    <p>Quantity:</p>
                                                </Col>
                                                <Col xs={6} className='d-flex flex-column align-items-end p-0'>
                                                    <p className='m-0 small text-secondary'>x 2</p>
                                                </Col>
                                                <Col xs={6} className='d-flex align-items-center fw-bolder justify-content-start'>
                                                    <p>Shipping fee:</p>
                                                </Col>
                                                <Col xs={6} className='d-flex flex-column align-items-end p-0'>
                                                    <p className='m-0 small text-secondary'>20.000<sup>&#8363;</sup></p>
                                                </Col>
                                                <Col xs={6} className='d-flex align-items-center fw-bolder justify-content-start'>
                                                    <p>Total Price:</p>
                                                </Col>
                                                <Col xs={6} className='d-flex flex-column align-items-end p-0'>
                                                    <p className='m-0'>120.000<sup>&#8363;</sup></p>
                                                </Col>
                                            </Row>
                                        </Card>
                                        <Card className='p-3 me-4 ms-4 mt-2'>
                                            <h5 className='m-0'><span className='text-warning me-2'><i class="fas fa-coins"></i></span> Bonus <span className='text-warning'>10</span> points</h5>
                                        </Card>
                                        <Card className='p-3 me-4 ms-4 mt-2 d-flex flex-column align-items-start'>
                                            {/* Voucher */}
                                            <CardTitle className='fw-bolder'>Discount code<sup><OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderVoucherTooltip}
                                            >
                                                <i class="fas fa-exclamation-circle"></i>
                                            </OverlayTrigger></sup></CardTitle>
                                            <Form.Select className='form_control mb-2 pe-3 d-flex justify-content-between align-items-center ps-3 pt-2 pb-2 bg-white border-dark text-dark p-0 w-100 text-start'>
                                                <option disabled>Choose voucher</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>

                                            {/* Point */}
                                            <CardTitle className='fw-bolder'>Point<sup>
                                                <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={renderPointTooltip}
                                                >
                                                    <i class="fas fa-exclamation-circle"></i>
                                                </OverlayTrigger></sup></CardTitle>
                                            <input
                                                id="point"
                                                name="point"
                                                min="0"
                                                type="number"
                                                placeholder='Point...'
                                                className="h-100 form-control form-control-sm border border-dark fw-bolder"
                                            />
                                            <Button className='btn-unique mt-3 w-100 fw-bolder'><h4 className='m-0'>Check out</h4></Button>
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

export default Purchase;
