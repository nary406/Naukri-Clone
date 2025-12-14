import {useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

function Login() {
  const [username, setUsername] = useState('Narendra')
  const [password, setPassword] = useState('vemulanarendra')
  const [showError, setShowError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const submitForm = async event => {
    event.preventDefault()
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      navigate('/', {replace: true})
    } else {
      setShowError(true)
      setErrorMsg(data.error_msg)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Navigate to="/" />
  }

  return (
    <div className="main-login-container">
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          className="website-logo"
          alt="website logo"
        />
        <form className="login-form" onSubmit={submitForm}>
          <label className="label" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="input-element"
            value={username}
            onChange={onChangeUsername}
            placeholder="Username"
          />
          <label className="label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type={showPass ? 'text' : 'password'}
            id="password"
            className="input-element"
            value={password}
            onChange={onChangePassword}
            placeholder="Password"
          />
          <div className="show-password-container">
            <input
              type="checkbox"
              id="showPassword"
              className="checkbox-input"
              onChange={() => setShowPass(prev => !prev)}
            />
            <label htmlFor="showPassword" className="checkbox-label">
              Show Password
            </label>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showError && <p className="error-display">*{errorMsg}</p>}
        </form>
      </div>
    </div>
  )
}

export default Login
