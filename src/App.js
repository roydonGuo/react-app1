import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./app.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <RouterProvider router={router} />
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
