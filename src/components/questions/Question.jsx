// src/components/questions/Question.jsx
import React, { useState } from 'react';
import Option from './Option';
import CodeSnippet from './CodeSnippet';

const Question = ({ question, onNextQuestion }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const isMultiple = question.type === 'multiple-choice';

  const handleOptionSelect = (optionText) => {
    if (isMultiple) {
      setSelectedOptions((prev) =>
        prev.includes(optionText)
          ? prev.filter((o) => o !== optionText)
          : [...prev, optionText]
      );
    } else {
      setSelectedOptions([optionText]);
    }
  };

  const handleSubmit = () => {
    // For now, just move to next question
    onNextQuestion();
  };

  return (
    <div className="p-4 border rounded-md">
      <h3 className="text-lg font-bold mb-4">{question.question}</h3>

      {question.type === 'code-snippet' && question.code && (
        <CodeSnippet code={question.code} />
      )}

      <div className="grid gap-2 mb-4">
        {question.options.map((option, idx) => (
          <Option
            key={idx}
            optionText={option.text}
            isSelected={selectedOptions.includes(option.text)}
            onSelect={() => handleOptionSelect(option.text)}
          />
        ))}
      </div>

      <button onClick={handleSubmit} className="bg-purple-900 text-white px-2 py-1 rounded">
        Submit
      </button>
    </div>
  );
};

export default Question;
