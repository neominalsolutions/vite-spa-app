import { useEffect, useState } from 'react';
import { User } from '../../models/user.model';
import { loadUsers } from '../../services/user.service';

function UseEffectFetchDemo() {
	const [users, setUsers] = useState<User[]>([]); // resolved state, fullfilled state
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [error, setError] = useState<any>(null); // reject durumu
	const [loading, setLoading] = useState<boolean>(false); // verinin çekilme anı, pending state

	// const loadDataFetch = async () => {
	// 	setLoading(true);
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then((request) => request.json())
	// 		.then((data: User[]) => {
	// 			console.log('data', data);
	// 			setUsers(data);
	// 			setLoading(false);
	// 		})
	// 		.catch((err) => {
	// 			console.log('err', err);
	// 			setError({ message: 'Hata' });
	// 			setLoading(false);
	// 		});
	// };

	// const loadDataAxios = async () => {
	// 	// Axios ile ES 7 ile async await
	// 	setLoading(true);
	// 	try {
	// 		const req = await axios.get('https://jsonplaceholder.typicode.com/users');
	// 		setLoading(false);
	// 		setUsers(req.data);
	// 	} catch (error) {
	// 		console.log('error', error);
	// 		setLoading(false);
	// 		setError(error);
	// 	}
	// };

	const loadDataAxiosService = async () => {
		// Axios ile ES 7 ile async await
		setLoading(true);
		try {
			const data = await loadUsers();
			setLoading(false);
			setUsers(data);
		} catch (error) {
			console.log('error', error);
			setLoading(false);
			setError(error);
		}
	};

	useEffect(() => {
		// loadDataFetch();
		// loadDataAxios();
		loadDataAxiosService();
	}, []);

	if (loading) return <>Veri Yükleniyor...</>;

	if (error) return <>{error.message}</>;

	return (
		<>
			{users && (
				<div>
					{users.map((item: User) => {
						return (
							<div>
								{item.name} / {item.address?.city}
							</div>
						);
					})}
				</div>
			)}
		</>
	);
}

export default UseEffectFetchDemo;
