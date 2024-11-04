// src/components/TodoForm.js
import React, { useState } from "react";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

function TodoForm() {
  const [title, setTitle] = useState("");

  const addTodo = async () => {
    try {
      await addDoc(collection(db, "todos"), { title });
      setTitle(""); // Clear input field
    } catch (error) {
      console.error("Error adding todo", error);
    }
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New Todo" />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoForm;
