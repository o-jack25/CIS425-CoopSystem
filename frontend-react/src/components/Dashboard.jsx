import React from "react";
import Card from "./Card";
import "./Dashboard.css";

const Dashboard = () => (
  <main className="main-content">
    <header>
      <h1>Dashboard</h1>
    </header>

    <section className="cards">
      <Card title="Applications in Process" value={4} />
      <Card title="Jobs" value={45} />
      <Card title="Application Viewed" value={3} />
    </section>

    <section className="placeholder">
      <h2>Recent Activity</h2>
      <p>Nothing new yet!</p>
    </section>
  </main>
);

export default Dashboard;
