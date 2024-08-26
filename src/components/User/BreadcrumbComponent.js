import React from 'react';
import { Row, Breadcrumb } from 'react-bootstrap';

const BreadcrumbComponent = ({ backgroundImage, title, breadcrumbLabels }) => {
  return (
    <div className='position-relative w-100 h-100 mb-4 overflow-hidden'>
      <div
        className='position-absolute top-0 bottom-0 z-1'
        style={{
          left: 0,
          right: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
        }}
      />
      <div className='position-relative z-2 text-light p-5'>
        <Row className='h-100'>
          <h2 className='d-flex fw-bold'>{title}</h2>
          <Breadcrumb>
            {breadcrumbLabels.map((label, index) => (
              <Breadcrumb.Item 
                key={index} 
                active={index === breadcrumbLabels.length - 1} 
                className="text-white"
              >
                {label}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </Row>
      </div>
    </div>
  );
};

export default BreadcrumbComponent;
