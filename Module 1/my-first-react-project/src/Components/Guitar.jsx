function Guitar() {
	// 1. Declare it as a function

	const myGuitar = {
		brand: "Washburn",
		model: "White D-12 WH",
		numberOfStrings: 6,
	};

	return (
		// 3. It has to return a valid JSX expression
		<>
			<h3>
				{myGuitar.brand} - {myGuitar.model}
			</h3>
			<p>{myGuitar.numberOfStrings} strings</p>
		</>
	);
}

export default Guitar; // 2. Export the component
