import React from 'react'

function Button({createWinSound , setWin , setTurn}) {

    const myStyle = {
        backgroundColor:"rgb(92 91 91)",
        color:"mediumaquamarine",
        border:"none",
        borderRadius:"20px",
        padding:"10px 30px",
        fontSize:"20px",
        display:"block",
        fontWeight:"550",
        cursor:"Pointer",
        margin:"auto"
    }

    const resetGame = ()=>{
      const divs = document.getElementsByClassName("container")[0].querySelectorAll('div');
      divs.forEach((div)=>{
        div.innerHTML = "";
      })
      createWinSound.pause();
      createWinSound.currentTime = 0;
      setWin(false)
     const rno = Math.floor(Math.random() * 2);
      setTurn(rno === 0 ? "X" : "0")
    }

  return (
    <div>
      <button style={myStyle} onClick={()=>{resetGame()}}>Reset</button>
    </div>
  )
}

export default Button
