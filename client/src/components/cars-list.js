import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CarsList extends Component {
  state = {
    cars: [],
    loading: true,
    error: '',
    deletingId: '',
  };

  async componentDidMount() {
    await this.loadCars();
  }

  loadCars = async () => {
    try {
      const response = await axios.get('/cars');

      if (!Array.isArray(response.data)) {
        this.setState({
          cars: [],
          loading: false,
          error: 'Unexpected response from the car API.',
        });
        return;
      }

      this.setState({ cars: response.data, loading: false, error: '' });
    } catch (error) {
      this.setState({
        loading: false,
        error: error.response?.data?.error || 'Unable to load the car collection.',
      });
    }
  };

  deleteCar = async (car) => {
    const confirmed = window.confirm(`Delete ${car.make} ${car.model}?`);
    if (!confirmed) return;

    this.setState({ deletingId: car._id, error: '' });

    try {
      await axios.delete(`/cars/${car._id}`);
      this.setState((state) => ({
        cars: state.cars.filter((item) => item._id !== car._id),
        deletingId: '',
      }));
    } catch (error) {
      this.setState({
        deletingId: '',
        error: error.response?.data?.error || 'Unable to delete the car.',
      });
    }
  };

  render() {
    const { cars, loading, error, deletingId } = this.state;

    return (
      <section className='content-card' aria-labelledby='collection-title'>
        <div className='page-heading'>
          <div>
            <h1 id='collection-title'>David Miller’s Garage</h1>
            <p className='page-intro'>A restored MERN CRUD project with safe demo data.</p>
          </div>
          <Link to='/add' className='btn btn-primary'>
            Add car
          </Link>
        </div>

        {error && (
          <div className='alert alert-danger' role='alert'>
            {error}
          </div>
        )}

        {loading ? (
          <p role='status'>Loading cars…</p>
        ) : cars.length === 0 ? (
          <div className='empty-state'>
            <p>No cars are currently in the collection.</p>
            <Link to='/add'>Add the first car</Link>
          </div>
        ) : (
          <div className='table-responsive'>
            <table className='table table-hover car-table'>
              <caption className='sr-only'>Cars currently stored in the collection</caption>
              <thead>
                <tr>
                  <th scope='col'>Owner</th>
                  <th scope='col'>Make</th>
                  <th scope='col'>Model</th>
                  <th scope='col'>Colour</th>
                  <th scope='col'>Registration</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car._id}>
                    <td>{car.owner}</td>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.color}</td>
                    <td>{car.registration_Number}</td>
                    <td className='actions-cell'>
                      <Link to={`/edit/${car._id}`} className='btn btn-sm btn-outline-success'>
                        Edit
                      </Link>
                      <button
                        type='button'
                        className='btn btn-sm btn-outline-danger'
                        onClick={() => this.deleteCar(car)}
                        disabled={deletingId === car._id}
                      >
                        {deletingId === car._id ? 'Deleting…' : 'Delete'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    );
  }
}

export default CarsList;
