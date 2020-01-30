import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [downCount, setDownCount] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [quarterCount, setQuarterCount] = useState(1);

  const addDown = e => {
    setDownCount(downCount + 1);
  }

  const lostYards = e => {
    setToGo(toGo + 1);
  }

  const gainedYards = e => {
    setToGo(toGo - 1);
  }

  const nextQuarter = e => {
    setQuarterCount(quarterCount + 1);
  }


  return (
    <div>
      <div className="bottomRow">
        <div className="down">
          <h3 className="down__title">Down</h3>
          <div className="down__value">{downCount}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterCount}</div>
      </div>
    </div>
    <div className="generalButtons">
      <button onClick={addDown} className="generalButton">Add Down</button>
      <button onClick={lostYards} className="generalButton">Lost Yards</button>
      <button onClick={gainedYards} className="generalButton">Gained Yards</button>
      <button onClick={nextQuarter} className="generalButton">Next Quarter</button>
    </div>
    </div>
    
  );


  
};

export default BottomRow;
