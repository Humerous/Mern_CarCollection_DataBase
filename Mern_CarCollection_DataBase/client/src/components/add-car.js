import React, { Component } from 'react';
import axios from 'axios';

//<--- CLASS FOR ADDING A NEW CAR --->//
class AddCar extends Component {
  constructor(props) {
    super(props);

    this.onChangeOwner = this.onChangeOwner.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeMake = this.onChangeMake.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeRegistrationNumber = this.onChangeRegistrationNumber.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    //<--- INITIAL STATE FOR CAR INFO  --->//
    this.state = {
      owner: '',
      model: '',
      make: '',
      color: '',
      registration_Number: '',
    };
  }

  //<--- CAR OWNER INFO  --->//
  onChangeOwner(e) {
    this.setState({
      owner: e.target.value,
    });
  }

  //<--- CAR MODEL INFO  --->//
  onChangeModel(e) {
    this.setState({
      model: e.target.value,
    });
  }

  //<--- CAR MAKE INFO  --->//
  onChangeMake(e) {
    this.setState({
      make: e.target.value,
    });
  }

  //<--- CAR COLOR INFO  --->//
  onChangeColor(e) {
    this.setState({
      color: e.target.value,
    });
  }

  //<--- CAR REG INFO  --->//
  onChangeRegistrationNumber(e) {
    this.setState({
      registration_Number: e.target.value,
    });
  }

  //<--- FORM SUBMIT INFO BUTTON --->//
  onSubmit(e) {
    e.preventDefault();

    //<--- SET STATE --->//
    const car = {
      owner: this.state.owner,
      model: this.state.model,
      make: this.state.make,
      color: this.state.color,
      registration_Number: this.state.registration_Number,
    };

    console.log(car);
    axios
      .post('http://localhost:4000/cars/add', car)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Add Car Details</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Car Owner </label>
            <input
              type='text'
              className='form-control'
              value={this.state.owner}
              onChange={this.onChangeOwner}
              required
            />
          </div>
          <div className='form-group'>
            <label>Car Model</label>
            <input
              type='text'
              className='form-control'
              value={this.state.model}
              onChange={this.onChangeModel}
              required
            />
          </div>
          <div className='form-group'>
            <label>Car Make </label>
            <input
              type='text'
              className='form-control'
              value={this.state.make}
              onChange={this.onChangeMake}
              required
            />
          </div>
          <div className='form-group'>
            <label>Car Color </label>
            <input
              type='text'
              className='form-control'
              value={this.state.color}
              onChange={this.onChangeColor}
              required
            />
          </div>
          <div className='form-group'>
            <label>Car Registration Number </label>
            <input
              type='text'
              className='form-control'
              value={this.state.registration_Number}
              onChange={this.onChangeRegistrationNumber}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='Add New Car'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddCar;
