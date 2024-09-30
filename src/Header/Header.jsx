import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="header-box">
        <ul>
          <li>
            <Link to="/">მთავარი</Link>
          </li>
          <li>
            <Link to="/assignment3">Assignment3</Link>
          </li>
          <li>
            <Link to="/about">ჩვენ შესახებ</Link>
          </li>
          <li>
            <Link to="/contact">კონტაქტი</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
