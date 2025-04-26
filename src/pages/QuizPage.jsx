// src/pages/QuizPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/questions/Question';
import questionData from '../data/questions.json'; // <-- direct import

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(questionData); // directly use the imported data
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/quiz-end');
    }
  };

  return (
    <div className="quiz-page">
      <h2 className="text-xl font-semibold mb-4">Question {currentQuestionIndex + 1}</h2>
      {questions.length > 0 && (
        <Question
          question={questions[currentQuestionIndex]}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  );
};

export default QuizPage;
