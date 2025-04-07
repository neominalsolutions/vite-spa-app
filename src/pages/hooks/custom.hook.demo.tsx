import { useState } from 'react';
import { UseFetch } from './useFetch.hook';

function CustomHookDemo() {
	const [url, setUrl] = useState<string>(
		'https://jsonplaceholder.typicode.com/users'
	);

	// Not: hookları bir kullanıcı etkileşimi sonrası tetikleyemeyiz sadece component body de çalışır. ve state değişimi sonrası kendisi tetiklenir.
	const state = UseFetch(url); // url değişiminde load oldu.
	console.log('state', state);

	if (state.loading) return <>Loading ...</>;

	if (state.error) return <>Hata</>;

	if (state.data)
		return (
			<>
				Veri Adeti: {state.data.length}
				<input
					placeholder="url"
					onBlur={() => setUrl('https://jsonplaceholder.typicode.com/posts')}
				/>
			</>
		);

	return <></>;
}

export default CustomHookDemo;
