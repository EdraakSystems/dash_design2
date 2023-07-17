import React from "react";
import "./Cards2.css";
import Calendarr from "../Calendar/Calendarr";
import { FaDotCircle } from "react-icons/fa";
import { BiSolidRectangle } from "react-icons/bi";

const Cards2 = () => {
  return (
    <section className="dash_cards2">
      <div className="cards2_graph ">
        <div className="cards2_graph_info">
          <h3>Daily Attendance Overview</h3>
          <h3 className="cards2_graph_legend">
            <span className="student">
              <FaDotCircle /> Student
            </span>
            <span className="employee">
              <FaDotCircle /> Employee
            </span>
          </h3>
        </div>
        <div className="cards2_graph_data">
          <img src={require("../../assets/graph1.png")} alt="area chart" />
        </div>
      </div>
      <div className="card2_progress ">
        <div className="progress">
          <h3>Admission</h3>
          <div class="progress-bar1"></div>
        </div>
        <div className="progress">
          <h3>Fees Collection</h3>
          <div class="progress-bar2"></div>
        </div>
        <div className="progress">
          <h3>Syllabus</h3>
          <div class="progress-bar3"></div>
        </div>
        <div className="progress">
          <h3>Sports Activity</h3>
          <div class="progress-bar4"></div>
        </div>
      </div>
      <div className="cards2_calendar ">
        <div className="cards2_calendar_info">
          <h3>Calendar</h3>
          <h3 className="cards2_calendar_legend">
            <span className="event">
              <BiSolidRectangle /> Event
            </span>
            <span className="holiday">
              <BiSolidRectangle /> Holiday
            </span>
          </h3>
        </div>
        <Calendarr />
      </div>
    </section>
  );
};

export default Cards2;
