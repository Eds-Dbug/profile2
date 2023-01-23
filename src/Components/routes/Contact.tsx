import styles from './_contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contacts } from 'data/Data';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Header from '../partials/Header';

export default function Contact() {
	const [textToCopy, setTextToCopy] = useState(''); 

	const routeChange = (pathUrl: string) => {
		window.open(pathUrl);
	};

	const copyToClipBoard = (text: string) => {
		navigator.clipboard.writeText(text);
		//need to set new state to true
		setTextToCopy(text);
		//setCopyToBoard(true);
	}

	useEffect(() => {
		setTimeout(() => {
			//setCopyToBoard(false);
			setTextToCopy('');
		}, 7000);
	}, [textToCopy]);

  const contactMap = contacts.map((contact) => (
		<div className={styles.contact__cards__card} key={contact.id}>
			<h6
				className={classNames({
					[styles.copied]: true,
					[styles["copied--toggled"]]: textToCopy === contact.platform,
				})}
			>
				Copied to Clipboard
			</h6>

			<div className={styles.body}>
				<a
					className="btn btn-outline-success"
					onClick={
						contact.link
							? () => routeChange(contact.link)
							: () => copyToClipBoard(contact.platform)
					}
				>
					<FontAwesomeIcon
						className={styles.icon}
						icon={[
							contact.iconPrefix as IconPrefix,
							contact.iconName as IconName,
						]}
					/>
					<h5>{contact.platform}</h5>
				</a>
			</div>
		</div>
	));

  return (
		<>
		<Header title='Contacts'/>
			<div className={`${styles.contact} ps-3`}>
				<div className={styles.contact__cards}>
					{contactMap}
				</div>	
			</div>
		</>
	);
}
