import React from 'react';
import { hobbyLinks } from 'data/Data';
import { NavLink } from 'react-router-dom';
import styles from './_HobbiesSideBarNav.module.scss';

export default function HobbiesSideBar({setCurLink}: any) {
	interface linkType {
		id: number,
		name: string,
		url: string
	}

	const navMap = hobbyLinks.map((link: linkType) => {
		return (
			<NavLink
				className={`btn btn-outline-success ${styles['hobbies_side_bar__list--item']}`}
				to={link.url}
				key={link.id}
				onClick={() => setCurLink(link.url)}
			>
				{link.name}
			</NavLink>
		);
	});

	return <ul className={styles.hobbies_side_bar__list} >{navMap}</ul>;
}
