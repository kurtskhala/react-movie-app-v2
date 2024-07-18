import "./App.css";
import AppRoutes from "./AppRoutes";
import Header from "./components/header/Header";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
