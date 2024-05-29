function Guitar() {
	// 1. Declare it as a function

	const myGuitar = {
		brand: "Washburn",
		model: "D-12WH",
		type: "Acoustic/Classic",
		serialNumber: 9004014,
		yearProduced: 1990,
		materials: "Laminate Spruce Top, Mahogany Back and Sides, Mahogany Neck, Rosewood Fingerboard & Bridge, DIE CAST Tuners, with Acrylic Dots",
		scale: "650mm SCALE / 44mm NUT",
		originalPrice: "$ 249.00",
		numberOfStrings: 6,
		story: "My grand-mother on my mothers side bought this guitar around 1991-92, and before her passing told all her children that I was going to inherit the guitar as I was the only one of her grand-children who played the guitar. She passed away the Summer of 2009 and I did indeed inherit it.",
	};

	return (
		<>
			<h3>
				{myGuitar.brand}: {myGuitar.model}
			</h3>
			<h4>
				Made: {myGuitar.yearProduced} - Serialnumber: {myGuitar.serialNumber} - Original Price: {myGuitar.originalPrice}
			</h4>
			<h4>Materials: {myGuitar.materials}</h4>
			<p>Size: {myGuitar.scale}</p>
			<p>
				Type: {myGuitar.type} with {myGuitar.numberOfStrings} strings
			</p>
			<p>
				How I got this guitar: <br />
				{myGuitar.story}
			</p>
		</>
	);
}

export default Guitar; // 2. Export the component
