import TodoForm from '../components/Todos/TodoForm'
import TodoList from '../components/Todos/TodoList'
import { useDispatch, useSelector } from 'react-redux'
import { IDefaultStore, ITodo } from '../interfaces/IDefaaultStore'

const Todos = () => {
  const dispatch = useDispatch()
  const todoList = useSelector((state: IDefaultStore) => state?.todos)

  const addTodo = (payload: ITodo) => {
    dispatch({ type: 'ADD_TODO', payload: payload })
    dispatch({
      type: 'NOTIFICATION',
      payload: { message: `Create todo ${payload.title}`, type: 'Success', id: Date.now() },
    })
  }
  const deleteTodo = (id: number) => {
    dispatch({ type: 'DELETE_TODO', payload: id })
    dispatch({ type: 'NOTIFICATION', payload: { message: `Delete todo`, type: 'Success', id: Date.now() } })
  }
  return (
    <div className="m-5">
      <TodoForm createTodo={addTodo} />
      <TodoList todosList={todoList} deleteTodo={deleteTodo} />
    </div>
  )
}

export default Todos
