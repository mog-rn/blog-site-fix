import { useState } from 'react';
import '../Styles/login.css'
import { Link, useNavigate } from 'react-router-dom';

export const decodeToken = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
  
      console.log('Signup form submitted:', formData);
      console.log('Response:', response);
      
      const data = await response.json();
      console.log('Data:', data);
  
      if (response.status === 200) {
        const { access_token } = data;

        const decodedToken = decodeToken(access_token);
        if (!decodedToken) throw new Error('Invalid token');

        const { role } = decodedToken;

        localStorage.setItem('access_token', access_token);
        localStorage.setItem('user_role', role);

        navigate('/dashboard');
      } else {
        console.log('Login Unsuccessful');
        alert('Login Unsuccessful');
        setLoading(false);
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.log('An error occurred:', error);
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>LOG IN</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="login-btn">
          {loading ? 'loading...' : 'Login'}
          </button>

          <p>
            Don&apos;t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;