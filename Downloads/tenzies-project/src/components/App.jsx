import { useEffect, useRef, useState } from "react"

import Dice from "./Dice"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App(){
    const [nums,setNums]=useState(()=>generateAllNewDice())
    const buttonRef=useRef(null)
    const diceElements=nums.map(num=> <Dice key={num.id} value={num.value} isHeld={num.isHeld} hold={()=>Hold(num.id)}/>)
    const gameWon=nums.every(die=>die.isHeld)&&nums.every(die=>die.value===nums[0].value)
    function toggleDice(){
        if(!gameWon){
            setNums(prevState=>prevState.map(
                die=>die.isHeld ? die : {
                    ...die,
                    value: Math.ceil(Math.random() * 6)
                }
            ))
        }
        else{
            setNums(generateAllNewDice())
        }
    }
   function generateAllNewDice(){
        return new Array(10).
        fill(0).
        map(()=>({value:Math.ceil(Math.random()*6),isHeld:false,id:nanoid()}))
   }
   function Hold(id) {
    setNums(oldDice => oldDice.map(die =>
        die.id === id ?
            { ...die, isHeld: !die.isHeld } :
            die
    ))
}
    useEffect(()=>{
        if(gameWon){
            buttonRef.current.focus()
        }
    },[gameWon])
   return (
    <>
        <main>
        {gameWon && <Confetti width={window.innerWidth} height={window.innerHeight}/>}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current</p>
           <div className="die-container">
                {diceElements}
           </div>
           <button ref={buttonRef} className="roll-dice" onClick={toggleDice}>{gameWon?"New Game":"Roll"}</button>
        </main>
    </>
    )
} 

