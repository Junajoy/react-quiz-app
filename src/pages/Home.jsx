// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-6xl font-extrabold drop-shadow-lg mb-6 tracking-wide">
     BrainBolt
      </h1>
      <p className="text-lg max-w-lg mb-8 px-4 sm:px-0">
        Test your knowledge across various topics! Ready to challenge your mind with some quick questions?
      </p>
      <Link to="/quiz">
        <button className="bg-white text-indigo-700 font-bold text-xl px-8 py-4 rounded-full shadow-lg hover:bg-indigo-100 transition-all duration-300">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default Home;
