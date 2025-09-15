import React, { useState } from 'react';
import { Container, Card, Form, Button, Dropdown } from 'react-bootstrap';
import { FaHeartbeat, FaUser, FaUserMd, FaBuilding } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [userType, setUserType] = useState('user');
  const [aadhaarId, setAadhaarId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(userType);
    navigate('/dashboard');
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light-blue-gradient">
      <Container className="p-4 p-md-5" style={{ maxWidth: '600px' }}>
        <Card className="rounded-4 shadow-lg p-5 text-center animated-card">
          <FaHeartbeat size={60} className="text-primary mx-auto mb-4" />
          <h1 className="fw-bold mb-3">Welcome to MedCare Connect</h1>
          <p className="text-muted mb-4">Please log in to your account.</p>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-4">
              <Form.Control type="text" placeholder="Aadhar ID" value={aadhaarId} onChange={(e) => setAadhaarId(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Dropdown className="mb-4 w-100">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="w-100 py-3 d-flex align-items-center justify-content-between">
                {userType === 'user' && <FaUser className="me-2" />}
                {userType === 'doctor' && <FaUserMd className="me-2" />}
                {userType === 'government' && <FaBuilding className="me-2" />}
                {`Login as ${userType.charAt(0).toUpperCase() + userType.slice(1)}`}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <Dropdown.Item onClick={() => setUserType('user')}><FaUser className="me-2" /> Individual</Dropdown.Item>
                <Dropdown.Item onClick={() => setUserType('doctor')}><FaUserMd className="me-2" /> Doctor</Dropdown.Item>
                <Dropdown.Item onClick={() => setUserType('government')}><FaBuilding className="me-2" /> Government</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="primary" type="submit" className="w-100 py-3 fw-bold btn-gradient-primary">
              Secure Login
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default LoginPage;