import React, { Component } from 'react';
import axios from 'axios';

//<--- CLASS FOR EDITING A CAR --->//
class EditCar extends Component {
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

    //<--- INITIAL STATE --->//
    this.state = {
      owner: '',
      model: '',
      make: '',
      color: '',
      registration_Number: '',
    };
  }

  componentDidMount() {
    //<--- RETRIEVE DATA --->//
    axios
      .get('http://localhost:4000/cars/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          owner: response.data.owner,
          model: response.data.model,
          make: response.data.make,
          color: response.data.color,
          registration_Number: response.data.registration_Number,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //<--- EDIT CAR OWNER INFO  --->//
  onChangeOwner(e) {
    this.setState({
      owner: e.target.value,
    });
  }

  //<--- EDIT CAR MODEL INFO  --->//
  onChangeModel(e) {
    this.setState({
      model: e.target.value,
    });
  }

  //<--- EDIT CAR MAKE INFO  --->//
  onChangeMake(e) {
    this.setState({
      make: e.target.value,
    });
  }

  //<--- EDIT COLOR MAKE INFO  --->//
  onChangeColor(e) {
    this.setState({
      color: e.target.value,
    });
  }

  //<--- EDIT CAR REG INFO  --->//
  onChangeRegistrationNumber(e) {
    this.setState({
      registration_Number: e.target.value,
    });
  }

  //<--- SUBMIT EDITs -  CAR INFO  --->//
  onSubmit(e) {
    e.preventDefault();

    //<--- SET NEW STATE --->//
    const car = {
      owner: this.state.owner,
      model: this.state.model,
      make: this.state.make,
      color: this.state.color,
      registration_Number: this.state.registration_Number,
    };

    console.log(car);
    axios
      .post(
        'http://localhost:4000/cars/update/' + this.props.match.params.id,
        car
      )
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Car Details</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Car Owner </label>
            <input
              type='text'
              className='form-control'
              value={this.state.owner}
              onChange={this.onChangeOwner}
            />
          </div>
          <div className='form-group'>
            <label>Car Model </label>
            <input
              type='text'
              className='form-control'
              value={this.state.model}
              onChange={this.onChangeModel}
            />
          </div>
          <div className='form-group'>
            <label>Car Make </label>
            <input
              type='text'
              className='form-control'
              value={this.state.make}
              onChange={this.onChangeMake}
            />
          </div>
          <div className='form-group'>
            <label>Car Color </label>
            <input
              type='text'
              className='form-control'
              value={this.state.color}
              onChange={this.onChangeColor}
            />
          </div>
          <div className='form-group'>
            <label>Car Registration Number </label>
            <input
              type='text'
              className='form-control'
              value={this.state.registration_Number}
              onChange={this.onChangeRegistrationNumber}
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Edit Car' className='btn btn-success' />
          </div>
        </form>
      </div>
    );
  }
}

export default EditCar;
