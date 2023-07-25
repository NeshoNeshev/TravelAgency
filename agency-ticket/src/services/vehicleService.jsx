import axios from "axios";
import { BASE_URL } from "../resources/constants";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
export const getVehicle = () => {
  return axios.get(BASE_URL + "Vehicle");
};
export const getVehicleById = (data) => {
  return axios.get(BASE_URL + "Vehicle/" + data);
};

export const postAirplane = async (data) => {
  var isTrueSet = data.hasFreeFood === "true";
  var inputAirplane = {
    passangerCapacity: Number(data.passangerCapacity),
    pricePerKilometer: Number(data.pricePerKilometer),
    hasFreeFood: isTrueSet,
    id: 0,
  };

  try {
    const result = await axios.post(
      BASE_URL + "Airplane",
      JSON.stringify(inputAirplane),
      {
        headers: headers,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const postBoat = async (data) => {
  var isWaterSport = data.isWaterSport === "true";

  var inputBoat = {
    passangerCapacity: Number(data.passangerCapacity),
    pricePerKilometer: Number(data.pricePerKilometer),
    isWaterSport: isWaterSport,
    id: 0,
  };

  try {
    const result = await axios.post(
      BASE_URL + "Boat",
      JSON.stringify(inputBoat),
      {
        headers: headers,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const postBus = async (data) => {
  var inputBus = {
    passangerCapacity: Number(data.passangerCapacity),
    pricePerKilometer: Number(data.pricePerKilometer),
    id: 0,
  };

  try {
    const result = await axios.post(
      BASE_URL + "Bus",
      JSON.stringify(inputBus),
      {
        headers: headers,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const postTrain = async (data) => {
  console.log(data);
  var inputCarts = {
    passangerCapacity: Number(data.passangerCapacity),
    pricePerKilometer: Number(data.pricePerKilometer),
    carts: data.carts,
    id: 0,
  };

  try {
    const result = await axios.post(
      BASE_URL + "Train",
      JSON.stringify(inputCarts),
      {
        headers: headers,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const updateAirplane = async (data) => {
  var isTrueSet = data.hasFreeFood === "true";
  var inputAirplane = {
    passangerCapacity: Number(data.passangerCapacity),
    pricePerKilometer: Number(data.pricePerKilometer),
    hasFreeFood: isTrueSet,
    id: data.id,
  };
  try {
    const result = await axios.put(
      BASE_URL + "Airplane",
      JSON.stringify(inputAirplane),
      {
        headers: headers,
      }
    );
    return result;
  } catch (error) {
    return error;
  }
};
export const updateBoat = async (data) => {
  var isWaterSport = data.isWaterSport === "true";

  var inputBoat = {
    passangerCapacity: Number(data.passangerCapacity),
    pricePerKilometer: Number(data.pricePerKilometer),
    isWaterSport: isWaterSport,
    id: data.id,
  };

  try {
    const result = await axios.put(
      BASE_URL + "Boat",
      JSON.stringify(inputBoat),
      {
        headers: headers,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const updatetBus = async (data) => {
  var inputBus = {
    passangerCapacity: Number(data.passangerCapacity),
    pricePerKilometer: Number(data.pricePerKilometer),
    id: data.id,
  };

  try {
    const result = await axios.put(BASE_URL + "Bus", JSON.stringify(inputBus), {
      headers: headers,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const updateTrain = async (data) => {
  var inputCarts = {
    passangerCapacity: Number(data.passangerCapacity),
    pricePerKilometer: Number(data.pricePerKilometer),
    carts: data.carts,
    id: data.id,
  };
  console.log(inputCarts);
  try {
    const result = await axios.put(
      BASE_URL + "Train",
      JSON.stringify(inputCarts),
      {
        headers: headers,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const deleteVehicle = (data) => {
  console.log(data);
  axios
    .delete(BASE_URL + "Vehicle/" + data, JSON.stringify(data), {
      headers: headers,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  window.location.href = "/Vehicles";
};
