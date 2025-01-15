import React, { useState } from "react";
import "./FisheyeMenu.css";

const FisheyeMenu = () => {
  const heuristics = [
    { id: "UH#1", detail: "Visibility of system status" },
    { id: "UH#2", detail: "Match between system and the real world" },
    { id: "UH#3", detail: "User control and freedom" },
    { id: "UH#4", detail: "Consistency and standards" },
    { id: "UH#5", detail: "Error prevention" },
    { id: "UH#6", detail: "Recognition rather than recall" },
    { id: "UH#7", detail: "Flexibility and efficiency of use" },
    { id: "UH#8", detail: "Aesthetic and minimalist design" },
    { id: "UH#9", detail: "Help users recognize, diagnose, and recover from errors" },
    { id: "UH#10", detail: "Help and documentation" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="fisheye-menu">
      {heuristics.map((heuristic, index) => (
        <div
          key={heuristic.id}
          className={`menu-item ${activeIndex === index ? "active" : ""}`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="menu-label">{heuristic.id}</div>
          {activeIndex === index && <div className="menu-detail">{heuristic.detail}</div>}
        </div>
      ))}
    </div>
  );
};

export default FisheyeMenu;
