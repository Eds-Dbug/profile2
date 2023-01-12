import React from 'react'
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import {projectData} from '../data/Data';

export default function Projects() {
	{
		/**grid for mapping */
	}
  interface project {
    id?: string,
    pic?: string,
    link: string,
    description: string
  }
  interface names {
    name: string,
    surname: string
  }


  const data = [
    { name: 'a', surname: 'b' }, 
    { name: 'a', surname: 'b' }, 
    { name: 'a', surname: 'b' }, 
    { name: 'a', surname: 'b' }, 
    { name: 'a', surname: 'b' }, 
    { name: 'a', surname: 'b' }, 
    { name: 'a', surname: 'b' }, 
    { name: 'a', surname: 'b' }, 
    { name: 'a', surname: 'b' }
  ]


  const arrayChunk = (arr: names[], n:number) => {
    const array = arr.slice();
    console.log(array)
    const chunks = [];
    while (array.length) {
      for (const x of array.splice(0, n)) {
        chunks.push(
          <div>
            <h5>{x.name}</h5>
            <h5>{x.surname}</h5>
          </div>
        )
      }
      chunks.push('|')
      //chunks.push(buffer)
      // chunks.push(array.splice(0, n).map((x,i) => {
      //   return <div key={i}>{x.name}</div>
      // }))
    }
   
    return chunks;
  };
	

  return (
		<div>
			{/* {arrayChunk([1,2,3], 2).map((row, i) => (
				<div key={i} className="flex mx-auto">
					{row.map((col, i) => (
						<span key={i}>[{col}]</span>
					))}
				</div>
			))} */}
      {arrayChunk(data,3)}
		</div>
	);
}
