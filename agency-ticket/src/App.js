import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="headline-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mx-auto text-center">
                <h1 className="mb-0">Hello Qni Qnakiev</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
