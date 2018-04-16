import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import NoPage from './components/NoPage';
import CustomNavbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <CustomNavbar />
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route component={NoPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
