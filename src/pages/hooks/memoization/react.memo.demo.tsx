import { memo, useState } from 'react';

type ChildProps = { title?: string }; // Componentlere dışırdan geçilen değerler

const SubChildComponent = ({ title }: ChildProps) => {
	console.log('...sub child rendering');
	return <>{title}</>;
};

const ChildComponent = ({ title }: ChildProps) => {
	console.log('...child rendering');
	return (
		<>
			{title}

			<SubChildComponent />
		</>
	);
};

const ChildComponentMemo = memo(ChildComponent); // memoize edilmiş hali, tekrar render etme.
// Component Memoisation kavramında Component Props değişmediği sürece Component memoize edilmiş olur.

function ReactMemoDemo() {
	const [random, setRandom] = useState<number>(0);
	console.log('...parent rendering');

	return (
		<>
			<p>Random: {random}</p>
			<button onClick={() => setRandom(Math.random() * 100)}>Generarate</button>
			<hr></hr>
			{/* <ChildComponent /> */}
			{/* <ChildComponentMemo title="ChildComponent" /> */}
			<ChildComponentMemo title={random.toString()} />
		</>
	);
}

export default ReactMemoDemo;
