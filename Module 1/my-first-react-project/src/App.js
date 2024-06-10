import "./App.css";
import HomePage from "./Pages/HomePage";
import GuitarPage from "./Pages/GuitarPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Navbar />
			<div className="App">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/home/:message" element={<HomePage />} />
					<Route path="/guitars" element={<GuitarPage />} />
					<Route path="/guitars/id" element={<GuitarPage />} />
					{/* Error 404 page should come after all other routers */}
					<Route
						path="/*"
						element={
							<>
								<h1> Page not found!</h1>
								<p>Seems like you are lost.</p>
								<span>
									Go back <NavLink to="/home">home</NavLink>
								</span>
							</>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
