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
      chunks.push(array.splice(0, n));
      }
    return chunks;
  };
	

  return (
		<div className='projects'>
			{arrayChunk(data, 3).map((row, i) => (
				<div key={i} className="projects__row">
          |
					{row.map((col, i ) => (
            <div className="card" key={i}>
              <img src="..." className="card-img-top" alt="..."/>
              <div className="card-body">
                <p className="card-text">{col.name}</p>
                <p className="card-text">{col.surname}</p>
              </div>
            </div>
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
