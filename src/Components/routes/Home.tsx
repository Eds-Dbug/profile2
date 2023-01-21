import { Outlet, useNavigate } from 'react-router';
import HobbiesSideBar from '../NavBar/HobbiesSideBar';
import styles from './_home.module.scss';
import Header from '../partials/Header';
import { ME_BLACKWHITE } from 'assets/Pictures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


export default function Home() {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(0);
  const [curLink, setCurLink] = useState('cycling');

  const currentRoute = () => {
    if(!toggle) {
      navigate(`/home/${curLink}`);
      setToggle(1);
    }else {
      setToggle(0);
      navigate(`/home`);
    }
  }

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
           onClick={() => currentRoute()}
				>
					TOGGLE HOBBIES
          {curLink}
          <FontAwesomeIcon icon={["fas","arrow-down"]}/>
				</button>
        

			<div className="collapse" id="collapseWidth">
				<section className={styles.home__hobbies}>
					<div className={styles.home__hobbies__sidebar}>
						<HobbiesSideBar setCurLink={setCurLink} />
					</div>
					<div className={styles.home__hobbies__outlet}>
						<Outlet />
					</div>
				</section>
			</div>
		</>
	);
}
