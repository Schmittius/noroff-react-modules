import "./App.css";
import GuitarList from "./Components/GuitarList";
import { useState } from "react";

function App() {
	// If we want values to rerender on the UI, we need to declare local pieces of state
	// We can do this with React HOOKS!
	// let myName = "Morten";
	// let myLastName = "Olsen";
	// let myAge = 34;

	// HOOKS
	const [myName, setMyName] = useState("Morten");
	const [myLastName, setMyLastName] = useState("Olsen");
	const [myAge, setMyAge] = useState(34);

	// FUNCTIONS
	function handleChangePersonDataClick() {
		console.log("handleChangePersonDataClick() Fired");
		// myName = "John";
		// myLastName = "Smith";
		// myAge = 36;
		setMyName("John");
		setMyLastName("Smith");
		setMyAge(36);

		console.log("fName", myName);
		console.log("lName", myLastName);
		console.log("Age", myAge);
	}

	return (
		<>
			<div className="App">
				<h1>This is a header</h1>
				<h2>This is a subheader</h2>
				<p>Here's some regular text</p>
				<ul>
					<li>First Name: {myName}</li>
					<li>Last Name: {myLastName}</li>
					<li>Age: {myAge}</li>
				</ul>

				<GuitarList />
			</div>
			<button onClick={handleChangePersonDataClick}>Change Person Data</button>
		</>
	);
}

export default App;
