import { Component } from "react";
import "./AddVehicle.css";
import withRouter from "../../services/withRouter ";
import EditAirplaineComponent from "./EditAirplaneComponent";
import { getVehicleById } from "../../services/vehicleService";
import EditBoatComponent from "./EditBoatComponent";
import EditBusComponent from "./EditBusComponent";
import EditTrainComponent from "./EditTrainComponent";
class EditVenhicle extends Component {
  constructor(props) {
    super(props);
    this.state = { vehicle: {} };
  }
  componentDidMount() {
    getVehicleById(this.props.params.id).then((vehicle) => {
      this.setState(() => ({ vehicle: vehicle.data }));
    });
  }
  render() {
    if (this.state.vehicle.vehicleModel === "Airplane") {
      return (
        <>
          <div className="container">
            <h1>{this.state.vehicle.vehicleModel}</h1>
            <EditAirplaineComponent
              passangerCapacity={this.state.vehicle.passangerCapacity}
              vehicleID={this.state.vehicle.vehicleID}
              pricePerKilometer={this.state.vehicle.pricePerKilometer}
              additionalInfo={this.state.vehicle.additionalInfo.includes("Yes")}
            ></EditAirplaineComponent>
          </div>
        </>
      );
    } else if (this.state.vehicle.vehicleModel === "Bus") {
      return (
        <>
          <div className="container">
            <h1>{this.state.vehicle.vehicleModel}</h1>
            <EditBusComponent
              passangerCapacity={this.state.vehicle.passangerCapacity}
              vehicleID={this.state.vehicle.vehicleID}
              pricePerKilometer={this.state.vehicle.pricePerKilometer}
            ></EditBusComponent>
          </div>
        </>
      );
    } else if (this.state.vehicle.vehicleModel === "Boat") {
      return (
        <>
          <div className="container">
            <h1>Update {this.state.vehicle.vehicleModel}</h1>
            <EditBoatComponent
              passangerCapacity={this.state.vehicle.passangerCapacity}
              vehicleID={this.state.vehicle.vehicleID}
              pricePerKilometer={this.state.vehicle.pricePerKilometer}
              additionalInfo={this.state.vehicle.additionalInfo.includes("Yes")}
            ></EditBoatComponent>
          </div>
        </>
      );
    } else if (this.state.vehicle.vehicleModel === "Train") {
      return (
        <>
          <div className="container">
            <h1>Update {this.state.vehicle.vehicleModel}</h1>

            <EditTrainComponent
              passangerCapacity={this.state.vehicle.passangerCapacity}
              vehicleID={this.state.vehicle.vehicleID}
              pricePerKilometer={this.state.vehicle.pricePerKilometer}
              additionalInfo={this.state.vehicle.additionalInfo.match(/(\d+)/)}
            ></EditTrainComponent>
          </div>
        </>
      );
    }
  }
}
export default withRouter(EditVenhicle);
