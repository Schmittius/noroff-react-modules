import "./Guitar.css";

function Guitar(props) {
	// 1. Declare it as a function

	const myGuitar = props.currentGuitar;
	// const myGuitar2 = {};

	// const hasStrings = myGuitar.numberOfStrings > 0;
	const hasGuitar = !!myGuitar.id;
	// const hasGuitar2 = !!myGuitar2.id;
	// console.log(hasGuitar);
	// console.log(hasGuitar2);

	// function renderGuitarMaterials() {
	// 	return myGuitar.materials.map((item, index) => (
	// 		<li key={index} className="no-bullets">
	// 			{item}
	// 		</li>
	// 	));
	// }

	return (
		// 3. It has to return a valid JSX expression
		<>
			{hasGuitar ? (
				<>
					<h3>
						{myGuitar.manufacturer} - {myGuitar.model}
					</h3>
					<img src={myGuitar.image} alt="" width={400} />
					<p>{myGuitar.strings} strings</p>
					<ul>{/* {renderGuitarMaterials()}{" "} */}</ul>
				</>
			) : (
				<h4>There is not guitar data to display.</h4>
			)}
			<button onClick={() => props.handleEventEmitted("Hello from the child component!")}>Emit event</button>
		</>
	);
}

export default Guitar; // 2. Export the component
