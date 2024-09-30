import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">მთავარი</Link>
        </li>
        <li>
          <Link to="/about">აირჩიე კურსი</Link>
        </li>
        <li>
          <Link to="/about">ჩვენ შესახებ</Link>
        </li>
        <li>
          <Link to="/contact">კონტაქტი</Link>
        </li>
      </ul>
      <div className="rules-box">
        <p>© 2023 ყველა უფლება დაცულია</p>
        <a href="#">წესები და პირობები</a>
      </div>
    </footer>
  );
};

export default Footer;
