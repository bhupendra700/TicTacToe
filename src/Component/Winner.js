import React , { useEffect } from 'react'

function Winner({turn ,win }) {
   const myStyle = {
    
    textAlign:"center",
    height:"35px"
    }

    const spanStyle ={
        color:"hotpink",
    }

  return (
    <>
      <h2 style={myStyle}>{win ? <span style={spanStyle}> {turn === "X" ? "0 Won" : "X Won"} </span> : ""}</h2>
    </>
  )
}

export default Winner
