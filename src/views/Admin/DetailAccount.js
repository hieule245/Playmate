import React, { useState } from 'react';
import BackToTopButton from '../../components/User/BackToTop';
import SideBar from '../../components/Admin/SideBar';
import { Button, Card, Col, Form, FormControl, InputGroup, Row, Table } from 'react-bootstrap';
import BreadcrumbComponent from '../../components/Admin/BreadScrumbComponent'; // Assuming you save the CustomPagination component here

import avatar_demo from '../../assets/2x/avatar_demo.png'

function ListOfAccounts() {
    return (
        <div>
            <div fluid className='p-3 Admin'>
                <Row>
                    <Col xs={2}>
                        <div className='side-bar-container rounded-3'>
                            <SideBar />
                        </div>
                    </Col>
                    <Col xs={10}>
                        <BreadcrumbComponent
                            title="Accounts"
                            breadcrumbLabels={['Accounts', 'Detail < username >']}
                            breadcrumbLinks={['/admin/listAccount']}
                        />
                        <Card className='p-3'>
                            <Row>
                                <Col xs={3}>
                                    <img className='p-1 w-100 square-button'
                                        src={avatar_demo}
                                        alt="Playmates Pics"
                                    />
                                </Col>
                                <Col xs={9}>
                                    <p className='small m-0'>16/10/2024</p>
                                    <h1 >Lê Ngọc Hiếu</h1>
                                    <Row className='align-items-center'>
                                        <Col xs={2} className='mb-3'>
                                            <h6 className='m-0'>Username</h6>
                                        </Col>
                                        <Col xs={10} className='mb-3'>
                                            <Form.Control
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </Col>
                                        <Col xs={2} className='mb-3'>
                                            <h6 className='m-0'>Full Name</h6>
                                        </Col>
                                        <Col xs={5} className='mb-3'>
                                            <Form.Control
                                                placeholder="First Name"
                                                aria-label="First Name"
                                                aria-describedby="basic-addon1"
                                            />
                                        </Col>
                                        <Col xs={5} className='mb-3'>
                                            <Form.Control
                                                placeholder="Last Name"
                                                aria-label="Last Name"
                                                aria-describedby="basic-addon1"
                                            />
                                        </Col>
                                        <Col xs={2} className='mb-3'>
                                            <h6 className='m-0'>Phone</h6>
                                        </Col>
                                        <Col xs={10} className='mb-3'>
                                            <Form.Control
                                                placeholder="091*******"
                                                aria-label="Email"
                                                aria-describedby="basic-addon1"
                                            />
                                        </Col>
                                        <Col xs={2} className='mb-3'>
                                            <h6 className='m-0'>Email</h6>
                                        </Col>
                                        <Col xs={10} className='mb-3'>
                                            <Form.Control
                                                placeholder="abc@gmail.com"
                                                aria-label="Phone"
                                                aria-describedby="basic-addon1"
                                            />
                                        </Col>
                                        <Col xs={2} className='mb-3'>
                                            <h6 className='m-0'>Detail Address</h6>
                                        </Col>
                                        <Col xs={10} className='mb-3'>
                                            <Form.Control
                                                placeholder="House number, street, ward,..."
                                                aria-label="Detail address"
                                                aria-describedby="basic-addon1"
                                            />
                                        </Col>
                                        <Col xs={2} className='mb-3'>
                                            <h6 className='m-0'>Detail Address</h6>
                                        </Col>
                                        <Col xs={5} className='mb-3'>
                                            <Form.Control
                                                placeholder="House number, street, ward,..."
                                                aria-label="Detail address"
                                                aria-describedby="basic-addon1"
                                            />
                                        </Col>
                                        <Col xs={5} className='mb-3'>
                                            <Form.Control
                                                placeholder="House number, street, ward,..."
                                                aria-label="Detail address"
                                                aria-describedby="basic-addon1"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>

            <BackToTopButton />
        </div>
    );
}

export default ListOfAccounts;
