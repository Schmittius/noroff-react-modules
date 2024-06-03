import "./Guitar.css";

function Guitar(props) {
	// 1. Declare it as a function

	const myGuitar = props.currentGuitar;
	const myGuitar2 = {};

	// const hasStrings = myGuitar.numberOfStrings > 0;
	const hasGuitar = !!myGuitar.id;
	const hasGuitar2 = !!myGuitar2.id;
	console.log(hasGuitar);
	console.log(hasGuitar2);

	function renderGuitarMaterials() {
		return myGuitar.materials.map((item, index) => (
			<li key={index} className="no-bullets">
				{item}
			</li>
		));
	}

	return (
		// 3. It has to return a valid JSX expression
		<>
			{hasGuitar ? (
				<>
					<h3>
						{myGuitar.brand} - {myGuitar.model}
					</h3>
					<p>{myGuitar.numberOfStrings} strings</p>
					<ul>
						Materials:
						<br />
						{renderGuitarMaterials()}{" "}
					</ul>
				</>
			) : (
				<h4>There is not guitar data to display.</h4>
			)}
		</>
	);
}

export default Guitar; // 2. Export the component
