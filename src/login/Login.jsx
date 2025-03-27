import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Login.css'; // We'll define the CSS below

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { username, password });
    // Add your login logic here
  };

  // Animation variants for the form container
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut' 
      } 
    },
  };

  // Animation variants for inputs
  const inputVariants = {
    focus: { 
      scale: 1.02, 
      borderColor: '#6b48ff', 
      transition: { duration: 0.3 } 
    },
    blur: { 
      scale: 1, 
      borderColor: '#ccc', 
      transition: { duration: 0.3 } 
    },
  };

  return (
    <div className="login-container">
      <motion.div 
        className="login-form"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="login-title">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <motion.div 
            className="input-group"
            variants={inputVariants}
            whileFocus="focus"
            initial="blur"
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </motion.div>
          <motion.div 
            className="input-group"
            variants={inputVariants}
            whileFocus="focus"
            initial="blur"
          >
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>
          <motion.button
            className="login-button"
            whileHover={{ scale: 1.05, backgroundColor: '#5a3ee6' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            type="submit"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;