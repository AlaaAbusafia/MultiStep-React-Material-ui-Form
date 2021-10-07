import React from 'react';
import { Route } from 'react-router-dom';
import RegisterUserForm from './components/RegisterUserForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={RegisterUserForm} />
    </div>
  );
}

export default App;
