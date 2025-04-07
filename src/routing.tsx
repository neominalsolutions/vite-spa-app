import { createBrowserRouter } from 'react-router-dom';
import SiteLayout from './layouts/site.layout';
import AboutPage from './pages/about.page';
import HomePage from './pages/home.page';
import AdminLayout from './layouts/admin.layout';

export const router = createBrowserRouter([
	{
		path: '/',
		Component: SiteLayout, // This is the main layout for the site
		children: [
			{ path: '', Component: HomePage },
			{ path: 'about', Component: AboutPage },
		],
	},
	{
		path: '/admin',
		Component: AdminLayout, // This is the main layout for the site
		children: [],
	},
]);
