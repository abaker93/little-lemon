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
							<a href="#" className="nav-link">Home</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">About</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">Menu</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">Reservations</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link btn btn-primary">Order Online</a>
						</li>
					</ul>
					<ul className="navbar-nav secondary">
						<li className="nav-item">
							<a href="#" className="nav-link btn btn-link btn-icon"><Basket height="24" /></a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link btn btn-link btn-icon"><User /> Log in</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Navbar;