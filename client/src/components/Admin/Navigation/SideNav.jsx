import React, { useRef, useState } from "react";
import logo from "../../../assets/icons/NinjaMartMain.svg";
import { sideBarData } from "../adminStorage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function SideNav() {
  const [active, setActive] = useState("Dashboard");
  const [cls, setCls] = useState("active");
  const myRefs = useRef([]);

  const handleExpandButton = (event, i, menu) => {
    console.log("parent");
    if (myRefs.current[i].children[1].children[1]) {
      myRefs.current[i].classList.toggle("toggle");
    } else {
      setActive(menu);
    }
  };

  const handleSubmenu = (event, menu) => {
    event.stopPropagation();
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
            <span className={parents.subMenu.length === 1 && "hideIcon"}>
              {parents.icon} <p>{parents.menu}</p>
              <ExpandMoreIcon />
              <ExpandLessIcon />
            </span>
            <div
              className={
                parents.subMenu.length > 1 && "admin__sideNav__menu__sub"
              }
            >
              {parents.subMenu.length > 1 &&
                parents.subMenu.map((child, index2) => (
                  <li
                    key={index2}
                    onClick={(event) => handleSubmenu(event, parents.menu)}
                  >
                    {child.title}
                  </li>
                ))}
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}
