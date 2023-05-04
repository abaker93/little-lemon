import { Link, NavLink } from "react-router-dom";
import { mainNav, secondaryNav } from "../data/data";
import logo from "../assets/logo-horizontal.svg";
import { Close, Menu } from "../assets/icons";

const Navbar = ({ windowWidth, showMenu, setShowMenu }) => {

	return (
		<header>
			<div className="container-lg">
				{windowWidth < 992 ? (
					<div className="navbar-toggler">
						<Link to="/" className="img-link">
							<img className="navbar-brand" src={logo} alt="little lemon logo" />
						</Link>
						<button type="button" className="btn btn-link btn-icon" onClick={() => showMenu ? setShowMenu(false) : setShowMenu(true)}>
							{showMenu ? (
								<Close height="24" />
							) : (
								<Menu height="24" />
							)}
						</button>
					</div>
				) : null}
				<nav className={`navbar${showMenu ? ' show' : ''}`}>
					{windowWidth < 992 ? null : (
						<Link to="/" className="img-link">
							<img className="navbar-brand" src={logo} alt="little lemon logo" />
						</Link>
					)}
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
						{secondaryNav.map(s => (
							<li key={s.id} className="nav-item">
								<NavLink to={s.path} className="nav-link btn btn-link btn-icon">
									{s.icon}{s.name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Navbar;