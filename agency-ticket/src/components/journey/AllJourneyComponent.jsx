import { Component } from "react";
import { getJournys } from "../../services/journyService";
import ShowJourneyComponent from "./ShowJourneyComponent";
import { NavLink } from "react-router-dom";
class AllJournyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { journies: [] };
  }

  componentDidMount() {
    getJournys().then((journies) => {
      console.log(journies.data);
      this.setState(() => ({ journies: journies.data }));
    });
  }

  render() {
    if (this.state.journies.length == 0) {
      return (
        <div className="container">
          <div className="row">
            <div className="col text-center mb-2 mt-2">
              <NavLink to="/AddJourny" className="btn btn-primary">
                Add Journy
              </NavLink>
            </div>
          </div>
          <div className="card text-center">
            <h2>No Tickets</h2>
          </div>
        </div>
      );
    }
    return (
      <>
        <div className="row">
          <div className="col text-center mb-2 mt-2">
            <NavLink to="/AddJourny" className="btn btn-primary">
              Add Journy
            </NavLink>
          </div>
        </div>
        {this.state.journies.map((x, i) => {
          return (
            <ShowJourneyComponent
              key={i}
              journeyId={x.journeyID}
              destination={x.destination}
              startLocation={x.startLocation}
              distance={x.distance}
              vehicleModel={x.vehicleModel}
              price={x.price}
            ></ShowJourneyComponent>
          );
        })}
      </>
    );
  }
}

export default AllJournyComponent;
