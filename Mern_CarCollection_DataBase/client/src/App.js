import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import CarsList from './components/cars-list';
import EditCar from './components/edit-car';
import AddCar from './components/add-car';

function App() {
  return (
    <Router>
      <Navbar />
      <main className='container app-shell' id='main-content'>
        <Switch>
          <Route path='/' exact component={CarsList} />
          <Route path='/edit/:id' exact component={EditCar} />
          <Route path='/add' exact component={AddCar} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
