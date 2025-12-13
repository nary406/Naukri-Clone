import {useLocation, useNavigate, useParams} from 'react-router-dom'

const withRouter = Component => {
  function Wrapper(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()
    return (
      <Component
        {...props}
        location={location}
        navigate={navigate}
        params={params}
        history={{
          push: path => navigate(path),
          replace: path => navigate(path, {replace: true}),
        }}
        match={{params}}
      />
    )
  }
  return Wrapper
}

export default withRouter
