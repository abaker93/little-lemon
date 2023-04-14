import { Basket, User } from "../assets/icons";
import logo from "../assets/logo-horizontal.svg";

const Navbar = () => {
	return (
		<header>
			<nav className="navbar">
				<img src={logo} alt="little lemon logo" />
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Menu</li>
					<li>Reservations</li>
					<li><button type="button" className="btn btn-primary">Order Online</button></li>
				</ul>
				<ul>
					<li><button className="btn btn-link btn-icon"><Basket /></button></li>
					<li><button className="btn btn-link btn-icon"><User /> Log in</button></li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar;