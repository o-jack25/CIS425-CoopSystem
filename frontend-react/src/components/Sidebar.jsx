import React from "react";
import "./Sidebar.css";

const Sidebar = () => (
  <nav className="sidebar">
    <h2>CIS425 System</h2>
    <ul>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Students</a></li>
      <li><a href="#">Settings</a></li>
    </ul>
  </nav>
);

export default Sidebar;
