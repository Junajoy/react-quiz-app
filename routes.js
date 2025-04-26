// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './src/pages/Home';
import QuizPage from './src/pages/QuizPage';
import QuizEndPage from './src/pages/QuizEndPage';

const RoutesConfig = () => {
  return React.createElement(Router, null, 
    React.createElement(Routes, null, 
      React.createElement(Route, { path: "/", element: React.createElement(Home) }),
      React.createElement(Route, { path: "/quiz", element: React.createElement(QuizPage) }),
      React.createElement(Route, { path: "/quiz-end", element: React.createElement(QuizEndPage) })
    )
  );
};

export default RoutesConfig;
