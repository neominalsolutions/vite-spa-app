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
				{'|'}
				<Link to="/useState">UseState Demo</Link>
				{'|'}
				<Link to="/useEffect">UseEffect Demo</Link>
				{'|'}
				<Link to="/useEffectFetch">UseEffect Fetch Demo</Link>
				{'|'}
				<Link to="/customHook">Custom Hook Demo</Link>
				{'|'}
				<Link to="/reactMemo">React Memo</Link>
				{'|'}
				<Link to="/useMemo">Use Memo</Link>
				{'|'}
				<Link to="/useCallback">Use Callback</Link>
				{'|'}
				<Link to="/useRef">Use Ref</Link>
			</nav>

			<Outlet />
			{/* This is where the child routes will be rendered */}
			<footer>Site Footer</footer>
		</>
	);
}

export default SiteLayout;
