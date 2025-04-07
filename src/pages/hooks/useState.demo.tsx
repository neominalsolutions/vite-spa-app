import { useState } from 'react';

function UseStateDemo() {
	// Not State değişimleri async gerçekleşir
	// state değişimlerini yakalamak için özel bir hook kullanırız.
	const [counter, setCounter] = useState<number>(0); // local state management

	const onIncrease = () => {
		// event binding
		setCounter(counter + 1); // counter state güncellemiş olduk.
		console.log('yeni-counter', counter);
	};

	// render alan kısm
	return (
		<>
			<p>
				{counter}
				{/* model binding */}
			</p>

			<button onClick={onIncrease}>(+)</button>
		</>
	);
}

export default UseStateDemo;
