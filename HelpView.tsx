import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background-color: ${props => props.theme.background};
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: ${props => props.theme.secondaryText};
  font-size: 1.1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background-color: ${props => props.theme.secondaryBackground};
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid ${props => props.theme.border};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.75rem;
`;

const CardDescription = styled.p`
  color: ${props => props.theme.secondaryText};
  font-size: 0.95rem;
  line-height: 1.5;
`;

const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.secondaryBackground};
  color: ${props => props.theme.text};
  font-size: 1rem;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.primary}33;
  }

  &::placeholder {
    color: ${props => props.theme.secondaryText};
  }
`;

const helpItems = [
  {
    icon: '📚',
    title: 'Getting Started',
    description: 'New to CodeCraft? Learn the basics and get started with your first Java program.'
  },
  {
    icon: '🔧',
    title: 'Troubleshooting',
    description: 'Having issues? Find solutions to common problems and technical difficulties.'
  },
  {
    icon: '📝',
    title: 'Assignment Help',
    description: 'Learn how to submit assignments, take quizzes, and complete coding challenges.'
  },
  {
    icon: '💡',
    title: 'Study Tips',
    description: 'Discover effective learning strategies and best practices for mastering Java.'
  },
  {
    icon: '🤝',
    title: 'Community Support',
    description: 'Connect with other learners, join study groups, and participate in discussions.'
  },
  {
    icon: '🎯',
    title: 'Track Progress',
    description: 'Understand how to monitor your learning progress and earn achievements.'
  }
];

const HelpView: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Help Center</Title>
        <Subtitle>Find answers and get support for your learning journey</Subtitle>
      </Header>

      <SearchContainer>
        <SearchInput 
          placeholder="Search for help topics..." 
          type="text"
        />
      </SearchContainer>

      <Grid>
        {helpItems.map((item, index) => (
          <Card key={index}>
            <CardIcon>{item.icon}</CardIcon>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default HelpView; 