import "./App.css";
import Guitar from "./Components/Guitar";
import User from "./Components/User";

function App() {
	return (
		<>
			<div className="App">
				<User />
				<br />
				<hr />
				<h1>Favorite Guitar:</h1>
				<Guitar />
			</div>
		</>
	);
}

export default App;
