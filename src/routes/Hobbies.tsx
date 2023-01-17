import { Outlet } from 'react-router';
import HobbiesSideBar from '../NavBar/HobbiesSideBar';
import '../styles/routes/hobbies.scss';
import Header from '../partials/Header';
import { ME_BLACKWHITE } from '../Pictures';

export default function Hobbies() {
	return (
		<>
			<Header title="Home" />
			<div className="home d-flex justify-content-center align-items-center">
				<div className="home__block card ">
					<div className="row g-0 ">
						<div className="col-md-8">
							<div className="card-body">
								<h1 className="card-title">EDGAR LEUNG</h1>
								<p className="card-text">
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</p>
							</div>
						</div>
						<div className="col-md-4 ">
							<img
								src={ME_BLACKWHITE}
								className="img-fluid rounded-circle"
								alt="..."
							/>
						</div>
					</div>
				</div>
			</div>
			<p>
				<button
					className="btn btn-primary"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseWidthExample"
					aria-expanded="false"
					aria-controls="collapseWidthExample"
				>
					Toggle width collapse
				</button>
			</p>

			<div className="collapse " id="collapseWidthExample">
				<section className="home__hobbies">
					<div className="home__hobbies--sidebar">
						<HobbiesSideBar />
					</div>
					<div className="home__hobbies--outlet">
						<Outlet />
					</div>
				</section>
			</div>
		</>
	);
}
