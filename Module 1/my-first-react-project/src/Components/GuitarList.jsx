import { useContext, useEffect, useState } from "react";
import Guitar from "./Guitar";
import { GUITARS_API_URL } from "../utils.js";
import { UserContext } from "../Context/UserContext.jsx";

function GuitarList() {
	// HOOKS
	const [guitars, setGuitars] = useState([]);
	const [myName, setMyName] = useContext(UserContext);

	useEffect(() => {
		async function getGuitarData() {
			// get guitar data
			const resp = await fetch(GUITARS_API_URL);
			const json = await resp.json();

			console.log(json); // check that the API call returns data we're expecting

			setGuitars(json);
		}
		getGuitarData();
	}, []); // only run once

	// const myGuitars = [
	// 	{
	// 		id: "23b5-eefa-6bbd-d440",
	// 		brand: "Washburn",
	// 		model: "D-12WH",
	// 		type: "Acoustic/Classic",
	// 		serialNumber: 9004014,
	// 		yearProduced: 1990,
	// 		materials: ["Laminate Spruce Top", "Mahogany Back and Sides", "Mahogany Neck", "Rosewood Fingerboard & Bridge", "DIE CAST Tuners", "with Acrylic Dots"],
	// 		scale: "650mm SCALE / 44mm NUT",
	// 		originalPrice: "$ 249.00",
	// 		numberOfStrings: 6,
	// 	},
	// 	{
	// 		id: "eefa-23b5-d440-6bbd",
	// 		brand: "Morgan",
	// 		model: "DM 59",
	// 		type: "Dobro",
	// 		serialNumber: 846521,
	// 		yearProduced: 2015,
	// 		materials: ["Laminate Spruce Top", "Mahogany Back and Sides", "Mahogany Neck", "Rosewood Fingerboard & Bridge", "DIE CAST Tuners", "with Acrylic Dots"],
	// 		scale: "650mm SCALE / 44mm NUT",
	// 		originalPrice: "$ 249.00",
	// 		numberOfStrings: 6,
	// 	},
	// ];

	// This is how we can receive props from a child
	function handleEventEmitted(message) {
		console.log(message);
	}

	return (
		// Dynamically render out child Guitar components
		<>
			<h3>{myName}</h3>
			{/* {myGuitars.map((item) => (
				<Guitar currentGuitar={item} key={item.id} test={"test"} testBool={true} />
			))} */}
			{guitars.map((item) => (
				<Guitar currentGuitar={item} handleEventEmitted={handleEventEmitted} key={item.id} />
			))}
		</>
	);
}

export default GuitarList;
