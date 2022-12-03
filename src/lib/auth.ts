import { signInWithEmailAndPassword } from "firebase/auth";
import type React from "react";

import { auth } from "./firebase";

export function SignIn(
  e: React.MouseEvent<HTMLElement>,
  email: string,
  password: string
) {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log("Logged in!");

      console.log(userCredential);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
}

export function SignOut() {
  auth.signOut();
}
