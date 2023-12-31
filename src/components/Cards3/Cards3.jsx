import React from "react";
import "./Cards3.css";
import Table from "../Table/Table";
import { AiOutlineDown } from "react-icons/ai";
import { GiCupcake } from "react-icons/gi";
import { BiSolidRectangle } from "react-icons/bi";

const Cards3 = () => {
  return (
    <section className="dash_cards3">
      <div className="cards3_table ">
        <h3>Student Fees Details</h3>
        <Table />
      </div>
      <div className="cards3_graphs ">
        <div className="graphs">
          <div className="graphs_info">
            <h3>Result</h3>
            <h3 className="cards3_graph_legend">
              <span className="tenth">
                <BiSolidRectangle /> 10th
              </span>
              <span className="ninth">
                <BiSolidRectangle /> 9th
              </span>
              <span className="eighth">
                <BiSolidRectangle /> 8th
              </span>
              <span className="seventh">
                <BiSolidRectangle /> 7th
              </span>
            </h3>
          </div>
          <img src={require("../../assets/graph2.png")} alt="barchart" />
        </div>
        <div className="graphs">
          <h3 className="batch">Batch</h3>
          <img src={require("../../assets/graph3.png")} alt="barchart" />
        </div>
      </div>
      <div className="cards3_cards ">
        <div className="cards3_cards_card">
          <div className="card_heading">
            <h3>Birthdays</h3>
            <button>
              <AiOutlineDown />
            </button>
          </div>
          <div className="card_data">
            <div className="bday_info">
              <h4>Teacher</h4>
              <div>
                <img src={require("../../assets/5.jpg")} alt="7" />
                <p>Jackline Peter</p>
              </div>
            </div>
            <div className="cupcake">
              <GiCupcake />
            </div>
            <div className="bday_info">
              <h4>Student</h4>
              <div>
                <img src={require("../../assets/6.jpg")} alt="6" />
                <p>Nikol John</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cards3_cards_card">
          <div className="card_heading">
            <h3>Updates</h3>
            <button>
              <AiOutlineDown />
            </button>
          </div>
          <div className="card_update_data">
            <h5>1. Complete the class 12 syllabus in 3 months</h5>
            <h5>2. School organized quiz on 17th</h5>
            <h5>2. Volleball tournament on 25th</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards3;
