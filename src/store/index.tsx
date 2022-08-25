import { createStore } from 'redux'
import { IDefaultStore } from '../types/IDefaaultStore'

const defaultState: IDefaultStore = {
  cash: 0,
  todos: [
    {
      id: 1,
      title: 'Milk',
      body: 'Milk by magazine',
    },
  ],
  todo: null,
  notification: [],
}

const reducer = (state = defaultState, action: { type: string; payload: never }) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payload }
    case 'GET_CASH':
      return { ...state, cash: state.cash - action.payload }
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] }
    case 'DELETE_TODO':
      return { ...state, todos: [...state.todos.filter((el) => el.id !== action.payload)] }
    case 'NOTIFICATION':
      return { ...state, notification: [...state.notification, action.payload] }
    case 'ClEAR_NOTIFICATION':
      return { ...state, notification: [...state.notification.filter((el) => el.id !== action.payload)] }
    default:
      return state
  }
}

const Store = createStore(reducer)

export default Store
