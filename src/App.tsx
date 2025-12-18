import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app-main">
        <AppHeader />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
