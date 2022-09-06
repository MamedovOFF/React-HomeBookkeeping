import { ITodo } from '../interfaces/IDefaaultStore'

const notificationReducer = (state: ITodo[] = [], action: { type: string; payload: never }) => {
  switch (action.type) {
    case 'NOTIFICATION':
      return [...state, action.payload]
    case 'ClEAR_NOTIFICATION':
      return [...state.filter((el) => el.id !== action.payload)]
    default:
      return state
  }
}

export default notificationReducer
