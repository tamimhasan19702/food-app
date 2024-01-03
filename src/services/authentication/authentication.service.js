/** @format */

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)(
    auth,
    email,
    password
  );
};
