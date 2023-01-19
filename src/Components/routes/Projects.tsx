import { projectData } from 'data/Data';
import styles from './_projects.module.scss';
import Header from '../partials/Header';

export default function Projects() {

	interface project {
		id?: string;
		pic?: string;
		link: string;
		description: string;
	}

	const arrayChunk = (arr: project[], n: number) => {
		const array = arr.slice();
		const chunks = [];
		while (array.length) {
			chunks.push(array.splice(0, n));
		}
		return chunks;
	};

	return (
		<div className={styles.projects}>
			<Header title="Projects" />
			{arrayChunk(projectData, 3).map((row, i) => (
				<div key={i} className={styles.projects__row}>
					{row.map((col, i) => (
						<div className={`card btn ${styles.projects__row__item}`} key={i}>
							<a
								className={styles['projects__row__item--link']}
								onClick={() => window.open(col.link)}
							>
								<img
									src={col.pic}
									className={`card-img-top ${styles["projects__row__item--img"]}`}
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
