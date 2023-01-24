import React, { useRef, useState } from "react";
import logo from "../../../assets/icons/NinjaMart2.svg";
import { sideBarData } from "../adminStorage";

export default function SideNav({ active, setActive }) {
    const [cls, setCls] = useState("active");
    const myRefs = useRef([]);

    const handleExpandButton = (event, i, menu) => {
        setActive(menu);
        setCls("active toggle");
    };

    return (
        <div className="admin__sideNav">
            <div className="admin--logo">
              <img src={logo} alt="logo" width="100%" />
            </div>
            <div className="admin__sideNav__menu">
                {sideBarData.map((parents, index1) => (
                    <ul
                        className={parents.menu === active && cls}
                        ref={(el) => (myRefs.current[index1] = el)}
                        onClick={(event) =>
                            handleExpandButton(event, index1, parents.menu)
                        }
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
