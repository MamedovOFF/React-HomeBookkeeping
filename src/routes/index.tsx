import Convert from '../page/Convert'
import Details from '../page/Details'
import History from '../page/History'

const route = [
  {
    path: '/',
    element: <Convert />,
  },
  {
    path: '/details',
    element: <Details />,
  },
  {
    path: '/history',
    element: <History />,
  },
]

export default route
