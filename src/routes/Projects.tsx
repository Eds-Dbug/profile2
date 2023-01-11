import React from 'react'
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import {projectData} from '../data/Data';

export default function Projects() {
	{
		/**grid for mapping */
	}
		const arrayChunk = (arr: any[], n:number) => {
			const array = arr.slice();
			const chunks = [];
			while (array.length) chunks.push(array.splice(0, n));
			return chunks;
		};
	

  return (
		<div>
			{arrayChunk(projectData, 2).map((row, i) => (
				<div key={i} className="flex mx-auto">
					{row.map((col, i) => (
						<span key={i}>[{col}]</span>
					))}
				</div>
			))}
		</div>
	);
}
