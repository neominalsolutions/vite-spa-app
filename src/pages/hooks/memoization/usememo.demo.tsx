import { useMemo, useState } from 'react';

function UseMemoDemo() {
	const [random, setRandom] = useState<number>(0);
	console.log('...parent rendering');

	// exprensive calculation sadece doma ilk girdiğinde client daha yoğun matematiksel hesaplama yapacak bir fonksiyon.
	const calc = () => {
		console.log('...calculating'); // her bir state değiştiğinde calc function yeniden render alındığı için tekrar tekrar çalışacak. amaç yoğun hesaplamayı değer olarak memoize etmek
		return 1000;
	};

	// const value = calc(); // memoize olmadan önceki hali
	// const value = useMemo(() => calc(), []);
	const value = useMemo(() => calc(), [random]); // random değiştiğinde memoisation bozulsun
	return (
		<>
			Sonuc: {value}
			<br></br>
			Random :{random}
			<button onClick={() => setRandom(Math.round(Math.random() * 3))}>
				random
			</button>
		</>
	);
}

export default UseMemoDemo;
