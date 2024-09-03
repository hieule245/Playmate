import React, { useState } from 'react';
import { Dropdown, Card, Image, Row, Col, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import notification from '../../assets/2x/notification@2x.png';

const NotificationPopover = () => {
  const allNotifications = [
    { id: 1, imgSrc: 'https://via.placeholder.com/40', title: 'Thorog', message: 'will send for you soon', status: 'Order successful', date: '2024-08-24' },
    { id: 2, imgSrc: 'https://via.placeholder.com/40', title: 'Thorog', message: 'will send for you soon', status: 'Order successful', date: '2024-08-23' },
    { id: 3, imgSrc: 'https://via.placeholder.com/40', title: 'Thorog', message: 'will send for you soon', status: 'Order successful', date: '2024-08-23' },
    { id: 4, imgSrc: 'https://via.placeholder.com/40', title: 'Thorog', message: 'will send for you soon', status: 'Order successful', date: '2024-08-22' },
    { id: 5, imgSrc: 'https://via.placeholder.com/40', title: 'Thorog', message: 'will send for you soon', status: 'Order successful', date: '2024-08-22' },
    { id: 6, imgSrc: 'https://via.placeholder.com/40', title: 'Thorog', message: 'will send for you soon', status: 'Order successful', date: '2024-08-21' },
    // Add more notifications here for testing pagination
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const notificationsPerPage = 4;

  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
  const currentNotifications = allNotifications.slice(indexOfFirstNotification, indexOfLastNotification);

  const totalPages = Math.ceil(allNotifications.length / notificationsPerPage);

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
        <i class="fas fa-bell"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ width: '320px', padding: '1px', borderRadius: '10px' }}>
        <Card style={{ padding: '5px', backgroundColor: '#000', borderRadius: '10px' }}>
          <Card.Body className='p-3'>
            <Card.Title style={{ fontWeight: 'bold', color: '#fff' }}>Notification</Card.Title>
            <hr className="my-2 opacity-100" />
            {currentNotifications.length > 0 ? (
              currentNotifications.map((notification) => (
                <Row key={notification.id} style={{ marginBottom: '10px', alignItems: 'center', padding: '5px', backgroundColor: '#4C4C4C', borderRadius: '3px' }}>
                  <Col xs={2}>
                    <Image src={notification.imgSrc} />
                  </Col>
                  <Col xs={10}>
                    <div style={{ color: '#fff', fontWeight: 'bold' }}>{notification.title} <span style={{ fontWeight: 'lighter' }}>{notification.message}</span></div>
                    <div style={{ color: 'limegreen', fontSize: 'smaller' }}>{notification.status}</div>
                    <div style={{ color: '#888', fontSize: 'small' }}>{notification.date}</div>
                  </Col>
                </Row>
              ))
            ) : (
              <div style={{ textAlign: 'center', color: '#888' }}>
                <Image src={notification} className='w-25' />
                <div>You don't have any notifications</div>
              </div>
            )}
            <hr className="my-2 opacity-100" />
            {currentPage === totalPages && currentNotifications.length > 0 && (
              <div style={{ textAlign: 'center', color: '#888' }}>
                <Image src={notification} className='w-25' />
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

export default NotificationPopover;
