import React from 'react'

export default function Header({title}: {title: string}) {
  return (
		<div>
			<h1 className="Header__title">{title}</h1>
		</div>
	);
}
