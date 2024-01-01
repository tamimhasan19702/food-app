/** @format */

import firebase from "firebase/app";

export const loginRequest = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error(error);
  }
};
