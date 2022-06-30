import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './Quiz';
import { QuizProvider } from './QuizContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuizProvider>
    <React.StrictMode>
      <Quiz />
    </React.StrictMode>
  </QuizProvider>
);
