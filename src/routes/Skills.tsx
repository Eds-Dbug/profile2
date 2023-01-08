import Header from "../partials/Header";
import '../styles/routes/skills.scss';
import { softwareSkills } from '../data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export default function Skills() {
  const skillsMap = softwareSkills.map((skill) => {
    const upperCaseName = skill.iconName.charAt(0).toUpperCase() + skill.iconName.slice(1);
    const fullUpperCaseName = skill.iconName.toUpperCase();

    return (
			<section
				className="card text-center skills__software__body__item"
				key={skill.id}
			>
				<div className="card-body skills__software__body__item--body">
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
				</div>
				<div className="card-footer skills__software__body__item--footer">
					{fullUpperCaseName}
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
