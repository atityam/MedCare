import React from 'react';
import { Container } from 'react-bootstrap';
import AppNavbar from '../components/Common/Navbar';
import ChatbotModal from '../components/Common/ChatbotModal';
import HealthHistoryList from '../components/User/HealthHistoryList';

const UserHistoryPage = ({ user, onLogout }) => {
  return (
    <>
      <AppNavbar user={user} onLogout={onLogout} />
      <Container className="py-4 main-content-container">
        <h2 className="mb-4">Complete Health History</h2>
        <HealthHistoryList isDashboard={false} />
      </Container>
      <ChatbotModal />
    </>
  );
};

export default UserHistoryPage;