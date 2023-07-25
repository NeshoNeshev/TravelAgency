import axios from "axios";
import { BASE_URL } from "../resources/constants";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
export const getTickets = () => {
  return axios.get(BASE_URL + "Ticket");
};
export const getTicketById = () => {
  return axios.get(BASE_URL + "Ticket");
};
export const postTicket = async (data) => {
  var input = {
    administrativeCosts: Number(data.administrativeCosts),
    journeyID: data.journeyID,
  };
  try {
    const result = await axios.post(
      BASE_URL + "Ticket",
      JSON.stringify(input),
      {
        headers: headers,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const deleteTicket = (data) => {
  axios
    .delete(BASE_URL + "Ticket/" + data, JSON.stringify(data), {
      headers: headers,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  window.location.href = "/Tickets";
};
