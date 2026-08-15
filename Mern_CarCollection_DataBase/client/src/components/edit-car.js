import React, { Component } from 'react';
import axios from 'axios';

class EditCar extends Component {
  state = {
    owner: '',
    model: '',
    make: '',
    color: '',
    registration_Number: '',
    loading: true,
    saving: false,
    error: '',
  };

  async componentDidMount() {
    try {
      const response = await axios.get(`/cars/${this.props.match.params.id}`);
      this.setState({ ...response.data, loading: false });
    } catch (error) {
      this.setState({
        loading: false,
        error: error.response?.data?.error || 'Unable to load this car.',
      });
    }
  }

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
      await axios.post(`/cars/update/${this.props.match.params.id}`, car);
      this.props.history.push('/');
    } catch (error) {
      this.setState({
        saving: false,
        error: error.response?.data?.error || 'Unable to update the car. Please try again.',
      });
    }
  };

  renderField(name, label) {
    return (
      <div className='form-group'>
        <label htmlFor={`edit-${name}`}>{label}</label>
        <input
          id={`edit-${name}`}
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
    if (this.state.loading) {
      return <p role='status'>Loading car…</p>;
    }

    return (
      <section className='content-card' aria-labelledby='edit-car-title'>
        <h1 id='edit-car-title'>Edit Car</h1>
        <p className='page-intro'>Update the selected car details.</p>

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

          <button type='submit' className='btn btn-success' disabled={this.state.saving}>
            {this.state.saving ? 'Saving…' : 'Save changes'}
          </button>
        </form>
      </section>
    );
  }
}

export default EditCar;
