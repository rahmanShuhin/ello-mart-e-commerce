import React, { useRef, useState } from "react";
import logo from "../../../assets/icons/NinjaMartMain.svg";
import { sideBarData } from "../adminStorage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function SideNav({ active, setActive }) {
  const [cls, setCls] = useState("active");
  const myRefs = useRef([]);

  const handleExpandButton = (event, i, menu) => {
    setActive(menu);
    setCls("active toggle");
  };

  return (
    <div className="admin__sideNav">
      <img src={logo} alt="3Ninjas" />
      <div className="admin__sideNav__menu">
        {sideBarData.map((parents, index1) => (
          <ul
            className={parents.menu === active && cls}
            ref={(el) => (myRefs.current[index1] = el)}
            onClick={(event) => handleExpandButton(event, index1, parents.menu)}
            key={index1}
          >
            <span>
              {parents.icon} <p>{parents.menu}</p>
            </span>
          </ul>
        ))}
      </div>
    </div>
  );
}
