import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaBookMedical, FaRunning, FaAppleAlt, FaBrain, FaCalendarAlt } from 'react-icons/fa';

const modules = [
  { title: 'Fitness Tips', icon: FaRunning, color: 'success' },
  { title: 'Healthy Eating', icon: FaAppleAlt, color: 'success' },
  { title: 'Mental Well-being', icon: FaBrain, color: 'success' },
  { title: 'Vaccination Info', icon: FaCalendarAlt, color: 'success' },
];

const HealthAwarenessCards = () => {
  return (
    <Card className="card p-4 h-100 animated-card w-100">
      <Card.Body className="d-flex flex-column align-items-center text-center">
        <FaBookMedical size={50} className="text-warning mb-4" />
        <Card.Title className="text-2xl font-bold mb-4">Health Awareness</Card.Title>
        <Row className="g-3 w-100">
          {modules.map((mod, index) => (
            <Col xs={6} key={index}>
              <div className="bg-light-yellow p-4 rounded-xl text-center">
                <mod.icon size={36} className={`text-warning mb-2`} />
                <p className="font-semibold text-sm">{mod.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default HealthAwarenessCards;