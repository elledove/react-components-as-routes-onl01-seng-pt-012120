import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,NavLink} from 'react-router-dom'
import About from './About';
import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';







  





ReactDOM.render(
  <Router>
    <div>
      <Navbar/>
   <Route exact path="/" component={Home}/>
   <Route path="/about" component={About}/>
   <Route path="/login" component={Login}/>
   </div>
  </Router>,
  document.getElementById('root')
);
