import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const QuizEndPage = () => {
  const location = useLocation();
  const { score = 0, answers = [] } = location.state || {};

  return (
    <div className="w-full min-h-screen bg-transparent text-white p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Quiz Completed!</h1>
        <p className="text-xl mb-6 text-center">
          Your Score: <span className="font-bold">{score}%</span>
        </p>

        <div className="rounded-md p-6 mb-6 backdrop-blur-sm bg-white/10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Your Answers:</h2>

          {answers.map((answer, index) => (
            <div key={index} className="mb-6 border-b border-white/20 pb-4">
              <p className="font-semibold">{index + 1}. {answer.question}</p>

              {/* Syntax-highlighted code block */}
              {answer.code && (
                <div className="my-3">
                  <SyntaxHighlighter
                    language="jsx"
                    style={oneDark}
                    customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}
                  >
                    {answer.code}
                  </SyntaxHighlighter>
                </div>
              )}

              <p className={`mt-1 ${answer.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                Your Answer: {answer.selectedAnswers.length > 0
                  ? answer.selectedAnswers.join(', ')
                  : 'No answer selected'}
              </p>

              {!answer.isCorrect && (
                <div className="mt-2">
                  <p className="text-green-300">Correct Answer(s):</p>
                  <ul className="list-disc list-inside text-green-300 ml-4">
                    {answer.correctAnswers.map((opt, i) => (
                      <li key={i}>{opt}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/">
            <button className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizEndPage;
