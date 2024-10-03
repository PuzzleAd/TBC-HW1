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
          <Link to="/assignment3">Assignment3</Link>
        </li>
        <li>
          <Link to="/about">ჩვენ შესახებ</Link>
        </li>
        <li>
          <Link to="/blog">ბლოგი</Link>
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
