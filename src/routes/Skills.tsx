import Header from "../partials/Header";
import '../styles/routes/skills.scss';
import '../styles/routes/certifications.scss';
import { certificates } from '../data/Data';
import { softwareSkills } from '../data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export default function Skills() {
	const routeChange = (url: string) => {
		window.open(url);
	}

  const skillsMap = softwareSkills.map((skill) => {
		const upperCaseSkillName = skill.skillName.toUpperCase();
    const fullUpperCaseName = skill.iconName.toUpperCase();

    return (
			<section
				className="card text-center skills__software__body__item"
				key={skill.id}
			>
				<div className="card-body btn skills__software__body__item--body">
					<a
						onClick={() => routeChange(skill.link)}
					>
						{skill.iconPrefix ? (
							<FontAwesomeIcon
								className="icon"
								icon={[
									skill.iconPrefix as IconPrefix,
									skill.iconName as IconName,
								]}
							/>
						) : (
							<h6 className="skills__software__body__item--title">
								{fullUpperCaseName}
							</h6>
						)}
					</a>
				</div>
				<div className="card-footer skills__software__body__item--footer">
					{upperCaseSkillName}
				</div>
			</section>
		);
  });

  return (
		<>
			<Header title="Skills" />
			<div className="skills">
				<section className="card skills__software">
					<h2 className="card-header">Software Skills</h2>
					<div className="card-body skills__software__body">{skillsMap}</div>
				</section>
			</div>
		</>
	);
}
