import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { IDefaultStore } from '../interfaces/IDefaaultStore'

const Layout = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state: IDefaultStore) => state?.auth.auth)
  const navigate = useNavigate()
  if (!auth) return <Navigate to="sign-in" />

  const logOut = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('sign-in')
  }

  return (
    <div className="App d-flex flex-column">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" aria-current="page">
                    Converter
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/history" className="nav-link" aria-current="page">
                    History
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/details" className="nav-link" aria-current="page">
                    Details
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/todos" className="nav-link" aria-current="page">
                    Todos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/snake" className="nav-link" aria-current="page">
                    Snake
                  </NavLink>
                </li>
              </ul>
            </div>
            <button className="btn btn-danger" onClick={() => logOut()}>
              Log out
            </button>
          </div>
        </nav>
      </header>
      <div className="container">
        <Outlet />
      </div>
      <footer className="bg-primary text-center text-white mt-auto">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a className="btn btn-primary btn-floating m-1" style={{ background: '#ac2bac' }} href="#!" role="button">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ background: '#333333' }}
              href="https://github.com/MamedovOFF"
              role="button"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </section>
        </div>
        <div className="text-center p-3" style={{ background: 'rgba(0, 0, 0, 0.2)', textDecoration: 'none' }}>
          <a className="text-white" href="https://github.com/MamedovOFF">
            © 2022 Follow me : M_dev
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
