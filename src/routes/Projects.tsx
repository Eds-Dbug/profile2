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
    //console.log(array)
    const chunks = [];
    while (array.length) {
      // for (const x of array.splice(0, n)) {
      //   chunks.push(
      //     <div className='flex mx-auto'>
      //       <span>{x.name}</span>
      //       <span>{x.surname}</span>
      //     </div>
      //   )

      chunks.push(array.splice(0, n));
      }
      //chunks.push('|')

    return chunks;
  };
	

  return (
		<div>
			{arrayChunk(data, 3).map((row, i) => (
				<div key={i} className="flex mx-auto">
					{row.map((col, i ) => (
            <>
              <span key={i}>{col.name}</span>
              <span key={i}>{col.surname}</span>
            </>
					))}
				</div>
			))}
      {/* {arrayChunk(data,3).map((x,i) => (
        <div key={i} className="flex mx-auto">{
          {x.map()}
        }</div>
      ))} */}
		</div>
	);
}
