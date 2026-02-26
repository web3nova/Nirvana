import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-container'>

      <div className='nav-menuright'>
      <ul>
        <li>
          <a href="home">Home</a>
          <a href="About">About</a>
          <a href="#Our ecosystem">Our ecosystem</a>
        </li>
      </ul>
      </div>
      <div className='nav-logo'> <img src="Logo.png" alt="Nirvana" />
      </div>
      <div className='nav-menuleft'>
      <ul>
        <li>
          <a href="Events">Events</a>
          <a href="Team">Team</a>
        </li>
      </ul>
      </div>
      <div className='nav-button'>
        <button className='btn'>Join Nirvana</button>
      </div>

    </div>
  )
}

export default Navbar
