import React from 'react';
import { Container, Card } from 'react-bootstrap';
import AppNavbar from '../components/Common/Navbar';
import ChatbotModal from '../components/Common/ChatbotModal';
import PrescriptionList from '../components/User/PrescriptionList';

const UserPrescriptionsPage = ({ user, onLogout }) => {
  return (
    <>
      <AppNavbar user={user} onLogout={onLogout} />
      <Container className="py-4 main-content-container">
        <h2 className="mb-4">My Prescriptions & Reports</h2>
        <PrescriptionList />
      </Container>
      <ChatbotModal />
    </>
  );
};

export default UserPrescriptionsPage;