import React from 'react';
import styled from 'styled-components';
import { courseData } from '../data/courseData';

const CoursesContainer = styled.div`
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

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const CourseCard = styled.div`
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

const CourseTitle = styled.h2`
  font-size: 1.25rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.75rem;
`;

const CourseDescription = styled.p`
  color: ${props => props.theme.secondaryText};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
`;

const ModuleList = styled.div`
  margin-top: 1rem;
`;

const ModuleItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  color: ${props => props.theme.text};
  font-size: 0.9rem;
  border-bottom: 1px solid ${props => props.theme.border};

  &:last-child {
    border-bottom: none;
  }
`;

const ProgressSection = styled.div`
  margin: 1.5rem 0;
`;

const ProgressBar = styled.div<{ progress: number }>`
  height: 4px;
  background-color: ${props => props.theme.buttonBg};
  border-radius: 2px;
  margin-bottom: 0.5rem;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background-color: ${props => props.theme.primary};
    border-radius: 2px;
    transition: width 0.3s ease;
  }
`;

const ProgressText = styled.div`
  color: ${props => props.theme.secondaryText};
  font-size: 0.9rem;
`;

const Badge = styled.span`
  background-color: ${props => props.theme.primary}33;
  color: ${props => props.theme.primary};
  padding: 0.2rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
`;

const CoursesView: React.FC = () => {
  return (
    <CoursesContainer>
      <Header>
        <Title>Available Courses</Title>
        <Subtitle>Explore our comprehensive Java programming curriculum</Subtitle>
      </Header>

      <CourseGrid>
        {courseData.courses.map(course => (
          <CourseCard key={course.id}>
            <CourseTitle>{course.title}</CourseTitle>
            <CourseDescription>{course.description}</CourseDescription>
            
            <ProgressSection>
              <ProgressBar progress={course.progress} />
              <ProgressText>{course.progress}% Complete</ProgressText>
            </ProgressSection>

            <Badge>{course.modules.length} Modules</Badge>
            
            <ModuleList>
              {course.modules.map((module, index) => (
                <ModuleItem key={index}>
                  {course.progress > (index * 25) ? '✅' : '📝'} {module}
                </ModuleItem>
              ))}
            </ModuleList>
          </CourseCard>
        ))}
      </CourseGrid>
    </CoursesContainer>
  );
};

export default CoursesView; 