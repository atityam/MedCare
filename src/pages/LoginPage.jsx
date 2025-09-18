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
    <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)', overflow: 'hidden' }}>
  <Container style={{ maxWidth: '600px', padding: '0' }}>
        <Card className="rounded-4 shadow-lg p-4 text-center animated-card" style={{ minHeight: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <FaHeartbeat size={60} className="text-primary mx-auto mb-4" />
          <h1 className="fw-bold mb-3">Welcome to MedCare Connect</h1>
          <p className="text-muted mb-4">Please log in to your account.</p>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-4">
            <Form.Control
             type="text"
             placeholder={userType === 'doctor' ? 'Unique ID' : 'Aadhar ID'}
             value={aadhaarId}
             onChange={(e) => setAadhaarId(e.target.value)}
             required
            />
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
            <Button variant="primary" type="submit" className="w-100 py-3 fw-bold btn-gradient-primary mb-3">
              Secure Login
            </Button>
            <Button variant="outline-secondary" className="w-100 py-3 fw-bold" onClick={() => navigate('/register')}>
              Register
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default LoginPage;