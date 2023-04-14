import { Facebook, Google, Instagram, Twitter, Youtube } from "../assets/icons";
import logo from "../assets/logo-vertical.svg";

const Footer = () => {
	return (
		<footer>
			<div className="row">
				<div className="col">
					<img src={logo} alt="little lemon logo" />
				</div>

				<div className="col">
					<nav className="nav nav-column">
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Menu</li>
							<li>Reservations</li>
							<li><button type="button" className="btn btn-primary">Order Online</button></li>
							<li><button type="button" className="btn btn-subtle">Log In</button></li>
						</ul>
					</nav>
				</div>

				<div className="col">
					<h4>Contact</h4>
					<p>
						1234 Main St. <br />
						Chicago, IL 55555
					</p>
					<p>555-555-5555</p>
					<p>hello@littlelemon.com</p>
				</div>

				<div className="col">
					<h4>Follow Us!</h4>
					<Instagram />
					<Facebook />
					<Twitter />
					<Google />
					<Youtube />
				</div>
			</div>

			<div className="row">
				<div className="col">
					<p>Privacy Policy</p>
				</div>
				<div className="col">
					<p>&copy;{new Date().getFullYear()} Little Lemon. Powered by <a href="annabaker.dev" target="_blank">Anna Baker Development</a></p>
				</div>
			</div>
		</footer>
	)
}

export default Footer;