import { bikeTripLinks } from '../data/Data';
import { NavLink } from 'react-router-dom';
import styles from './_CyclingNavbar.module.scss';

export default function CyclingNavBar() {
	const navMap = bikeTripLinks.map((link: any) => {
		return (
			<NavLink className={styles.cycling_bar_item} to={link.url} key={link.id}>
				{link.name}
			</NavLink>
		);
	});
	return <ul className={styles.cycling_bar_list}>{navMap}</ul>;
}
