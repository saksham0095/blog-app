import React from 'react';
import './App.css';
import LoginComponent from './components/Login/login';
import FeedComponent from './components/Feed/Feed';
import {Route,NavLink} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavLink to="/login">Login</NavLink>

    
    
    </div>
    <Route exact path="/login" component={LoginComponent}/>
    <Route exact path="/feed" component={FeedComponent}/>
    </BrowserRouter>

  );
}

export default App;
