import React, { useState } from 'react';
import carosel_img1 from '../../assets/2x/demo@2x.png'
import carosel_img2 from '../../assets/2x/Đột Phá - Tiên Phong-01.png'
import carosel_img3 from '../../assets/2x/Đột Phá - Tiên Phong-02.png'
import carosel_img4 from '../../assets/2x/2 tờ - 40x40 - In 1 mặt.png'
import background_2 from '../../assets/2x/backgroud-blur-2.jpg'
import logo from '../../assets/2x/logo@2x.png';
import order from '../../assets/2x/order-now@2x.png'
import products from '../../assets/products/Screenshot 2024-08-22 093729.png'
import background from '../../assets/2x/backgroud-blur@2x.png'
import Header from '../../../src/components/User/Header';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { faChess, faHistory, faUserFriends, faSortAlphaDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/User/Footer'
import BackToTopButton from '../../components/User/BackToTop';
function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data to console
    console.log('Form Data:', formData);
    // You can also send the data to a server using fetch/axios
  };
  return (

    <div className="App" style={{ background: 'linear-gradient(135deg, #3574B9 0%, #F7AD7E 50%, #76C26E 100%)', height: '100%' }}>
      <Container fluid className='p-3' >
        <div className='rounded-3' style={{ background: 'rgba(0, 0, 0, 0.4)' }}>
          {/* Header */}
          <Card className='position-sticky top-0 z-3 rounded-3' >
            <Header />
          </Card>

          {/* Content */}
          <div className="sticky-top z-1 text-light mt-3">
            <Container fluid className='z-1 pb-3'>
              <Row >
                <Col xs={7} className='d-flex align-items-start justify-content-evenly flex-column p-5 text-start'>
                  <div className='d-flex align-items-start flex-column'>
                    <h5>Debut collection</h5>
                    <h1>From brand to customer</h1>
                    <p>"The connection between modernity and tradition is not about absolescence or rebellion, but about the belief in innovation for the future inspired by the past"</p>
                  </div>
                  <Button className='w-25 btn-unique'>Explored</Button>
                </Col>
                <Col xs={1} className='justify-content-center d-flex'>
                  <div className="h-100 straightline">
                  </div>
                </Col>
                <Col xs={4}>
                  <Carousel className='z-0' slide={false}>
                    <Carousel.Item>
                      <img className='p-1'
                        src={carosel_img1}
                        width={361}
                        height={353}
                        alt="Playmates Pics"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className='p-1'
                        src={carosel_img2}
                        width={361}
                        height={353}
                        alt="Playmates Pics"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className='p-1'
                        src={carosel_img3}
                        width={361}
                        height={353}
                        alt="Playmates Pics"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className='p-1'
                        src={carosel_img4}
                        width={361}
                        height={353}
                        alt="Playmates Pics"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>
            </Container>
            <div className="w-100 h-100 container-content position-relative overflow-hidden mt-2 mb-2">
              <div className="top-0 position-absolute bottom-0 z-1"
                style={{
                  left: 0,
                  right: 0,
                  backgroundImage: `url(${background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom',
                  filter: 'blur(7px)',
                }}
              />
              <div className='position-relative z-2 p-5 text-light'
                style={{ fontSize: 'xx-large' }}
              >
                <div>
                  <Row className='align-items-center h-100 mb-5'>
                    <Col xs={1}>
                      <FontAwesomeIcon icon={faChess} />
                    </Col>
                    <Col xs={11}>
                      <h4 className='m-0 d-flex focus-content '>Multi-platform game.</h4>
                    </Col>
                  </Row>
                  <Row className='align-items-center h-100 mb-5'>
                    <Col xs={1}>
                      <FontAwesomeIcon icon={faUserFriends} />
                    </Col>
                    <Col xs={11}>
                      <h4 className='m-0 d-flex focus-content '>Supports multiple players, suitable for family and friends.</h4>
                    </Col>
                  </Row>
                  <Row className='align-items-center h-100 mb-5'>
                    <Col xs={1}>
                      <FontAwesomeIcon icon={faSortAlphaDown} />
                    </Col>
                    <Col xs={11}>
                      <h4 className='m-0 d-flex focus-content '>Variety of games with diverse rules.</h4>
                    </Col>
                  </Row>
                  <Row className='align-items-center h-100'>
                    <Col xs={1}>
                      <FontAwesomeIcon icon={faHistory} />
                    </Col>
                    <Col xs={11}>
                      <h4 className='m-0 d-flex focus-content '>Regularly updated with every version.</h4>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <Container>
              <div className='frog-tokens-header d-flex justify-content-between align-items-center p-2'>
                <h4>Frog tokens</h4>
                <a href='/store/tokens' className='text-light'><FontAwesomeIcon icon={faArrowRight} /></a>
              </div>
              <Row>
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
            </Container>
            <div className='position-relative w-100 h-100 overflow-hidden'
              style={{ margin: '50px 0 20px 0' }}
            >
              <div className='position-absolute top-0 bottom-0 z-1'
                style={{
                  left: 0,
                  right: 0,
                  backgroundImage: `url(${background_2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(10px)',
                }}
              />
              <div className='position-relative z-2 text-light p-5'
                style={{
                  fontSize: 'xx-large'
                }}
              >
                {/* Nội dung của bạn ở đây */}
                <div>
                  <Row className='align-items-center h-100 justify-content-center'>
                    <img className='p-1 z-0'
                      src={logo}
                      alt="Playmates Logo"
                      style={{ width: '7%' }}
                    />
                    <h3 className='text-uppercase'>“Win or lose depends on luck”</h3>
                    <Button className='w-25 m-4 btn-unique'>About us</Button>
                  </Row>
                </div>
              </div>
            </div>

            <Container>
              <div className='p-4'>
                <Row>
                  <Col xs={6} style={{ padding: '0px 100px 20px 0px', boxSizing: 'border-box' }}>
                    <img className='p-1'
                      src={order}
                      alt="Playmates Logo"
                      style={{ width: '100%' }}
                    />
                  </Col>
                  <Col xs={6} className=''>
                    <div className=' d-flex flex-column justify-content-evenly'>
                      <h4 className="text-center text-white mb-4">LEAVE US YOUR INFORMATION TO ORDER BASIC</h4>
                      <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                          <Form.Label className="text-white d-flex"><strong><span className='text-warning'>*</span> Name</strong></Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Input your name..."
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group controlId="formPhone" className="mt-3">
                          <Form.Label className="text-white d-flex"><strong><span className='text-warning'>*</span> Phone</strong></Form.Label>
                          <Form.Control
                            type="tel"
                            placeholder="Input your phone number..."
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mt-3">
                          <Form.Label className="text-white d-flex"><strong>Email</strong></Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Input your email..."
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Button
                          variant="primary"
                          type="submit"
                          className="mt-4"
                          style={{
                            width: '25%',
                            background: 'linear-gradient(to right, #3574B9, #F7AD7E, #76C26E)',
                            border: 'none',
                          }}
                        >
                          Submit
                        </Button>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>

            <div className=' z-1' >
              <Footer />
            </div>
          </div>
        </div>
      </Container>
      <BackToTopButton />
    </div>
  );
}

export default Home;
