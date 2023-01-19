import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PaidIcon from "@mui/icons-material/Paid";
import React, { useState } from "react";

import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
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
    const [themeColor] = useState("#e94560");
    return (
        <div className="admin__dashboard">
            <div className="admin__dashboard__top">
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
                            <Line
                                type="monotone"
                                dataKey="order"
                                stroke={themeColor}
                            />
                            <CartesianGrid
                                stroke="#ccc"
                                strokeDasharray="3 3"
                            />
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
                            <Bar dataKey="order" fill={themeColor} />
                        </BarChart>
                    </div>
                </div>
            </div>
        </div>
    );
}
