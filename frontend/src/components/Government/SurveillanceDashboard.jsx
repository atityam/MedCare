import React from 'react';
import { Card } from 'react-bootstrap';
import { FaMapMarkedAlt } from 'react-icons/fa';

const SurveillanceDashboard = () => {
  return (
    <Card className="card p-4 h-100 animated-card w-100">
      <Card.Body className="d-flex flex-column align-items-center text-center">
        <FaMapMarkedAlt size={50} className="text-primary mb-4" />
        <Card.Title className="text-2xl font-bold mb-4">Public Health Surveillance Map</Card.Title>
        <div className="w-100 h-96 bg-secondary bg-opacity-10 rounded-lg d-flex justify-content-center align-items-center text-muted">
          Interactive Map of Migrant Health Data
        </div>
      </Card.Body>
    </Card>
  );
};

export default SurveillanceDashboard;