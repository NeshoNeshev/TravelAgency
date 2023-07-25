import { Component } from "react";
import { postAirplane } from "../../services/vehicleService";
import "./AddVehicle.css";
class AddAirplaneComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passangerCapacity: Number,
      pricePerKilometer: Number,
      hasFreeFood: false,
      id: 0,
      type: "Airplane",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onSubmitHandler(e) {
    e.preventDefault();
    postAirplane({
      passangerCapacity: e.target.passangerCapacity.value,
      pricePerKilometer: e.target.pricePerKilometer.value,
      hasFreeFood: e.target.hasFreeFood.value,
      id: 0,
    }).then((result) => {
      let status = {
        data: result.status,
      };
      if (status.data === 200) {
        window.location.href = "/Vehicles";
      }
    });
  }
  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  toggleCheckbox(event) {
    let newValue =
      this.state.hasFreeFood === "on" || this.state.hasFreeFood === true
        ? false
        : true;
    this.setState({
      hasFreeFood: newValue,
    });
  }
  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="passangerCapacity">Passanger Capacity</label>
            <input
              min={1}
              type="number"
              id="passangerCapacity"
              name="passangerCapacity"
              value={this.state.passangerCapacity}
              onChange={this.onChangeHandler}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="pricePerKilometer">Price Per Kilometer</label>
            <input
              type="number"
              id="pricePerKilometer"
              name="pricePerKilometer"
              value={this.state.pricePerKilometer}
              onChange={this.onChangeHandler}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="hasFreeFood">Has Free Food</label>
            <input
              checked={this.state.hasFreeFood}
              onChange={this.toggleCheckbox.bind(this)}
              style={{ defaultChecked: this.state.hasFreeFood }}
              type="checkbox"
              className="form-check-input"
              id="hasFreeFood"
              value={this.state.hasFreeFood}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default AddAirplaneComponent;
