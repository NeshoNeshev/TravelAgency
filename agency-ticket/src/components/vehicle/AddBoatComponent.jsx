import { Component } from "react";
import { postBoat } from "../../services/vehicleService";
import "./AddVehicle.css";
class AddBoatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passangerCapacity: Number,
      pricePerKilometer: Number,
      hasWaterSports: false,
      id: 0,
      type: props.type,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onSubmitHandler(e) {
    e.preventDefault();
    postBoat({
      passangerCapacity: e.target.passangerCapacity.value,
      pricePerKilometer: e.target.pricePerKilometer.value,
      hasWaterSports: e.target.hasWaterSports.value,
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

  toggleCheckboxBoat(event) {
    let newValue =
      this.state.hasWaterSports === "on" || this.state.hasWaterSports === true
        ? false
        : true;
    this.setState({
      hasWaterSports: newValue,
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
            <label htmlFor="hasWaterSports">Has Water sport</label>
            <input
              checked={this.state.hasWaterSports}
              onChange={this.toggleCheckboxBoat.bind(this)}
              style={{ defaultChecked: this.state.hasWaterSports }}
              type="checkbox"
              className="form-check-input"
              id="hasWaterSports"
              value={this.state.hasWaterSports}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default AddBoatComponent;
