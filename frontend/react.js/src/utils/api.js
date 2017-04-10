import axios from "axios";
import getConfig from './get-config'
const config = getConfig();

const AWS_GATEWAY = true;
let baseURL = "";

if (AWS_GATEWAY === true) {
  baseURL = config.api.dev;
} else {
  baseURL = "http://www.example.com";
}

function getData(url, cb, options = {}) {
  const instance = axios.create({
    baseURL: baseURL,
    responseType: "json",
    withCredentials: !AWS_GATEWAY,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  let newInstance = instance.get(url);
  console.log(newInstance);
  newInstance
    .then(function(response) {
      console.log(response);
      if (response.data) {
        cb(response.data);
      }
    })
    .catch(function(error) {
      cb({ error: "There is some issue with the request." });
    });
}

const utils = {
  getData: getData
};

module.exports = utils;
