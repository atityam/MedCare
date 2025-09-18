import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FaHistory } from 'react-icons/fa';

const mockHistory = [
  { id: 1, symptom: 'Cough & Fever', date: '2023-10-26', precaution: 'Rest and hydration.' },
  { id: 2, symptom: 'Headache', date: '2023-09-15', precaution: 'Avoid screen time.' },
];

const HealthHistoryList = ({ isDashboard }) => {
  const historyToShow = isDashboard ? mockHistory.slice(0, 2) : mockHistory;
  return (
    <Card className="card p-4 h-100 animated-card w-100">
      <Card.Body className="d-flex flex-column align-items-center text-center">
        <FaHistory size={50} className="text-purple mb-4" />
        <Card.Title className="text-2xl font-bold mb-4">Health History</Card.Title>
        <ListGroup variant="flush" className="w-100">
          {historyToShow.map((item) => (
            <ListGroup.Item key={item.id} className="rounded-xl p-3 my-2 border-0 bg-light-purple">
              <p className="fw-bold mb-1">{item.symptom}</p>
              <p className="text-sm text-muted mb-1">Reported on: {item.date}</p>
              <p className="text-sm text-muted mb-0">Precaution: {item.precaution}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default HealthHistoryList;