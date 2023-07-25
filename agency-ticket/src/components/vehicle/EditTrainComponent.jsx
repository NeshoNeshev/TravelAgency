import { Component } from "react";
import { updateTrain } from "../../services/vehicleService";
import "./AddVehicle.css";
var id = 0;
var num = 0;
class EditTrainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passangerCapacity: this.props.passangerCapacity,
      pricePerKilometer: this.props.pricePerKilometer,
      carts: this.props.additionalInfo[0],
      id: this.props.vehicleID,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    id = this.state.id;
    num = this.state.carts;
  }
  onSubmitHandler(e) {
    e.preventDefault();
    const input = updateTrain({
      passangerCapacity: e.target.passangerCapacity.value,
      pricePerKilometer: e.target.pricePerKilometer.value,
      carts: e.target.carts.value,
      id: id,
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
              max={5}
              type="number"
              id="pricePerKilometer"
              name="pricePerKilometer"
              value={this.state.pricePerKilometer}
              onChange={this.onChangeHandler}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="carts">Carts</label>
            <input
              type="number"
              id="carts"
              name="carts"
              value={this.state.carts}
              onChange={this.onChangeHandler}
            ></input>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}
export default EditTrainComponent;
