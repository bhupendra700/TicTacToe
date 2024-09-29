import React from 'react'

function Heading({turn , win}) {

  const myStyleh1 ={
    color:"white",
  }

  const myStyleh3 ={
    color:"mediumaquamarine"
  }

  const headingStyle = {
    height:"100px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-between"
  }

  return (
    <div style={headingStyle}>
      <h1 style={myStyleh1} >Tic Tac Toe</h1>
      {win ? "" : <h3 style={myStyleh3}>Turn for {turn}</h3>}
    </div>
  )
}

export default Heading
