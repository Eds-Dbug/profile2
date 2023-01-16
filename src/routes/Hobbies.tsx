import React from 'react';
import { Outlet } from 'react-router';
import HobbiesSideBar from '../NavBar/HobbiesSideBar';
import '../styles/routes/hobbies.scss';
import Header from '../partials/Header';

export default function Hobbies() {
	return (
		<div>
			<Header title='Hobbies' />
			<HobbiesSideBar />
		</div>
	);
}
