const Navbar = () => {
	return (
		<header>
			<nav className="navbar">
				<img src="" alt="little lemon logo" />
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Menu</li>
					<li>Reservations</li>
					<li><button type="button">Order Online</button></li>
				</ul>
				<ul>
					<li><button className="btn-link btn-icon"><img src="" alt="shopping basket" /></button></li>
					<li><button className="btn-link btn-icon"><img src="" alt="user" /> Log in</button></li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar;