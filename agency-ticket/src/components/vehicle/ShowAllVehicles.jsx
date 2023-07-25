import { Component } from "react";
import { getVehicle } from "../../services/vehicleService";
import ShowVehicle from "./ShowVehicle";
import { NavLink } from "react-router-dom";

class ShowAllVehicles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
    };
  }

  componentDidMount() {
    getVehicle().then((vehicles) => {
      this.setState(() => ({ vehicles: vehicles.data }));
    });
  }

  render() {
    if (this.state.vehicles.length == 0) {
      return (
        <div className="container">
          <div className="card text-center">
            <h2>No Vehicles</h2>
          </div>
        </div>
      );
    }
    return (
      <>
        <div className="row">
          <div className="col text-center mb-2 mt-2">
            <NavLink to="/AddVehicle" className="btn btn-primary">
              Add vehicle
            </NavLink>
          </div>
        </div>
        {this.state.vehicles.map((x, i) => {
          return (
            <ShowVehicle
              key={i}
              vehicleID={x.vehicleID}
              vehicleModel={x.vehicleModel}
              passangerCapacity={x.passangerCapacity}
              pricePerKilometer={x.pricePerKilometer}
              transportType={x.transportType}
              additionalInfo={x.additionalInfo}
            ></ShowVehicle>
          );
        })}
      </>
    );
  }
}

export default ShowAllVehicles;
