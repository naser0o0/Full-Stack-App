import React from "react";
import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "70%",
        }}
      >
        <li style={{ listStyleType: "none" }}>
          <Link to='/'>Homepage</Link>
        </li>
        <li style={{ listStyleType: "none" }}>
          <Link to='/login'>Login</Link>
        </li>
        <li style={{ listStyleType: "none" }}>
          <Link to='/registration'>Register</Link>
        </li>
        <li style={{ listStyleType: "none" }}>
          <Link to='*'>Error Page</Link>
        </li>
      </ul>
    </nav>
  );
}
