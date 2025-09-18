import React, { useState } from 'react';
import { Card, Button, Modal, ListGroup } from 'react-bootstrap';
import { FaPills, FaDownload, FaCamera, FaTimes, FaCopy } from 'react-icons/fa';

const mockPrescriptions = [
  { id: 1, title: 'Fever Report - Dr. Smith' },
  { id: 2, title: 'Rx: Antibiotics - Dr. Jones' },
];

const PrescriptionList = () => {
  const [showModal, setShowModal] = useState(false);
  const [scanResult, setScanResult] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleNlpScan = () => {
    setShowModal(true);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult('Paracetamol 500mg, twice daily.');
    }, 3000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(scanResult);
    alert('Copied to clipboard!');
  };

  return (
    <Card className="card p-4 h-100 animated-card w-100">
      <Card.Body className="d-flex flex-column align-items-center text-center">
        <FaPills size={50} className="text-info mb-4" />
        <Card.Title className="text-2xl font-bold mb-4">Prescriptions & Reports</Card.Title>
        <ListGroup variant="flush" className="w-100">
          {mockPrescriptions.map((p) => (
            <ListGroup.Item key={p.id} className="d-flex justify-content-between align-items-center rounded-xl p-3 my-2 border-0 bg-light-blue">
              <span>{p.title}</span>
              <FaDownload className="text-primary cursor-pointer" />
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Button onClick={handleNlpScan} className="w-100 mt-4 btn-teal">
          <FaCamera className="me-2" />
          NLP Scan Prescription
        </Button>
      </Card.Body>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center p-5">
          <FaTimes className="position-absolute top-0 end-0 m-3 cursor-pointer text-muted" size={24} onClick={() => setShowModal(false)} />
          <h3 className="h4 fw-bold mb-4">Scanning Prescription...</h3>
          {isScanning ? (
            <div className="spinner-border text-primary" role="status"></div>
          ) : (
            <>
              <p className="fw-semibold text-success">{scanResult}</p>
              <Button onClick={handleCopy} className="mt-3 btn-purple">
                <FaCopy className="me-2" />
                Copy
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default PrescriptionList;