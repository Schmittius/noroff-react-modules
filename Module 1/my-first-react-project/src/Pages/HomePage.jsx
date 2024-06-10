import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function HomePage() {
	// If we want values to rerender on the UI, we need to declare local pieces of state
	// We can do this with React HOOKS!
	// let myName = "Morten";
	// let myLastName = "Olsen";
	// let myAge = 34;

	// HOOKS
	// const [myName, setMyName] = useState("");
	const [myName, setMyName] = useContext(UserContext);
	const [myLastName, setMyLastName] = useState("");
	const [myAge, setMyAge] = useState();

	const { message } = useParams();

	function myCallbackFunction() {
		console.log("myCallbackFunction() fired!");
	}

	useEffect(myCallbackFunction, [myName]);
	useEffect(() => {
		console.log("Anonymous useEffect fired!");
		console.log(message);
	}, []); // empty dependencies = only runs once!

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
			<h1>This is a header</h1>
			<h2>This is a subheader</h2>
			<p>Here's some regular text</p>
			<ul>
				<li>First Name: {myName}</li>
				<li>Last Name: {myLastName}</li>
				<li>Age: {myAge}</li>
			</ul>

			<button onClick={handleChangePersonDataClick}>Change Person Data</button>
		</>
	);
}

export default HomePage;
