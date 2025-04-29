const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Set a fallback JWT secret if environment variable is missing
const JWT_SECRET = process.env.JWT_SECRET || 'your_fallback_jwt_secret_key';

// Register route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    // Validate input
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
    
    // Check if user exists
    let user = await User.findOne({ username: username.trim() });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Create new user
    user = new User({ 
      username: username.trim(), 
      password // Will be hashed by pre-save hook
    });
    
    await user.save();
    
    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    console.log(`User registered successfully: ${username}`);
    res.status(201).json({ 
      success: true,
      token, 
      username: user.username 
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Server error during registration' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    // Debug logging
    console.log(`Login attempt for: ${username}`);
    
    // Check if user exists
    const user = await User.findOne({ username: username.trim() });
    if (!user) {
      console.log(`User not found: ${username}`);
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Verify password using bcrypt compare
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log(`Password mismatch for user: ${username}`);
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    console.log(`Login successful for: ${username}`);
    res.json({ 
      success: true,
      token, 
      username: user.username 
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error during login' });
  }
});

module.exports = router;
