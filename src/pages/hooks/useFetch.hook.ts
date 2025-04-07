import axios from 'axios';
import { useEffect, useState } from 'react';

type FetchState = {
	loading: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	error: null | any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any | any[];
};

export const UseFetch = (endpoint: string) => {
	// state yönetimi
	// dinamik olarak get request yönetimi
	// loading ve error stateleride göz önünde bulundurmalıyız

	const [state, setState] = useState<FetchState>({
		loading: false,
		error: null,
		data: [],
	});

	const loadData = async () => {
		setState({ ...state, loading: true });
		try {
			const res = (await axios.get(endpoint)).data;
			console.log('veri', res);
			setState({ ...state, loading: false, data: res });
		} catch (error) {
			setState({ ...state, data: null, error: error, loading: false });
		}
	};

	useEffect(() => {
		loadData();
	}, [endpoint]); // endpoint değişimine göre yeniden tetiklenecek.

	return state;
};
