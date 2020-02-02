import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
export default function Header(props) {
  const handleLogout = () => {
    localStorage.removeItem("user-token");
    props.history.push("/login/");
  };
  const token = localStorage.getItem("user-token");
  return (
    <div className="app-header">
      <Link to={"/"} className="app-logo">
        Drishti
      </Link>
      {token && (
        <div className="logout-btn" onClick={handleLogout}>
          Logout
        </div>
      )}
    </div>
  );
}
