import React from 'react';
import { Container, Card } from 'react-bootstrap';
import AppNavbar from '../components/Common/Navbar';
import ChatbotModal from '../components/Common/ChatbotModal';
import NearbyDoctorsList from '../components/User/NearbyDoctorsList';

const UserNearbyPage = ({ user, onLogout }) => {
  return (
    <>
      <AppNavbar user={user} onLogout={onLogout} />
      <Container className="py-4 main-content-container">
        <h2 className="mb-4">Find Nearby Medical Facilities</h2>
        <NearbyDoctorsList />
      </Container>
      <ChatbotModal />
    </>
  );
};

export default UserNearbyPage;