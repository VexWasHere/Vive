import './App.css';
import React, { useState } from 'react';
import Home from "./components/Home.js";
import Health from "./components/Health.js";
import Work from "./components/Work.js";
import Settings from "./components/Settings.js";


function App() {
  const [activeTab, setActiveTab] = useState("home");
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div className='App'>
      <div className='navigation'>
        <a className={activeTab === "home" ? "active" : ""} onClick={() => handleTabClick("home")}><ion-icon name="person"></ion-icon></a>
        <a className={activeTab === "health" ? "active" : ""} onClick={() => handleTabClick("health")}><ion-icon name="fitness"></ion-icon></a>
        <a className={activeTab === "work" ? "active" : ""} onClick={() => handleTabClick("work")}><ion-icon name="cafe"></ion-icon></a>
        <a className={activeTab === "settings" ? "active" : ""} onClick={() => handleTabClick("settings")}><ion-icon name="settings"></ion-icon></a>
      </div>
      <div className='content'>
        <div className={activeTab === "home" ? "active" : ""}>
          <Home />
        </div>
        <div className={activeTab === "health" ? "active" : ""}>
            <Health />
        </div>
        <div className={activeTab === "work" ? "active" : ""}>
            <Work />
        </div>
        <div className={activeTab === "settings" ? "active" : ""}>
            <Settings />
        </div>
      </div>
    </div>
  );
}

export default App;
