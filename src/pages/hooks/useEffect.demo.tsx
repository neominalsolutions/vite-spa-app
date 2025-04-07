import { useEffect, useState } from 'react';
import { Fragment } from 'react/jsx-runtime';

type User = {
	name: string;
};

function UseEffectDemo() {
	const [user, setUser] = useState<User>({ name: '' });

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onInputChange = (e: any) => {
		setUser({ name: e.target.value });
	};

	useEffect(() => {
		// yapılacak işlemler
		// genel olarak Dom asenkron bir veri sonucunda state yansıtmamız gereken durumlarda tercih ederiz.
		console.log('mounting');

		return () => {
			// clean up functions
			// component domdan çıkarken component içinde yapılacak bir temizlik işi varsa bu function içinde yaparız.
			console.log('unmounting');
		};
	}, []); // [] deps => useEffect state değişiminde [...state] tanımlanmış tüm
	// stateleri takip eder tekrar tetiklenir.
	// [] boş bırakırsak useEffect her homponent için birkez tetikleniyor.

    // Not: bir componente birden fazla useEffect yazılırsa, her useEffect 1 yere mahsus tetiklenir.
	useEffect(() => {
		console.log('user state değişti');
	}, [user]); // user state değiştiğpinde tetiklen

	return (
		<Fragment>
			<p>User: {user.name}</p>
			<input onChange={onInputChange} />
		</Fragment>
	);
}

export default UseEffectDemo;
