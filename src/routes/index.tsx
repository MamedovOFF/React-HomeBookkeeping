import Details from '../page/Details'
import History from '../page/History'
import Todos from '../page/Todos'
import Snake from '../page/Snake'

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
  {
    path: 'snake',
    element: <Snake />,
  },
]

export default route
