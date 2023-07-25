import { Component } from "react";
const color = "color:black;";
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Agency
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"></li>
            <li className="nav-item">
              <a className="nav-link" href={`/Journies`}>
                Journies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/Vehicles`}>
                Vehicles
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href={`/Tickets`}>
                Tickets
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
