import '../styles/routes/contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contacts } from '../data/Data';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { IconName } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const contactMap = contacts.map(contact => {
    return (
			<div className="card contact__cards__card">
				<div className="card-body contact__cards__body">
					<FontAwesomeIcon icon={[contact.iconPrefix as IconPrefix, contact.iconName as IconName]} />
					<a href={contact.link}>
						<h5>{contact.platform}</h5>
					</a>
				</div>
			</div>
		);
  });

  return (
		<div className="contact ps-3">
      <div className='contact__cards'>
        {contactMap}
      </div>	
		</div>
	);
}
