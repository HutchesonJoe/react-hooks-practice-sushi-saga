import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [mySushiCount, setMySushiCount] = useState([])
  const [myMoney, setMyMoney] = useState(50)

  useEffect(()=>{
    fetch(`${API}/?_limit=4&_page=${pageNumber}`)
    .then(r=>r.json())
    .then(data=>{
     setSushiList(data)
    })
  }, [pageNumber])

  function handleChargeSushi(sushiId){
    const thisSushi = sushiList.find(sushi => sushi.id === parseInt(sushiId))
    if (myMoney >= thisSushi.price){
      setMyMoney(myMoney - thisSushi.price)
    } else {thisSushi.disable=true}
    handleEatSushi(sushiId)
  }

  function handleMoreSushi(){
    setPageNumber(pageNumber + 1)
  }

  function handleEatSushi(sushiId){
    setMySushiCount([...mySushiCount, sushiId])
    fetch(`${API}/${sushiId}`, {
      method : "DELETE",
      headers : {
        'Content-Type': 'application/json'
      }
    })
       .then(r=>r.json())

       
  }
      return (
        <div className="app">
          <SushiContainer 
            sushiList={sushiList} 
            setSushiList={setSushiList}
            handleMoreSushi={handleMoreSushi}
            handleEatSushi={handleEatSushi}
            handleChargeSushi={handleChargeSushi}
            myMoney={myMoney}
            
          />
          <Table 
            plates={mySushiCount} 
            handleEatSushi={handleEatSushi} 
            handleChargeSushi={handleChargeSushi}
            myMoney={myMoney}/>
            
            
        </div>
      );      
      
}

export default App;
