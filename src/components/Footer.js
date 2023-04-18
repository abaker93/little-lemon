import { Link } from "react-router-dom";
import { Facebook, Google, Instagram, Twitter, Youtube } from "../assets/icons";
import logo from "../assets/logo-vertical.svg";

const Footer = () => {
	return (
		<footer>
			<div className="container-lg">
				<div className="row footer">
					<div className="col justify-self-center">
						<img className="logo" src={logo} alt="little lemon logo" />
					</div>
					<div className="col">
						<nav>
							<ul className="nav-column">
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
								<li className="nav-item">
									<Link to="" className="nav-link btn btn-subtle">Log in</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col contact">
						<h6>Contact</h6>
						<p>
							1234 Main St. <br />
							Chicago, IL 55555
						</p>
						<p>555-555-5555</p>
						<p>hello@littlelemon.com</p>
					</div>
					<div className="col">
						<h6>Follow Us!</h6>
						<div className="social">
							<Link to="https://www.instagram.com" target="_blank">
								<Instagram />
							</Link>
							<Link to="https://www.facebook.com" target="_blank">
								<Facebook />
							</Link>
							<Link to="https://www.twitter.com" target="_blank">
								<Twitter />
							</Link>
							<Link to="https://www.google.com" target="_blank">
								<Google />
							</Link>
							<Link to="https://www.youtube.com" target="_blank">
								<Youtube />
							</Link>
						</div>
						
					</div>
				</div>
				<div className="row heel">
					<div className="col">
						<p><Link to="" >Privacy Policy</Link></p>
					</div>
					<div className="col">
						<p>&copy;{new Date().getFullYear()} Little Lemon. Powered by <Link href="annabaker.dev" target="_blank">Anna Baker Development</Link></p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;