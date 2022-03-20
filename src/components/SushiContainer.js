import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({
  sushiList, 
  handleEatSushi, 
  handleMoreSushi, 
  handleChargeSushi, 
  myMoney
  }) {
  const renderSushiList = sushiList.map((sushi) => <Sushi sushi={sushi} handleEatSushi={handleEatSushi} handleChargeSushi = {handleChargeSushi} key = {sushi.id} myMoney={myMoney}/>)
  return (
    <div className="belt">
      {renderSushiList}
      <MoreButton handleMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
