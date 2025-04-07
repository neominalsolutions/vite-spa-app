import { memo, useCallback, useEffect, useState } from 'react';

type ChildComponentProps = {
	title: string;
	onRender(message: string): void; // Func
};

const ChildComponent = (props: ChildComponentProps) => {
	console.log('...child rendering');

	useEffect(() => {
		props.onRender('rendered'); // child component üzerinden parenta bir veri gönderme işlemi
	}, []);

	return <>{props.title}</>;
};

const ChildComponentMemo = memo(ChildComponent);

function UseCallbackDemo() {
	console.log('...parent rendering');
	const [random, setRandom] = useState<number>(0);

	// callback func
	// const onChildRender = (args: string) => {
	// 	console.log('child rendering', args);
	// }; // memoize edilmemiş hali

	const onChildRender = useCallback(() => (args: string) => {
			console.log('child rendering', args);
		},[]);

	return (
		<>
			Random: {random}
			<button onClick={() => setRandom(Math.round(Math.random() * 3))}>
				random
			</button>
			<hr></hr>
			<ChildComponentMemo title="Child" onRender={onChildRender} />
		</>
	);
}

export default UseCallbackDemo;
