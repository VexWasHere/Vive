import React, { useState } from "react";
import Home from "./Home.js"
import Health from "./Health.js"
import Work from "./Work.js"
import Settings from "./Settings.js"

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      label: <div className="divBtn">Home</div>,
      content: <Home />,
    },
    {
      label: <div className="divBtn">Health</div>,
      content: <Health />,
    },
    {
      label: <div className="divBtn">Work</div>,
      content: <Work />,
    },
    {
      label: <div className="divBtn">Settings</div>,
      content: <Settings />
    },
  ];

  return (
    <div>
      <div className="tab-list">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-list-item ${
              activeTab === index ? "tab-list-active" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
}

export default App;