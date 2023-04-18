import { Outlet, useLocation, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
	const page = useLocation();

	console.log(page.pathname)

	return (
		<>
			<Navbar />
			
			<main>
				<Outlet />
			</main>

			<Footer />
		</>
	)
}

export default Root;