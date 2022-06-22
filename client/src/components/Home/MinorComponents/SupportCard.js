import React from "react";
import CreditIcon from "../../IconComponents/CreditIcon";
import HeadsetIcon from "../../IconComponents/HeadsetIcon";
import ShieldIcon from "../../IconComponents/ShieldIcon";
import TruckIcon from "../../IconComponents/TruckIcon";
import "./_supportCard.scss";
export default function SupportCard() {
  return (
    <main className="container">
      <div className="support">
        <div className="support--card">
          <div className="support--card--icon">
            <i>
              <TruckIcon />
            </i>
          </div>
          <h1 className="support--card--headline">Worldwide Delivery</h1>
          <p className="support--card--texts">
            We offer competitive prices on our 100 million plus product any
            range.
          </p>
        </div>
        <div className="support--card">
          <div className="support--card--icon">
            <i>
              <CreditIcon />{" "}
            </i>
          </div>
          <h1 className="support--card--headline">Worldwide Delivery</h1>
          <p className="support--card--texts">
            We offer competitive prices on our 100 million plus product any
            range.
          </p>
        </div>
        <div className="support--card">
          <div className="support--card--icon">
            <i>
              <ShieldIcon />{" "}
            </i>
          </div>
          <h1 className="support--card--headline">Worldwide Delivery</h1>
          <p className="support--card--texts">
            We offer competitive prices on our 100 million plus product any
            range.
          </p>
        </div>
        <div className="support--card">
          <div className="support--card--icon">
            <i>
              <HeadsetIcon />{" "}
            </i>
          </div>
          <h1 className="support--card--headline">Worldwide Delivery</h1>
          <p className="support--card--texts">
            We offer competitive prices on our 100 million plus product any
            range.
          </p>
        </div>
      </div>
    </main>
  );
}
