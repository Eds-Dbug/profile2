
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
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee,  } from '@fortawesome/free-solid-svg-icons';

//import NavBar from '../src/NavBar/NavBar';

library.add(fab, faGithub, faCheckSquare, faCoffee, faSquareGithub);

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
