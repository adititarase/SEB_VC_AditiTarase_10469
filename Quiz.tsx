import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Progress = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.secondaryText};
`;

const Question = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const Option = styled.li<{ selected: boolean; correct: boolean; showFeedback: boolean }>`
  background: ${props =>
    props.showFeedback
      ? props.correct
        ? '#4caf50' // Green for correct answer
        : props.selected
        ? '#f44336' // Red for wrong answer
        : props.theme.secondaryBackground
      : props.selected
      ? props.theme.primary
      : props.theme.secondaryBackground};
  color: ${props =>
    props.showFeedback
      ? '#fff'
      : props.selected
      ? '#fff'
      : props.theme.text};
  padding: 0.75rem 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  cursor: ${props => (props.showFeedback ? 'default' : 'pointer')};
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;

  &:hover {
    background: ${props =>
      props.showFeedback ? undefined : props.theme.primaryHover};
    color: ${props => (props.showFeedback ? undefined : '#fff')};
  }
`;

const Button = styled.button`
  background: ${props => props.theme.primary};
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: ${props => props.theme.primaryHover};
  }

 
`;

const Result = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

interface QuestionType {
  question: string;
  options: string[];
  answerIndex: number;
}

const quizQuestions: QuestionType[] = [
  {
    question: "What is the size of int in Java?",
    options: ["8 bit", "16 bit", "32 bit", "64 bit"],
    answerIndex: 2,
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    options: ["this", "super", "extends", "implements"],
    answerIndex: 2,
  },
  {
    question: "What is the default value of a boolean variable?",
    options: ["true", "false", "null", "0"],
    answerIndex: 1,
  },
  {
    question: "Which method is used to start a thread in Java?",
    options: ["run()", "start()", "execute()", "init()"],
    answerIndex: 1,
  },
  {
    question: "Which of these is not a Java access modifier?",
    options: ["public", "private", "protected", "internal"],
    answerIndex: 3,
  },
  {
    question: "What is the parent class of all classes in Java?",
    options: ["Object", "Class", "Base", "Super"],
    answerIndex: 0,
  },
  {
    question: "Which package contains the Random class in Java?",
    options: ["java.util", "java.io", "java.lang", "java.math"],
    answerIndex: 0,
  },
  {
    question: "Which of these is a marker interface in Java?",
    options: ["Serializable", "Cloneable", "Both", "None"],
    answerIndex: 2,
  },
  {
    question: "What is the default value of a local variable in Java?",
    options: ["0", "null", "false", "No default value"],
    answerIndex: 3,
  },
  {
    question: "Which of these is not a feature of Java?",
    options: ["Platform Independent", "Object-Oriented", "Pointer Arithmetic", "Multithreaded"],
    answerIndex: 2,
  },
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const handleOptionClick = (index: number) => {
    if (!showFeedback) {
      setSelectedOption(index);
    }
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    if (selectedOption === quizQuestions[currentQuestion].answerIndex) {
      setScore(score + 1);
    }

    setShowFeedback(false);
    setSelectedOption(null);

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleCheckAnswer = () => {
    setShowFeedback(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setShowFeedback(false);
  };

  if (showResult) {
    return (
      <Container>
        <Result>
          🎉 You scored {score} out of {quizQuestions.length}!
        </Result>
        <Button onClick={handleRestart}>Restart Quiz</Button>
      </Container>
    );
  }

  return (
    <Container>
      <Progress>
        Question {currentQuestion + 1} of {quizQuestions.length}
      </Progress>
      <Question>{quizQuestions[currentQuestion].question}</Question>
      <OptionsList>
        {quizQuestions[currentQuestion].options.map((option, index) => (
          <Option
            key={index}
            selected={selectedOption === index}
            correct={index === quizQuestions[currentQuestion].answerIndex}
            showFeedback={showFeedback}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </Option>
        ))}
      </OptionsList>
      {showFeedback ? (
        <Button onClick={handleNext}>Next</Button>
      ) : (
        <Button onClick={handleCheckAnswer} disabled={selectedOption === null}>
          Check Answer
        </Button>
      )}
    </Container>
  );
};

export default Quiz;