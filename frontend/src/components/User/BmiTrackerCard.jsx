import React, { useState } from 'react';
import { Card, Form, Button, ProgressBar } from 'react-bootstrap';
import { FaWeightScale } from 'react-icons/fa6';

const BmiTrackerCard = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBmi = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const calculatedBmi = w / ((h / 100) * (h / 100));
      setBmi(calculatedBmi.toFixed(2));
      if (calculatedBmi < 18.5) setStatus('Underweight');
      else if (calculatedBmi < 25) setStatus('Healthy weight');
      else if (calculatedBmi < 30) setStatus('Overweight');
      else setStatus('Obese');
    }
  };

  return (
    <Card className="card p-4 h-100 animated-card w-100">
      <Card.Body className="d-flex flex-column align-items-center text-center">
        <FaWeightScale size={50} className="text-success mb-4" />
        <Card.Title className="text-2xl font-bold mb-4">BMI Tracker</Card.Title>
        <Form className="w-100">
          <Form.Control type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} className="mb-3" />
          <Form.Control type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="mb-4" />
          <Button variant="primary" onClick={calculateBmi} className="w-100 btn-gradient-primary">Calculate BMI</Button>
        </Form>
        {bmi && (
          <div className="mt-4 w-100">
            <p className="text-lg fw-semibold">Your BMI: <span className="text-primary">{bmi}</span></p>
            <p className="text-sm text-muted">Status: {status}</p>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default BmiTrackerCard;