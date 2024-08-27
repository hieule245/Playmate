import React from 'react';
import background_2 from '../../assets/2x/backgroud-blur-2.jpg'
import board from '../../assets/2x/demo@2x.png'
import money from '../../assets/products/25 tờ(1) 1.png'
import chance from '../../assets/products/image 1.png'
import dice from '../../assets/products/Group 99.png'
import chest from '../../assets/products/image 2.png'
import houses from '../../assets/products/Group 98.png'
import products from '../../assets/products/Screenshot 2024-08-22 093729.png'
import houses_card from '../../assets/products/1 tờ(24) 1.png'
import token from '../../assets/products/Screenshot 2024-08-22 093729.png'
import premium from '../../assets/products/Premium box.png'
import custome_token from '../../assets/products/Customer token.png'

import Header from '../../../src/components/User/Header';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/User/Footer'
import BackToTopButton from '../../components/User/backToTop';
import BreadcrumbComponent from '../../components/User/BreadcrumbComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Store() {
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
                            title="Store"
                            breadcrumbLabels={['Home', 'Store']}
                        />

                        {/* Content-body */}
                        <Container>
                            <div className='mb-3 mt-3'>
                                <h4 className='d-flex'>Basic box</h4>
                                <Button className='m-3' style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', border: '1px #CBC0BA', borderRadius: '15px' }}>
                                    <Row className='p-3'>
                                        <Col xs={4}>
                                            <img className='p-2 w-100'
                                                src={board}
                                                alt="Playmates Logo"
                                            />
                                        </Col>
                                        <Col xs={4}>
                                            <Row>
                                                <Col xs={6}>
                                                    <div className='d-flex flex-column'>
                                                        <img className='pt-2 w-100'
                                                            src={money}
                                                            alt="Playmates Logo"
                                                        />
                                                        <img className='pt-2 w-100'
                                                            src={chance}
                                                            alt="Playmates Logo"
                                                        />
                                                    </div>
                                                </Col>
                                                <Col xs={6}>
                                                    <div className='d-flex flex-column'>
                                                        <img className='pt-2 w-50 align-self-center'
                                                            src={dice}
                                                            alt="Playmates Logo"
                                                        />
                                                        <img className='pt-2 w-100'
                                                            src={chest}
                                                            alt="Playmates Logo"
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={4}>
                                            <Row>
                                                <Col xs={6}>
                                                    <div className='d-flex flex-column'>
                                                        <img className='pt-2 w-75'
                                                            src={houses}
                                                            alt="Playmates Logo"
                                                        />
                                                        <img className='pt-2 w-100'
                                                            src={houses_card}
                                                            alt="Playmates Logo"
                                                        />
                                                    </div>
                                                </Col>
                                                <Col xs={6} className='d-flex'>
                                                    <Row className='d-flex flex-column justify-content-between' >
                                                        <Card>
                                                            <img className='p-2 w-100 h-100 align-self-center'
                                                                src={token}
                                                                alt="Playmates Logo"
                                                            />
                                                            <h5>Default tokens</h5>
                                                        </Card>
                                                        <h4 className='p-3 m-0 btn-unique rounded-3 fw-bolder'>250.000<sup>&#8363;</sup></h4>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Button>
                            </div>

                            <div className='mb-3 mt-3 '>
                                <div className='frog-tokens-header d-flex justify-content-between align-items-center p-2'>
                                    <h4>Frog tokens</h4>
                                    <a href='#' className='text-light'><FontAwesomeIcon icon={faArrowRight} /></a>
                                </div>
                                <Row className='m-3'>
                                    {Array(3).fill(null).map((_, index) => (
                                        <Col xs={4} key={index}>
                                            <Card className='frog-token-card'>
                                                <img className='p-1'
                                                    src={products}
                                                    alt="Playmates Logo"
                                                />
                                                <div className='frog-token-button'>
                                                    <Button className='w-100 gradient-button'>More</Button>
                                                </div>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>

                            <div className='mt-3 mb-3'>
                                <h4 className='d-flex'>Premium box</h4>
                                <Row className='m-3'>
                                    <Col xs={12} md={8}>
                                        <Card className=' rounded-4 position-relative justify-content-end' style={{ background: 'linear-gradient(135deg, #3574B9 0%, #F7AD7E 50%, #76C26E 100%)', height:'460px' }}>
                                            <img className='w-100 h-100 p-1 position-absolute z-1'
                                                src={premium}
                                                alt="Playmates Logo"
                                            />
                                            <div className='align-self-center position-relative z-2 mb-2 p-2 rounded-2' style={{ background: 'linear-gradient(135deg, #3574B9 0%, #F7AD7E 50%, #76C26E 100%)' }}>
                                                <h4 className='text-light m-0'>Wooden box</h4>
                                            </div>
                                        </Card>
                                        <Button className='m-2 d-flex btn-unique rounded-3 fw-bolder'>
                                            <h4 className='m-0'>250.000<sup>&#8363;</sup></h4>
                                        </Button>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <Card className='rounded-4 position-relative justify-content-end' style={{ background: 'linear-gradient(135deg, #3574B9 0%, #F7AD7E 50%, #76C26E 100%)', height: '460px' }}>
                                            <img className='w-100 h-100 p-1 position-absolute z-1'
                                                src={custome_token}
                                                alt="Playmates Logo"
                                            />
                                            <div className='align-self-center position-relative z-2 mb-2 p-2 rounded-2' style={{ background: 'linear-gradient(135deg, #3574B9 0%, #F7AD7E 50%, #76C26E 100%)' }}>
                                                <h4 className='text-light m-0'>Custom tokens</h4>
                                            </div>
                                        </Card>
                                        <Button className='m-2 btn-unique rounded-3 fw-bolder'>
                                            <h4 className='m-0'>More</h4>
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
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

export default Store;
