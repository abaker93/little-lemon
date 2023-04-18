import { Link } from "react-router-dom";
import { Basket, User } from "../assets/icons";
import logo from "../assets/logo-horizontal.svg";

const Navbar = () => {
	return (
		<header>
			<div className="container-lg">
				<nav className="navbar">
					<img className="navbar-brand" src={logo} alt="little lemon logo" />
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="" className="nav-link">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="" className="nav-link">About</Link>
						</li>
						<li className="nav-item">
							<Link to="" className="nav-link">Menu</Link>
						</li>
						<li className="nav-item">
							<Link to="" className="nav-link">Reservations</Link>
						</li>
						<li className="nav-item">
							<Link to="" className="nav-link btn btn-primary">Order Online</Link>
						</li>
					</ul>
					<ul className="navbar-nav secondary">
						<li className="nav-item">
							<Link to="" className="nav-link btn btn-link btn-icon"><Basket height="24" /></Link>
						</li>
						<li className="nav-item">
							<Link to="" className="nav-link btn btn-link btn-icon"><User /> Log in</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Navbar;