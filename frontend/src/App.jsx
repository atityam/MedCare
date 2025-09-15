import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/custom.css';
import LoginPage from './pages/LoginPage';
import UserDashboard from './pages/UserDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import GovernmentDashboard from './pages/GovernmentDashboard';
import UserHistoryPage from './pages/UserHistoryPage';
import UserPrescriptionsPage from './pages/UserPrescriptionsPage';
import UserNearbyPage from './pages/UserNearbyPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (userType) => {
    const newUser = { name: 'Migrant Worker', type: userType };
    if (userType === 'doctor') newUser.name = 'Dr. Emily Chen';
    if (userType === 'government') newUser.name = 'Public Health Admin';
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const renderDashboard = () => {
    if (!user) return <Navigate to="/login" />;
    switch (user.type) {
      case 'user':
        return <UserDashboard user={user} onLogout={handleLogout} />;
      case 'doctor':
        return <DoctorDashboard user={user} onLogout={handleLogout} />;
      case 'government':
        return <GovernmentDashboard user={user} onLogout={handleLogout} />;
      default:
        return <Navigate to="/login" />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/dashboard" element={renderDashboard()} />
        <Route path="/history" element={user && user.type === 'user' ? <UserHistoryPage user={user} onLogout={handleLogout} /> : <Navigate to="/dashboard" />} />
        <Route path="/prescriptions" element={user && user.type === 'user' ? <UserPrescriptionsPage user={user} onLogout={handleLogout} /> : <Navigate to="/dashboard" />} />
        <Route path="/nearby" element={user && user.type === 'user' ? <UserNearbyPage user={user} onLogout={handleLogout} /> : <Navigate to="/dashboard" />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;