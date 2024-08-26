import React, { useState } from 'react';
import { Dropdown, Card, Image, Row, Col, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faShoppingCart, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import emptyCartImage from '../../assets/2x/cart@2x.png'; // Replace with your image path
import { Link } from 'react-router-dom';

const CartPopover = () => {
    const allItems = [
        { id: 1, imgSrc: 'https://via.placeholder.com/40', title: 'Thorog', quantity: 1, price: '50.000 ₫', date: '2024-08-24' },
        { id: 2, imgSrc: 'https://via.placeholder.com/40', title: 'Thorog', quantity: 1, price: '50.000 ₫', date: '2024-08-24' },
        // Add more items here for testing pagination
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(allItems.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Dropdown align="end">
            <Dropdown.Toggle
                className='menu_drop_down'
                variant="none text-light"
                id="dropdown-basic"
                style={{
                    width: '40px',
                    height: '40px',
                    padding: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <FontAwesomeIcon icon={faShoppingCart} />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: '320px', padding: '1px', borderRadius: '10px' }}>
                <Card style={{ padding: '5px', backgroundColor: '#000', borderRadius: '10px' }}>
                    <Card.Body className='p-3'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Card.Title style={{ fontWeight: 'bold', color: '#fff' }}>Cart</Card.Title>
                            <Link href="#"><FontAwesomeIcon className='text-white' icon={faCaretRight} /></Link>
                        </div>
                        <hr className="my-2 opacity-100" />
                        {currentItems.length > 0 ? (
                            currentItems.map((item) => (
                                <Row key={item.id} style={{ marginBottom: '10px', alignItems: 'center', padding: '5px', backgroundColor: '#4C4C4C', borderRadius: '3px' }}>
                                    <Col xs={2}>
                                        <Image src={item.imgSrc} />
                                    </Col>
                                    <Col xs={8}>
                                        <div style={{ color: '#fff', fontWeight: 'bold' }}>{item.title}</div>
                                        <div style={{ color: '#888', fontSize: 'smaller' }}>x{item.quantity}</div>
                                        <div style={{ color: '#fff' }}>{item.price}</div>
                                    </Col>
                                    <Col xs={2} style={{ textAlign: 'right', color: 'white' }}>
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                    </Col>
                                </Row>
                            ))
                        ) : (
                            <div style={{ textAlign: 'center', color: '#888' }}>
                                <Image src={emptyCartImage} className='w-25' />
                                <div>You don't have any items in your cart</div>
                            </div>
                        )}
                        <hr className="my-2 opacity-100" />
                        {currentPage === totalPages && currentItems.length > 0 && (
                            <div style={{ textAlign: 'center', color: '#888' }}>
                                <Image src={emptyCartImage} className='w-25' />
                                <div>No more information before</div>
                            </div>
                        )}
                        {totalPages > 1 && (
                            <Pagination className="justify-content-center mt-3">
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
                                        {i + 1}
                                    </Pagination.Item>
                                ))}
                            </Pagination>
                        )}
                    </Card.Body>
                </Card>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CartPopover;
