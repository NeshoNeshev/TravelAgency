import { Component } from "react";
import "../vehicle/AddVehicle.css";
import { getVehicle } from "../../services/vehicleService";
import { postJournys } from "../../services/journyService";
class AddJourneyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      id: "",
      destination: "",
      startLocation: "",
      distance: Number,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  componentDidMount() {
    getVehicle().then((vehicles) => {
      this.setState(() => ({ vehicles: vehicles.data }));
    });
  }
  onSubmitHandler(e) {
    e.preventDefault();
    postJournys({
      destination: e.target.destination.value,
      startLocation: e.target.startLocation.value,
      distance: e.target.distance.value,
      id: e.target.id.value,
    }).then((result) => {
      let status = {
        data: result.status,
      };
      if (status.data === 200) {
        window.location.href = "/Journies";
      }
    });
  }
  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="id"></label>
            <select
              name="id"
              id="id"
              onChange={this.onChangeHandler}
              value={this.state.type}
            >
              {this.state.vehicles.map((x) => (
                <option key={x.vehicleID} value={x.vehicleID}>
                  {x.vehicleID} {x.vehicleModel}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input
              min={1}
              type="text"
              id="destination"
              name="destination"
              value={this.state.destination}
              onChange={this.onChangeHandler}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="startLocation">Start Location</label>
            <input
              type="text"
              id="startLocation"
              name="startLocation"
              value={this.state.startLocation}
              onChange={this.onChangeHandler}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="distance">Distance</label>
            <input
              type="number"
              id="distance"
              name="distance"
              value={this.state.distance}
              onChange={this.onChangeHandler}
            ></input>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddJourneyComponent;
