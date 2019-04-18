import axios from "axios";

// let frontendURL = "http://localhost:8080";
let localBackendURL = "http://192.168.15.161:5000/iqtest";
// let localBackendURL = "http://13.127.50.37:5000/iqtest";
// let productionURL = "";

export default axios.create({
  baseURL: localBackendURL
});
