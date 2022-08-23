import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            {/*<span className="navbar-brand">*/}
            {/*  <img src={require('../assets/img/logo-bookkeping.png')} alt="" width="40" height="40" />*/}
            {/*</span>*/}
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
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    aria-current="page"
                  >
                    Converter
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/history"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    aria-current="page"
                  >
                    History
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/details"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    aria-current="page"
                  >
                    Details
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="container">
        <Outlet />
      </div>
      <footer>footer</footer>
    </div>
  )
}

export default Layout
