import React from 'react';
import styled from 'styled-components';
import { courseData } from '../data/courseData'; // ✅ Corrected import

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

const AssignmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const AssignmentCard = styled.div`
  background-color: ${props => props.theme.secondaryBackground};
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid ${props => props.theme.border};
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const AssignmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const AssignmentTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const DueDate = styled.div`
  color: ${props => props.theme.primary};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TypeBadge = styled.span<{ type: string }>`
  background-color: ${props => {
    switch (props.type) {
      case 'Quiz':
        return '#4CAF50';
      case 'Programming':
        return '#2196F3';
      case 'Challenge':
        return '#FF9800';
      default:
        return props.theme.primary;
    }
  }}33;
  color: ${props => {
    switch (props.type) {
      case 'Quiz':
        return '#4CAF50';
      case 'Programming':
        return '#2196F3';
      case 'Challenge':
        return '#FF9800';
      default:
        return props.theme.primary;
    }
  }};
  padding: 0.2rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ActionButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  width: 100%;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.primaryHover};
  }
`;

const AssignmentsView: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Assignments</Title>
        <Subtitle>Complete assignments to test your knowledge and track your progress</Subtitle>
      </Header>

      <AssignmentGrid>
        {courseData.assignments.map(assignment => (
          <AssignmentCard key={assignment.id}>
            <AssignmentHeader>
              <div>
                <AssignmentTitle>{assignment.title}</AssignmentTitle>
                <DueDate>⏰ Due: {assignment.dueDate}</DueDate>
              </div>
              <TypeBadge type={assignment.type}>{assignment.type}</TypeBadge>
            </AssignmentHeader>
            <ActionButton>
              {assignment.type === 'Quiz' ? 'Start Quiz' : 'View Assignment'}
            </ActionButton>
          </AssignmentCard>
        ))}
      </AssignmentGrid>
    </Container>
  );
};

export default AssignmentsView;
