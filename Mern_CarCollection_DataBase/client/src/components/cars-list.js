import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//<--- CAR FUNCTION --->//
const Car = (props) => (
  <tr>
    <td>{props.car.owner}</td>
    <td>{props.car.model}</td>
    <td>{props.car.make}</td>
    <td>{props.car.color}</td>
    <td>{props.car.registration_Number}</td>
    <td>
      <Link to={'/edit/' + props.car._id}>
        {' '}
        <i className='text-success fas fa-pencil-alt'> edit</i>{' '}
      </Link>{' '}
      |{' '}
      <a
        href='/'
        onClick={() => {
          props.deleteCar(props.car._id);
        }}
      >
        {' '}
        <i className='text-danger fas fa-trash'> delete</i>{' '}
      </a>
    </td>
  </tr>
);

//<--- CLASS FOR CAR LIST  --->//
class CarsList extends Component {
  constructor(props) {
    super(props);
    this.deleteCar = this.deleteCar.bind(this);

    this.state = { cars: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/cars/')
      .then((response) => {
        this.setState({ cars: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //<--- DELTE CAR BY IDs --->//
  deleteCar(id) {
    axios.delete('http://localhost:4000/cars/' + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      cars: this.state.cars.filter((el) => el._id !== id),
    });
  }
  //<--- MAP THREW CAR LIST BY IDs --->//s
  carList() {
    return this.state.cars.map((currentcar) => {
      return (
        <Car car={currentcar} deleteCar={this.deleteCar} key={currentcar._id} />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Cars Collection</h3>
        {/* cars table*/}
        <table className='table'>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Model</th>
              <th>Make</th>
              <th>Color</th>
              <th>Registration Number</th>
            </tr>
          </thead>
          <tbody>{this.carList()}</tbody>
        </table>
      </div>
    );
  }
}

export default CarsList;
