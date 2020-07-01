import React from "react";
import Axios from "axios";
import get from "get-value";

const request = Axios.create({
  baseURL: "/.netlify/functions/"
});

request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error(error.message);
    return Promise.reject(error);
  }
);

export default request;
