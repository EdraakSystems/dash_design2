import React from "react";
import "./Cards3.css";
import Table from "../Table/Table";
import Barchart from "../Charts/Barchart";
import Areachart2 from "../Charts/Areachart2";

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
      <div className="cards3_cards cards2_width"></div>
    </section>
  );
};

export default Cards3;
