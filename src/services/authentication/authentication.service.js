/** @format */

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASEAUTH } from "../../../firebaseConfig";
export const loginRequest = async (email, password) => {
  const auth = FIREBASEAUTH;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = async (email, password) => {
  const auth = FIREBASEAUTH;
  return await createUserWithEmailAndPassword(auth, email, password);
};
