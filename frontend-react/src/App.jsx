import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./App.css"; // global styles

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
