import React from 'react';
import { Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={UserForm} />
    </div>
  );
}

export default App;
