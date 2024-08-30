import React from 'react';
import { Navbar, Nav, Container, Dropdown, Button, ButtonGroup, OverlayTrigger } from 'react-bootstrap';
import logo from '../../assets/2x/logo@2x.png';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import NotificationPopover from './NotificationPopover';
import CartPopover from './CartPopover';

const Header = () => {
  return (
    <Navbar className='rounded-3 header-container' variant="dark">
      <Container fluid >
        <Row className='w-100 justify-content-end d-flex align-items-center'>
          <Col xs={1}><Navbar.Brand href="#">
            <img className='p-1'
              src={logo}
              height="40"
              alt="Playmates Logo"
            />
          </Navbar.Brand>
          </Col>
          <Col xs={11}>
            <Row className="d-flex align-items-center">
              <Col xs={10}>
                <Nav className="justify-content-center d-flex">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/store">Store</Nav.Link>
                  <Nav.Link href="#">Game event</Nav.Link>
                  <Nav.Link href="#">About us</Nav.Link>
                </Nav>
              </Col>
              <Col xs={2}>
                <Nav className="justify-content-end d-flex align-items-center justify-content-evenly">
                  <CartPopover />
                  <NotificationPopover />
                  <div>
                    <Dropdown as={ButtonGroup} align="end">
                      <Dropdown.Toggle
                        className='menu_drop_down user_icon d-flex'
                        as={Button}
                      >
                        <FontAwesomeIcon className='icon-user text-light' icon={faUserCircle} />
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{ padding: '10px', borderRadius: '10px' }}>
                        <Dropdown.Item className='fw-bold' href="#/action-1">
                          Sign in
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className='fw-bold' href="#/action-2">
                          Profile
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className='fw-bold' href="#/action-3">
                          Sign up
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Nav>
              </Col>

            </Row>
          </Col>
        </Row>


      </Container>
    </Navbar>
  );
};

export default Header;
