import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Navigate.module.css";
import SignUp from "../pages/SignUp";
import Dropdown from "./Dropdown";
import logo1 from "../images/turnersLogo.png";

const Navigate = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <header>
      <div className={classes.logo}>
        <img src={logo1} alt="Turners logo" />
        <li>
          <Link to="/SignUp">
            <SignUp />
          </Link>
        </li>
        <p> 0800887637 </p>
        <p> Find us</p>
      </div>
      <br />

      <div className={classes.header}>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Our Policies <i className="fas fa-caret-down" />
              </Link>
            </li>
            <li>
              <Link to="/managepolicy">
                Manage Policy <i className="fas fa-caret-down" />
              </Link>
            </li>
            <li>
              <Link to="/claims">
                Claims <i className="fas fa-caret-down" />
              </Link>
            </li>
            
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to="/faq" className="nav-link" onClick={closeMobileMenu}>
                FAQ <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigate;
