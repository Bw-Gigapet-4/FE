import React from 'react';
import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={LogIn} />
      <Route path="/signup/" component={SignUp} />

      <Route path="/dashboard/" component={Dashboard} />
    </div>
  );
}

export default App;
