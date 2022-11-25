import React from 'react'
import { Link, Outlet } from 'react-router-dom';


export default function Projects() {
  return (
		<div>
			fsfdsf Projects
			<nav>
				<Link to="cycling">Cycling</Link>
			</nav>
			<Outlet />
		</div>
	);
}
