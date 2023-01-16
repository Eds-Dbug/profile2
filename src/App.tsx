import './App.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import Home from './routes/Home';
import Projects from './routes/Projects';
import ErrorPage from './error/ErrorPage';
import Contact from './routes/Contact';
import Certificates from './routes/Certificates';
import Skills from './routes/Skills';
import Cycling from './routes/HobbyRoutes/Cycling';
import Spinner from 'react-bootstrap/Spinner';
import Hobbies from './routes/Hobbies';

import { faCheckSquare, faCoffee, faEnvelope, faPhone, faR, faVial,  } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	fab,
	faBootstrap,
	faCss3,
	faGithub,
	faHtml5,
	faJava,
	faJs,
	faLinux,
	faNode,
	faPhp,
	faReact,
	faSquareGithub,
	faSquareJs,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Minis from './routes/HobbyRoutes/Minis';
import Chivalry from './routes/HobbyRoutes/Chivalry';
library.add(
	fab,
	faR,
	faGithub,
	faJs,
	faJava,
	faCheckSquare,
	faCoffee,
	faSquareGithub,
	faEnvelope,
	faPhone,
	faReact,
	faSquareJs,
	faHtml5,
	faCss3,
	faBootstrap,
	faLinux,
	faNode,
	faPhp,
	faYoutube,
	faVial
);

//import NavBar from '../src/NavBar/NavBar';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Root />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: 'hobbies',
					element: <Hobbies />,
					errorElement: <ErrorPage />,
					children: [
						{
							path: 'cycling',
							element: <Cycling />,
						},
						{ path: 'minis', element: <Minis /> },
						{
							path: 'chivalry',
							element: <Chivalry />,
						},
					],
				},
				{
					path: 'projects',
					element: <Projects />,
				},
				{
					path: 'certificates',
					element: <Certificates />,
				},
				{
					path: 'skills',
					element: <Skills />,
				},
				{
					path: 'contact',
					element: <Contact />,
				},
			],
		},
	],
	{
		basename: '/',
	}
);


function App() {
  return (
		<RouterProvider
			router={router}
			fallbackElement={<Spinner animation="border" />}
		/>
	);
}

export default App;
