import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Registration logic here
    alert('Registration successful!');
    navigate('/');
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light-blue-gradient">
      <Container className="p-4 p-md-5" style={{ maxWidth: '600px' }}>
        <Card className="rounded-4 shadow-lg p-5 text-center animated-card">
          <h2 className="fw-bold mb-3">Create Your Account</h2>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-4">
              <Form.Control type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control type="text" placeholder="Aadhaar ID" value={aadhaar} onChange={e => setAadhaar(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 py-3 fw-bold btn-gradient-primary mb-3">
              Register
            </Button>
            <Button variant="outline-secondary" className="w-100 py-3 fw-bold" onClick={() => navigate('/')}>Back to Login</Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default RegistrationPage;
