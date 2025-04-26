// src/components/questions/Question.jsx
import React, { useState } from 'react';
import Option from './Option';
import CodeSnippet from './CodeSnippet';

const Question = ({ question, onNextQuestion, recordAnswer }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const correctAnswers = question.options.filter(opt => opt.isCorrect).map(opt => opt.text);
  const isMultiple = correctAnswers.length > 1;

  const handleOptionSelect = (optionText) => {
    if (isMultiple) {
      setSelectedOptions(prev =>
        prev.includes(optionText)
          ? prev.filter(o => o !== optionText)
          : [...prev, optionText]
      );
    } else {
      setSelectedOptions([optionText]);
    }
  };

  // const handleSubmit = () => {
  //   const isCorrect =
  //     selectedOptions.length === correctAnswers.length &&
  //     selectedOptions.every(opt => correctAnswers.includes(opt));

  //   recordAnswer(isCorrect);
  //   setSelectedOptions([]);
  //   onNextQuestion();

  // };
const handleSubmit = () => {
  recordAnswer(question, selectedOptions);
  onNextQuestion();
};

  return (
    <div className="p-6 rounded shadow-md w-full max-w-2xl bg-transparent text-white border border-white/30 backdrop-blur-sm">
      <h3 className="text-lg font-bold mb-4">{question.question}</h3>

      {question.type === 'code-snippet' && question.code && (
        <CodeSnippet code={question.code} />
      )}

      <div className="grid gap-3 mb-4">
        {question.options.map((option, idx) => (
          <Option
            key={idx}
            optionText={option.text}
            isSelected={selectedOptions.includes(option.text)}
            onSelect={() => handleOptionSelect(option.text)}
            type={isMultiple ? 'checkbox' : 'radio'}
            name={`question-${question.id}`}
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Submit
      </button>
    </div>
  );
};

export default Question;
