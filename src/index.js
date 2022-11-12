import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,Route} from 'react-router-dom';
import Home from './routes/Home.tsx';
import Projects from './routes/Projects.tsx';
import ErrorPage from './error/ErrorPage.tsx';
import Contact from './routes/Contact.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/projects',
		element: <Projects />,
	},
	{
		path: '/contact',
		element: <Contact />,
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
