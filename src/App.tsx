import { Routes, Route } from 'react-router-dom'
import NotFound from './page/NotFound'
import Layout from './components/Layout'
import route from './routes'
import Convert from './page/Convert'
import Notification from './components/Notification'
import SignIn from './page/SignIn'
import SignUp from './page/SignUp'

const App = () => (
  <>
    <Notification />
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Convert />} />
        {route.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
)
export default App
