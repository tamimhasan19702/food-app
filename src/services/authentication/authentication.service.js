/** @format */

import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASEAUTH } from "../../../firebaseConfig";
export const loginRequest = async (email, password) => {
  const auth = FIREBASEAUTH;

  return await signInWithEmailAndPassword(auth, email, password);
};
