import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  max-width: 1200px;
  margin: 1rem auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;

  h3 {
    font-size: 1.25rem;
    color: #333;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: #666;
    line-height: 1.5;
  }
`;

const JavaInfo: React.FC = () => {
  return (
    <InfoContainer>
      <Title>Java Programming Language</Title>
      <Description>
        Java is a versatile, class-based, object-oriented programming language designed to be simple, secure, and platform-independent. 
        It follows the principle of WORA (Write Once, Run Anywhere), making it one of the most popular programming languages.
      </Description>
      <FeatureGrid>
        <FeatureCard>
          <h3>
            <span role="img" aria-label="object">🔷</span>
            Object-Oriented
          </h3>
          <p>Everything in Java is an object that encapsulates data and behavior, making code organization and maintenance easier.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>
            <span role="img" aria-label="platform">🌐</span>
            Platform Independent
          </h3>
          <p>Java bytecode runs on any platform with a JVM, enabling true cross-platform compatibility.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>
            <span role="img" aria-label="secure">🔒</span>
            Simple and Secure
          </h3>
          <p>Java eliminates explicit pointers and features automatic memory management through garbage collection.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>
            <span role="img" aria-label="robust">⚡</span>
            Robust and Multithreaded
          </h3>
          <p>Strong type checking, exception handling, and built-in support for concurrent programming.</p>
        </FeatureCard>
      </FeatureGrid>
    </InfoContainer>
  );
};

export default JavaInfo; 