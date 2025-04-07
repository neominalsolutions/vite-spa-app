import { useEffect, useRef, useState } from 'react';

function UseRefDemo() {
	const [number, setNumber] = useState(0);

	//sample ınterval

	const interval = setInterval(() => {
		setNumber(number + 1);
	}, 3000); // 3sn de bir number artır

	useEffect(() => {
		return () => {
			clearInterval(interval);
		};
	}, []);

	// başlangıçta ref yok. ama Input ref alır.
	const elementRef = useRef<HTMLInputElement | null>(null);
	// javascript document.getElementByıd => virtual dom yerine elementin real dom daki referansına bağlanıyoruz.
	const counterRef = useRef<number>(0); // state değiştirmeden arka planda bir değişken değerinde veriş sakladık. ve bu veri state değişsebile ref ile işaretlendiği için kaybolmaz, state değişse bile değer memoize edilmiş olur.

	const clear = () => {
		if (elementRef.current) {
			elementRef.current.value = '';
			elementRef.current.blur(); // unfocus
			elementRef.current.style.color = 'red';
			counterRef.current = counterRef.current + 1;

			console.log('counterRef', counterRef.current);
		}
	};

	return (
		<>
			<p>Sayı:{number}</p>
			<input ref={elementRef} />
			<button onClick={clear}>Temizle</button>
		</>
	);
}

export default UseRefDemo;
