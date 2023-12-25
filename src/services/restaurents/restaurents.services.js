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

export const restaurentTransforms = ({ results = [] }) => {
  const mappedResults = results.map((restaurent) => {
    return {
      ...restaurent,
      isOpenNow: restaurent.opening_hours && restaurent.opening_hours.open_now,
      isClosedTemporarily: restaurent.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
