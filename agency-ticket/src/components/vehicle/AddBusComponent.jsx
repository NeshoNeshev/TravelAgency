import { Component } from "react";
import { postBus } from "../../services/vehicleService";
import "./AddVehicle.css";
class AddBusComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passangerCapacity: Number,
      pricePerKilometer: Number,
      id: 0,
      type: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onSubmitHandler(e) {
    e.preventDefault();
    const input = postBus({
      passangerCapacity: e.target.passangerCapacity.value,
      pricePerKilometer: e.target.pricePerKilometer.value,
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

          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default AddBusComponent;
