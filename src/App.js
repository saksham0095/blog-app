import React from 'react';
import './App.css';
import LoginComponent from './components/Login/login';
import FeedComponent from './components/Feed/Feed';
import {Route,NavLink} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import SignUpComponent from './components/SignUp/SignUp';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
    
    
    </div>
    <Route exact path="/login" component={LoginComponent}/>
    <Route exact path="/feed" component={FeedComponent}/>
    <Route exact path="/signup" component={SignUpComponent}/>
    </BrowserRouter>

  );
}

export default App;
