import axios from "axios";
import { BASE_URL } from "../resources/constants";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
export const getJournys = () => {
  return axios.get(BASE_URL + "Journey");
};
export const getJournysById = (data) => {
  return axios.get(BASE_URL + "Journey/" + data);
};

export const postJournys = async (data) => {
  var input = {
    vehicleID: Number(data.id),
    destination: data.destination,
    startLocation: data.startLocation,
    distance: data.distance,
  };
  try {
    const result = await axios.post(
      BASE_URL + "Journey",
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
export const deleteJournys = (data) => {
  console.log(data);
  axios
    .delete(BASE_URL + "Journey/" + data, JSON.stringify(data), {
      headers: headers,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
    window.location.href = "/Journies";
};
