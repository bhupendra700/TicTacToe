import { useEffect, useState } from "react";
import Button from "./Component/Button";
import Heading from "./Component/Heading";
import Main from "./Component/Main";
import Winner from "./Component/Winner";
import "./index.css";
import sound from "../src/Component/winner.mp3"

function App() {
  const rno = Math.floor(Math.random() * 2);

  const [turn, setTurn] = useState(rno === 0 ? "X" : "0");

  let [win, setWin] = useState(false);

  const createWinSound = new Audio(sound);

  useEffect(()=>{
    if(win){
      createWinSound.play();
    }
  } , [win]);
  return (
    <>
        <div className="mainbody">
          <Heading turn={turn} win={win}/>
          <Main turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
          <Winner turn={turn} win={win}/>
          <Button createWinSound={createWinSound} setWin={setWin} setTurn={setTurn}/>
        </div>
    </>
  );
}

export default App;
