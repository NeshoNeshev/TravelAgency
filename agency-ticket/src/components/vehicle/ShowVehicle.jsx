import { Component } from "react";
import { NavLink } from "react-router-dom";
import EditVenhicle from "./EditVenhicle";
import { deleteVehicle } from "../../services/vehicleService";

class ShowVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.vehicleID,
      reload: false,
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Model</th>
              <th scope="col">Passangers capacity</th>
              <th scope="col">price/km</th>
              <th scope="col">Type</th>
              <th scope="col">Additional</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.vehicleID}</td>
              <td>{this.props.vehicleModel}</td>
              <td>{this.props.passangerCapacity}</td>
              <td>{this.props.pricePerKilometer}</td>
              <td>{this.props.transportType}</td>
              <td>{this.props.additionalInfo}</td>
              <td>
                <NavLink
                  style={{ marginRight: "20px" }}
                  to={"EditVehicle/" + this.props.vehicleID}
                  render={(props) => <EditVenhicle {...props} />}
                  className="btn btn-success btn-sm"
                >
                  Edit
                </NavLink>

                <button
                  type="button"
                  onClick={(e) => deleteVehicle(this.state.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowVehicle;
