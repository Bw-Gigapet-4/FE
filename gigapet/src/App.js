import React from 'react';
import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import History from './components/History';
import { Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Route exact path="/" component={LogIn} />
      <Route path="/signup/" component={SignUp} />

      {/* Routes below should be protected */}

      <Route path="/dashboard/" component={Dashboard} />
      <Route path="/history/:id" component={History} />
    </div>
  );
}

export default App;
