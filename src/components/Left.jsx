import React from "react";
import TimeSet from "./TimeSet";

import "../css/left.scss";
import FamousApi from "./FamousApi";

const Left = () => {
  return (
    <>
      <div className="nickName mt-5">
        <h2>HELLO</h2>
        <p>MANJOCK</p>
      </div>
      <div className="timeset">
        <TimeSet />
      </div>
      <div className="famouse" style={{ marginTop: "120px" }}>
        <FamousApi />
      </div>
    </>
  );
};

export default Left;
