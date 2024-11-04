// src/App.js
import React, { useEffect, useState } from "react";
import Auth from "../components/Auth";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.email}</h1>
          <button onClick={() => signOut(auth)}>Logout</button>
          <TodoForm />
          <TodoList />
        </>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
