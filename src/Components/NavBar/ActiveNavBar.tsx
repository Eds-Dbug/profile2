import { links } from 'data/Data';
import './_ActiveNavbar.scss';
import { NavLink } from 'react-router-dom';

export default function ActiveNavBar() {

  const navMap = links.map((link: any) => {
    return (
      <NavLink className="nav-padding btn btn-outline-success"
				to={link.url}
				key={link.id}
      >
          {link.name}
      </NavLink>
    )
  })

  return (
    <nav className="navbar navbar-expand-sm fixed-top mb-4 main-navBar">
      <ul className="navbar-nav mr">
        {navMap}
      </ul>
    </nav>
  )
}
