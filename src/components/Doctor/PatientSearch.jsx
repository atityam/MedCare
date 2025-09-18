import React from 'react';
import { Card, Form, InputGroup, Button, ListGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const PatientSearch = () => {
  const [search, setSearch] = React.useState("");
  const [patients] = React.useState([
    { name: "John Doe", aadhaar: "XXXX-XXXX-1234" },
    { name: "Jane Smith", aadhaar: "XXXX-XXXX-5678" },
    { name: "Amit Kumar", aadhaar: "XXXX-XXXX-4321" },
    { name: "Priya Singh", aadhaar: "XXXX-XXXX-8765" },
  ]);
  const [filtered, setFiltered] = React.useState(patients);

  const handleSearch = () => {
    const term = search.trim().toLowerCase();
    if (!term) {
      setFiltered(patients);
      return;
    }
    setFiltered(
      patients.filter(
        p => p.name.toLowerCase().includes(term) || p.aadhaar.replace(/-/g,"").includes(term.replace(/-/g,""))
      )
    );
  };

  return (
    <Card className="card p-4 h-100 animated-card w-100 mb-4">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-2xl font-bold mb-4">Patient Search</Card.Title>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search by Aadhar ID or Name"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
          />
          <Button variant="primary" onClick={handleSearch}>
            <FaSearch />
          </Button>
        </InputGroup>
        <div className="flex-grow-1 overflow-auto">
          <ListGroup>
            {filtered.length === 0 ? (
              <ListGroup.Item className="bg-light my-2 rounded-lg text-muted">No patients found.</ListGroup.Item>
            ) : (
              filtered.map((p, idx) => (
                <ListGroup.Item key={idx} className="bg-light-blue my-2 rounded-lg">
                  {p.name} (Aadhar: {p.aadhaar})
                </ListGroup.Item>
              ))
            )}
          </ListGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PatientSearch;