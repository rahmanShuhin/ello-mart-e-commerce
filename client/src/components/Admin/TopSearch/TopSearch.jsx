import React from "react";
import SearchIcon from "@mui/icons-material/Search";
export default function TopSearch({ title }) {
  const handleForm = (event) => {
    alert();
    event.preventDefault();
  };
  return (
    <div className="topSearch">
      <div>
        <p>{title}</p>
      </div>
      <form onSubmit={handleForm}>
        <SearchIcon />
        <input type="text" placeholder="Type Your Query and Press Enter" />
        <input type="submit" hidden />
      </form>
    </div>
  );
}
