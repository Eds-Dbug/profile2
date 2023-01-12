import { projectData } from '../data/Data';
import '../styles/routes/projects.scss';
import Header from '../partials/Header';

export default function Projects() {
	{
		/**grid for mapping */
	}
	interface project {
		id?: string;
		pic?: string;
		link: string;
		description: string;
	}

	interface names {
		name: string;
		surname: string;
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
		{ name: 'a', surname: 'b' },
	];

	const arrayChunk = (arr: project[], n: number) => {
		const array = arr.slice();
		const chunks = [];
		while (array.length) {
			chunks.push(array.splice(0, n));
		}
		return chunks;
	};

	return (
		<div className="projects">
			<Header title="Projects" />
			{arrayChunk(projectData, 3).map((row, i) => (
				<div key={i} className="projects__row">
					{row.map((col, i) => (
						<div className="projects__row__item card" key={i}>
							<a className="projects__row__item--link" href={col.link}>
								<img
									src={col.pic}
									className="projects__row__item--img card-img-top"
									alt="..."
								/>
							</a>
							<div className="card-body">
								<p className="card-text">{col.description}</p>
							</div>
						</div>
					))}
				</div>
			))}
		</div>
	);
}
