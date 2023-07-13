import React from "react";
import "./Cards3.css";
import Table from "../Table/Table";

const Cards3 = () => {
  return (
    <section className="dash_cards3">
      <div className="cards3_table cards2_width">
        <Table />
      </div>
      <div className="cards3_graphs cards2_width">
        <div className="graphs"></div>
        <div className="graphs"></div>
      </div>
      <div className="cards3_cards cards2_width"></div>
    </section>
  );
};

export default Cards3;
