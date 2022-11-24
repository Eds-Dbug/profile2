
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
				// children: [
				// 	{
				// 		path: '/home/minis',
				// 		element: <Minis/>
				// 	}
				// ]
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


function App() {
  return <RouterProvider router={router} />;
}

export default App;
