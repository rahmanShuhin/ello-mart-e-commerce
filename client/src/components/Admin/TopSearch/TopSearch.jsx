import SearchIcon from "@mui/icons-material/Search";
import React from "react";
export default function TopSearch({ title }) {
    const handleForm = (event) => {
        alert();
        event.preventDefault();
    };
    return (
        <div className="topSearch">
            <div>
                <h2>{title}</h2>
            </div>
            <form onSubmit={handleForm}>
                <SearchIcon />
                <input type="text" placeholder="Type Your Query" />
                <input type="submit" hidden />
            </form>
        </div>
    );
}
