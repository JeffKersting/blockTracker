function Header() {

  return (
    <div className='header'>
      <h1>blockTracker</h1>
      {user && <h1>Logged In</h1>}
    </div>
  )
}
