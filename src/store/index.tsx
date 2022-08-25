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
    default:
      return state
  }
}

const Store = createStore(reducer)

export default Store
