import Header from "../partials/Header";
import { softwareSkills } from '../data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export default function Skills() {
  const skillsMap = softwareSkills.map((skill) => {
    const upperCaseName = skill.iconName.charAt(0).toUpperCase() + skill.iconName.slice(1);
    const fullUpperCaseName = skill.iconName.toUpperCase();

    return (
			<section className="card" key={skill.id}>
				<div className="card-body">
					{skill.iconPrefix ? (
						<FontAwesomeIcon
							className="icon"
							icon={[
								skill.iconPrefix as IconPrefix,
								skill.iconName as IconName,
							]}
						/>
					) : (
						<h5>{fullUpperCaseName}</h5>
					)}
				</div>
				<div className="card-footer">{upperCaseName}</div>
			</section>
		);
  });

  return (
		<div>
			<Header title="Skills" />
			<section className="card skills__software">
				<h2 className="card-header">Software Skills</h2>
				<div className="card-body">{skillsMap}</div>
			</section>
		</div>
	);
}
