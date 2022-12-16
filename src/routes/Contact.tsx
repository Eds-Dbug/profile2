import '../styles/routes/contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contacts } from '../data/Data';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

export default function Contact() {

	let navigate = useNavigate();
	const routeChange = (pathUrl: string) => {
		window.open(pathUrl);
	};

	const copyToClipBoard = (text: string) => {
		navigator.clipboard.writeText(text);
	}

  const contactMap = contacts.map(contact => {
    return (
			<div className="card contact__cards__card">
				<div className="body">
						<a
							className="btn btn-outline-success"
							onClick={contact.link? () => routeChange(contact.link) : () => copyToClipBoard(contact.platform)}
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
			</div>
		);
  });

  return (
		<div className="contact ps-3">
			<h1 className='contact__title'>Contact</h1>
      <div className='contact__cards'>
        {contactMap}
      </div>	
		</div>
	);
}
