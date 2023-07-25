import { Component } from "react";
import { getTickets } from "../../services/ticketService";
import ShowTicketComponent from "./ShowTicketComponent";
import { NavLink } from "react-router-dom";
class AllTicketComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { tickets: [] };
  }

  componentDidMount() {
    getTickets().then((tickets) => {
      console.log(tickets.data);
      this.setState(() => ({ tickets: tickets.data }));
    });
  }

  render() {
    if (this.state.tickets.length == 0) {
      return (
        <div className="container">
          <div className="card text-center">
            <h2>No Tickets</h2>
          </div>
        </div>
      );
    }
    return (
      <>
        {this.state.tickets.map((x, i) => {
          return (
            <ShowTicketComponent
              key={i}
              ticketID={x.ticketID}
              administrativeCosts={x.administrativeCosts}
              journeyID={x.journeyID}
              totalPrice={x.totalPrice}
              from={x.from}
              to={x.to}
            ></ShowTicketComponent>
          );
        })}
      </>
    );
  }
}

export default AllTicketComponent;
