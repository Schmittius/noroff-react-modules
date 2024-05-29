function User() {
	const newUser = {
		fName: "Morten",
		lName: "Olsen",
		username: "Schmittius",
		userAge: 34,
		userBio: "Trying to be creative in the schoolwork is hard, and this is the best I could come up with! I'm sorry me!",
	};

	return (
		<>
			<h1>
				{newUser.fName} {newUser.lName}
			</h1>
			<h2>{newUser.username}</h2>
			<p>Users age: {newUser.userAge}</p>
			<p>
				Bio:
				<br />
				{newUser.userBio}
			</p>
		</>
	);
}

export default User;
