import Header from "../partials/Header";
import '../styles/routes/certifications.scss';
import { certificates } from "../data/Data";

export default function Certificates() {
	const certificateMap = certificates.map((cert) => {
		return (
			<div className="card certifications__grid__item">
				<img
					src={cert.pic}
					className="btn btn-outline-success card-img-top"
					alt="..."
					onClick={() => window.open(cert.link)}
				/>
	
				<div className="card-body">
					<p className="card-text">{cert.description}</p>
				</div>
			</div>
		);
	}) ;

  return (
		<div className="certifications">
			<Header title="Certifications" />
			<section className="certifications__grid">{certificateMap}</section>
		</div>
	);
}
