import React from 'react'
import links from './Links'
import { NavLink } from 'react-router-dom';

export default function ActiveNavBar() {

  const navMap = links.map((link: any) => {
    return (
      <NavLink className="nav-padding btn btn-outline-secondary "
				 to={link.url}
				 key={link.id}
      >
          {link.name}
      </NavLink>
    )
  })

  return (
    <nav className="navbar navbar-expand-sm bg-dark fixed-top mb-4">
      <ul className="navbar-nav mr">
        {navMap}
      </ul>
    </nav>
  )
}
