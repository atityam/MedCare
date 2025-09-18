import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

const mockLocations = [
  { id: 1, name: 'City General Hospital' },
  { id: 2, name: 'Dr. Emily Chen (Dermatology)' },
];

const NearbyDoctorsList = () => {
  return (
    <Card className="card p-4 h-100 animated-card w-100">
      <Card.Body className="d-flex flex-column align-items-center text-center">
        <FaMapMarkerAlt size={50} className="text-red mb-4" />
        <Card.Title className="text-2xl font-bold mb-4">Nearby Doctors & Hospitals</Card.Title>
        <div className="w-100 h-64 bg-secondary bg-opacity-10 rounded-lg d-flex justify-content-center align-items-center mb-4 text-muted">Map Placeholder</div>
        <ListGroup variant="flush" className="w-100">
          {mockLocations.map((loc) => (
            <ListGroup.Item key={loc.id} className="d-flex justify-content-between align-items-center rounded-xl p-3 my-2 border-0 bg-light-red">
              <span>{loc.name}</span>
              <FaDirections className="text-danger cursor-pointer" />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default NearbyDoctorsList;