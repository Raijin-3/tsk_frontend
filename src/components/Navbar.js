import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#000080", color: "white" }}>
      <Link to="/" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/products" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>
        Products
      </Link>
    </nav>
  );
};

export default Navbar;
