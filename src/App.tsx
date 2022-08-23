import { Routes, Route } from 'react-router-dom'
import NotFound from './page/NotFound'
import Layout from './components/Layout'
import route from './routes'

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      {route.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)
export default App
