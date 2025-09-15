import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppNavbar from '../components/Common/Navbar';
import ChatbotModal from '../components/Common/ChatbotModal';
import SurveillanceDashboard from '../components/Government/SurveillanceDashboard';
import ReportCard from '../components/Government/ReportCard';
import { FaUsers, FaChartLine, FaDisease } from 'react-icons/fa';

const GovernmentDashboard = ({ user, onLogout }) => {
  return (
    <>
      <AppNavbar user={user} onLogout={onLogout} />
      <Container className="py-4 main-content-container">
        <h2 className="mb-4">Welcome, {user.name}!</h2>
        <Row className="g-4 mb-5">
          <Col lg={12}>
            <SurveillanceDashboard />
          </Col>
        </Row>
        <Row className="g-4">
          <Col lg={4}>
            <ReportCard icon={FaUsers} title="Total Migrant Records" value="150,000+" color="primary" />
          </Col>
          <Col lg={4}>
            <ReportCard icon={FaDisease} title="Disease Outbreaks (Current)" value="4" color="red" />
          </Col>
          <Col lg={4}>
            <ReportCard icon={FaChartLine} title="Avg. BMI" value="23.5" color="success" />
          </Col>
        </Row>
      </Container>
      <ChatbotModal />
    </>
  );
};

export default GovernmentDashboard;
