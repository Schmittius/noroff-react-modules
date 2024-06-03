import Guitar from "./Guitar";

function GuitarList() {
	const myGuitars = [
		{
			id: "23b5-eefa-6bbd-d440",
			brand: "Washburn",
			model: "D-12WH",
			type: "Acoustic/Classic",
			serialNumber: 9004014,
			yearProduced: 1990,
			materials: [
				"Laminate Spruce Top",
				"Mahogany Back and Sides",
				"Mahogany Neck",
				"Rosewood Fingerboard & Bridge",
				"DIE CAST Tuners",
				"with Acrylic Dots",
			],
			scale: "650mm SCALE / 44mm NUT",
			originalPrice: "$ 249.00",
			numberOfStrings: 6,
		},
		{
			id: "eefa-23b5-d440-6bbd",
			brand: "Morgan",
			model: "DM 59",
			type: "Dobro",
			serialNumber: 846521,
			yearProduced: 2015,
			materials: [
				"Laminate Spruce Top",
				"Mahogany Back and Sides",
				"Mahogany Neck",
				"Rosewood Fingerboard & Bridge",
				"DIE CAST Tuners",
				"with Acrylic Dots",
			],
			scale: "650mm SCALE / 44mm NUT",
			originalPrice: "$ 249.00",
			numberOfStrings: 6,
		},
	];

	return (
		// Dynamically render out child Guitar components
		<>
			{myGuitars.map((item) => (
				<Guitar currentGuitar={item} key={item.id} test={"test"} testBool={true} />
			))}
		</>
	);
}

export default GuitarList;
