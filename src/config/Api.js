import React from "react";
import axios from "axios";

export const Api = async () => {
  try {
    let url = "https://5c4a87jm1e.execute-api.eu-west-1.amazonaws.com/dev/todos/fiverrTrial";

    const response = await axios.get(url);
    const api = {
      data: response.data,
    };
    return api;
  } catch (error) {
    const api = {
      error: error,
    };
    return api;
  }
};