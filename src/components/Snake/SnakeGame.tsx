import './style.scss'
import Cell from './Cell'
import { useEffect, useState } from 'react'

const DEFAULT_MAP = Array(10).fill(Array(10).fill(0))
const SnakeGame = () => {
  const [snake, setSnake] = useState([[0, 0]])
  const [apple, setApple] = useState([0, 0])

  const gameLoop = () => {
    const newSnake = snake
    let move = []
    move = [1, 0]

    const head = [newSnake[newSnake.length - 1][0] + move[0], newSnake[newSnake.length - 1][1] + move[1]]
    newSnake.push(head)
    setSnake(newSnake)
  }
  useEffect(() => {
    gameLoop()
  }, [])
  return (
    <div className="SnakeGame">
      {DEFAULT_MAP.map((row, idxR) => (
        <div className="row_snake" key={idxR}>
          {row.map((cell: number, idxC: number) => {
            return <Cell key={idxC} apple={apple[0] === idxR && apple[1] === idxC} />
          })}
        </div>
      ))}
    </div>
  )
}

export default SnakeGame
