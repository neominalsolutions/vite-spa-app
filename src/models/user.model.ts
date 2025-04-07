export interface User {
	id: number;
	username: string;
	email: string;
	name: string;
	address?: Address;
}
interface Address {
	street: string;
	city: string;
	geo?: Geo;
}

interface Geo {
	lat: number;
	lng: number;
}
