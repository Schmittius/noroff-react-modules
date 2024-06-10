import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const withAuth = (Component) => (props) => {
	// HOOKS
	// const nav = useNavigate();
	// const handleNavigate = () => nav("/");

	const [myName, setMyName] = useContext(UserContext);

	// Have something that evaluates to true or false
	// Determine if the user is allowed to access this Component
	const isAuthenticated = Boolean(myName !== "");

	// return isAuthenticated ? <Component {...props} /> : <Navigate to={"/"} />;

	if (isAuthenticated) {
		// You can write more lines of code here
		return <Component {...props} />;
	} else {
		// Redirect to a page allowing to user to user to login
		return <Navigate to="/" />;
	}
};

export default withAuth;
