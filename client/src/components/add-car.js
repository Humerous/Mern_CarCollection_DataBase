import React, { Component } from 'react';
import axios from 'axios';

class AddCar extends Component {
  state = {
    owner: '',
    model: '',
    make: '',
    color: '',
    registration_Number: '',
    saving: false,
    error: '',
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ saving: true, error: '' });

    const car = {
      owner: this.state.owner,
      model: this.state.model,
      make: this.state.make,
      color: this.state.color,
      registration_Number: this.state.registration_Number,
    };

    try {
      await axios.post('/cars/add', car);
      this.props.history.push('/');
    } catch (error) {
      this.setState({
        saving: false,
        error: error.response?.data?.error || 'Unable to add the car. Please try again.',
      });
    }
  };

  renderField(name, label) {
    return (
      <div className='form-group'>
        <label htmlFor={`add-${name}`}>{label}</label>
        <input
          id={`add-${name}`}
          name={name}
          type='text'
          className='form-control'
          value={this.state[name]}
          onChange={this.onChange}
          required
        />
      </div>
    );
  }

  render() {
    return (
      <section className='content-card' aria-labelledby='add-car-title'>
        <h1 id='add-car-title'>Add Car</h1>
        <p className='page-intro'>Add a car to the collection.</p>

        {this.state.error && (
          <div className='alert alert-danger' role='alert'>
            {this.state.error}
          </div>
        )}

        <form onSubmit={this.onSubmit}>
          {this.renderField('owner', 'Owner')}
          {this.renderField('model', 'Model')}
          {this.renderField('make', 'Make')}
          {this.renderField('color', 'Colour')}
          {this.renderField('registration_Number', 'Registration number')}

          <button type='submit' className='btn btn-primary' disabled={this.state.saving}>
            {this.state.saving ? 'Adding…' : 'Add car'}
          </button>
        </form>
      </section>
    );
  }
}

export default AddCar;
