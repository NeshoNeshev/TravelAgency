import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllJourneyComponent from "./components/journey/AllJourneyComponent";
import AllTicketComponent from "./components/ticket/AllTicketsComponent";
import ShowAllVehicles from "./components/vehicle/ShowAllVehicles";
import EditVehicle from "./components/vehicle/EditVenhicle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddVehicle from "./components/vehicle/AddVehicle";
import AddJourneyComponent from "./components/journey/AddJourneyComponent";
import AddTicket from "./components/ticket/AddTicket";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header></Header>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Journies" element={<AllJourneyComponent />} />
        <Route path="/Tickets" element={<AllTicketComponent />} />
        <Route path="/Vehicles" element={<ShowAllVehicles />} />
        <Route path="/EditVehicle/:id" element={<EditVehicle />} />
        <Route path="/Vehicles/EditVehicle/:id" element={<EditVehicle />} />
        <Route path="/AddVehicle" element={<AddVehicle />} />
        <Route path="/AddJourny" element={<AddJourneyComponent />} />
        <Route path="/AddTicket/:id" element={<AddTicket />} />
        <Route path="/Journies/AddTicket/:id" element={<AddTicket />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
