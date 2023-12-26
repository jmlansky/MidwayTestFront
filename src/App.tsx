import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Error from './components/errorScreen';
import Dashboard from './components/dashboard';
import TeamMembers from './components/teamMembers';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/error" element={<Error />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team-members" element={<TeamMembers />} />
      </Routes>
    </Router>
  );
};

export default App;
