import React, { useState, useRef, useEffect } from 'react';
import { Modal, Card, Form, InputGroup, Button } from 'react-bootstrap';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';

const ChatbotModal = () => {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatWindowRef = useRef(null);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    setTimeout(() => {
      const botResponse = {
        text: "Thank you for your query. I recommend consulting a medical professional for a proper diagnosis.",
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1500);
  };

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <Button onClick={handleShow} className="floating-chatbot-icon rounded-circle p-3 shadow-lg btn-gradient-primary">
        <FaRobot size={24} />
      </Button>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center"><FaRobot className="me-2" /> AI Health Chatbot</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <div ref={chatWindowRef} className="chat-container border border-gray-200 rounded-lg p-3 mb-3 bg-light">
            <div className="d-flex justify-content-start">
              <div className="p-3 rounded-lg chat-bubble-bot shadow-sm">
                Hello! How can I help you today?
              </div>
            </div>
            {messages.map((msg, index) => (
              <div key={index} className={`d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                <div className={`p-3 rounded-lg max-w-75 shadow-sm ${msg.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <InputGroup>
            <Form.Control type="text" placeholder="Ask a health question..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} />
            <Button variant="primary" onClick={handleSend}>
              <FaPaperPlane />
            </Button>
          </InputGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChatbotModal;