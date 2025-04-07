import { Form, useActionData, useLoaderData } from 'react-router-dom';

function HomePage() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { records } = useLoaderData() as { records: any[] };
	const actionData = useActionData();

	return (
		<>
			<h1>Welcome to the Home Page</h1>

			<p>
				{records.map((item, index) => {
					return <div key={index}>{item.name}</div>;
				})}
			</p>

			<hr></hr>
			<h1>React Router v7 Form Sample</h1>
			<p>
				{actionData && actionData.message === 'Ok' ? (
					<p>Form submitted successfully!</p>
				) : (
					<p>Submit the form to see the action result.</p>
				)}
			</p>

			<Form action="/" method="post">
				<input type="text" name="title" />
				<br></br>
				<button type="submit">Submit</button>
			</Form>
		</>
	);
}

export default HomePage;
