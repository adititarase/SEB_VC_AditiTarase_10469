import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  console.log('LandingPage rendered'); // Debugging log

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundImage: 'url("/image.png")', // Use the image as the background
        backgroundSize: 'cover', // Ensure the image covers the entire page
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
        minHeight: '100vh',
        color: '#ffffff', // Ensure text is visible on the background
      }}
    >
      {/* Top Navigation Bar */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for the top bar
          padding: '1rem 2rem',
          color: 'white',
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ color: '#7c4dff', marginRight: '0.5rem' }}>&lt;/&gt;</span>
          CodeCraft
        </div>

        {/* Login and Signup Buttons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            style={{
              backgroundColor: 'transparent',
              border: '1px solid white',
              color: 'white',
              fontWeight: '600',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            style={{
              backgroundColor: 'white',
              color: '#004aad',
              fontWeight: '600',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Left side text */}
        <div
          style={{
            maxWidth: '600px',
            textAlign: 'left', // Align text to the left
            margin: '2rem 0', // Add margin to move it downwards
          }}
        >
          <h1 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '1rem' }}>
            Unlock your coding potential!
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#f0f0f0', marginBottom: '2rem' }}>
            Accessible education for everyone. Build real-world skills with our interactive platform.
          </p>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#004aad',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
              onClick={handleLogin}
            >
              Get Started
            </button>
            <button
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'white',
                color: '#004aad',
                border: '2px solid #004aad',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
              onClick={handleSignup}
            >
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
