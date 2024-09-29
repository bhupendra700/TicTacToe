import React, { useEffect, useRef } from "react";
import "./mainStyle.css";
import sound from "./click.mp3"

function Main({ turn, setTurn, win, setWin }) {
  const windata = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  const container = useRef(null);

  const createAudio = new Audio(sound);

  const toggle = (e) => {
    createAudio.playbackRate = 2.0;
    if (!win) {
      createAudio.pause();
      if (e.target.innerHTML === "") {
        if (turn === "X") {
          e.target.innerHTML = `${turn}`;
          setTurn("0");
        } else if (turn === "0") {
          e.target.innerHTML = `${turn}`;
          setTurn("X");
        }
      createAudio.play();
      }
    }
  };

  useEffect(() => {
    const arr = Array.from(container.current.children);
    let value = arr.map((Element) => {
      return Element.innerHTML;
    });
    for (let i = 0; i < windata.length; i++) {
      let [x, y, z] = windata[i];
      if (value[x] && value[x] === value[y] && value[y] === value[z]) {
        setWin(true);
      }
    }
  }, [turn , setWin , windata]);

  return (
    <div className="container" ref={container}>
      {Array(9).fill(null).map((_, index) => (
        <div key = {index}
          className="box"
          onClick={(e) => {
            toggle(e);
          }}
        ></div>
      ))}
    </div>
  );
}

export default Main;
