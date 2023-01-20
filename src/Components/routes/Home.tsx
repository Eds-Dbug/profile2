import { Outlet } from 'react-router';
import HobbiesSideBar from '../NavBar/HobbiesSideBar';
import styles from './_home.module.scss';
import Header from '../partials/Header';
import { ME_BLACKWHITE } from 'assets/Pictures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
	return (
		<>
			<Header title="Home" />
			<div
				className={`${styles.home} d-flex justify-content-center align-items-center`}
			>
				<div className={`${styles.home__block} card`}>
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
			<button
					className={`btn btn-outline-success ${styles["home__hobbies__toggle"]}`}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseWidth"
					aria-expanded="false"
					aria-controls="collapseWidth"
				>
					TOGGLE HOBBIES
          <FontAwesomeIcon icon={["fas","arrow-down"]}/>
				</button>

			<div className="collapse" id="collapseWidth">
				<section className={styles.home__hobbies}>
					<div className={styles.home__hobbies__sidebar}>
						<HobbiesSideBar />
					</div>
					<div className={styles.home__hobbies__outlet}>
						<Outlet />
					</div>
				</section>
			</div>
		</>
	);
}
