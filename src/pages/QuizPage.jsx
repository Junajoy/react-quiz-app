import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/questions/Question';
import questionData from '../data/questions.json';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(questionData);
  }, []);

  const recordAnswer = (question, selectedOptions) => {
    const correctAnswers = question.options
      .filter((o) => o.isCorrect)
      .map((o) => o.text)
      .sort();

    const selected = [...selectedOptions].sort();

    const isCorrect =
      correctAnswers.length === selected.length &&
      correctAnswers.every((val, index) => val === selected[index]);

      setAnswers((prev) => [
        ...prev,
        {
          question: question.question,
          code: question.code || null,
          correctAnswers,
          selectedAnswers: selected,
          isCorrect,
        },
      ]);
      

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
          answers: answers,
        },
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
