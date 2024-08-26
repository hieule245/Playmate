import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo_footer from '../../assets/2x/logo_footer@2x.png'
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='rounded-3' style={{ padding: '20px 0', fontWeight: 'lighter' }}>
            <Container fluid>
                <hr className="my-4 opacity-75 p-2" />
                <Container>
                    <Row>
                        <Col md={6} className="text-lg-start">
                            <div style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>
                                <img src={logo_footer} alt="Playmates Logo" style={{ height: '40px', marginRight: '10px' }} />
                            </div>
                            <div className='opacity-50'>
                                <p>FPT Da Nang, Hoa Hai, Da Nang</p>
                                <p>(+84) 919280763</p>
                                <p>playmate@gmail.com</p>
                            </div>
                        </Col>
                        <Col md={4} className="text-lg-start d-flex flex-column justify-content-evenly">
                            <h5>COMPANY</h5>
                            <div className='d-flex flex-column opacity-75' >
                                <a className='mb-2' href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a>
                                <a className='mb-2' href="#blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</a>
                                <a className='mb-2' href="#report" style={{ color: '#fff', textDecoration: 'none' }}>Report</a>
                            </div>
                        </Col>
                        <Col md={2} className="text-lg-start d-flex flex-column justify-content-evenly">
                            <h5>CONTACT</h5>
                            <div className='d-flex flex-column  opacity-50' >
                                <a className='text-decoration-none mb-2 text-white' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="lg" /> Instagram
                                </a>
                                <a className='text-decoration-none mb-2 text-white' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebookF} size="lg" /> Facebook
                                </a>
                                <a className='text-decoration-none mb-2 text-white' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} size="lg" /> Twitter
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr className="my-4" />
                <Row>
                    <Col className="text-center">
                        <p style={{ margin: 0 }}>Copyright © 2024, designed & developed by Alpha</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
