import {Routes, Route, Navigate, Outlet } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import HomePage from './Components/Homepage';
import AdminDashboard from './Components/Admindashboard';
import AuthorDashboard from './Components/Authordashboard';
import Dashboard from './Components/Dashboard';
import './App.css';


const isAdmin = () => {
  return localStorage.getItem('userRole') === 'admin';
};

const isAuthor = () => {
  return localStorage.getItem('userRole') === 'author';
};


const ProtectedAdminRoute = () => {
  if (!isAdmin()) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />; 
};

const ProtectedAuthorRoute = () => {
  if (!isAuthor()) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />; 
};

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        
        <Route 
          path="/admin" 
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          } 
        />

        
        <Route 
          path="/author" 
          element={
            <ProtectedAuthorRoute>
              <AuthorDashboard />
            </ProtectedAuthorRoute>
          } 
        />
     
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
}

export default App;