import { contacts } from "../data/Data";
import '../styles/routes/contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Contact() {
  const contactMap = contacts.map(contact => {
    return (
			<div className="card contact__card">
				<div className="card-body">
					<FontAwesomeIcon icon={['fab', 'square-github']} />
					<a href={contact.link}>
						<h5>{contact.platform}</h5>
					</a>
				</div>
			</div>
		);
  });

  return (
		<div className="contact ps-3">
			{contactMap}
			
			
		</div>
	);
}
