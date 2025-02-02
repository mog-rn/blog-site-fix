import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');

  const handleNavigation = (path) => {
    // if (path === '/author' && userRole !== 'AUTHOR') {
    //   alert('You need author privileges to access the Author Dashboard');
    //   return;
    // }
    // if (path === '/admin' && userRole !== 'ADMIN') {
    //   alert('You need admin privileges to access the Admin Dashboard');
    //   return;
    // }
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to AD Blogs Dashboard</h1>
      <div className="dashboard-cards">
        <div 
          className="dashboard-card"
          onClick={() => handleNavigation('/author')}
        >
          <div className="card-icon">✍️</div>
          <h2>Author Dashboard</h2>
          <p>Create and manage your blog posts</p>
        </div>

        <div 
          className="dashboard-card"
          onClick={() => handleNavigation('/admin')}
        >
          <div className="card-icon">👑</div>
          <h2>Admin Dashboard</h2>
          <p>Manage comments and user permissions</p>
        </div>

        <div 
          className="dashboard-card"
          onClick={() => handleNavigation('/home')}
        >
          <div className="card-icon">🏠</div>
          <h2>Home</h2>
          <p>View all blog posts</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;