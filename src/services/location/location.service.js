/** @format */

import camelize from "camelize";

import { locations } from "./location.mock";

export const LocationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject(new Error("not found"));
    }
    resolve(locationMock);
  });
};

export const LocationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0] || {};
  const { lat, lng } = geometry.location || {};

  return { lat, lng, viewPort: geometry.viewport };
};
