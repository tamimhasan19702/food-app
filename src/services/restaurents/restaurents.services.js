/** @format */

import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const RestaurentRequests = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("No location found");
    }
    resolve(mock);
  });
};

export const RestaurentTransforms = ({ results = [] }) => {
  const mappedResults = results.map((restaurent) => {
    restaurent.photos = restaurent.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurent,
      address: restaurent.vicinity,
      isOpenNow: restaurent.opening_hours && restaurent.opening_hours.open_now,
      isClosedTemporarily: restaurent.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
