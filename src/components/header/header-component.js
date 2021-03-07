import { Redirect } from 'react-router-dom'

function Header({ loggedIn, setLoginStatus }) {

  const logoutUser = () => {
    setLoginStatus(false)
  }

  return (
    <div className='header'>
      <h1>blockTracker</h1>
      {loggedIn &&
        <div>
          <button
            onClick={logoutUser}
          >Logout
          </button>
        </div>}
      {!loggedIn && <Redirect to='/' />}
    </div>
  )
}

export default Header
