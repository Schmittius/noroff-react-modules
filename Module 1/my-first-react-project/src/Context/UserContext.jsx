import { createContext, useState } from "react";

export const UserContext = createContext(null);

function UserProvider({ children }) {
	const [myName, setMyName] = useState("");

	return <UserContext.Provider value={[myName, setMyName]}>{children}</UserContext.Provider>;
}

export default UserProvider;
