import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    localStorage.removeItem('loginUser');
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          📝 My Blog
        </Link>

        {/* 👇 This toggler button is important for mobile menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto gap-3 align-items-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active fw-semibold' : ''}`
                }
              >
                🏠 Home
              </NavLink>
            </li>

            {user && (
              <li className="nav-item">
                <NavLink
                  to="/postform"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active fw-semibold' : ''}`
                  }
                >
                  ➕ Add Blog
                </NavLink>
              </li>
            )}

            {!user ? (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'active fw-semibold' : ''}`
                    }
                  >
                    🔐 Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'active fw-semibold' : ''}`
                    }
                  >
                    📝 Register
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="btn btn-warning btn-sm" onClick={handleLogout}>
                  🚪 Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
