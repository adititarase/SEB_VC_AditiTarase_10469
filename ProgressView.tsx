import React from 'react';
import styled from 'styled-components';
import { courseData } from '../data/courseData';

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
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`;

const Section = styled.div`
  background-color: ${props => props.theme.secondaryBackground};
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid ${props => props.theme.border};
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
`;

const CourseProgress = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const CourseName = styled.h3`
  font-size: 1.1rem;
  color: ${props => props.theme.text};
`;

const ProgressText = styled.span`
  color: ${props => props.theme.primary};
  font-size: 0.9rem;
  font-weight: 500;
`;

const ProgressBar = styled.div<{ progress: number }>`
  height: 6px;
  background-color: ${props => props.theme.buttonBg};
  border-radius: 3px;
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
    border-radius: 3px;
    transition: width 0.3s ease;
  }
`;

const AchievementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Achievement = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: ${props => props.completed ? props.theme.primary + '1A' : props.theme.buttonBg};
  border-radius: 6px;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(4px);
  }
`;

const AchievementIcon = styled.div`
  font-size: 1.5rem;
`;

const AchievementInfo = styled.div`
  flex: 1;
`;

const AchievementTitle = styled.div`
  color: ${props => props.theme.text};
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const AchievementDescription = styled.div`
  color: ${props => props.theme.secondaryText};
  font-size: 0.9rem;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatCard = styled.div`
  background-color: ${props => props.theme.buttonBg};
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.secondaryText};
  font-size: 0.9rem;
`;

const ProgressView: React.FC = () => {
  const completedCourses = courseData.courses.filter(course => course.progress === 100).length;
  const totalModules = courseData.courses.reduce((acc, course) => acc + course.modules.length, 0);
  const completedModules = courseData.courses.reduce((acc, course) => 
    acc + Math.floor(course.progress / 25), 0);

  return (
    <Container>
      <Header>
        <Title>Your Progress</Title>
        <Subtitle>Track your learning journey and achievements</Subtitle>
      </Header>

      <Grid>
        <Section>
          <SectionTitle>Course Progress</SectionTitle>
          <Stats>
            <StatCard>
              <StatValue>{completedCourses}/{courseData.courses.length}</StatValue>
              <StatLabel>Courses Completed</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>{completedModules}/{totalModules}</StatValue>
              <StatLabel>Modules Completed</StatLabel>
            </StatCard>
          </Stats>
          {courseData.courses.map(course => (
            <CourseProgress key={course.id}>
              <CourseHeader>
                <CourseName>{course.title}</CourseName>
                <ProgressText>{course.progress}%</ProgressText>
              </CourseHeader>
              <ProgressBar progress={course.progress} />
            </CourseProgress>
          ))}
        </Section>

        <Section>
          <SectionTitle>Achievements</SectionTitle>
          <AchievementList>
            {courseData.achievements.map(achievement => (
              <Achievement key={achievement.id} completed={achievement.completed}>
                <AchievementIcon>
                  {achievement.completed ? '🏆' : '🎯'}
                </AchievementIcon>
                <AchievementInfo>
                  <AchievementTitle>{achievement.title}</AchievementTitle>
                  <AchievementDescription>{achievement.description}</AchievementDescription>
                </AchievementInfo>
              </Achievement>
            ))}
          </AchievementList>
        </Section>
      </Grid>
    </Container>
  );
};

export default ProgressView; 