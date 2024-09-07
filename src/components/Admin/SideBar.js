import React from 'react';

import logo from '../../assets/2x/logo_admin.png';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div className='w-100 sidebar_container rounded-3'>
            <div className='w-100 h-100 text-light p-3 text-center d-flex flex-column'>
                <img className='p-1 w-75'
                    src={logo}
                    alt="Playmates Logo"
                />
                <hr className="my-3 opacity-75 w-100" />
                <Link to='#static' className='py-1 px-3 my-2 border border-1 text-start rounded-2 menu_items' >
                    <Row>
                        <Col xs={3} className='text-center'>
                            <i class="fas fa-chart-line"></i>
                        </Col>
                        <Col xs={9}>
                            Statics
                        </Col>
                    </Row>
                </Link>
                <Link to='/admin/listAccount' className='py-1 px-3 my-2 border border-1 text-start rounded-2 menu_items' >
                    <Row>
                        <Col xs={3} className='text-center'>
                            <i class="far fa-user "></i>
                        </Col>
                        <Col xs={9}>
                            Accounts
                        </Col>
                    </Row>
                </Link>
                <Link to='#static' className='py-1 px-3 my-2 border border-1 text-start rounded-2 menu_items' >
                    <Row>
                        <Col xs={3} className='text-center'>
                            <i class="fas fa-file-invoice-dollar"></i>
                        </Col>
                        <Col xs={9}>
                            Transitions
                        </Col>
                    </Row>
                </Link>
                <Link to='#static' className='py-1 px-3 my-2 border border-1 text-start rounded-2 menu_items' >
                    <Row>
                        <Col xs={3} className='text-center'>
                            <i class="fas fa-store-alt"></i>
                        </Col>
                        <Col xs={9}>
                            Shop
                        </Col>
                    </Row>
                </Link>
                <Link to='#static' className='py-1 px-3 my-2 border border-1 text-start rounded-2 menu_items' >
                    <Row>
                        <Col xs={3} className='text-center'>
                            <i class="fas fa-bug"></i>
                        </Col>
                        <Col xs={9}>
                            Report
                        </Col>
                    </Row>
                </Link>
                <hr className="my-3 opacity-75 w-100" />
                <Link to='#static' className='py-1 px-3 my-2 border border-1 text-start rounded-2 menu_items' >
                    <Row>
                        <Col xs={3} className='text-center'>
                            <i class="far fa-address-card"></i>
                        </Col>
                        <Col xs={9}>
                            Profile
                        </Col>
                    </Row>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
