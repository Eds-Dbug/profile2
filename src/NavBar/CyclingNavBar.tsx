import React from 'react';
import { CyclingText } from '../data/Data';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation/SideBarNav.scss';
import * as cyclingStyles from './_CyclingNavbar.module.scss';

export default function CyclingNavBar() {
	const navMap = CyclingText.map((link: any) => {
		return (
			<NavLink
				className="cycling_bar__list--item "
				to={link.url}
				key={link.id}
			>
				{link.name}
			</NavLink>
		);
	});

	return <ul className={cyclingStyles.class}>{navMap}</ul>;
}
