import React, { useState } from "react";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import SideNav from "../components/Admin/Navigation/SideNav";
import TopNav from "../components/Admin/Navigation/TopNav";
import ProductAdd from "../components/Admin/Product/ProductAdd";

export default function Admin() {
  const [active, setActive] = useState("Dashboard");
  return (
    <section className="admin">
      <SideNav active={active} setActive={setActive}></SideNav>
      <div>
        <TopNav></TopNav>
        {active === "Dashboard" && <Dashboard />}
        {active === "Product Add" && <ProductAdd />}
      </div>
    </section>
  );
}
