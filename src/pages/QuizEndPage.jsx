// src/pages/QuizEndPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const QuizEndPage = () => {
  const location = useLocation();
  const { score = 0, questions = [] } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white p-6">
      <h1 className="text-4xl font-bold mb-4"> Quiz Completed!</h1>
      <p className="text-xl mb-6">Your Score: <span className="font-bold">{score}%</span></p>

      <div className="w-full max-w-3xl  rounded-md p-6 mb-6 overflow-y-auto backdrop-blur-sm">
        <h2 className="text-2xl font-semibold mb-4 text-white">Correct Answers:</h2>
        {questions.map((q, index) => (
          <div key={index} className="mb-4 border-b border-white/20 pb-4">
            <p className="font-semibold">{index + 1}. {q.question}</p>
            <ul className="list-disc list-inside text-green-300 ml-4">
              {q.options.filter(opt => opt.isCorrect).map((opt, i) => (
                <li key={i}>{opt.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link to="/">
        <button className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default QuizEndPage;
