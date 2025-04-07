import { Link, Outlet } from 'react-router-dom';

function SiteLayout() {
	return (
		<>
			<h1>Site Layout</h1>
			<p>This is the site layout component.</p>
			<nav>
				<Link to="/">Home</Link>
				{'|'}
				<Link to="/about">About</Link>
			</nav>

			<Outlet />
			{/* This is where the child routes will be rendered */}
			<footer>Site Footer</footer>
		</>
	);
}

export default SiteLayout;
