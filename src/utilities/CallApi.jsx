

import axios from "axios";
import { BASE_URL } from "./constants";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const callAPI = async (resource) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${resource}`, config);
    return data;
  } catch (error) {
    // Handle errors (optional)
    console.error("Error in API call:", error);
    throw error; // rethrow the error for further handling in the calling code
  }
};