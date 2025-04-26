// src/pages/QuizPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/questions/Question';
import questionData from '../data/questions.json';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(questionData);
  }, []);

  const recordAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      const percentage = Math.round((score / questions.length) * 100);
      navigate('/quiz-end', {
        state: {
          score: percentage,
          questions: questions
        }
      });
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-transparent text-white">
      {questions.length > 0 && (
        <Question
          question={questions[currentQuestionIndex]}
          onNextQuestion={handleNextQuestion}
          recordAnswer={recordAnswer}
        />
      )}
    </div>
  );
};

export default QuizPage;
