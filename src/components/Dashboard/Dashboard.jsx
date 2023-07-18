import React from "react";
import "./Dashboard.css";
import { BsSearch } from "react-icons/bs";
import { BsChatText } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import Cards1 from "../Cards1/Cards1";
import Cards2 from "../Cards2/Cards2";
import Cards3 from "../Cards3/Cards3";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <section className="dash_into">
        <div className="heading">
          <span class="school">School</span>
          <span class="mentor">Mentor</span>
        </div>
        <div className="dash_intro_logo">
          <div className="dash_intro_search">
            <input type="text" placeholder="Search" />
            <button>
              <BsSearch />
            </button>
          </div>
          <button className="border">
            <BsChatText />
          </button>
          <button className="border">
            <IoIosNotificationsOutline />
          </button>
          <button className="menu_logo">
            <GiHamburgerMenu />
          </button>
        </div>
      </section>
      <Cards1 />
      <Cards2 />
      <Cards3 />
    </div>
  );
};

export default Dashboard;
