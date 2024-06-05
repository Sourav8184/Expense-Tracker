import React from "react";
import avatar from "../../images/avatar.png";
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/Icons";
import "./Navigation.scss";

function Navigation({ active, setActive }) {
  return (
    <div className="navigation">
      <div className="user-con">
        <img className="img" src={avatar} alt="" />
        <div className="text">
          <h2>Mike</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}>
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>

      <div className="bottom-nav">
        <li>{signout} Sign Out</li>
      </div>
    </div>
  );
}

export default Navigation;
