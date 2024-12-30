import { useState } from "react"
import Squares from "./Squares"

export default function App(){
  const[grid,setGrid]=useState(["","","","","","","","",""])
  const[currentPlayer,setCurrentPlayer]=useState("")
  const[winner,setWinner]=useState("")

  const randomPlayer=Math.ceil(Math.random()*2)
  const winCombos=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

  if(currentPlayer===""){
    setCurrentPlayer(randomPlayer===1?"X":"O")
  }
  
  function Winner(newGrid){
    for(let combo of winCombos){
      const[a,b,c]=combo
      if(newGrid[a]&& newGrid[a] === newGrid[b]&& newGrid[a] === newGrid[c]){
        return newGrid[a]
      }
      if(!newGrid.includes("")){
        return "Draw"
      }
      return null
    }
  }
  function markUser(index){
    if(grid[index]===""&&!winner){
      const newGrid=[...grid]
      newGrid[index]=currentPlayer
      setGrid(newGrid)
      const gameResult=Winner(newGrid)
      if(gameResult){
        setWinner(gameResult)
      }
      else{
        setCurrentPlayer(currentPlayer==="X"?"O":"X")
      }
    }
  }

  return(
    <>
      <h1>Tic-Tac-Toe</h1>
      <h2>Winner: {winner}</h2>
      <Squares grid={grid} markUser={markUser}/>
    </>
  )
}



