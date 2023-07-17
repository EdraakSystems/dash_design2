import React from "react";
import "./Cards2.css";
import Calendarr from "../Calendar/Calendarr";

const Cards2 = () => {
  return (
    <section className="dash_cards2">
      <div className="cards2_table ">
        <div className="table_graph_info">
          <h3>Daily Attendance Overview</h3>
          <h3 className="table_graph_legend">
            <span>Student</span>
            <span>Employee</span>
          </h3>
        </div>
        <div className="table_graph_data">
          <img src={require("../../assets/graph1.png")} alt="barchart" />
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
        <div>
          <h3>Calendar</h3>
          <h3>
            <span>Event</span>
            <span>Holiday</span>
          </h3>
        </div>
        <Calendarr />
      </div>
    </section>
  );
};

export default Cards2;
