import React, { useState, useRef, useEffect } from 'react';
import { Modal, Card, Form, InputGroup, Button } from 'react-bootstrap';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';

const ChatbotModal = () => {
  // Predefined Q&A for MedCare Connect
  const predefinedQA = [
    {
      question: 'What is MedCare Connect?',
      answer: 'MedCare Connect is a digital healthcare platform that connects users, doctors, and government agencies for better health management.'
    },
    {
      question: 'How do I find nearby doctors?',
      answer: 'Use the Nearby Doctors feature on your dashboard to locate and contact medical professionals close to you.'
    },
    {
      question: 'How do I track my health history?',
      answer: 'Your health records and history are available in the Health History section of your user dashboard.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, your data is securely stored and only accessible to authorized users.'
    },
    {
      question: 'How do I contact support?',
      answer: 'You can contact support via the Help section or by using this chatbot.'
    }
  ];

  // Handle predefined question click
  const handlePredefinedClick = (qa) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: qa.question, sender: 'user' },
      { text: qa.answer, sender: 'bot' }
    ]);
  };
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
          <Modal.Title className="d-flex align-items-center"><FaRobot className="me-2" /> MedCare Connect Chatbot</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <div ref={chatWindowRef} className="chat-container border border-gray-200 rounded-lg p-3 mb-3 bg-light" style={{ minHeight: '220px', maxHeight: '350px', overflowY: 'auto' }}>
            <div className="d-flex justify-content-start">
              <div className="p-3 rounded-lg chat-bubble-bot shadow-sm fade-in" style={{ background: '#e3f2fd', color: '#1976d2', fontWeight: '500', fontSize: '1rem', boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)' }}>
                Welcome to MedCare Connect! How can I help you today?
              </div>
            </div>
            {messages.map((msg, index) => (
              <div key={index} className={`d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                <div className={`p-3 rounded-lg max-w-75 shadow-sm fade-in ${msg.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}`}
                  style={{
                    background: msg.sender === 'user' ? '#fffde7' : '#e3f2fd',
                    color: msg.sender === 'user' ? '#fbc02d' : '#1976d2',
                    fontWeight: '500',
                    fontSize: '1rem',
                    marginBottom: '6px',
                    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)'
                  }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {/* Predefined Q&A Section at Bottom */}
            <div className="mt-3">
              <div style={{ fontWeight: 'bold', marginBottom: '8px', color: '#1976d2' }}>Quick Questions:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <>
                  {predefinedQA.map((qa, idx) => (
                    <Button key={idx} variant="outline-primary" size="sm" onClick={() => handlePredefinedClick(qa)} style={{ fontWeight: '500', color: '#1976d2', borderColor: '#1976d2' }} className="predef-btn">
                      {qa.question}
                    </Button>
                  ))}
                  <style>{`
                    .predef-btn {
                      transition: transform 0.15s;
                    }
                    .predef-btn:active {
                      transform: scale(0.96);
                    }
                    .predef-btn:hover {
                      background: inherit !important;
                      color: #1976d2 !important;
                      border-color: #1976d2 !important;
                    }
                  `}</style>
                </>
              </div>
            </div>
          </div>
          <style>{`
            .fade-in {
              animation: fadeIn 0.5s ease;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChatbotModal;