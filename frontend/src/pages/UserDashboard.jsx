import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppNavbar from '../components/Common/Navbar';
import ChatbotModal from '../components/Common/ChatbotModal';
import BmiTrackerCard from '../components/User/BmiTrackerCard';
import HealthHistoryList from '../components/User/HealthHistoryList';
import PrescriptionList from '../components/User/PrescriptionList';
import NearbyDoctorsList from '../components/User/NearbyDoctorsList';
import HealthAwarenessCards from '../components/User/HealthAwarenessCards';

const UserDashboard = ({ user, onLogout }) => {
  return (
    <>
      <AppNavbar user={user} onLogout={onLogout} />
      <Container className="py-4 main-content-container">
        <h2 className="mb-4">Welcome, {user.name}!</h2>
        <Row className="g-4">
          <Col lg={4} className="d-flex">
            <BmiTrackerCard />
          </Col>
          <Col lg={8} className="d-flex">
            <HealthAwarenessCards />
          </Col>
          <Col lg={6} className="d-flex">
            <PrescriptionList />
          </Col>
          <Col lg={6} className="d-flex">
            <NearbyDoctorsList />
          </Col>
          <Col lg={12} className="d-flex">
            <HealthHistoryList isDashboard={true} />
          </Col>
        </Row>
      </Container>
      <ChatbotModal />
    </>
  );
};

export default UserDashboard;