import React from "react";
import "./App.css";
import Header from "./Component/Layout/Header/Header";
import Sidebar from "./Component/Layout/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailList from "./Pages/EmailList/EmailList";
import Mail from "./Pages/Mail/Mail";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <div className="appBody">
          <Sidebar />
          <Routes>
            <Route exact path="/mail" element={<Mail />} />

            <Route exact path="/" element={<EmailList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
