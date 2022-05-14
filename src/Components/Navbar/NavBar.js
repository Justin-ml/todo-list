import React from "react";
import "../Navbar/navBar.css";
import UserIcon from "../Icon/UserIcon";

function NavBar() {
  return (
    <>
      <div className="nav-main">
        <div className="title">
          <p>TodoList</p>
        </div>
        <UserIcon />
      </div>
    </>
  );
}

export default NavBar;
