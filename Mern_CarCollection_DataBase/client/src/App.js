import React from 'react';
import './App.css';

//<--- IMPORT BOOTSRAP SCRIPT --->//
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//<--- IMPORT ALL FILES --->//
import Navbar from './components/navbar';
import CarsList from './components/cars-list';
import EditCar from './components/edit-car';
import AddCar from './components/add-car';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        {/* HOME ROUTE */}
        <Route path='/' exact component={CarsList} />
        {/* CAR EDIT ROUTE */}
        <Route path='/edit/:id' exact component={EditCar} />
        {/* ADD NEW CAR */}
        <Route path='/add' exact component={AddCar} />
      </div>
    </Router>
  );
}

export default App;
