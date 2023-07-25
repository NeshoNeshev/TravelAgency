import { Component } from "react";
import withRouter from "../../services/withRouter ";
import { postTicket } from "../../services/ticketService";
var id = 0;
class AddTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journyId: this.props.params.id,
      administrativeCosts: Number,
    };
    console.log(this.props.params.id);
    id = this.state.journyId;
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onSubmitHandler(e) {
    e.preventDefault();
    const input = postTicket({
      administrativeCosts: e.target.administrativeCosts.value,
      journeyID: id,
    }).then((result) => {
      let status = {
        data: result.status,
      };
      if (status.data === 200) {
        window.location.href = "/Tickets";
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
            <label htmlFor="administrativeCosts">Administrative Costs</label>
            <input
              min={1}
              type="number"
              id="administrativeCosts"
              name="administrativeCosts"
              value={this.state.administrativeCosts}
              onChange={this.onChangeHandler}
            ></input>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(AddTicket);
