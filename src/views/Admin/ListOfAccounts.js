import React, { useState } from 'react';
import BackToTopButton from '../../components/User/BackToTop';
import SideBar from '../../components/Admin/SideBar';
import { Button, Card, Col, FormControl, InputGroup, Row, Table } from 'react-bootstrap';
import BreadcrumbComponent from '../../components/Admin/BreadScrumbComponent';
import CustomPagination from '../../components/User/PaginationComponent'; // Assuming you save the CustomPagination component here

function ListOfAccounts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const accountsPerPage = 10;

  // Sample account data for pagination
  const accounts = [
    { id: 1, username: 'Username1', name: 'Lê Ngọc Hiếu', phone: '091*******', dob: '24/05/2003', role: 'Seller' },
    { id: 2, username: 'Username2', name: 'Nguyễn Văn A', phone: '092*******', dob: '01/01/2000', role: 'Buyer' },
    { id: 1, username: 'Username1', name: 'Lê Ngọc Hiếu', phone: '091*******', dob: '24/05/2003', role: 'Seller' },
    { id: 2, username: 'Username2', name: 'Nguyễn Văn A', phone: '092*******', dob: '01/01/2000', role: 'Buyer' },
    { id: 1, username: 'Username1', name: 'Lê Ngọc Hiếu', phone: '091*******', dob: '24/05/2003', role: 'Seller' },
    { id: 2, username: 'Username2', name: 'Nguyễn Văn A', phone: '092*******', dob: '01/01/2000', role: 'Buyer' },
    { id: 1, username: 'Username1', name: 'Lê Ngọc Hiếu', phone: '091*******', dob: '24/05/2003', role: 'Seller' },
    { id: 2, username: 'Username2', name: 'Nguyễn Văn A', phone: '092*******', dob: '01/01/2000', role: 'Buyer' },
    { id: 1, username: 'Username1', name: 'Lê Ngọc Hiếu', phone: '091*******', dob: '24/05/2003', role: 'Seller' },
    { id: 2, username: 'Username2', name: 'Nguyễn Văn A', phone: '092*******', dob: '01/01/2000', role: 'Buyer' },
    { id: 1, username: 'Username1', name: 'Lê Ngọc Hiếu', phone: '091*******', dob: '24/05/2003', role: 'Seller' },
    { id: 2, username: 'Username2', name: 'Nguyễn Văn A', phone: '092*******', dob: '01/01/2000', role: 'Buyer' },
    // Add more accounts here...
  ];

  // Pagination calculations
  const indexOfLastAccount = currentPage * accountsPerPage;
  const indexOfFirstAccount = indexOfLastAccount - accountsPerPage;
  const currentAccounts = accounts.slice(indexOfFirstAccount, indexOfLastAccount);

  const handleSearch = () => {
    setCurrentPage(1); // Reset to first page on search
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
              breadcrumbLabels={['Accounts']}
              breadcrumbLinks={[]}
            />
            <Card>
              <Row className='p-3'>
                <Row className='mb-3 justify-content-between align-items-center'>
                  <Col xs={4}>
                    <InputGroup className='border border-2 border-success border-opacity-50 rounded-2'>
                      <FormControl
                        className='border border-0'
                        placeholder="Search name token..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Button onClick={handleSearch} className='bg-white border border-0 text-secondary text-opacity-50'>
                        <i className='fas fa-search'></i>
                      </Button>
                    </InputGroup>
                  </Col>
                  <Col xs={2}>
                    <p className='m-0 small text-center opacity-50 fw-bolder'>Last 30 days</p>
                  </Col>
                </Row>
                <Table responsive className='text-center'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Username</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>DOB</th>
                      <th>Role</th>
                      <th>Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentAccounts.map((account) => (
                      <tr key={account.id}>
                        <td>{account.id}</td>
                        <td>{account.username}</td>
                        <td>{account.name}</td>
                        <td>{account.phone}</td>
                        <td>{account.dob}</td>
                        <td>{account.role}</td>
                        <td>
                          <Button href='/admin/listAccount/detailAccount' className='square-button me-1' variant='success'><i className="fas fa-eye"></i></Button>
                          <Button href='' className='square-button' variant='danger'><i className="fas fa-ban"></i></Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                {/* Custom Pagination Component */}
                <Col xs={3} className='d-flex align-items-center'>
                  <p className='m-0 opacity-50'><em>Showing 10 entries</em></p>
                </Col>
                <Col xs={9}>
                  <CustomPagination

                    totalItems={accounts.length}
                    itemsPerPage={accountsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
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
