import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FaHeartbeat, FaUserCircle, FaSignOutAlt, FaTachometerAlt, FaHistory, FaPills, FaMapMarkerAlt, FaChartLine, FaUserMd } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

const AppNavbar = ({ user, onLogout }) => {
  return (
    <Navbar bg="white" variant="light" expand="lg" className="shadow-sm mb-4">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <FaHeartbeat size={30} className="text-primary me-2" />
          <h1 className="h4 fw-bold mb-0 text-dark">MedCare Connect</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user.type === 'user' && (
              <>
                <LinkContainer to="/dashboard"><Nav.Link><FaTachometerAlt className="me-1" /> Dashboard</Nav.Link></LinkContainer>
                <LinkContainer to="/history"><Nav.Link><FaHistory className="me-1" /> Health History</Nav.Link></LinkContainer>
                <LinkContainer to="/prescriptions"><Nav.Link><FaPills className="me-1" /> Prescriptions</Nav.Link></LinkContainer>
                <LinkContainer to="/nearby"><Nav.Link><FaMapMarkerAlt className="me-1" /> Nearby</Nav.Link></LinkContainer>
              </>
            )}
            {user.type === 'doctor' && (
              <>
                <LinkContainer to="/dashboard"><Nav.Link><FaTachometerAlt className="me-1" /> Dashboard</Nav.Link></LinkContainer>
                <LinkContainer to="/patients"><Nav.Link><FaUserMd className="me-1" /> Patient Records</Nav.Link></LinkContainer>
              </>
            )}
            {user.type === 'government' && (
              <>
                <LinkContainer to="/dashboard"><Nav.Link><FaTachometerAlt className="me-1" /> Dashboard</Nav.Link></LinkContainer>
                <LinkContainer to="/surveillance"><Nav.Link><FaChartLine className="me-1" /> Surveillance</Nav.Link></LinkContainer>
              </>
            )}
          </Nav>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-3">
              <FaUserCircle className="text-secondary me-2" />
              <span className="text-dark fw-medium">Hello, {user.name}!</span>
            </div>
            <Button variant="danger" onClick={onLogout} className="rounded-pill">
              <FaSignOutAlt className="me-2" /> Logout
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;