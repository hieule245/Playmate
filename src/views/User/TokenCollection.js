import React, { useState } from 'react';
import background_2 from '../../assets/2x/backgroud-blur-2.jpg'
import Header from '../../../src/components/User/Header';
import { Button, Card, Col, Container, Dropdown, FormControl, InputGroup, Row } from 'react-bootstrap';
import Footer from '../../components/User/Footer'
import BackToTopButton from '../../components/User/BackToTop';
import BreadcrumbComponent from '../../components/User/BreadcrumbComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import products from '../../assets/2x/product_thorog.png'
import CustomPagination from '../../components/User/PaginationComponent';

function Collection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('most popular');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6); // Default items per page
    const items = Array(20).fill({
        img: products,
        title: 'Throgo Token',
        desc: '#9 Best Selling',
        price: '50.000',
        discount: '15%'
    }); // Replace with actual data

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalItems = filteredItems.length;
    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleSearch = () => {
        setCurrentPage(1); // Reset to first page on search
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="App" style={{ background: 'linear-gradient(135deg, #3574B9 0%, #F7AD7E 50%, #76C26E 100%)', height: '100%' }}>
            <Container fluid className='p-3'>
                <div className='rounded-3' style={{ background: 'rgba(0, 0, 0, 0.4)' }}>
                    {/* Header */}
                    <Card className='position-sticky top-0 z-3 rounded-3'>
                        <Header />
                    </Card>

                    {/* Content-header */}
                    <div className="sticky-top z-1 text-light">
                        <BreadcrumbComponent
                            backgroundImage={background_2}
                            title="Tokens Collection"
                            breadcrumbLabels={['Home', 'Store', 'Tokens Collection']}
                        />

                        {/* Content-body */}
                        <Container>
                            {/* Filter */}
                            <Row>
                                <Col xs={10}>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon className='icon-user' icon={faSearch} />
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
                                {paginatedItems.map((item, index) => (
                                    <Col xs={4} key={index}>
                                        <div className='w-100 p-2'>
                                            <Button className='w-100 p-3 btn_item'>
                                                <img className='w-100' src={item.img} alt="Playmates Logo" />
                                                <Row>
                                                    <Col xs={8} className='d-flex flex-column align-items-start'>
                                                        <h4 className='fw-bolder'>{item.title}</h4>
                                                        <p className='small'>{item.desc}</p>
                                                        <h5>{item.price}<sup>&#8363;</sup></h5>
                                                    </Col>
                                                    <Col xs={4} className='H-100 d-flex flex-column align-items-end justify-content-between'>
                                                        <h5 className='small p-2 mt-1 mb-1 rounded-1 fw-bolder w-50' style={{ background: 'linear-gradient(135deg, #3574B9 0%, #F7AD7E 50%, #76C26E 100%)' }}>{item.discount}</h5>
                                                        <FontAwesomeIcon className='icon-user small p-2 rounded-2 btn btn-outline-light w-50' icon={faCartPlus} />
                                                    </Col>
                                                </Row>
                                            </Button>
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                            {/* Pagination */}
                            <Row className='justify-content-center m-2'>
                                <CustomPagination
                                    totalItems={totalItems}
                                    itemsPerPage={itemsPerPage}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                                />
                            </Row>
                        </Container>

                        {/* Footer */}
                        <div className='z-1'>
                            <Footer />
                        </div>
                    </div>
                </div>
            </Container>
            <BackToTopButton />
        </div>
    );
}

export default Collection;
