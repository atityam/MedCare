import React from 'react';
import { Card, Form, InputGroup, Button, ListGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const PatientSearch = () => {
  return (
    <Card className="card p-4 h-100 animated-card w-100 mb-4">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-2xl font-bold mb-4">Patient Search</Card.Title>
        <InputGroup className="mb-3">
          <Form.Control placeholder="Search by Aadhar ID or Name" />
          <Button variant="primary">
            <FaSearch />
          </Button>
        </InputGroup>
        <div className="flex-grow-1 overflow-auto">
          <ListGroup>
            <ListGroup.Item className="bg-light-blue my-2 rounded-lg">John Doe (Aadhar: XXXX-XXXX-1234)</ListGroup.Item>
            <ListGroup.Item className="bg-light-blue my-2 rounded-lg">Jane Smith (Aadhar: XXXX-XXXX-5678)</ListGroup.Item>
          </ListGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PatientSearch;