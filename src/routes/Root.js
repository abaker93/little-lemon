import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
	const [windowWidth, setWindowWidth] = useState();
	const [showMenu, setShowMenu] = useState(true)

	const handleResize = () => {
		const w = window.innerWidth;
		setWindowWidth(w)
		w < 992 ? setShowMenu(false) : setShowMenu(true)
	};
	
	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, [])

	return (
		<>
			<Navbar windowWidth={windowWidth} showMenu={showMenu} setShowMenu={setShowMenu} />
			
			<main className={windowWidth < 992 && showMenu ? "backdrop" : ""}>
				<Outlet context={windowWidth} />
			</main>

			<Footer />
		</>
	)
}

export default Root;