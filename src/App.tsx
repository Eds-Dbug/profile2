import './App.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from 'Components/routes/Root';
import Projects from 'Components/routes/Projects';
import ErrorPage from 'Components/error/ErrorPage';
import Contact from 'Components/routes/Contact';
import Cycling from 'Components/routes/HobbyRoutes/Cycling';
import Spinner from 'react-bootstrap/Spinner';
import Home from 'Components/routes/Home';

import { faArrowDown, faCheckSquare, faCoffee, faEnvelope, faPhone, faR, faVial } from '@fortawesome/free-solid-svg-icons';
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
import Minis from 'Components/routes/HobbyRoutes/Minis';
import Chivalry from 'Components/routes/HobbyRoutes/Chivalry';
import City from 'Components/routes/HobbyRoutes/CyclingRoutes/City';
import GeorgianBay from 'Components/routes/HobbyRoutes/CyclingRoutes/GeorgianBay';
import Niagra from 'Components/routes/HobbyRoutes/CyclingRoutes/Niagra';
import Expertise from 'Components/routes/Expertise';
library.add(
	fab,
	faR,
	faGithub,
	faJs,
	faJava,
	faCheckSquare,
  faArrowDown,
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

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Root />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: 'home',
					element: <Home />,
					errorElement: <ErrorPage />,
					children: [
						{
							path: 'cycling',
							element: <Cycling />,

							children: [
								{ path: 'City', element: <City /> },
								{ path: 'Niagra', element: <Niagra /> },
								{ path: 'GeorgianBay', element: <GeorgianBay /> },
							],
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
					path: 'expertise',
					element: <Expertise />,
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
