import React from "react";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart,
  Legend,
} from "recharts";
const data = [
  { name: "Jan", order: 0 },
  { name: "Feb", order: 10 },
  { name: "Mar", order: 50 },
  { name: "April", order: 100 },
  { name: "May", order: 50 },
  { name: "Jun", order: 120 },
  { name: "Jul", order: 100 },
  { name: "Aug", order: 100 },
  { name: "Sep", order: 100 },
  { name: "Oct", order: 100 },
  { name: "Nov", order: 100 },
  { name: "Dec", order: 100 },
];
const data2 = [
  { name: "Watch", order: 150 },
  { name: "Shirt", order: 65 },
  { name: "Pants", order: 50 },
  { name: "Mobile", order: 10 },
  { name: "Shoes", order: 10 },
  { name: "Kids", order: 40 },
];

export default function Dashboard() {
  return (
    <div className="admin__dashboard">
      <div className="admin__dashboard__top">
        <div className="admin__dashboard__top__left">
          <h1>Hi John! </h1>
          <p>Welcome back</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            molestias repudiandae cum minus non ex rem qui eaque facere est
            labore at ipsa modi, quam cupiditate hic doloremque rerum beatae?{" "}
          </p>
          <button className="btn-primary ">View Profile</button>
        </div>
        <div className="admin__dashboard__top__right">
          <div className="admin__dashboard__top__right__stat">
            <div>
              <PaidIcon />
              <div>
                <p>Revenue</p>
                <small>$18,925</small>
              </div>
            </div>
            <div>
              <AccountBalanceWalletIcon />
              <div>
                <p>Expenses</p>
                <small>$18,925</small>
              </div>
            </div>
            <div>
              <EmojiEmotionsIcon />
              <div>
                <p>Happy Clients</p>
                <small>$18,925</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom aprt for chart */}
      <div className="admin__dashboard__bottom">
        <div className="admin__dashboard__bottom__left">
          <div>
            <p>Sale History</p>
          </div>
          <div>
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="order" stroke="#e94560" />
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
        </div>
        <div className="admin__dashboard__bottom__right">
          <div>
            <p>Top Selling Product</p>
          </div>

          <div>
            <BarChart
              width={600}
              height={300}
              data={data2}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="order" fill="#e94560" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}
