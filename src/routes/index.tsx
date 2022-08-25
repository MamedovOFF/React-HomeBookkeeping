import Details from '../page/Details'
import History from '../page/History'
import Todos from '../page/Todos'

const route = [
  {
    path: 'details',
    element: <Details />,
  },
  {
    path: 'history',
    element: <History />,
  },
  {
    path: 'todos',
    element: <Todos />,
  },
]

export default route
