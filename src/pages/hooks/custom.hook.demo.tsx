import { UseFetch } from './useFetch.hook';

function CustomHookDemo() {
	const state = UseFetch('https://jsonplaceholder.typicode.com/users');
	console.log('state', state);

	if (state.loading) return <>Loading ...</>;

	if (state.error) return <>Hata</>;

	if (state.data) return <>Veri Adeti: {state.data.length}</>;

	return <></>;
}

export default CustomHookDemo;
