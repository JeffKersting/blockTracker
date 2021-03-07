function Header({ loggedIn }) {

  return (
    <div className='header'>
      <h1>blockTracker</h1>
      {loggedIn && <h1>Logged In</h1>}
    </div>
  )
}

export default Header
