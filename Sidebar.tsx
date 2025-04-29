import React, { useState } from 'react';
import styled from 'styled-components';
import { courseData } from '../data/courseData';
import { View } from '../App';

const SidebarContainer = styled.div`
  width: 300px;
  background-color: ${props => props.theme.secondaryBackground};
  border-right: 1px solid ${props => props.theme.border};
  padding: 2rem;
  overflow-y: auto;
`;

const WelcomeSection = styled.div`
  margin-bottom: 2rem;
`;

const Welcome = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const Student = styled.h2`
  font-size: 1.75rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const Level = styled.div`
  color: ${props => props.theme.primary};
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

interface ProgressBarProps {
  progress: number;
}

const ProgressBarBase = styled.div`
  height: 6px;
  background-color: ${props => props.theme.buttonBg};
  border-radius: 3px;
  margin-bottom: 0.5rem;
  overflow: hidden;
  position: relative;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <ProgressBarBase>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: `${progress}%`,
        backgroundColor: '#7c4dff',
        borderRadius: '3px',
        transition: 'width 0.3s ease'
      }}
    />
  </ProgressBarBase>
);

const ProgressText = styled.div`
  color: ${props => props.theme.secondaryText};
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;

const QuickLinks = styled.div`
  margin-bottom: 2rem;
`;

const LinkItem = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  width: 100%;
  background: ${props => props.active ? props.theme.primary + '20' : 'transparent'};
  border: none;
  border-radius: 6px;
  color: ${props => props.active ? props.theme.primary : props.theme.text};
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme.primary + '10'};
    color: ${props => props.theme.primary};
  }
`;

const SubLinkItem = styled(LinkItem)`
  padding-left: 2.5rem;
  font-size: 0.95rem;
  color: ${props => props.active ? props.theme.primary : props.theme.secondaryText};
`;

const TopicDescription = styled.div`
  padding: 1rem;
  margin: 0.5rem 0;
  background-color: ${props => props.theme.buttonBg};
  border-radius: 6px;
  font-size: 0.95rem;
  color: ${props => props.theme.secondaryText};
  line-height: 1.5;

  h4 {
    color: ${props => props.theme.text};
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  code {
    background-color: ${props => props.theme.background};
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Consolas', monospace;
    font-size: 0.9rem;
  }
`;

interface SidebarProps {
  onViewChange: (view: View, topic?: string) => void;
  student_name: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onViewChange, student_name }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleTopicClick = (topic: string) => {
    onViewChange('topic', topic);
  };

  return (
    <SidebarContainer>
      <WelcomeSection>
        <Welcome>Welcome,</Welcome>
        <Student>{student_name}</Student>
        <Level>{courseData.currentLevel}</Level>
      </WelcomeSection>

      <SectionTitle>Course Progress</SectionTitle>
      <ProgressBar progress={courseData.progress} />
      <ProgressText>{courseData.progress}% Complete</ProgressText>

      <QuickLinks>
        <SectionTitle>Quick Links</SectionTitle>
        <LinkItem onClick={() => toggleSection('basics')}>
          📚 Java Basics {expandedSections.includes('basics') ? '▾' : '▸'}
        </LinkItem>
        {expandedSections.includes('basics') && (
          <>
            <SubLinkItem onClick={() => handleTopicClick('getting-started')}>Get Started</SubLinkItem>
            <SubLinkItem onClick={() => handleTopicClick('syntax')}>Syntax</SubLinkItem>
            <SubLinkItem onClick={() => handleTopicClick('output')}>Output/Print</SubLinkItem>
            <SubLinkItem onClick={() => handleTopicClick('comments')}>Comments</SubLinkItem>
          </>
        )}
        
        <LinkItem onClick={() => toggleSection('datatypes')}>
          💻 Data Types & Variables {expandedSections.includes('datatypes') ? '▾' : '▸'}
        </LinkItem>
        {expandedSections.includes('datatypes') && (
          <>
            <SubLinkItem onClick={() => handleTopicClick('variables')}>
              Variables
            </SubLinkItem>
            <SubLinkItem onClick={() => handleTopicClick('datatypes')}>
              Data Types
            </SubLinkItem>
            <SubLinkItem onClick={() => handleTopicClick('typecasting')}>
              Type Casting
            </SubLinkItem>
            <SubLinkItem onClick={() => handleTopicClick('operators')}>
              Operators
            </SubLinkItem>
          </>
        )}

        <LinkItem onClick={() => toggleSection('controlflow')}>
          🔄 Control Flow {expandedSections.includes('controlflow') ? '▾' : '▸'}
        </LinkItem>
        {expandedSections.includes('controlflow') && (
          <>
            <SubLinkItem onClick={() => handleTopicClick('if-else')}>If...Else</SubLinkItem>
            <SubLinkItem onClick={() => handleTopicClick('switch')}>Switch</SubLinkItem>
            <SubLinkItem onClick={() => handleTopicClick('loops')}>Loops</SubLinkItem>
            <SubLinkItem onClick={() => handleTopicClick('break-continue')}>Break/Continue</SubLinkItem>
          </>
        )}

        <LinkItem onClick={() => toggleSection('oop')}>
          🎯 OOP Concepts {expandedSections.includes('oop') ? '▾' : '▸'}
        </LinkItem>
        {expandedSections.includes('oop') && (
          <>
            <SubLinkItem onClick={() => handleTopicClick('classes-objects')}>Classes & Objects</SubLinkItem>
            <SubLinkItem onClick={() => handleTopicClick('methods')}>Methods</SubLinkItem>
            <SubLinkItem onClick={() => handleTopicClick('inheritance')}>Inheritance</SubLinkItem>
            <SubLinkItem onClick={() => handleTopicClick('polymorphism')}>Polymorphism</SubLinkItem>
          </>
        )}
      </QuickLinks>

      <LinkItem onClick={() => onViewChange('help')}>
        💬 Discussion Forum
      </LinkItem>
    </SidebarContainer>
  );
};

export default Sidebar;
