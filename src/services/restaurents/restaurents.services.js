/** @format */

import { mocks } from "./mock";
import camelize from "camelize";

export const restaurentRequests = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("No location found");
    }
    resolve(mock);
  });
};

const restaurentTransforms = (result) => {
  return camelize(result);
};

restaurentRequests()
  .then(restaurentTransforms)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log(err);
  });
