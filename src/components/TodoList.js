// src/components/TodoList.js
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { db } from "../firebase";
import { collection, query, onSnapshot, deleteDoc, doc } from "firebase/firestore";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  const deleteTodo = async (id) => {
    try {
      await deleteDoc(doc(db, "todos", id));
    } catch (error) {
      console.error("Error deleting todo", error);
    }
  };

  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
