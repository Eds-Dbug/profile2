import './_contact.scss';
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

  const contactMap = contacts.map(contact => (
				<div className=" contact__cards__card" key={contact.id}>
						<h6 className={classNames({
							'copied': true,
							'copied--toggled': textToCopy === contact.platform,	
							})}>Copied to Clipboard</h6>
					
					<div className="body">
						<a
							className="btn btn-outline-success"
							onClick={
								contact.link
									? () => routeChange(contact.link)
									: () => copyToClipBoard(contact.platform)
							}
						>
							<FontAwesomeIcon
								className="icon"
								icon={[
									contact.iconPrefix as IconPrefix,
									contact.iconName as IconName,
								]}
							/>
							<h5>{contact.platform}</h5>
						</a>
					</div>
				</div>)
  );

  return (
		<div className="contact ps-3">
			<Header title='Contacts'/>
      <div className='contact__cards'>
        {contactMap}
      </div>	
		</div>
	);
}
