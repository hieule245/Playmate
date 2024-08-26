import React from 'react';
import background_2 from '../../assets/2x/backgroud-blur-2.jpg'
import combo_basic from '../../assets/products/Basic_Combo.png'
import Header from '../../../src/components/User/Header';
import { Button, Card, Container } from 'react-bootstrap';
import Footer from '../../components/User/Footer'
import BackToTopButton from '../../components/User/backToTop';
import BreadcrumbComponent from '../../components/User/BreadcrumbComponent';
function Home() {
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
                            <h4 className='d-flex'>Basic box</h4>
                            <Card style={{ backgroundColor: '#CBC0BA' }}>
                                <img className='p-1 w-100 p-3'
                                    src={combo_basic}
                                    alt="Playmates Product"
                                />
                                <div className='btn-unique btn-combo'>
                                    <Button className='w-100 gradient-button'>More</Button>
                                </div>
                            </Card>
                        </Container>

                        {/* Footer */}
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
