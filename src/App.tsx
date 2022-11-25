
import './routes/styles/app.scss';
import './index.css';

import { Routes, Route, BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import ActiveNavBar from './NavBar/ActiveNavBar';


//import NavBar from '../src/NavBar/NavBar';

function App() {
  return (
		<div className="App">
			<ActiveNavBar />
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="cycling" element={<Cycling />} />
					<Route path="minis" element={<Minis />} />
				</Route>
				<Route path="/projects" element={<Projects />}>
					<Route path="cycling" element={<Cycling />} />
				</Route>
				<Route path="/skills" element={<Skills />}></Route>
			</Routes>
		</div>
	);
}

export default App;
