import React, { useRef, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useOnClickOutside } from "./../../../hooks/useOnClickOutside";

export default function TopNav() {
  const [show, setShow] = useState(false);
  const cartRef = useRef(null);
  useOnClickOutside(cartRef);
  return (
    <div className="admin__topNav">
      <div className="admin__topNav__right">
        <NotificationsIcon />
        <span>
          <p>John Quin</p>
          <small>Admin Profile</small>
        </span>
        <div
          className={
            show
              ? "admin__topNav__right__modal shape"
              : "admin__topNav__right__modal "
          }
        >
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            sx={{ width: 56, height: 56 }}
            onClick={() => setShow(!show)}
          />
          {show && (
            <div className="admin__topNav__right__modal__content" ref={cartRef}>
              <p>
                <AccountBoxIcon /> Profile Page
              </p>
              <p>
                <ReorderIcon /> Order Invoices
              </p>
              <p>
                <LogoutIcon /> Sign Out
              </p>
            </div>
          )}
        </div>
        <SettingsIcon />
      </div>
    </div>
  );
}
