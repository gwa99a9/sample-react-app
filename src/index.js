import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodoApp from "./TodoApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoApp />
    <App />
  </React.StrictMode>
);
