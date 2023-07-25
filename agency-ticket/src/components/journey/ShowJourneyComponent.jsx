import { Component } from "react";
import { deleteJournys } from "../../services/journyService";
import { NavLink } from "react-router-dom";
import AddTicket from "../ticket/AddTicket";
class ShowJourneyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.journeyId,
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Start Location</th>
              <th scope="col"> Destination</th>
              <th scope="col">Distance</th>
              <th scope="col">Vehicle info</th>
              <th scope="col">Price</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.journeyId}</td>
              <td>{this.props.startLocation}</td>
              <td>{this.props.destination}</td>
              <td>{this.props.distance}</td>
              <td>{this.props.vehicleModel}</td>
              <td>{this.props.price}</td>

              <td>
                <NavLink
                  style={{ marginBotom: "10px" }}
                  to={"AddTicket/" + this.props.journeyId}
                  render={(props) => <AddTicket {...props} />}
                  className="btn btn-primary btn-sm"
                >
                  Add Ticet
                </NavLink>
                <button
                  type="button"
                  onClick={(e) => deleteJournys(this.state.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default ShowJourneyComponent;
