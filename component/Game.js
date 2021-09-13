import React,{useState} from 'react'
import calculateWinner from '../helper'
import Board from './Board'
const style={
  display:'flex',
  flexDirection:"column",
  width:'200px',
  margin:'20px auto'
}
export default function Game() {
const[board,setBoard]=useState(Array(9).fill(null))
const[xIsNext,setXisNext]=useState(true)
const winner=calculateWinner(board)
  const handleClick=(i)=>{
    const newBoard=[...board];
    //if user click an occupied square or if game is won return
    if (winner|| newBoard[i]) return;
    //Put an x or an o in the clicked square
    newBoard[i]=xIsNext?'X':'O';
    setBoard(newBoard);
    setXisNext(!xIsNext)
  }
  
  const renderMoves=()=>{
return <button onClick={()=>setBoard(Array(9).fill(null))}>
  start Game
</button>
  }
  return (
    <div style={style}>
    < >
       <Board squares={board}onClick={handleClick}/>
       
        <p style={style}>
          {winner? 'Winner: '+ winner:'Next Player:'+(xIsNext?'X':'O')}
          {renderMoves()}
        </p>
        </>
       </div>
    
  )
}
