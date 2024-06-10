import Guitar from "../Components/Guitar";
import GuitarList from "../Components/GuitarList";
import { useParams } from "react-router-dom";
import withAuth from "../Auth/withAuth";

function GuitarPage() {
	// HOOKS
	const { id } = useParams();

	console.log(id);

	if (!id) {
		return <GuitarList />;
	} else {
		// Known bug: Guitar component doesn't loan correctly
		// Create a new GuitarDetails page. To view details of a single guitar.
		return <Guitar id={id} />;
	}
}

export default withAuth(GuitarPage);
