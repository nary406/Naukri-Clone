import {Link, useNavigate} from 'react-router-dom'

import Cookies from 'js-cookie'

import {MdHome, MdWork} from 'react-icons/md'

import {FiLogOut} from 'react-icons/fi'

import './index.css'

function Header() {
  const navigate = useNavigate()
  const removeAccess = () => {
    Cookies.remove('jwt_token')
    navigate('/login', {replace: true})
  }
  return (
    <nav className="main-header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          className="header-website-logo"
          alt="website logo"
        />
      </Link>
      <div className="lg-container">
        <ul className="lg-list">
          <li className="header-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="header-item">
            <Link to="/jobs" className="link">
              Jobs
            </Link>
          </li>
          <li className="header-item">
            <Link to="/profile" className="link">
              Profile
            </Link>
          </li>
        </ul>
        <button
          type="submit"
          className="header-logout-button"
          onClick={removeAccess}
        >
          Logout
        </button>
      </div>
      <ul className="sm-container">
        <li className="sm-list-item">
          <Link to="/" className="l">
            <MdHome className="icons" />
          </Link>
        </li>
        <li className="sm-list-item">
          <Link to="/jobs" className="l">
            <MdWork className="icons" />
          </Link>
        </li>
        <li className="sm-list-item">
          <button
            type="submit"
            data-testid="logout"
            alt="logout"
            className="button-icon"
            onClick={removeAccess}
          >
            <FiLogOut className="icons" />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
