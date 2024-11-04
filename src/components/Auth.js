// src/components/Auth.js
import React, { useState } from "react";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleAuth = async () => {
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.error("Error in authentication", error);
    }
  };

  return (
    <div>
      <h2>{isRegistering ? "Sign Up" : "Sign In"}</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleAuth}>{isRegistering ? "Register" : "Login"}</button>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Already have an account? Sign in" : "New user? Register"}
      </button>
    </div>
  );
}

export default Auth;
