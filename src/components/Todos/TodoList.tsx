import { ITodo } from '../../types/IDefaaultStore'

interface ITodoList {
  todosList: ITodo[]
  deleteTodo(id: number): void
}

const TodoList = ({ todosList, deleteTodo }: ITodoList) => {
  return (
    <ul className="list-group">
      {todosList.map((el, idx) => (
        <li className="list-group-item d-flex justify-content-between align-items-baseline" key={el.id}>
          <div>
            <h5>
              {idx + 1}.{el.title}
            </h5>
            <p>{el.body}</p>
          </div>
          <span
            className="badge bg-danger rounded-pill"
            style={{ cursor: 'pointer' }}
            onClick={() => deleteTodo(el.id)}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
