import TodoForm from '../components/Todos/TodoForm'
import TodoList from '../components/Todos/TodoList'
import { useDispatch, useSelector } from 'react-redux'
import { IDefaultStore, ITodo } from '../types/IDefaaultStore'

const Todos = () => {
  const dispatch = useDispatch()
  const todoList = useSelector((state: IDefaultStore) => state?.todos)
  const addTodo = (payload: ITodo) => {
    dispatch({ type: 'ADD_TODO', payload: payload })
  }
  const deleteTodo = (id: number) => {
    dispatch({ type: 'DELETE_TODO', payload: id })
  }
  return (
    <div className="m-5">
      <TodoForm createTodo={addTodo} />
      <TodoList todosList={todoList} deleteTodo={deleteTodo} />
    </div>
  )
}

export default Todos
