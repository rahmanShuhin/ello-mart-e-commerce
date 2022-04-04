import React from "react";
import SideNav from "../components/Admin/Navigation/SideNav";
import TopNav from "../components/Admin/Navigation/TopNav";

export default function admin() {
  return (
    <section className="admin">
      <SideNav></SideNav>
      <div>
        <TopNav></TopNav>
      </div>
    </section>
  );
}
