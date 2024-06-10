import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Navbar() {
	// HOOKS
	const [myName] = useContext(UserContext);

	return (
		<nav>
			<ul>
				<li>
					<NavLink to={"/"}>Home</NavLink>
				</li>
				{myName && (
					<li>
						<NavLink to={"/guitars"}>Guitars</NavLink>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Navbar;
