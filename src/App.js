import React from 'react';
import MySampleComponent from './components/MySampleComponent';
import './App.css';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';





function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
        <Route exact path='/' component={MySampleComponent} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
