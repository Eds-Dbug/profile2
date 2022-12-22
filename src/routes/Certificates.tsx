import Header from "../partials/Header";
import '../styles/routes/certifications.scss';
import { certificates } from "../data/Data";

export default function Certificates() {
	const certificateMap = certificates.map((cert) => {
		return <div className="card certificates__grid__item">
			<img src={cert.pic} className="card-img-top" alt="..."/>
			<div className="card-body">
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
		</div>;
	}) ;

  return (
		<div className="certifications">
			<Header title="Certifications" />
			<section className="certifications__grid">{certificateMap}</section>
		</div>
	);
}
