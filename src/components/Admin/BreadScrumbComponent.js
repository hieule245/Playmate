import React from 'react';
import { Row, Breadcrumb } from 'react-bootstrap';

const BreadcrumbComponent = ({ title, breadcrumbLabels, breadcrumbLinks }) => {
    return (
        <div className='text-success'>
            <Row className='h-100'>
                <h2 className='d-flex fw-bold'>{title}</h2>
                <Breadcrumb className='text-success'>
                    {breadcrumbLabels.map((label, index) => (
                        <Breadcrumb.Item
                            key={index}
                            href={index !== breadcrumbLabels.length - 1 ? breadcrumbLinks[index] : null} // Không gắn link cho label cuối
                            active={index === breadcrumbLabels.length - 1}
                            className={`text-success ${index === breadcrumbLabels.length - 1 ? 'fw-bold' : ''}`}
                        >
                            {label}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
            </Row>
        </div>
    );
};

export default BreadcrumbComponent;
