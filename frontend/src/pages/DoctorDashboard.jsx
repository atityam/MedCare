import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppNavbar from '../components/Common/Navbar';
import ChatbotModal from '../components/Common/ChatbotModal';
import PatientSearch from '../components/Doctor/PatientSearch';
import { FaUserMd, FaChartBar, FaCalendarCheck } from 'react-icons/fa';

const DoctorDashboard = ({ user, onLogout }) => {
  return (
    <>
      <AppNavbar user={user} onLogout={onLogout} />
      <Container className="py-4 main-content-container">
        <h2 className="mb-4">Welcome, {user.name}!</h2>
        <Row className="g-4">
          <Col lg={12}>
            <PatientSearch />
          </Col>
          <Col lg={4}>
            <Card className="p-4 h-100 animated-card">
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <FaChartBar size={50} className="text-info mb-4" />
                <Card.Title>Patient Trends</Card.Title>
                <p className="text-muted">Analyze health trends of your patients.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="p-4 h-100 animated-card">
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <FaCalendarCheck size={50} className="text-teal mb-4" />
                <Card.Title>Appointment Management</Card.Title>
                <p className="text-muted">Manage your patient appointments easily.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="p-4 h-100 animated-card">
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <FaUserMd size={50} className="text-purple mb-4" />
                <Card.Title>Update Records</Card.Title>
                <p className="text-muted">Add new records and prescriptions.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ChatbotModal />
    </>
  );
};

export default DoctorDashboard;