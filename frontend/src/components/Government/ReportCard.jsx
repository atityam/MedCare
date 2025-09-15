import React from 'react';
import { Card } from 'react-bootstrap';

const ReportCard = ({ icon: Icon, title, value, color }) => {
  return (
    <Card className={`card p-4 h-100 animated-card bg-light-${color}`}>
      <Card.Body className="d-flex flex-column align-items-center text-center">
        <Icon size={50} className={`text-${color} mb-4`} />
        <Card.Title className="h5 fw-bold">{title}</Card.Title>
        <h3 className={`display-6 fw-bold text-${color}`}>{value}</h3>
      </Card.Body>
    </Card>
  );
};

export default ReportCard;