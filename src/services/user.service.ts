import axios from 'axios';
import { User } from '../models/user.model';

export const loadUsers = async () => {
	return (await axios.get<User[]>('https://jsonplaceholder.typicode.com/users'))
		.data;
};
