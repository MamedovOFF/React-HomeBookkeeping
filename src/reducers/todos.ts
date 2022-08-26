import { ITodo } from '../interfaces/IDefaaultStore'

const todosReducer = (state: ITodo[] = [], action: { type: string; payload: never }) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    case 'DELETE_TODO':
      return [...state.filter((el) => el.id !== action.payload)]
    default:
      return state
  }
}

export default todosReducer
