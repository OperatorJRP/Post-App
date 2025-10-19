import { Link, useLocation } from "react-router-dom"
import { useAuthStore } from "../../stores/authStore"
import "./Header.css"

const Header = () => {
  const { isAuthenticated, user, signOut } = useAuthStore()
  const location = useLocation()
  const isAuthPage =
    location.pathname === "/signin" || location.pathname === "/signup"

  return (
    <header className="app-header">
      <div className="logo">
        <div className="logo-icon"></div>
        <span>foo-rum</span>
      </div>

      <div className="header-actions">
        {isAuthPage ? (
          <Link to="/" className="login-btn">
            Back to home
          </Link>
        ) : isAuthenticated ? (
          <div className="user-menu">
            <span className="user-name">Welcome, {user?.username}</span>
            <button onClick={signOut} className="login-btn">
              Logout →
            </button>
          </div>
        ) : (
          <Link to="/signin" className="login-btn">
            Login →
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
