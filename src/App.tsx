import './App.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import Projects from './routes/Projects';
import ErrorPage from './error/ErrorPage';
import Contact from './routes/Contact';
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
import City from './routes/HobbyRoutes/CyclingRoutes/City';
import GeorgianBay from './routes/HobbyRoutes/CyclingRoutes/GeorgianBay';
import Niagra from './routes/HobbyRoutes/CyclingRoutes/Niagra';
import Expertise from './routes/Expertise';
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

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Root />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: 'home',
					element: <Hobbies />,
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
					element: <Expertise/>
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
