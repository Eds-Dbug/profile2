import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './routes/Root.tsx'
import Home from './routes/Home.tsx';
import Projects from './routes/Projects.tsx';
import ErrorPage from './error/ErrorPage.tsx';
import Contact from './routes/Contact.tsx';
import Certificates from './routes/Certificates.tsx';
import Skills from './routes/Skills.tsx';
import Cycling from './routes/HobbyRoutes/Cycling.tsx';
import Minis from './routes/HobbyRoutes/Minis.tsx';
import Chivalry from './routes/HobbyRoutes/Chivalry.tsx';
//import NavBar from '../src/NavBar/NavBar.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/home',
				element: <Home />,
				errorElement: <ErrorPage />,
				children: [
					{
						path: '/home/cycling',
						element: <Cycling />,
						errorElement: <ErrorPage />,
					},
					{
						path: '/home/minis',
						element: <Minis />,
						errorElement: <ErrorPage />,
					},
					{
						path: '/home/chivalry',
						element: <Chivalry />,
						errorElement: <ErrorPage />,
					},
				],
			},
			{
				path: '/projects',
				element: <Projects />,
				errorElement: <ErrorPage />,
			},
			{
				path: '/certificates',
				element: <Certificates />,
			},
			{
				path: '/skills',
				element: <Skills />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
