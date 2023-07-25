import { Component } from "react";
import { deleteTicket } from "../../services/ticketService";
class ShowTicketComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.ticketID,
      reload: false,
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="container-fluid">
        <table className="table table-bordered" key={this.props.journeyId}>
          <thead>
            <tr>
              <th scope="col">Ticket ID</th>
              <th scope="col">Journey ID</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Administrative Costs</th>
              <th scope="col">Total Price</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row">
              <td>{this.props.ticketID}</td>

              <td>{this.props.journeyID}</td>
              <td>{this.props.from}</td>
              <td>{this.props.to}</td>
              <td>{this.props.administrativeCosts}</td>

              <td>{this.props.totalPrice}</td>

              <td>
              <button
                  type="button"
                  onClick={(e) => deleteTicket(this.state.id)}
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

export default ShowTicketComponent;
