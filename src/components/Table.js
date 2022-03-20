import React from "react";

function Table({ plates = [], myMoney}) {
  let emptyPlates = []
  if (plates.length > 0)
  {emptyPlates = plates.map((plate, index) => (
    <div key={index} id={plate} className="empty-plate" style={{ top: -7 * index }} />
  ));} else {emptyPlates = []}

  return (
    <>
      <h1 className="remaining">
        You have: ${myMoney} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
