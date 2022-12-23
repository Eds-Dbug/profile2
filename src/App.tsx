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
import Minis from './routes/HobbyRoutes/Minis';
import Chivalry from './routes/HobbyRoutes/Chivalry';
import Spinner from 'react-bootstrap/Spinner';
import Hobbies from './routes/Hobbies';

import { faCheckSquare, faCoffee, faEnvelope, faPhone, faR,  } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	fab,
	faBootstrap,
	faCss3,
	faGithub,
	faHtml5,
	faLinux,
	faNode,
	faReact,
	faSquareGithub,
	faSquareJs,
} from '@fortawesome/free-brands-svg-icons';
library.add(
	fab,
	faR,
	faGithub,
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
);

//import NavBar from '../src/NavBar/NavBar';

const router = createBrowserRouter([
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
        path: 'hobbies' ,
        element: <Hobbies/>
      },
			{
				path: 'projects',
				element: <Projects />,

				errorElement: <ErrorPage />,
				children: [
					{
						path: 'cycling',
						element: <Cycling />,
					},
				],
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
],{
  basename: "/",
});


function App() {
  return (
		<RouterProvider
			router={router}
			fallbackElement={<Spinner animation="border" />}
		/>
	);
}

export default App;
