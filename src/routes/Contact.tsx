import { contacts } from "../data/Data";
import '../styles/routes/contact.scss';

export default function Contact() {
  const contactMap = contacts.map(contact => {
    return (
			<div className="card contact__card">
				<div className="card-body">
					<a href={contact.link}>
            <h1>{contact.platform}</h1>
          </a>
				</div>
			</div>
		);
  });

  return (
    <div className="contact ps-3">
      {contactMap}
    </div>
  )
}
