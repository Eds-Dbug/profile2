import { bikeTripLinks } from '../data/Data';
import { NavLink } from 'react-router-dom';
import styles from './_CyclingNavbar.module.scss';

export default function CyclingNavBar() {
	const navMap = bikeTripLinks.map((link: any) => {
		return (
			<NavLink className={styles.cycling_bar__item} to={link.url} key={link.id}>
				{link.name}
			</NavLink>
		);
	});

	return <ul className={styles.cycling_bar__list}>{navMap}</ul>;
}
