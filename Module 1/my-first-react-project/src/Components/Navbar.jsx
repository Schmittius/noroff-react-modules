import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to={"/"}>Home</NavLink>
				</li>
				<li>
					<NavLink to={"/guitars"}>Guitars</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
