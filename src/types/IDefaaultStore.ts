export interface ITodo {
  id: number
  body: string
  title: string
}

export interface INotification {
  id: number
  message: string
  type: string
}

export interface IDefaultStore {
  cash: number
  todos: Array<ITodo>
  todo: ITodo | null
  notification: Array<INotification>
}
