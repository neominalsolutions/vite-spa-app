import { Link, Outlet } from 'react-router-dom';

function AdminLayout() {
	return (
		<>
			<h1>Admin Layout</h1>
			<p>This is the admin layout component.</p>

			<nav>
				<Link to="/admin">Admin Home</Link>
				{'|'}
				<Link to="/admin/users">Users</Link>
			</nav>
			<Outlet />
		</>
	);
}

export default AdminLayout;
