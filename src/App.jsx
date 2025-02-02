import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import HomePage from './Components/Homepage';
import AdminDashboard from './Components/Admindashboard';
import AuthorDashboard from './Components/Authordashboard';
import Dashboard from './Components/Dashboard';
import './App.css';

// Auth check functions
const isAdmin = () => {
  return localStorage.getItem('userRole') === 'admin';
};

const isAuthor = () => {
  return localStorage.getItem('userRole') === 'author';
};

// Protected Route components
const ProtectedAdminRoute = (children) => {
  if (!isAdmin()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const ProtectedAuthorRoute = (children) => {
  if (!isAuthor()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Protected Admin Route */}
        <Route 
          path="/admin" 
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          } 
        />

        {/* Protected Author Route */}
        <Route 
          path="/author" 
          element={
            <ProtectedAuthorRoute>
              <AuthorDashboard />
            </ProtectedAuthorRoute>
          } 
        />

        {/* Catch-all redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;