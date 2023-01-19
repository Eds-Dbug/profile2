import Header from '../partials/Header';
import { certificates } from 'data/Data';

import styles from './_expertise.module.scss';
import { softwareSkills } from 'data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

export default function Expertise() {
	const routeChange = (url: string) => {window.open(url);};

	const certificateMap = certificates.map((cert) => {
		return (
			<div className={`card ${styles.certifications__grid__item}`} key={cert.id}>
				<img
					src={cert.pic}
					className="btn btn-outline-success card-img-top"
					alt="..."
					onClick={() => window.open(cert.link)}
				/>

				<div className="card-body">
					<p className="card-text">{cert.description}</p>
				</div>
			</div>
		);
	});

	const skillsMap = softwareSkills.map((skill) => {
		const upperCaseSkillName = skill.skillName.toUpperCase();
		const fullUpperCaseName = skill.iconName.toUpperCase();

		return (
			<section
				className={`card text-center ${styles.skills__software__body__item}`}
				key={skill.id}
			>
				<div className={`card-body btn ${styles["skills__software__body__item--body"]}`}>
					<a onClick={() => routeChange(skill.link)}>
						{skill.iconPrefix ? (
							<FontAwesomeIcon
								className="icon"
								icon={[
									skill.iconPrefix as IconPrefix,
									skill.iconName as IconName,
								]}
							/>
						) : (
							<h6 className={`${styles["skills__software__body__item--title"]}`}>
								{fullUpperCaseName}
							</h6>
						)}
					</a>
				</div>
				<div className={`card-footer ${styles["skills__software__body__item--footer"]}`}>
					{upperCaseSkillName}
				</div>
			</section>
		);
	});

	return (
		<div className="">
			<Header title="Expertise" />
			<div className={styles.certifications}>
				<section className={styles.certifications__grid}>{certificateMap}</section>
			</div>

			<div className={styles.skills}>
				<section className={`card ${styles.skills__software}`}>
					<h2 className="card-header">Software Skills</h2>
					<div className={`card-body ${styles.skills__software__body}`}>{skillsMap}</div>
				</section>
			</div>
		</div>
	);
}
