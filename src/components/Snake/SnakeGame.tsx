import './style.scss'
import Cell from './Cell'
import { useEffect, useState } from 'react'

const DEFAULT_MAP = Array(10).fill(Array(10).fill(0))
const KEY_BOARD = ['w', 's', 'a', 'd']
const checkMap = (position: number) => {
  switch (true) {
    case position >= 10:
      return 0
    case position < 0:
      return 9
    default:
      return position
  }
}

const SnakeGame = () => {
  const [snake, setSnake] = useState([[1, 1]])
  const [apple, setApple] = useState([0, 0])
  const [direction, setDirection] = useState(KEY_BOARD[0])
  const [move, setMove] = useState<Array<number>>([1, 0])
  const handleKey = (event: KeyboardEvent) => {
    console.log(event.key)
    const index = KEY_BOARD.indexOf(event.key)
    if (index > -1) setDirection(KEY_BOARD[index])
  }
  const gameLoop = () => {
    return setTimeout(() => {
      const newSnake = snake
      switch (direction) {
        case KEY_BOARD[0]:
          setMove([-1, 0])
          break
        case KEY_BOARD[1]:
          setMove([1, 0])
          break
        case KEY_BOARD[2]:
          setMove([0, -1])
          break
        case KEY_BOARD[3]:
          setMove([0, 1])
          break
      }

      const head = [
        checkMap(newSnake[newSnake.length - 1][0] + move[0]),
        checkMap(newSnake[newSnake.length - 1][1] + move[1]),
      ]
      newSnake.push(head)
      setSnake(newSnake.slice(1))
    }, 500)
  }
  useEffect(() => {
    const tid = gameLoop()
    return () => clearInterval(tid)
  }, [snake])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
  }, [])

  return (
    <div className="SnakeGame">
      {DEFAULT_MAP.map((row, idxR) => (
        <div className="row_snake" key={idxR}>
          {row.map((cell: number, idxC: number) => {
            return (
              <Cell
                key={idxC}
                apple={apple[0] === idxR && apple[1] === idxC}
                snake={snake.some((elem) => elem[0] === idxR && elem[1] === idxC)}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default SnakeGame
