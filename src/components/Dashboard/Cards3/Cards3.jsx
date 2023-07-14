import React from "react";
import "./Cards3.css";
import Table from "../Table/Table";
import Barchart from "../Charts/Barchart";
import Areachart2 from "../Charts/Areachart2";
import { AiOutlineDown } from "react-icons/ai";

const Cards3 = () => {
  return (
    <section className="dash_cards3">
      <div className="cards3_table cards2_width">
        <Table />
      </div>
      <div className="cards3_graphs cards2_width">
        <div className="graphs">
          <Barchart />
        </div>
        <div className="graphs">
          <Areachart2 />
        </div>
      </div>
      <div className="cards3_cards cards2_width">
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
                <img
                  src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                  alt=""
                />
                <p>Nic John</p>
              </div>
            </div>
            <div className="bday_info">
              <h4>Student</h4>
              <div>
                <img
                  src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                  alt=""
                />
                <p>John Doe</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cards3_cards_card">
          <div>
            <h3>Updates</h3>
            <button>
              <AiOutlineDown />
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Cards3;
