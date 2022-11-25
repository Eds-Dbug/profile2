import React from 'react'
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

export default function Projects() {
  return (
		<div>
			fsfdsf Projects
			<NavLink to='cycling'>Cycling</NavLink>
			<Outlet />
		</div>
	);
}
