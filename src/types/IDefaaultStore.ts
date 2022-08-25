export interface ITodo {
  id: number
  body: string
  title: string
}

export interface IDefaultStore {
  cash: number
  todos: Array<ITodo>
  todo: ITodo | null
}
