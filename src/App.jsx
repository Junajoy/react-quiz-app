// src/App.jsx
import React from 'react';
import RoutesConfig from '../routes'; // Import the RoutesConfig from routes.js

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-black to-blue-900 text-white flex flex-col items-center justify-center px-4">
      <RoutesConfig />  {/* Render the RoutesConfig to handle routing */}
    </div>
  );
};

export default App;
