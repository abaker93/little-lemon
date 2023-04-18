import { NavLink } from "react-router-dom";
import { Basket, User } from "../assets/icons";
import logo from "../assets/logo-horizontal.svg";

const mainNav = [
	{
		id: 0,
		name: "Home",
		path: "/",
		variant: "link"
	},
	{
		id: 1,
		name: "About",
		path: "/about",
		variant: "link"
	},
	{
		id: 2,
		name: "Menu",
		path: "/menu",
		variant: "link"
	},
	{
		id: 3,
		name: "Reservations",
		path: "/reservations",
		variant: "link"
	},
	{
		id: 4,
		name: "Order Online",
		path: "/menu",
		variant: "button"
	},
]

const secondaryNav = []

const Navbar = () => {
	return (
		<header>
			<div className="container-lg">
				<nav className="navbar">
					<img className="navbar-brand" src={logo} alt="little lemon logo" />
					<ul className="navbar-nav">
						{mainNav.map(m => (
							<li key={m.id} className="nav-item">
								{m.variant === "link" ? (
									<NavLink
										to={m.path}
										className={({ isActive, isPending }) =>
											isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
										}
									>
										{m.name}
									</NavLink>
								) : (
									<NavLink to={m.path} className="nav-link btn btn-primary">
										{m.name}
									</NavLink>
								)}
							</li>
						))}
					</ul>
					<ul className="navbar-nav secondary">
						<li className="nav-item">
							<NavLink to="/check-out" className="nav-link btn btn-link btn-icon"><Basket height="24" /></NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/user" className="nav-link btn btn-link btn-icon"><User /> Log in</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Navbar;