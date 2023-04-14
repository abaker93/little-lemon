import { Facebook, Google, Instagram, Twitter, Youtube } from "../assets/icons";
import logo from "../assets/logo-vertical.svg";

const Footer = () => {
	return (
		<footer>
			<div className="container-lg">
				<div className="row footer">
					<div className="col">
						<img src={logo} alt="little lemon logo" />
					</div>
					<div className="col">
						<nav>
							<ul className="nav-column">
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
								<li className="nav-item">
									<a href="#" className="nav-link btn btn-subtle">Log in</a>
								</li>
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
						<div className="social">
							<Instagram />
							<Facebook />
							<Twitter />
							<Google />
							<Youtube />
						</div>
						
					</div>
				</div>
				<div className="row heel">
					<div className="col">
						<p>Privacy Policy</p>
					</div>
					<div className="col">
						<p>&copy;{new Date().getFullYear()} Little Lemon. Powered by <a href="annabaker.dev" target="_blank">Anna Baker Development</a></p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;