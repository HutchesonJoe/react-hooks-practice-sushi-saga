import React, {useState} from "react";

function Sushi({sushi, handleChargeSushi, myMoney}) {
  
  const [sushiEaten, setSushiEaten] = useState(false)

  function pickSushi(e){
    if (myMoney >= sushi.price){
      handleChargeSushi(e.target.id)
    setSushiEaten(true)
    }
  }
  
  return (
    <div className="sushi"  key = {sushi.id} onClick={pickSushi} disabled = {sushiEaten} name = {sushi.name } id={sushi.id} >
      <div className="plate" id={sushi.id} name = {sushi.name}>
        {sushiEaten ? null : (
          <img
            src={sushi.img_url}
            alt={`${sushi.name} Sushi`}
            width="100%"
            className="picture"
            name = {sushi.name}
            id={sushi.id}
          />
        )}
      </div>
      <h4 className="sushi-details" name = {sushi.name} id={sushi.id}>
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
