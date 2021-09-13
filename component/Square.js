import React from 'react'
const style={
  background:'lightblue',
  border:'2px solid darkred',
  fontSize:'30px',
  fontweight:'880',
  cursor:'pointer',
  outline:'none'
}
export default function Square({onClick,value}) {
  return (
   <button style={style}onClick={onClick}>{value}</button>
  )
}
