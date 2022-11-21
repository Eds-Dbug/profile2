import React from 'react'
import links from './Links'
export default function NavBar() {


  const navMap = links.map((link: any) => {
    return (
      <a className="nav-padding btn btn-outline-secondary "
				 href={link.url}
				 key={link.id}
      >
          {link.name}
      </a>
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
