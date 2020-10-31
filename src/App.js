import React from 'react';
import ErrorBoundary from './hocs/ErrorBoundary';
import Provider from './hocs/Provider';
import Alert from './components/UI/Alert';
import Navbar from './components/UI/Navbar';
import Board from './components/Board';
import './styles/global.css';

function App() {
  return (
    <ErrorBoundary>
      <Provider>
        <Alert />
        <Navbar />
        <Board />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;