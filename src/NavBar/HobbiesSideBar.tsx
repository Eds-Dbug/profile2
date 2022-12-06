import React from 'react';
import { hobbyLinks } from '../data/Data';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation/SideBarNav.scss';

export default function HobbiesSideBar() {
	const navMap = hobbyLinks.map((link: any) => {
		return (
			<NavLink className="" to={link.url} key={link.id}>
				{link.name}
			</NavLink>
		);
	});

	return (
		<nav className="">
			<ul className="">{navMap}</ul>
		</nav>
	);
}
