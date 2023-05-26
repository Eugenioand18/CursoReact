import React from "react"
import './App.css'
import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "../components/Square"
import { WINNER_COMBOS, TURNS } from "../constants"
import { checkWinnerFrom } from "../logic/board"
import { WinnerModal } from "../components/WinnerModal" 
function App() {
  
  const [board,setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
      return Array(9).fill(null)
  }
    
    )
  const [turn, setTurn] = useState(()=>{
    const turnFromLocalStorage = window.localStorage.getItem('turn')
     return turnFromLocalStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null) // nullm mo hay ganador, false es empate
  

  const checkEndGame = (newBoard) =>{
    //const check = newBoard.every(valor => valor != null)
   
      return newBoard.every(valor => valor != null)
    
  }
  const updateBoard = (index)=>{
    if(board[index] ||winner ) return
    //no se debe modificar el array original
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //Guardar partida
    window.localStorage.setItem('board',JSON.stringify(newBoard))
    window.localStorage.setItem('turn',turn)
    const newWinner = checkWinnerFrom(newTurn)
    if (newWinner){
      setWinner(newWinner)
      confetti()
      
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
    

  }

  const resetGame = () =>{
    setBoard( Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('board')
  }
  return (

    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}> Resetar el juego </button>
      <section className="game">
        {
        board.map((x, index) =>{
          return(
           <Square
           key={index}
           index={index}
           updateBoard={updateBoard}
           >
           {board[index]}
           </Square>
          )
        })
        }
      </section>
      
      <section className="turn">
        <Square isSelected={turn === TURNS.X} >{TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O} </Square>
      </section>
        
        <WinnerModal winner={winner} resetGame={resetGame}>

        </WinnerModal>
    
    </main> 
    
    
  )
}

export default App
