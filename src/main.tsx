import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routing.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
	<>
		<RouterProvider router={router} />
	</>
);
