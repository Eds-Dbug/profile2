import React from 'react';
import { hobbyLinks } from '../data/Data';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation/SideBarNav.scss';

export default function HobbiesSideBar() {
	const navMap = hobbyLinks.map((link: any) => {
		return (
			<NavLink
				className="hobbies_side_bar__list--item "
				to={link.url}
				key={link.id}
			>
				{link.name}
			</NavLink>
		);
	});

	return (
		<div className="row">
			<nav className="hobbies_side_bar col-3 navbar navbar-expand-sm">
				<ul className="hobbies_side_bar__list ">{navMap}</ul>
			</nav>
			<div className="col"><Outlet/></div>
		</div>
	);
}
