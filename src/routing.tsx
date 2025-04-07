import { createBrowserRouter } from 'react-router-dom';
import SiteLayout from './layouts/site.layout';
import AboutPage from './pages/about.page';
import HomePage from './pages/home.page';
import AdminLayout from './layouts/admin.layout';
import UseStateDemo from './pages/hooks/useState.demo';
import UseEffectDemo from './pages/hooks/useEffect.demo';
import UseEffectFetchDemo from './pages/hooks/useEffect.fetch.demo';
import CustomHookDemo from './pages/hooks/custom.hook.demo';
import ReactMemoDemo from './pages/hooks/memoization/react.memo.demo';
import UseMemoDemo from './pages/hooks/memoization/usememo.demo';
import UseCallbackDemo from './pages/hooks/memoization/usecallback.demo';
import UseRefDemo from './pages/hooks/memoization/useref.demo';

export async function getSomeRecords() {
	// Simulate a data fetching function
	return Promise.resolve([
		{ id: 1, name: 'Record 1' },
		{ id: 2, name: 'Record 2' },
	]);
}

export const router = createBrowserRouter([
	{
		path: '/',
		Component: SiteLayout, // This is the main layout for the site
		children: [
			{
				path: '',
				Component: HomePage,
				loader: async () => {
					// return data from here
					return { records: await getSomeRecords() };
				},
				action: async ({ request }) => {
					console.log('request', request);

					const formData = await request.formData();
					console.log('Form Data:', formData);
					const title = formData.get('title');
					console.log('Title:', title);
					// formdan gönderilen veriyi Post edelim
					// const project = await someApi.updateProject({ title });
					return { message: 'Ok' };
				},
			},
			{ path: 'about', Component: AboutPage },
			{
				path: 'useState',
				Component: UseStateDemo,
			},
			{
				path: 'useEffect',
				Component: UseEffectDemo,
			},
			{
				path: 'useEffectFetch',
				Component: UseEffectFetchDemo,
			},
			{
				path: 'customHook',
				Component: CustomHookDemo,
			},
			{
				path: 'reactMemo',
				Component: ReactMemoDemo,
			},
			{
				path: 'useMemo',
				Component: UseMemoDemo,
			},
			{
				path: 'useCallback',
				Component: UseCallbackDemo,
			},
			{
				path: 'useRef',
				Component: UseRefDemo,
			},
		],
	},
	{
		path: '/admin',
		Component: AdminLayout, // This is the main layout for the site
		children: [],
	},
]);
