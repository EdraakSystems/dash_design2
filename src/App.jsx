import React from "react";
import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="dash_container">
      <aside className="Navbar">
        <Navbar />
      </aside>
      <div className="dashBoard">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
