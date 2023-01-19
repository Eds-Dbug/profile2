import React, { useEffect } from 'react'
import { Outlet, redirect } from 'react-router';
import {ME_BLACKWHITE} from 'assets/Pictures'
import './_home.scss';
import HobbiesSideBar from '../NavBar/HobbiesSideBar';
import Header from '../partials/Header';

export default function Home() {
	useEffect(() => {
		redirect('/hobbies');
	},[])

  return (
		<>
			<Header title="Home" />
			<HobbiesSideBar/>
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
						<div className='home__outlet'>
							<Outlet />
						</div>
					</div>
					
				</div>
			</div>
		</>
	);
}