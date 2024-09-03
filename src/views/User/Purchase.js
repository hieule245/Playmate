import React, { useState } from 'react';
import background_2 from '../../assets/2x/backgroud-blur-2.jpg'

import Header from '../../components/User/Header';
import { Button, Card, CardText, CardTitle, Col, Container, Dropdown, Form, FormCheck, FormControl, FormLabel, InputGroup, Offcanvas, Row } from 'react-bootstrap';
import Footer from '../../components/User/Footer'
import BackToTopButton from '../../components/User/BackToTop';
import BreadcrumbComponent from '../../components/User/BreadcrumbComponent';
import products from '../../assets/2x/product_thorog.png'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import CustomPagination from '../../components/User/PaginationComponent';

function Purchase() {
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
                            breadcrumbLabels={['Home', 'Cart', 'Purchase']}
                        />

                        {/* Content-body */}
                        <Container>
                            {/* Shipping Address */}
                            <Row>
                                <Col xs={8}>
                                    
                                </Col>
                                <Col xs={4}>
                                    
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
