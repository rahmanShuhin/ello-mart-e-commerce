import React, { useState } from "react";
import { sideBarData } from "../../components/Admin/adminStorage";
import SideNav from "../../components/Admin/Navigation/SideNav";
import TopNav from "../../components/Admin/Navigation/TopNav";

export default function Admin() {
  const [active, setActive] = useState("Dashboard");
  return (
    <section className="admin">
      <SideNav active={active} setActive={setActive}></SideNav>
      <div className="admin--main--section">
        <TopNav></TopNav>
        {sideBarData.map((data) => active === data.menu && data.render)}
      </div>
    </section>
  );
}
