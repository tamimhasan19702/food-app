/** @format */

import * as firebase from "firebase";

export const loginRequest = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error(error);
  }
};
