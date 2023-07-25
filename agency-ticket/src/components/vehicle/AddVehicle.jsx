import { Component } from "react";
import "./AddVehicle.css";
import AddBoatComponent from "./AddBoatComponent";
import AddAirplaneComponent from "./AddAirplaneComponent";
import AddBusComponent from "./AddBusComponent";
import AddTrainComponent from "./AddTrainComponent";
const options = [
  { key: 1, label: "Airplane", value: "Airplane" },
  { key: 2, label: "Boat", value: "Boat" },
  { key: 3, label: "Bus", value: "Bus" },
  { key: 4, label: "Train", value: "Train" },
];

class AddVehicle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "Airplane",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.type === "Airplane") {
      return (
        <div className="container">
          <h1>{this.state.type}</h1>
          <form>
            <div className="form-group">
              <label htmlFor="type"></label>
              <select
                name="type"
                id="type"
                onChange={this.onChangeHandler}
                value={this.state.type}
              >
                {options.map((x) => (
                  <option key={x.key} value={x.value}>
                    {x.label}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <AddAirplaneComponent></AddAirplaneComponent>
        </div>
      );
    } else if (this.state.type === "Boat") {
      return (
        <div className="container">
          <h1>{this.state.type}</h1>
          <form>
            <div className="form-group">
              <label htmlFor="type"></label>
              <select
                name="type"
                id="type"
                onChange={this.onChangeHandler}
                value={this.state.type}
              >
                {options.map((x) => (
                  <option key={x.key} value={x.value}>
                    {x.label}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <AddBoatComponent></AddBoatComponent>
        </div>
      );
    } else if (this.state.type === "Bus") {
      return (
        <div className="container">
          <h1>{this.state.type}</h1>
          <form>
            <div className="form-group">
              <label htmlFor="type"></label>
              <select
                name="type"
                id="type"
                onChange={this.onChangeHandler}
                value={this.state.type}
              >
                {options.map((x) => (
                  <option key={x.key} value={x.value}>
                    {x.label}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <AddBusComponent></AddBusComponent>
        </div>
      );
    } else if (this.state.type === "Train") {
      return (
        <div className="container">
          <h1>{this.state.type}</h1>
          <form>
            <div className="form-group">
              <label htmlFor="type"></label>
              <select
                name="type"
                id="type"
                onChange={this.onChangeHandler}
                value={this.state.type}
              >
                {options.map((x) => (
                  <option key={x.key} value={x.value}>
                    {x.label}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <AddTrainComponent></AddTrainComponent>
        </div>
      );
    }
  }
}

export default AddVehicle;
