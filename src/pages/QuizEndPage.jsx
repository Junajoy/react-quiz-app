// src/pages/QuizEndPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const QuizEndPage = () => {
  return (
    <div className="quiz-end-page text-center">
      <h1 className="text-4xl font-bold my-10">Quiz Completed!</h1>
      <p>Your score: 8/10</p>
      <Link to="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-5">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default QuizEndPage;
